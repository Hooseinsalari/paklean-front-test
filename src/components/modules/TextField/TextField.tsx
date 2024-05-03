// type
import { TextFieldInterface } from "../../../types";

const TextField = ({
  type,
  placeholder,
  name,
  value,
  inputIcon,
  onChange,
  error,
}: TextFieldInterface) => {
  return (
    <div className="my-4">
      <div className="textField__input flex items-center justify-between">
        <input
          autoComplete="off"
          className="bg-transparent focus-visible:outline-none w-full"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
        {inputIcon}
      </div>
      {error && (
        <span className="text-red-400 text-sm inline-block mt-1 ml-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextField;
