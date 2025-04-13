import { useEffect } from "react";

const useErrorTimeout = (errors, clearErrors, timeout = 3000) => {
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timeoutId = setTimeout(() => {
        clearErrors();
      }, timeout);
      return () => clearTimeout(timeoutId);
    }
  }, [errors, clearErrors, timeout]);
};

export default useErrorTimeout;