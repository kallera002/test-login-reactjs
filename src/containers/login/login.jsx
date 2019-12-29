/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import { useState } from 'react';
import './login.css';
import ControllerForm from './controller';
import ValidationAuth from './validationAuth';

const INITIAL_STATE = {
  password: '',
  username: ''
};

const login = props => {
  const {
    handleChange,
    values,
    handleSubmit,
    // handleBlur,s
    errors,
    isSubmitting,
    handleInputPassword,
    handleInputText
  } = ControllerForm(INITIAL_STATE, ValidationAuth);
  return (
    <Fragment>
      <div className="login__form">
        <header>
          <h4>Login Form</h4>
        </header>
        <div className="login__form-content">
          <form className="form__control" onSubmit={handleSubmit.bind()}>
            <div className="form__group">
              <label htmlFor="">username</label>
              <input
                className={'input__text ' + (errors.username && 'input__error')}
                type="text"
                onChange={handleChange}
                value={values.username}
                onInput={handleInputText}
                name="username"
              />
              <p className="error__text">{errors.username}</p>
            </div>
            <div className="form__group">
              <label htmlFor="">Password</label>
              <input
                className={'input__password ' + (errors.password && 'input__error')}
                type="password"
                onChange={handleChange}
                onInput={handleInputPassword}
                value={values.password}
                name="password"
              />
              <p className="error__text">{errors.password}</p>
            </div>
            <div className="column__2">
              <button className="register__btn">Register</button>
            </div>
            <div className="column__2">
              <button className={'submit__btn ' + (errors && 'disabled')} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default login;
