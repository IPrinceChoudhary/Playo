import { useState } from "react";
import AuthModal from "./AuthModal";

const SigninSignup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const openModal = (mode) => {
    setIsModalOpen(true);
    setAuthMode(mode);
  };

  return (
    <div className="flex justify-evenly items-center w-[15rem]">
      <button
        className="border px-5 py-2 rounded-md hover:bg-hover transition cursor-pointer"
        onClick={() => openModal("signin")}
      >
        Sign In
      </button>
      <button
        className="border px-5 py-2 rounded-md bg-primary-light hover:bg-hover transition cursor-pointer"
        onClick={() => openModal("signup")}
      >
        Sign Up
      </button>

      {isModalOpen && (
        <AuthModal
          authMode={authMode}
          setAuthMode={setAuthMode}
          onclose={setIsModalOpen}
        />
      )}
    </div>
  );
};
export default SigninSignup;
