var db = require("./index");
var express = require("express");
module.exports = {
    getallvalues: function () {
        return db.all(`SELECT * FROM doctors`);
    },
    searchDBforEmail: function (email) {
        return db.all(`SELECT * FROM doctors WHERE email = $1`, [email]);
    },
    searchDBforId: function (id) {
        return db.all(`SELECT * FROM doctors WHERE id = $1`, [id]);
    },
    createUser: function (user) {
        return db.get(`INSERT INTO doctors(firstname,lastname,email,password,created_at,address,state,zipcode) VALUES 
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