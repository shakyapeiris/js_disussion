import React from "react";

import useRefValidator from "../../Hooks/use-ref-validator";
import useHttp from "../../Hooks/use-http";

import Input from "../UI/Input";
import Button from "../UI/Button";

const Form = () => {
  const {
    inputValue: nameValue,
    isInputValid: isNameValid,
    inputRef: nameRef,
    hasError: nameHasError,
    valueChangeHandler: nameChangehandler,
    inputBlurHandler: nameBlurHandler,
    inputFocusHandler: nameFocushandler,
    reset: resetName,
  } = useRefValidator((inputValue) => inputValue.trim().length > 6);

  const {
    inputValue: emailValue,
    isInputValid: isEmailValid,
    inputRef: emailRef,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputFocusHandler: emailFocusHandler,
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
    inputRef: password1Ref,
    hasError: passwrod1HasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: password1BlurHandler,
    inputFocusHandler: password1FocusHandler,
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
    inputRef: password2Ref,
    hasError: passwrod2HasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
    inputFocusHandler: password2FocusHandler,
    reset: resetPassword2,
  } = useRefValidator((inputValue) => inputValue === password1Value);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!isNameValid) {
      nameFocushandler();
      return;
    } else if (!isEmailValid) {
      emailFocusHandler();
      return;
    } else if (!isPassword1Valid) {
      password1FocusHandler();
      return;
    } else if (!isPassword2Valid) {
      password2FocusHandler();
      return;
    }

    alert(nameValue + emailValue);
    resetName();
    resetEmail();
    resetPassword1();
    resetPassword2();
  };
  return (
    <form onSubmit={submitFormHandler} autoComplete="false">
      <h2 style={{ textAlign: "center" }}>User Registration Form Type 1</h2>

      <Input
        label="Enter your username"
        ref={nameRef}
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
        ref={emailRef}
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
        ref={password1Ref}
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
        ref={password2Ref}
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

      <Button type="submit" bg="purple" fg="white">
        Submit
      </Button>
    </form>
  );
};

export default Form;
