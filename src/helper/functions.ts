// Validation functions
const validateUsername = (username: string) => {
  if (username.length < 3) {
    return "Username must be at least 3 characters long.";
  }
  return null;
};

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }
  return null;
};

// check object values
const isEveryFieldFilled = <T extends Record<string, any>>(obj: T) => {
  return Object.values(obj).every(
    (value) => value !== null && value !== undefined && value !== ""
  );
};

export { validateEmail, validateUsername, isEveryFieldFilled };
