interface ButtonProps {
  customStyle: string;
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick, customStyle }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`primary__btn ${customStyle}`}>
      {label}
    </button>
  );
};

export default Button;
