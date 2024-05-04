import Header from "../components/templates/EditProfile/Header";
import EditProfileForm from "../components/templates/EditProfile/EditProfileForm";

const EditProfilePage = () => {
  return (
    <div className="bg-primary w-full px-4 py-6 h-screen">
      <Header />

      <EditProfileForm />
    </div>
  );
};

export default EditProfilePage;
