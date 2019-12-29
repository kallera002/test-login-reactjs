const ValidationAuth = values => {
  let errors = {};
  if (!values.username) {
    errors.username = 'Username required';
  } else if (values.username.length < 6) {
    errors.username = 'Username must between 6 to 15 character';
  }

  if (!values.password) {
    errors.password = 'Password required';
  }
  return errors;
};

export default ValidationAuth;
