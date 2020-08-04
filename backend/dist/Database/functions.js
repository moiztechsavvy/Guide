var db = require("./index");
var express = require("express");
module.exports = {
    getAllDoctorValues: function () {
        return db.run(`SELECT * FROM doctor`);
    },
    searchDBforDoctorEmail: function (email) {
        return db.run(`SELECT * FROM doctor WHERE email = $1`, [email]);
    },
    searchDBforDoctorId: function (id) {
        return db.run(`SELECT * FROM doctor WHERE id = $1`, [id]);
    },
    createDoctor: function (user) {
        return db.run(`INSERT INTO doctor(firstname,lastname,email,password,created_at,address,state,zipcode) VALUES 
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
    getAllPatientValues: function () {
        return db.run(`SELECT * FROM patient`);
    },
    searchDBforPatientEmail: function (email) {
        return db.run(`SELECT * FROM patient WHERE email = $1`, [email]);
    },
    searchDBforPatientId: function (id) {
        return db.run(`SELECT * FROM patient WHERE id = $1`, [id]);
    },
    createPatient: function (user) {
        return db.run(`INSERT INTO patient(firstname,lastname,email,password,created_at,address,state,zipcode) VALUES 
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
    }
};
//# sourceMappingURL=functions.js.map