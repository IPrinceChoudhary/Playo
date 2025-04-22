import { RxCross2 } from "react-icons/rx";
import SigninTab from "./SigninTab";
import SignupTab from "./SignupTab";

const SigninSignupModal = ({ onclose, authMode, setAuthMode }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/10 backdrop-blur-md z-10"></div>
      <section className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[95%] w-[50%] shadow-xl bg-glacier-500 rounded-xl transition-all z-20">
        {/* close button  */}
        <button
          className="h-8 w-8 absolute -right-3 -top-3 rounded-full flex justify-center items-center cursor-pointer bg-fresh-500 hover:bg-fresh-1500"
          onClick={() => onclose(false)}
        >
          <RxCross2 className="h-full w-full text-glacier-200 bg-fresh-1600 rounded-full hover:bg-fresh-1500 transition-all" />
        </button>

        {/* tabs */}
        <div className="flex h-10 gap-1">
          <button
            className={`font-bold text-lg w-1/2 border border-fresh-1600 rounded-bl-xl rounded-tr-xl cursor-pointer ${
              authMode === "signin" ? "bg-fresh-300" : "bg-glacier-200"
            }`}
            onClick={() => setAuthMode("signin")}
          >
            Sign In
          </button>
          <button
            className={`font-bold text-lg w-1/2 border border-fresh-1600 rounded-tl-xl rounded-br-xl cursor-pointer ${
              authMode !== "signin" ? "bg-fresh-300" : "bg-glacier-200"
            }`}
            onClick={() => setAuthMode("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* content */}
        <div className="w-full h-[95%]">
          {authMode === "signin" ? <SigninTab /> : <SignupTab />}
        </div>
      </section>
    </>
  );
};
export default SigninSignupModal;
