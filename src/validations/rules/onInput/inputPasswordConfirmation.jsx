import Errors from "./../../../constant/error";
const InputPasswordConfirmation = (event, password) => {
  let errors = {};
  const value = event.target.value;
  if (value !== password) {
    errors.password_confirmation = Errors.passwordConfirmation.notMatch;
  }
  return errors;
};

export default InputPasswordConfirmation;
