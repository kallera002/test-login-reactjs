const passwordConfirmationAuthentication = (passwordConfirmation, password) => {
  let errors = {};
  if (!passwordConfirmation) {
    errors.password_confirmation = "Password Confirmation required.";
  } else if (passwordConfirmation !== password) {
    errors.password_confirmation =
      "Your password and confirmation password do not match.";
  }
  return errors;
};

export default passwordConfirmationAuthentication;
