import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// components
import UserData from "../components/templates/Profile/UserData";
import ProfileLinks from "../components/templates/Profile/ProfileLinks";
import BottomNavigation from "../components/modules/BottomNavigation/BottomNavigation";

const ProfilePage = () => {
  // ** cookies
  const [cookies] = useCookies();

  // ** navigate
  const navigate = useNavigate();

  // ** useEffect
  useEffect(() => {
    if (!cookies.User) {
      navigate("/signup", { replace: true });
    }
  }, []);

  return (
    <div className="bg-primary w-full px-6 py-6 h-screen">
      <h4 className="text-white mb-4">Profile</h4>
      <UserData />
      <ProfileLinks />
      <BottomNavigation />
    </div>
  );
};

export default ProfilePage;
