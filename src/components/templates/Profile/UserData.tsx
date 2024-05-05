import { useCookies } from "react-cookie";

// icon
import { HiOutlineUserCircle } from "react-icons/hi2";

const UserData = () => {
  const [cookies] = useCookies(["User"]);
  const { User } = cookies;

  return (
    <div className="flex items-center justify-center flex-col text-white">
      <HiOutlineUserCircle className="text-9xl" />
      <h4 className="mt-2">{User?.username}</h4>
      <h4 className="text-xs mt-1">{User?.email}</h4>
    </div>
  );
};

export default UserData;
