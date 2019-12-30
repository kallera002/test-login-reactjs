const UsernameAuthentication = values => {
  let errors = {};
  let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (!values.username) {
    errors.username = "username required";
  } else if (!values.username.match(decimal)) {
    errors.username =
      "Usernames must between 8 to 15 character, use uppercase letters, numbers and special characters";
  }
  return errors;
};

export default UsernameAuthentication;
