import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
