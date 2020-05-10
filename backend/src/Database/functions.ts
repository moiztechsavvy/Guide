var db = require("./index");
var express = require("express");

module.exports = {
  getallvalues: function () {
    return db.any("SELECT * FROM users", [true]);
  },
  searchdbforvalue: function (email) {
    return db.any(`SELECT * FROM users WHERE email = '${email}'`, [true]);
  },
};
