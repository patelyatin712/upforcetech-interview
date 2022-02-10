import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import TextFieldComp from "../../Shared/TextField";

import "./style.css";

function InputForm({ url }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAgreedTNC, setIsAgreedTNC] = useState(true);

  const [errors, setErrors] = useState({});

  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const _errors = {};
    if (!firstName) _errors.firstName = "First name is required";
    if (!lastName) _errors.lastName = "Last name is required";
    if (!userName) _errors.userName = "Username is required";

    if (!email) _errors.email = "Email is required";
    else if (!validateEmail(email)) _errors.email = "Please enter valid Email";

    if (!password) _errors.password = "Password is required";
    else if (password?.length < 8)
      _errors.password = "Password should be greater than 8 character";

    setErrors(_errors);
    return _errors;
  };

  const formFields = [
    {
      id: "firstName",
      label: "First name *",
      placeholder: "First Name",
      type: "text",
      value: firstName,
      onChange: (e) => {
        const value = e.target.value;
        if (value)
          setErrors((prevState) => ({ ...prevState, firstName: undefined }));
        setFirstName(value);
      },
      error: !!errors?.firstName,
      helperText: errors?.firstName,
      // required: true,
    },
    {
      id: "lastName",
      label: "Last name *",
      placeholder: "Last Name",
      type: "text",
      value: lastName,
      onChange: (e) => {
        const value = e.target.value;
        if (value)
          setErrors((prevState) => ({ ...prevState, lastName: undefined }));
        setLastName(value);
      },
      error: !!errors?.lastName,
      helperText: errors?.lastName,
      // required: true,
    },
    {
      id: "userName",
      label: "User name *",
      placeholder: "User Name",
      type: "text",
      value: userName,
      onChange: (e) => {
        const value = e.target.value;
        if (value)
          setErrors((prevState) => ({ ...prevState, userName: undefined }));
        setUserName(value);
      },
      error: !!errors?.userName,
      helperText: errors?.userName,
      // required: true,
    },
    {
      id: "email",
      label: "Email *",
      placeholder: "Email",
      type: "email",
      value: email,
      onChange: (e) => {
        const value = e.target.value;
        if (value)
          setErrors((prevState) => ({ ...prevState, email: undefined }));
        setEmail(value);
      },
      error: !!errors?.email,
      helperText: errors?.email,
      // required: true,
    },
    {
      id: "password",
      label: "Password *",
      placeholder: "Password",
      type: "password",
      value: password,
      onChange: (e) => {
        const value = e.target.value;
        if (value)
          setErrors((prevState) => ({ ...prevState, password: undefined }));
        setPassword(value);
      },
      error: !!errors?.password,
      helperText: errors?.password,
      // required: true,
    },
  ];

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const _errors = validate();
    if (Object.keys(_errors || {}).length > 0) return;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email: email,
        password: password,
      }),
    }).then(() => {
      setShowToast(true);
      setFirstName("");
      setLastName("");
      setUserName("");
      setEmail("");
      setPassword("");
    });
  };

  return (
    <form action="submit" className="form" onSubmit={onSubmit}>
      <Snackbar
        open={showToast}
        autoHideDuration={5000}
        onClose={setShowToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={setShowToast} severity="success" sx={{ width: "100%" }}>
          Success
        </Alert>
      </Snackbar>
      {formFields.map((field) => (
        <div className="field-container">
          <TextFieldComp {...field} />
        </div>
      ))}
      <div className="tnc-container">
        <FormControlLabel
          className="tnc-checkbox"
          label={
            <p>
              I agree to the <span className="tnc">Terms and Conditions</span>
            </p>
          }
          control={
            <Checkbox
              checked={isAgreedTNC}
              onChange={() => setIsAgreedTNC((prevState) => !prevState)}
            />
          }
        />
      </div>
      <Button
        className="submit-button"
        color="primary"
        variant="contained"
        type="submit"
        disabled={!isAgreedTNC}
      >
        Sign Up
      </Button>
    </form>
  );
}

export default InputForm;
