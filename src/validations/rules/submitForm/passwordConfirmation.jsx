import Errors from "../../../constant/error";
const passwordConfirmationAuthentication = (passwordConfirmation, password) => {
  let errors = {};
  if (!passwordConfirmation) {
    errors.password_confirmation = Errors.required;
  } else if (passwordConfirmation !== password) {
    errors.password_confirmation = Errors.passwordConfirmation;
  }
  return errors;
};

export default passwordConfirmationAuthentication;
