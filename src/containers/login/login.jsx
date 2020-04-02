/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useContext } from "react";
import "./login.css";
import HandleLogin from "./handleLogin";
import InputText from "../../components/forms/inputText";
import Button from "../../components/forms/button";
import { Link } from "react-router-dom";
import LocalStorage from "./../../helpers/localStorage";
import { AuthContext } from "./../../ContextApi/authContect";

// import FacebookLogin from "react-facebook-login";

// import GoogleLogin from "react-google-login";

const INITIAL_STATE = {
  password: "",
  username: ""
};



const Login = props => {
  
  const { dispatch } = useContext(AuthContext);


  // custom hooks
  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    event,
    handleInputPassword,
    handleInputText,
    res
  } = HandleLogin(INITIAL_STATE);

  
  const { setToken } = LocalStorage();
  
  if (res.data) {
    setToken(res.data);
    props.history.push("/");
    dispatch({ type: "LOGIN" });
  }

    // const responseFacebook = response => {
    // setToken(response.accessToken);
    // props.history.push("/");
    // dispatch({ type: "LOGIN" });
    //   console.log(response.accessToken);
    // };


  
  return (
    <Fragment>
      <div className="container login__form">
        <div className="row">
          <header>
            <h4>Login Form</h4>
          </header>
        </div>
        <div className="text-center">
          <p style={{ color: "red", marginBottom: 0 }}>
            {res.conflig ? res.conflig.error : ""}
          </p>
        </div>
        <div className="login__form-content">
          <form className="form__control" onSubmit={handleSubmit} name="login">
            {/* input username */}
            <InputText
              label="username"
              error={res.error ? res.error.username : errors.username}
              name="username"
              change={handleChange}
              blur={handleInputText}
              value={values.username}
              type="text"
              required={true}
              alpaNumeric="true"
              render={event}
            />
            {/* end */}

            {/* input Password */}
            <InputText
              label="password"
              error={res.error ? res.error.password : errors.password}
              name="password"
              change={handleChange}
              blur={handleInputPassword}
              value={values.password}
              type="password"
              required={true}
              specialCharacter="true"
              render={event}
            />
            {/* end */}

            <div className="row">
              <div className="col-6">
                <div className=" register__link">
                  <Link
                    to="/register"
                    disabled={res.isLoading ? "disabled" : ""}
                  >
                    <span>Register</span>
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  <Button type="submit" isLoading={res.isLoading}>
                    Login
                  </Button>
                </div>

                <div>
                  {/* <FacebookLogin
                    appId="218993076019373" //APP ID NOT CREATED YET
                    fields="name,email,picture"
                    callback={responseFacebook}
                  {/* /> */}
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
