// components
import Header from "../components/templates/SignUp/Header";
import SignUpForm from "../components/templates/SignUp/SignUpForm";

const SignupPage = () => {
  return (
    <div className="bg-primary w-full px-4 py-6 h-screen">
      <Header />

      <SignUpForm />
    </div>
  );
};

export default SignupPage;
