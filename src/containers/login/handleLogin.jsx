import React, { useState, useEffect } from 'react';
import InputPassword from './../../validations/rules/onInput/inputPassword';
import InputText from './../../validations/rules/onInput/inputText';

import UsernameAuthentication from '../../validations/rules/submitForm/username';
import passwordAuthentication from '../../validations/rules/submitForm/password';

import HttpPostData from '../../constant/httpRequest';

const HandleLogin = initialState => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FUNGSI UNTUK STORE DATA KE DATABASE
  const [res, callAPIPost] = HttpPostData({
    url: process.env.REACT_APP_CUSTOM_BASE_URL + 'auth/login',
    headers: { ContentType: 'application/json' },
    payload: values
  });

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    if (isSubmitting) {
      if (noErrors) {
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting, setIsSubmitting]);

  // lakukan perubahan pada value setiap ada perubahan dari form
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  /**
   * @description validasi form input type username
   * @param {event dari form input} event
   */
  const handleInputText = event => {
    delete errors[event.target.name];
    const validationErrors = InputText(event);
    setErrors({ ...errors, ...validationErrors });
  };

  /**
   * @description validasi form input type password
   * @param {event dari form input} event
   */
  const handleInputPassword = event => {
    delete errors[event.target.name];
    const validationErrors = InputPassword(event);
    setErrors({ ...errors, ...validationErrors });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let validationErrors;
    const errorUsername = UsernameAuthentication(values.username);
    const errorPassword = passwordAuthentication(values.password);

    validationErrors = {
      ...errorPassword,
      ...errorUsername
    };

    if (validationErrors.length !== undefined) {
      setErrors(validationErrors);
    } else {
      // Post data ke database jika sudah tidak ada data yang error
      callAPIPost();
    }

    setIsSubmitting(true);
  };

  return {
    handleSubmit,
    errors,
    values,
    handleChange,
    handleInputText,
    handleInputPassword,
    res
  };
};

export default HandleLogin;
