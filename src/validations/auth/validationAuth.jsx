/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import InputText from "../rules/onInput/inputText";
import InputPassword from "../rules/onInput/inputPassword";
import InputPasswordConfirmation from "../rules/onInput/inputPasswordConfirmation";
import InputEmail from "../rules/onInput/inputEmail";

import passwordAuthentication from "../rules/submitForm/password";
import UsernameAuthentication from "../rules/submitForm/username";
import EmailAuthentication from "../rules/submitForm/email";
import passwordConfirmationAuthentication from "../rules/submitForm/passwordConfirmation";

const ValidationAuth = initialState => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [insertIntoDB, setInsertIntoDB] = useState(false);

  const VALIDATION_RULE_TEXT = {
    text: {
      required: true,
      full: true
    }
  };

  const VALIDATION_RULE_PASSWORD = {
    text: {
      required: true,
      full: true
    }
  };

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    if (isSubmitting) {
      if (noErrors) {
        setIsSubmitting(false);
        setInsertIntoDB(true);
      } else {
        setIsSubmitting(false);
        setInsertIntoDB(false);
      }
    }
  }, [errors, isSubmitting, insertIntoDB]);

  // lakukan perubahan pada value setiap ada perubahan dari form
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleInputText = event => {
    const validationErrors = InputText(VALIDATION_RULE_TEXT, event);
    setErrors(validationErrors);
  };

  const handleInputPassword = event => {
    const validationErrors = InputPassword(VALIDATION_RULE_PASSWORD, event);
    setErrors(validationErrors);
  };

  const handleInputPasswordConfirmation = event => {
    const validationErrors = InputPasswordConfirmation(event, values.password);
    setErrors(validationErrors);
  };

  const handleInputEmail = event => {
    const validationErrors = InputEmail(event);
    setErrors(validationErrors);
  };

  // lakukan validasi data setelah form di submit
  const handleSubmit = event => {
    event.preventDefault();
    const formName = event.target.name;
    const errorPassword = passwordAuthentication(values.password);
    const errorUsername = UsernameAuthentication(values.username);
    let validationErrors = { ...errorPassword, ...errorUsername };
    if (formName === "register") {
      const errorEmail = EmailAuthentication(values.email);
      const errorPasswordConfirmation = passwordConfirmationAuthentication(
        values.password_confirmation,
        values.password
      );
      console.log("TCL: errorPasswordConfirmation", errorPasswordConfirmation);
      validationErrors = {
        ...validationErrors,
        ...errorEmail,
        ...errorPasswordConfirmation
      };
    }
    if (validationErrors.length !== null) {
      setErrors(validationErrors);
    }
    setIsSubmitting(true);
  };

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    isSubmitting,
    handleInputText,
    handleInputPassword,
    handleInputPasswordConfirmation,
    handleInputEmail,
    insertIntoDB
  };
};

export default ValidationAuth;
