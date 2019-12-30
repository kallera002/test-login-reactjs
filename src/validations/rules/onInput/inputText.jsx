import Regex from "./../../../constant/regex";
import Errors from "../../../constant/error";

const InputText = (validationRules, event) => {
  let errors = {};
  const rules = validationRules.text;
  const value = event.target.value;
  const name = event.target.name;

  if (rules.hasOwnProperty("required")) {
    if (value === "") {
      errors[name] = Errors.username.invalid;
      return errors;
    }
  }

  if (rules.hasOwnProperty("full")) {
    if (!value.match(Regex.username)) {
      errors[name] = Errors.username.invalid;
      return errors;
    }
  }

  return errors;
};

export default InputText;
