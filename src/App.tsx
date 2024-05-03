import { Routes, Route } from "react-router-dom";

// pages
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignUpPage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
