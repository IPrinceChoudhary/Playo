import { useState } from "react";
import AuthModal from "./AuthModal";

const SigninSignup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="flex justify-evenly items-center w-[15rem]">
      <button
        className="border px-5 py-2 rounded-md hover:bg-hover transition cursor-pointer"
        onClick={() => {
          setIsModalOpen(true)
          setIsSignInOpen(true)
          setIsSignUpOpen(false)
          }}
      >
        Sign In
      </button>
      <button
        className="border px-5 py-2 rounded-md bg-primary-light hover:bg-hover transition cursor-pointer"
        onClick={() => {
          setIsModalOpen(true)
          setIsSignInOpen(false)
          setIsSignUpOpen(true)
          }}
      >
        Sign Up
      </button>

      {isModalOpen && <AuthModal onclose={() => {setIsModalOpen(false)}} openSignIn={isSignInOpen} openSignUp={isSignUpOpen} setIsSignInOpen={setIsSignInOpen} setIsSignUpOpen={setIsSignUpOpen}/>}
    </div>
  );
};
export default SigninSignup;
