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

export { validateEmail, validateUsername };
