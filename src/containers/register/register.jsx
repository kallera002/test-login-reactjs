import React, { Fragment } from "react";
import "./register.css";
import InputText from "../../components/forms/inputText";
import ValidationAuth from "../../validations/auth/validationAuth";

const INITIAL_STATE = {
  email: "",
  password: "",
  password_confirmation: "",
  username: ""
};

const Register = () => {
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    isSubmitting,
    handleInputPassword,
    handleInputText,
    insertIntoDB,
    handleInputPasswordConfirmation,
    handleInputEmail
  } = ValidationAuth(INITIAL_STATE);

  if (insertIntoDB) {
    console.log(1);
  }
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
          onSubmit={handleSubmit}
          name="register"
        >
          <InputText
            label="username"
            error={errors.username}
            name="username"
            change={handleChange}
            input={handleInputText}
            value={values.username}
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
