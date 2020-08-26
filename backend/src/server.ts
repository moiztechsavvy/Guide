//Libraries
var express = require("express");
var passport = require("passport");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();
const auth = require("./routes/auth/authentication");

//Self Created Modules.

var home = require("./routes");
var db = require("./Database/index");
var login = require("./routes/auth/login");
var chat = require('./routes/vidchat');

const port = 5000;
const app = express();
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET_COOKIE));

// Socket IO Init
var twillioAccountSID = process.env.LOCAL_TWILLIO_SID;
var twillioAuthToken = process.env.LOCAL_AUTH_TOKEN;
var twilio = require("twilio")(twillioAccountSID, twillioAuthToken);
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const url = require("url");

// API routes Defined Here.

app.use("", home);
app.use("/auth", login);
app.us("/vidchat",chat);

//Send Back Error Response.
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

// App Listening
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

// Socket IO Functions Below (From https://github.com/ianramzy/decentralized-video-chat/)
// When a socket connects, set up the specific listeners we will use.
io.on("connection", function (socket) {
  // When a client tries to join a room, only allow them if they are first or
  // second in the room. Otherwise it is full.
  socket.on("join", function (room) {
    console.log("A client joined the room", room);
    var clients = io.sockets.adapter.rooms[room];
    var numClients = typeof clients !== "undefined" ? clients.length : 0;
    if (numClients === 0) {
      socket.join(room);
    } else if (numClients === 1) {
      socket.join(room);
      // When the client is second to join the room, both clients are ready.
      console.log("Broadcasting ready message", room);
      // First to join call initiates call
      socket.broadcast.to(room).emit("willInitiateCall", room);
      socket.emit("ready", room).to(room);
      socket.broadcast.to(room).emit("ready", room);
    } else {
      console.log("room already full", room);
      socket.emit("full", room);
    }
  });
  // When receiving the token message, use the Twilio REST API to request an
  // token to get ephemeral credentials to use the TURN server.
  socket.on("token", function (room) {
    console.log("Received token request", room);
    twilio.tokens.create(function (err, response) {
      if (err) {
        console.log(err, room);
      } else {
        console.log("Token generated. Returning it to the browser client", room);
        socket.emit("token", response).to(room);
      }
    });
  });
  
  // Relay candidate messages
  socket.on("candidate", function (candidate, room) {
    console.log("Received candidate. Broadcasting...", room);
    socket.broadcast.to(room).emit("candidate", candidate);
  });

  // Relay offers
  socket.on("offer", function (offer, room) {
    console.log("Received offer. Broadcasting...", room);
    socket.broadcast.to(room).emit("offer", offer);
  });

  // Relay answers
  socket.on("answer", function (answer, room) {
    console.log("Received answer. Broadcasting...", room);
    socket.broadcast.to(room).emit("answer", answer);
  });
});