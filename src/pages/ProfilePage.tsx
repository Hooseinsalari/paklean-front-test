// components
import UserData from "../components/templates/Profile/UserData";
import ProfileLinks from "../components/templates/Profile/ProfileLinks";
import BottomNavigation from "../components/modules/BottomNavigation/BottomNavigation";

const ProfilePage = () => {
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
