import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// component
import Button from "../../modules/Button/Button";

// type
interface LogoutPopupProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutPopup = ({ setIsOpen }: LogoutPopupProps) => {
  // ** cookie
  const [, , removeCookie] = useCookies();

  // navigation
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeCookie("User", { path: "/" });
    navigate("/signup", { replace: true });
  };

  return (
    <>
      <div className="absolute transition-all duration-200 bg-primary py-4 px-6 rounded-t-3xl w-full right-0 left-0 bottom-0 z-50">
        <div className="w-10 h-0.5 m-auto bg-slate-100 rounded-xl"></div>
        <div className="text-center clear-start mt-5 mb-16">
          <h3 className="mx-auto w-full text-xl text-red-600 font-semibold mb-3">
            Log out
          </h3>
          <p className="text-left text-slate-100">
            Are you sure you want to log out?
          </p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Button
            label="Cancel"
            onClick={() => setIsOpen(false)}
            customStyle="text-blue-500 bg-white hover:shadow-white "
          />
          <Button
            label="Yes, log out!"
            onClick={logoutHandler}
            customStyle="text-primary bg-blue-500 hover:shadow-blue-500"
          />
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-200 opacity-65 z-40"></div>
    </>
  );
};

export default LogoutPopup;
