export interface FormValuesInterface {
  username: string;
  position: string;
  dateOfBirth: Date | null;
  email: string;
  phoneNumber: string;
  gender: string;
}

export interface FormErrors {
  username: string | null;
  email: string | null;
}

export interface TextFieldInterface {
  type: "text" | "number" | "email" | "date";
  placeholder: string;
  name: string;
  value: string;
  inputIcon?: JSX.Element;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  error?: string | null;
}
