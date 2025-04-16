import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const AuthOptions = () => {
  const [tooltip, setToolTip] = useState(null);

  const showToolTip = (id) => setToolTip(id);
  const hideToolTip = () => setToolTip(null);

  return (
    <section className="mt-6 mx-40">
      <hr />
      <p className="text-center text-fresh-1600 mt-3">
        Or create your account with
      </p>
      <div className="relative flex justify-center items-center mt-3 gap-8">
        <button
          onMouseEnter={() => showToolTip("google")}
          onMouseLeave={hideToolTip}
          aria-label="Sign in with Google Account"
          className="w-12 h-12 cursor-pointer p-1 border border-black rounded-full bg-glacier-900 hover:bg-glacier-1100 transition-all"
        >
          <FcGoogle className="w-full h-full" />
        </button>
        {tooltip === "google" && (
          <div className="absolute z-10 bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2">
            <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md w-50 text-center">
              Sign in with Google Account
            </div>
          </div>
        )}
        <button
          onMouseEnter={() => showToolTip("github")}
          onMouseLeave={hideToolTip}
          aria-label="Sign in with Github Account"
          className="w-12 h-12 cursor-pointer p-1 border border-black rounded-full bg-glacier-900 hover:bg-glacier-1100 transition-all"
        >
          <FaGithub className="w-full h-full" />
        </button>
        {tooltip === "github" && (
          <div className="absolute z-10 bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2">
            <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md w-50 text-center">
              Sign in with Github Account
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default AuthOptions;
