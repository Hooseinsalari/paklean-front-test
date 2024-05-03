import React, { useState } from "react";

// types
import { FormErrors, FormValuesInterface } from "../../../types";

// helper
import { validateEmail, validateUsername } from "../../../helper/functions";

// components
import TextField from "../../modules/TextField/TextField";

// icon
import { HiOutlineMail } from "react-icons/hi";

const SignUpForm = () => {
  // ** states
  const [formValues, setFormValues] = useState<FormValuesInterface>({
    username: "",
    position: "",
    dateOfBirth: new Date(),
    email: "",
    phoneNumber: "",
    gender: "",
  });
  const [errors, setErrors] = useState<FormErrors>({ username: "", email: "" });

  // ** handlers
  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (name === "username") {
      setErrors({ ...errors, username: validateUsername(value) });
    } else if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) });
    }
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formValues);
  };
  return (
    <form className="mt-8" onSubmit={submitHandler} autoComplete="off">
      <TextField
        type="text"
        placeholder="Please Enter Your Name"
        name="username"
        value={formValues.username}
        onChange={inputHandler}
        error={errors.username}
      />

      <TextField
        type="text"
        placeholder="Please Enter Your Position"
        name="position"
        value={formValues.position}
        onChange={inputHandler}
      />

      <TextField
        type="email"
        placeholder="Please Enter Your Email"
        name="email"
        value={formValues.email}
        onChange={inputHandler}
        inputIcon={<HiOutlineMail className="text-2xl" />}
        error={errors.email}
      />

      <TextField
        type="number"
        placeholder="Please Enter Your Number"
        name="phoneNumber"
        value={formValues.phoneNumber}
        onChange={inputHandler}
      />

      <button className="w-full bg-blue-500 p-4 mt-12 rounded-lg text-white shadow-sm transition duration-200 hover:shadow-blue-600">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
