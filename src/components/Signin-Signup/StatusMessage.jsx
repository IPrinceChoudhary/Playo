import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";

const StatusMessage = ({ status, positionClass}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (status.message) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    return () => {
      setIsVisible(false);
    };
  }, [status.message]);

  if (!status.message) return null;

  return (
    <div
      className={`absolute flex items-center bg-glacier-500 p-2 text-fresh-500 text-xl font-bold rounded-md transition-transform duration-300 ease-in-out ${positionClass} ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {status.isError ? (
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
          status.isError ? "text-red-400" : "text-green-400"
        }`}
      >
        {status.message}
      </p>
    </div>
  );
};

export default StatusMessage;