//Validates email string against regex
//after checking for SQL Injection.
//Returns true if email is valid.
let emailValidator = (email: string) => {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

//Function For Validating User Input
let validateuser = (user) => {
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  const validPassword =
    typeof user.password == "string" &&
    user.password.trim() != "" &&
    user.password.trim().length >= 8;

  return validEmail && validPassword;
};
function ensureLoggedIn(req, res, next) {
  console.log(req.signedCookies);
  if (req.signedCookies.user_id) {
    next();
  } else {
    res.status(401);
    next(new Error("Unauthorized"));
  }
}

function ensureAuthorized(req, res, next) {
  console.log(req.signedCookies);
  if (req.signedCookies.user_id == req.params.id) {
    next();
  } else {
    res.status(401);
    next(new Error("Please Access your Own SHit"));
  }
}
module.exports = {
  ensureLoggedIn,
  emailValidator,
  validateuser,
  ensureAuthorized,
};
