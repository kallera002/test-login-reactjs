import Errors from "./../../../constant/error";
import Regex from "./../../../constant/regex";
console.log("TCL: Errors", Errors);
const InputEmail = event => {
  let errors = {};
  let name = event.target.name;
  let value = event.target.value;

  if (!value.match(Regex.email)) {
    errors[name] = Errors.email.invalid;
    return errors;
  }
  return errors;
};

export default InputEmail;
