import Regex from './../../../constant/regex';
import Errors from '../../../constant/error';

const InputText = (validationRules, event) => {
  let errors = {};
  const rules = validationRules.text;
  const value = event.target.value;
  const name = event.target.name;

  if (rules.hasOwnProperty('required') && rules.required) {
    if (value === '') {
      errors[name] = Errors.username.required;
      return errors;
    }
  }

  if (rules.hasOwnProperty('full') && rules.full) {
    if (rules.full) {
      if (!value.match(Regex.username)) {
        errors[name] = Errors.username.invalid;
        return errors;
      }
    }
  }

  return errors;
};

export default InputText;
