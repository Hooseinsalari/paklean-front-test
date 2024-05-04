import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// types
import { FormErrors, FormValuesInterface } from "../../../types";

// helper
import {
  isEveryFieldFilled,
  validateEmail,
  validateUsername,
} from "../../../helper/functions";

// components
import TextField from "../../modules/TextField/TextField";
import DatePickerField from "../../modules/DatePickerField/DatePickerField";
import DropDown from "../../modules/DropDown/DropDown";
import Button from "../../modules/Button/Button";

// icon
import { HiOutlineMail } from "react-icons/hi";

// react cookie
import { useCookies } from "react-cookie";

// drop down values
const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const EditProfileForm = () => {
  // ** cookies
  const [cookies, setCookie] = useCookies(["User"]);
  const { User } = cookies;

  // ** states
  const [formValues, setFormValues] = useState<FormValuesInterface>({
    username: User.username,
    position: User.position,
    dateOfBirth: User.dateOfBirth,
    email: User.email,
    phoneNumber: User.phoneNumber,
    gender: User.gender,
  });
  const [errors, setErrors] = useState<FormErrors>({ username: "", email: "" });

  // ** navigate
  const navigate = useNavigate();

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

    if (isEveryFieldFilled(formValues) && !errors.username && !errors.email) {
      setCookie("User", formValues, { path: "/" });
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <form className="mt-8" autoComplete="off" onSubmit={submitHandler}>
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
        selected={formValues.gender}
        options={genderOptions}
        onChange={(value) => setFormValues({ ...formValues, gender: value })}
      />

      <Button
        label="Update"
        onClick={() => null}
        customStyle="bg-blue-500 mt-16 text-[#202124] hover:shadow-blue-600"
      />
    </form>
  );
};

export default EditProfileForm;
