// icons
import { FaTelegram, FaUser } from "react-icons/fa6";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 shadow-xl shadow-slate-100 p-4">
      <div className="absolute text-5xl text-blue-500 bg-primary rounded-full bottom-16 shadow-md shadow-blue-600 left-0 right-0 m-auto w-fit">
        <FaTelegram />
      </div>

      <div>
        <div className="flex flex-col justify-between text-center items-end text-blue-500">
          <FaUser className="text-xl w-fit mr-3" />
          <span className="text-sm mt-1.5">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
