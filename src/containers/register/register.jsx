import React, { Fragment } from "react";
import "./register.css";
import InputText from "../../components/forms/inputText";
import Button from "../../components/forms/button";
import HandleRegister from "./handleRegister";
import { Redirect } from "react-router";

const INITIAL_STATE = {
  email: "fikriramadhan002@gmail.com",
  password: "Kallera002!",
  password_confirmation: "Kallera002!",
  username: "Kallera002!"
};

const Register = () => {
  // FUNGSI UNTUK SEMUA VALIDASI FORM
  const {
    handleChange,
    values,
    errors,
    handleInputPassword,
    handleInputText,
    handleInputPasswordConfirmation,
    handleInputEmail,
    handleSubmit,
    res
  } = HandleRegister(INITIAL_STATE);

  // Redirect setelah submit data
  if (res.status) {
    return <Redirect to="/" />;
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
          <p style={{ color: "red" }}>{res.conflig ? res.conflig.error : ""}</p>

          <InputText
            error={res.error ? res.error.username : errors.username}
            label="username"
            change={handleChange}
            input={handleInputText}
            value={values.username}
            name="username"
            type="text"
            required={true}
            alpaNumeric="true"
          />
          <InputText
            error={res.error ? res.error.email : errors.email}
            label="email"
            change={handleChange}
            input={handleInputEmail}
            value={values.email}
            name="email"
            type="text"
            mail="true"
          />

          <InputText
            label="password"
            error={res.error ? res.error.password : errors.password}
            name="password"
            change={handleChange}
            input={handleInputPassword}
            value={values.password}
            type="password"
            required={true}
            specialCharacter="true"
          />

          <InputText
            error={
              res.error
                ? res.error.password_confirmation
                : errors.password_confirmation
            }
            label="password confirmation"
            name="password_confirmation"
            change={handleChange}
            input={handleInputPasswordConfirmation}
            value={values.password_confirmation}
            type="password"
            matches="true"
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
