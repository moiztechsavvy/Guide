//Validates email string against regex
//after checking for SQL Injection.
//Returns true if email is valid.
let emailValidator = (email) => {
    if (sqlInjection(email)) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    else {
        return false;
    }
};
//# sourceMappingURL=inputValidation.js.map