import ReactDatePicker from "react-datepicker";

// icon
import { HiOutlineCalendar } from "react-icons/hi";

interface DatePickerFieldProps {
  dateValue: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePickerField = ({ dateValue, onChange }: DatePickerFieldProps) => {
  return (
    <div className="textField__input flex items-center justify-between">
      <ReactDatePicker
        className="w-full bg-inherit focus-visible:outline-none text-slate-400"
        placeholderText="Please Enter Your Birthday"
        selected={dateValue}
        onChange={onChange}
      />
      <HiOutlineCalendar className="text-2xl" />
    </div>
  );
};

export default DatePickerField;
