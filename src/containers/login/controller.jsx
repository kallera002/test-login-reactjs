/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import validationText from './../../helpers/validation/inputText';
import validationPassword from './../../helpers/validation/inputPassword';

const ControllerForm = (initialState, validationAuth) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting]);

  // lakukan perubahan pada value setiap ada perubahan dari form
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleInputText = event => {
    const validationErrors = validationText(VALIDATION_RULE_TEXT, event);
    setErrors(validationErrors);
  };

  const handleInputPassword = event => {
    const validationErrors = validationPassword(VALIDATION_RULE_PASSWORD, event);
    setErrors(validationErrors);
  };

  // lakukan validasi data setiap kali form selesai di isi
  // const handleBlur = () => {
  //   const validationErrors = validationAuth(values);
  //   console.log('TCL: handleBlur -> validationErrors', validationErrors);
  //   setErrors(validationErrors);
  // };

  // lakukan validasi data setelah form di submit
  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validationAuth(values);
    if (validationErrors.length !== null) {
      setErrors(validationErrors);
    } else {
      // post data into database

      console.log('post data into database');
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
    handleInputPassword
  };
};

export default ControllerForm;
