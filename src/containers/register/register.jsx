import React, { Fragment, useState } from "react";
import "./register.css";
import InputText from "../../components/forms/inputText";
import Button from "../../components/forms/button";
import ValidationAuth from "../../validations/auth/validationAuth";
import HttpPostData from "./../../constant/httpRequest";

const INITIAL_STATE = {
  email: "fikriramadhan002@gmail.com",
  password: "Namakurama002!",
  password_confirmation: "Namakurama002!",
  username: "Kallera002"
};

const Register = () => {
  const {
    handleChange,
    values,
    errors,
    handleInputPassword,
    handleInputText,
    handleInputPasswordConfirmation,
    handleInputEmail
  } = ValidationAuth(INITIAL_STATE);
  console.log(process.env.REACT_APP_CUSTOM_BASE_URL);

  const [res, callAPIPost] = HttpPostData({
    url: process.env.REACT_APP_CUSTOM_BASE_URL + "register",
    headers: { ContentType: "application/json" },
    payload: values
  });

  return (
    <Fragment>
      <div className="container form__register">
        <div className="row">
          <header>
            <h4>Register</h4>
          </header>
        </div>
        <form
          action=""
          className="register__form-content"
          onSubmit={e => {
            e.preventDefault();
            callAPIPost();
          }}
          name="register"
        >
          <p>{res.conflig ? res.conflig.error : ""}</p>

          <InputText
            error={res.error ? res.error.username : errors.username}
            label="username"
            change={handleChange}
            input={handleInputText}
            value={values.username}
            name="username"
            type="text"
          />
          <InputText
            error={res.error ? res.error.email : errors.email}
            label="email"
            change={handleChange}
            input={handleInputEmail}
            value={values.email}
            name="email"
            type="text"
          />

          <InputText
            label="password"
            error={res.error ? res.error.password : errors.password}
            name="password"
            change={handleChange}
            input={handleInputPassword}
            value={values.password}
            type="password"
          />

          <InputText
            error={res.error ? res.error.confirmation : errors.confirmation}
            label="password confirmation"
            name="password_confirmation"
            change={handleChange}
            input={handleInputPasswordConfirmation}
            value={values.password_confirmation}
            type="password"
          />
          <div className="row">
            <div className="col-12 text-center">
              <Button type="submit" isLoading={res.isLoading}>
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
