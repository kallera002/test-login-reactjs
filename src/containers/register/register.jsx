import React, { Fragment, useEffect } from 'react';
import './register.css';
import InputText from '../../components/forms/inputText';
import ValidationAuth from '../../validations/auth/validationAuth';

import HttpPostData from './../../constant/httpRequest';
const INITIAL_STATE = {
  email: 'fikriramadhan002@gmail.com',
  password: 'Namakurama002!',
  password_confirmation: 'Namakurama002!',
  username: 'Kallera002'
};

const Register = () => {
  const [res, apiMethod] = HttpPostData({
    url: 'http://localhost:8080/post',
    headers: { ContentType: 'application/json' },
    payload: {}
  });

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    handleInputPassword,
    handleInputText,
    insertIntoDB,
    handleInputPasswordConfirmation,
    handleInputEmail
  } = ValidationAuth(INITIAL_STATE);
  console.log(111);

  useEffect(() => {
    if (insertIntoDB) {
      apiMethod();
    }
  });

  return (
    <Fragment>
      <div className="container form__register">
        <div className="row">
          <header>
            <h4>Register</h4>
          </header>
        </div>
        <form action="" className="register__form-content" onSubmit={handleSubmit} name="register">
          <InputText
            error={errors.username}
            label="username"
            change={handleChange}
            input={handleInputText}
            value={values.username}
            name="username"
            type="text"
          />
          <InputText
            error={errors.email}
            label="email"
            change={handleChange}
            input={handleInputEmail}
            value={values.email}
            name="email"
            type="text"
          />

          <InputText
            label="password"
            error={errors.password}
            name="password"
            change={handleChange}
            input={handleInputPassword}
            value={values.password}
            type="password"
          />

          <InputText
            error={errors.password_confirmation}
            label="password confirmation"
            name="password_confirmation"
            change={handleChange}
            input={handleInputPasswordConfirmation}
            value={values.password_confirmation}
            type="password"
          />
          <div className="row">
            <div className="col-12 text-center">
              <button type="submit" className="register__btn">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
