const validationText = (validationRules, event) => {
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

  //   if (rules.hasOwnProperty('min')) {
  //     if (value.length < 6) {
  //       errors[name] = 'Username more than 6 character';
  //       return errors;
  //     }
  //   }

  //   if (rules.hasOwnProperty('max')) {
  //     if (value.length > 16) {
  //       errors[name] = 'Username lower than 16 character';
  //       return errors;
  //     }
  //   }

  //   if (rules.hasOwnProperty('uppercase')) {
  //     var letter = /^[A-Z]/;
  //     if (!value.match(letter)) {
  //       errors[name] = 'Username names must contain capital letters';
  //       return errors;
  //     }
  //   }

  //   if (rules.hasOwnProperty('numb')) {
  //     var Number = /^[0-9]+$/;
  //     if (!value.match(Number)) {
  //       errors[name] = 'Username names must contain numbers';
  //       return errors;
  //     }
  //   }

  return errors;
};

export default validationText;
