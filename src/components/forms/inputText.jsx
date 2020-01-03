import React, { Fragment } from "react";
const InputText = props => {
  return (
    <Fragment>
      <div className="row form__group">
        <div className="col-12">
          <label htmlFor="">{props.label}</label>
        </div>
        <div className="col-12">
          <input
            className={"input__text " + (props.error ? "input__error" : "")}
            type={props.type}
            onChange={props.change}
            value={props.value}
            name={props.name}
            onInput={props.input}
            required={props.required}
            special-character={props.specialCharacter}
            matches={props.matches}
            alpa-numeric={props.alpaNumeric}
            mail={props.mail}
          />
          <p className="error__text">{props.error ? props.error : ""}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default InputText;
