import { useState, useEffect } from "react";
import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";

const AuthStatusMessage = ({ authStatus }) => {
  const [isAuthMessageVisible, setIsAuthMessageVisible] = useState(false); // animation

  useEffect(() => {
    if (authStatus.message) {
      setIsAuthMessageVisible(true);
    } else {
      setIsAuthMessageVisible(false);
    }
    return () => {
      setIsAuthMessageVisible(false);
    };
  }, [authStatus.message]);

  return (
    <>
      {authStatus.message && (
        <div
          className={`absolute flex items-center bottom-3 -right-85 bg-glacier-500 p-2 text-fresh-500 text-xl font-bold rounded-md transition-transform duration-300 ease-in-out ${
            isAuthMessageVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {authStatus.isError ? (
            <p className="text-red-400">
              <FaCircleExclamation />
            </p>
          ) : (
            <p className="text-green-400">
              <FaCircleCheck />
            </p>
          )}
          <p
            className={`text-center ml-3 ${
              authStatus.isError ? "text-red-400" : "text-green-400"
            }`}
          >
            {authStatus.message}
          </p>
        </div>
      )}
    </>
  );
};
export default AuthStatusMessage;
