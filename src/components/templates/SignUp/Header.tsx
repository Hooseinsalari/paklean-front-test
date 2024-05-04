import { useNavigate } from "react-router-dom";

// icons
import { FaArrowLeft } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();

  // ** handler
  const navigateHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="flex items-center text-white mb-4">
      <button onClick={navigateHandler} className="text-lg mb-1 mr-4">
        <FaArrowLeft />
      </button>
      <span>Sign Up</span>
    </div>
  );
};

export default Header;
