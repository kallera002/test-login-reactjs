const validationPassword = (validationRules, event) => {
  let errors = {};
  const rules = validationRules.text;
  const value = event.target.value;
  const name = event.target.name;

  if (rules.hasOwnProperty('required')) {
    if (value === '') {
      errors[name] = 'Username required';
      return errors;
    }
  }

  if (rules.hasOwnProperty('full')) {
    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!value.match(decimal)) {
      errors[name] = 'Usernames must use uppercase letters, numbers and special characters';
      return errors;
    }
  }

  return errors;
};

export default validationPassword;
