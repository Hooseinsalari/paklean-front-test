import { useState } from "react";
import { Link } from "react-router-dom";

// icon
import {
  AiOutlineUser,
  AiOutlineSecurityScan,
  AiOutlineWallet,
} from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";

// component
import LogoutPopup from "./LogoutPopup";

const ProfileLinks = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-start mt-8 ">
      <Link
        to="/edit-profile"
        className="flex items-center gap-x-6 mt-6 text-white w-full opacity-80 hover:opacity-100 transition duration-150"
      >
        <AiOutlineUser className="text-2xl" />
        <span className="text-sm mt-1 font-semibold tracking-wider">
          Edit Profile
        </span>
      </Link>
      <Link
        to="/"
        className="flex items-center gap-x-6 mt-6 text-white w-full opacity-80 hover:opacity-100 transition duration-150"
      >
        <AiOutlineWallet className="text-2xl" />
        <span className="text-sm mt-1 font-semibold tracking-wider">
          Payment
        </span>
      </Link>
      <Link
        to="/"
        className="flex items-center gap-x-6 mt-6 text-white w-full opacity-80 hover:opacity-100 transition duration-150"
      >
        <AiOutlineSecurityScan className="text-2xl" />
        <span className="text-sm mt-1 font-semibold tracking-wider">
          Security
        </span>
      </Link>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-x-6 mt-6 text-red-500 w-full opacity-80 hover:opacity-100 transition duration-150"
      >
        <RiLogoutBoxRLine className="text-2xl" />
        <span className="text-sm mt-1 font-semibold tracking-wider">
          Logout
        </span>
      </button>

      {isOpen ? <LogoutPopup setIsOpen={setIsOpen} /> : null}
    </div>
  );
};

export default ProfileLinks;
