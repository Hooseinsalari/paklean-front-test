import React from "react";

interface DropDownProps {
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  onChange: (value: string) => void;
  selected?: string;
}

const DropDown = ({
  options,
  placeholder,
  onChange,
  selected,
}: DropDownProps) => {
  // ** handler
  const handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      defaultValue={selected}
      className="textField__input"
      onChange={handler}
    >
      <option value="">
        {placeholder ? placeholder : "Please Select Your Gender"}
      </option>
      {options.map((item) => (
        <option key={item.label} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
