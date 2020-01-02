import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loader = () => {
  return (
    <span>
      <FontAwesomeIcon icon={["fa", "sync"]} fixedWidth />
      Loading
    </span>
  );
};

const Button = ({ isLoading, children, ...props }) => {
  return (
    <button
      type={props.type}
      className="register__btn"
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
