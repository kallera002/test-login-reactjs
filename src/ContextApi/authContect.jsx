import React, { createContext, useState, useEffect } from "react";
import LocalStorage from "./../helpers/localStorage";
export const AuthContext = createContext();

const AuthContextProvider = props => {
  const { expiredToken } = LocalStorage();
  const [isLogged, setIsLogged] = useState(false);

  const setAuth = () => {
    setIsLogged(true);
  };

  useEffect(() => {
    if (expiredToken()) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  });
  return (
    <AuthContext.Provider value={{ isLogged, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
