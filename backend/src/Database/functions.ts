var db = require("./index");
var express = require("express");

module.exports = {
  getallvalues: function () {
    return db.any("SELECT * FROM users");
  },
  searchdbforvalue: function (email) {
    return db.any(`SELECT * FROM users WHERE email = $1`, [email]);
  },
  createUser: function (user) {
    return db.any(
      `INSERT INTO users(name,email,password,created_at) VALUES 
      ($1,$2,$3,$4)`,
      [user.name, user.email, user.password, user.created_at]
    );
  },
};
