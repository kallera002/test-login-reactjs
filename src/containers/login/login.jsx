/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import "./login.css";
import ValidationAuth from "../../validations/auth/validationAuth";
import InputText from "../../components/forms/inputText";

import { Link } from "react-router-dom";

const INITIAL_STATE = {
  password: "",
  username: ""
};

const Login = props => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    isSubmitting,
    handleInputPassword,
    handleInputText
  } = ValidationAuth(INITIAL_STATE);

  const disabledButton = Object.keys(errors).length;

  return (
    <Fragment>
      <div className="container login__form">
        <div className="row">
          <header>
            <h4>Login Form</h4>
          </header>
        </div>
        <div className="login__form-content">
          <form className="form__control" onSubmit={handleSubmit} name="login">
            {/* input username */}
            <InputText
              label="username"
              error={errors.username}
              name="username"
              change={handleChange}
              input={handleInputText}
              value={values.username}
              type="text"
            />
            {/* end */}

            {/* input Password */}
            <InputText
              label="password"
              error={errors.password}
              name="password"
              change={handleChange}
              input={handleInputPassword}
              value={values.password}
              type="passwords"
            />
            {/* end */}

            <div className="row">
              <div className="col-6">
                <div className=" register__link">
                  <Link to="/register">
                    <span>Register</span>
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  <button
                    className={
                      "submit__btn " +
                      (disabledButton || isSubmitting ? "disabled" : "")
                    }
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
