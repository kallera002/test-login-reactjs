import React, { useState } from "react";

const LocalStorage = token => {
  // const [values, setValues] = useState(token);
  let data = token;

  // // Return a wrapped version of useState's setter function that ...
  // // ... persists the new value to localStorage.
  const setToken = () => {
    localStorage.setItem(
      btoa(process.env.LOCALSTORAGE_KEY),
      JSON.stringify(data)
    );
  };

  const getCurrentUser = () => {
    const token = localStorage.getItem(btoa(process.env.LOCALSTORAGE_KEY));
    const data = atob(token.split(".")[1]);
    return JSON.parse(data).username;
  };

  return {
    setToken,
    getCurrentUser
  };
};

export default LocalStorage;
