import Errors from "./../../../constant/error";
import Regex from "./../../../constant/regex";
const InputPassword = (validationRules, event) => {
  let errors = {};
  const rules = validationRules.text;
  const value = event.target.value;
  const name = event.target.name;

  if (rules.hasOwnProperty("required")) {
    if (value === "") {
      errors[name] = Errors.password.required;
      return errors;
    }
  }

  if (rules.hasOwnProperty("full")) {
    if (!value.match(Regex.password)) {
      errors[name] = Errors.password.invalidRegex;
      return errors;
    }
  }

  return errors;
};

export default InputPassword;
