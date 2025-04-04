import { RxCross2 } from "react-icons/rx";
import SigninTab from "./SigninTab";
import SignupTab from "./SignupTab";

const AuthModal = ({ onclose, authMode, setAuthMode }) => {
  return (
    <section className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[95%] w-[50%] shadow-xl bg-gray-100 transition-all">
      {/* close button  */}
      <button
        className="h-8 w-8 absolute -right-3 -top-3 rounded-full flex justify-center items-center cursor-pointer bg-primary-light"
        onClick={() => onclose(false)}
      >
        <RxCross2 className="h-full w-full" />
      </button>

      {/* tabs */}
      <div className="flex border h-10 gap-1">
        <button
          className="w-1/2 border cursor-pointer"
          onClick={() => setAuthMode("signin")}
        >
          Sign In
        </button>
        <button
          className="w-1/2 border cursor-pointer"
          onClick={() => setAuthMode("signup")}
        >
          Sign Up
        </button>
      </div>

      {/* content */}
      <div className="">
        {authMode === "signin" ? <SigninTab /> : <SignupTab />}
      </div>
    </section>
  );
};
export default AuthModal;
