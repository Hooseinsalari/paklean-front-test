import React, { useState } from "react";

// types
import { FormErrors, FormValuesInterface } from "../../../types";

// helper
import { validateEmail, validateUsername } from "../../../helper/functions";

// components
import TextField from "../../modules/TextField/TextField";
import DatePickerField from "../../modules/DatePickerField/DatePickerField";
import DropDown from "../../modules/DropDown/DropDown";

// icon
import { HiOutlineMail } from "react-icons/hi";
import Button from "../../modules/Button/Button";

// drop down values
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const SignUpForm = () => {
  // ** states
  const [formValues, setFormValues] = useState<FormValuesInterface>({
    username: "",
    position: "",
    dateOfBirth: null,
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

      <DatePickerField
        dateValue={formValues.dateOfBirth}
        onChange={(date) =>
          setFormValues({ ...formValues, dateOfBirth: date! })
        }
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

      <DropDown
        options={genderOptions}
        onChange={(value) => setFormValues({ ...formValues, gender: value })}
      />

      <Button
        label="Submit"
        onClick={() => null}
        customStyle="bg-blue-500 mt-16 text-[#202124] hover:shadow-blue-600"
      />
    </form>
  );
};

export default SignUpForm;
