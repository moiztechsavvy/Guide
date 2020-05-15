var db = require("./index");
var express = require("express");
module.exports = {
    getallvalues: function () {
        return db.any("SELECT * FROM users");
    },
    searchDBforEmail: function (email) {
        return db.any(`SELECT * FROM users WHERE email = $1`, [email]);
    },
    searchDBforId: function (id) {
        return db.any(`SELECT * FROM users WHERE id = $1`, [id]);
    },
    createUser: function (user) {
        return db.any(`INSERT INTO users(firstname,lastname,email,password,created_at,address,state,zipcode) VALUES 
      ($1,$2,$3,$4,$5,$6,$7,$8)`, [
            user.firstname,
            user.lastname,
            user.email,
            user.password,
            user.created_at,
            user.Address,
            user.state,
            user.zipcode,
        ]);
    },
};
//# sourceMappingURL=functions.js.map