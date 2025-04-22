import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const useFirebaseAuth = () => {
  const [authStatus, setAuthStatus] = useState({ message: "", isError: false });
  const [emailVerificationModalStatus, setEmailVerificationModalStatus] =
  useState({ message: "", isError: false });
  const [showSpinner, setShowSpinner] = useState(false);

  const signup = async(email, password, formData, setSubmittedEmail, setShowVerificationModal)=>{
    setShowSpinner(true);
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
      await sendEmailVerification(userCredentials.user);
      setShowSpinner(false);
      localStorage.setItem("pendingUserData", JSON.stringify(formData));
      setSubmittedEmail(email);
      setShowVerificationModal(true);
    } catch (error) {
      const { code } = error;
      let errorMessage = "Failed to send verification email. Please try again.";
      if (code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered.";
      } else if (code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      } else {
        errorMessage = error.message || "An unexpected error occurred. Please try again.";
      }
      setAuthStatus({ message: errorMessage, isError: true });
      setShowSpinner(false);
    }
  }

  const resendVerification = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        setEmailVerificationModalStatus({
          message: "Verification email resent.",
          isError: false,
        });
      } else {
        setEmailVerificationModalStatus({
          message: "No user found. Please start over.",
          isError: true,
        });
      }
    } catch {
      setEmailVerificationModalStatus({
        message: "Too many requests. Please try again later.",
        isError: true,
      });
    }
  };

  return {authStatus, emailVerificationModalStatus, showSpinner, signup, resendVerification}
}
export default useFirebaseAuth