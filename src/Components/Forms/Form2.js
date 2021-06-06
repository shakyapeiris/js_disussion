import React from "react";

import useRefValidator from "../../Hooks/use-ref-validator";

import Input from "../UI/Input";
import Button from "../UI/Button";

const Form = () => {
  const {
    inputValue: nameValue,
    isInputValid: isNameValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangehandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useRefValidator((inputValue) => inputValue.trim().length > 6);

  const {
    inputValue: emailValue,
    isInputValid: isEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useRefValidator(
    (inputValue) =>
      inputValue.includes("@") &&
      !inputValue.includes(" ") &&
      inputValue.includes(".")
  );

  const {
    inputValue: password1Value,
    isInputValid: isPassword1Valid,
    hasError: passwrod1HasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: password1BlurHandler,
    reset: resetPassword1,
  } = useRefValidator(
    (inputValue) =>
      inputValue.match(/\d+/) &&
      inputValue.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) &&
      inputValue.match(/[a-z]/) &&
      inputValue.match(/[A-Z]/)
  );

  const {
    inputValue: password2Value,
    isInputValid: isPassword2Valid,
    hasError: passwrod2HasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
    reset: resetPassword2,
  } = useRefValidator((inputValue) => inputValue === password1Value);

  const submitFormHandler = (event) => {
    event.preventDefault();

    alert(nameValue + emailValue);
    resetName();
    resetEmail();
    resetPassword1();
    resetPassword2();
  };
  return (
    <form onSubmit={submitFormHandler} autoComplete="false">
      <h2 style={{ textAlign: "center" }}>User Registration Form Type 2</h2>

      <Input
        label="Enter your username"
        onBlur={nameBlurHandler}
        inValid={nameHasError}
        onChange={nameChangehandler}
        value={nameValue}
      />
      {nameHasError ? (
        <div style={{ color: "white", textAlign: "right" }}>
          Enter a valid username (Length {">"} 6)
        </div>
      ) : null}

      <Input
        label="Enter your email"
        onBlur={emailBlurHandler}
        inValid={emailHasError}
        onChange={emailChangeHandler}
        value={emailValue}
      />
      {emailHasError ? (
        <div style={{ color: "white", textAlign: "right" }}>
          Email must include @{" "}
        </div>
      ) : null}

      <Input
        type="password"
        label="Enter a password"
        onBlur={password1BlurHandler}
        inValid={passwrod1HasError}
        onChange={passwordChangeHandler}
        value={password1Value}
      />
      {passwrod1HasError ? (
        <div style={{ color: "white", textAlign: "left" }}>
          Password must include a special character, a number and a UpperCase
          letter
        </div>
      ) : null}

      <Input
        type="password"
        disabled={!isPassword1Valid}
        label="Enter a password"
        onBlur={password2BlurHandler}
        inValid={passwrod2HasError}
        onChange={password2ChangeHandler}
        value={password2Value}
      />
      {passwrod2HasError ? (
        <div style={{ color: "white", textAlign: "right" }}>
          Passwords are not matching
        </div>
      ) : null}

      <Button
        type="submit"
        disabled={
          !isNameValid ||
          !isEmailValid ||
          !isPassword1Valid ||
          !isPassword2Valid
        }
        bg="purple"
        fg="white"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
