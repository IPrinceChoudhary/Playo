import { useEffect } from "react";

const useErrorTimeout = (statusOrErrors, clearStatusOrErrors, timeout = 3000) => {
  useEffect(() => {
    let timeoutId;

    if(statusOrErrors && typeof statusOrErrors === "object"){

    // Handle single status object (authStatus and emailVerificationModalStatus)
      if("message" in statusOrErrors && statusOrErrors.message){
        timeoutId = setTimeout(()=>{
          clearStatusOrErrors({message: "", isError: false});
        }, timeout)
      }
      // Handle object-based errors (validation errors)
      else if (Object.keys(statusOrErrors).length > 0) {
        timeoutId = setTimeout(() => {
          clearStatusOrErrors({});
        }, timeout);
      }
    }
    return () => clearTimeout(timeoutId);

  }, [statusOrErrors, clearStatusOrErrors, timeout]);
};

export default useErrorTimeout;