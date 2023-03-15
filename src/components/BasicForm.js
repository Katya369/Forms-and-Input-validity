import UseInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    isValid: enteredFirstNameIsValid,
    reset: resetFirstNameInput
  } = UseInput(value => value.trim() !== '');
  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    isValid: enteredLastNameIsValid,
    reset: resetLastNameInput
  } = UseInput(value => value.trim() !== '');
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput
  } = UseInput(value => value.trim() !== '' && value.includes('@'));
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredFirstNameIsValid || !enteredEmailIsValid || !enteredLastNameIsValid) {
      return;
    };
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };


  return (
    <form onSubmit = {formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameInputHasError && <p className='error-text'>First name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameInputHasError && <p className='error-text'>Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailInputHasError && <p className='error-text'>E-mail must not be empty and includ @</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
