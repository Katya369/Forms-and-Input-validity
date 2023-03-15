import { useState } from 'react';
import UseInput from '../hooks/use-input';
const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetNameInput
  } = UseInput(value => value.trim() !== '');

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput
  } = UseInput(value => value.includes('@') && value.trim() !== '');

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';


  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    };
    console.log(enteredName);
    console.log(enteredEmail);
    resetNameInput();
    resetEmailInput();
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Write your name</label>
        <input value={enteredName} type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Write your E-mail</label>
        <input value={enteredEmail} type='email' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className='error-text'>E-mail must not be empty and includ @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
