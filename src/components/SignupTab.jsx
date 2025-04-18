import { useState } from "react";
import { authModalConfig } from "../config/authModalConfig";
import AuthOptions from "./AuthOptions";
import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import useForm from "../hooks/useForm";
import useFormValidation from "../hooks/useFormValidation";
import usePasswordVisibility from "../hooks/usePasswordVisibility";
import useErrorTimeout from "../hooks/useErrorTimeout";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import EmailVerificationModal from "./EmailVerificationModal";

const SignupTab = () => {

  const [authStatus, setAuthStatus] = useState({ message: "", isError: false });
  const [emailVerificationModalStatus, setEmailVerificationModalStatus] =
    useState({ message: "", isError: false });
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  //custom hooks
  const { formData, handleInput, setFormData } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {
    errors,
    validFields,
    validateOnChange,
    validateOnSubmit,
    clearErrors,
  } = useFormValidation(formData, authModalConfig.signup);

  const { showPassword, togglePasswordVisibility } = usePasswordVisibility([
    "password",
    "confirmPassword",
  ]);

  useErrorTimeout(errors, clearErrors);
  useErrorTimeout(authStatus, setAuthStatus)

  // logic functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateOnSubmit()) {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log(userCredentials);
        await sendEmailVerification(userCredentials.user);
        localStorage.setItem("pendingUserData", JSON.stringify(formData));
        setSubmittedEmail(formData.email);
        setShowVerificationModal(true);
      } catch (error) {
        const { code } = error;
        let errorMessage =
          "Failed to send verification email. Please try again.";
        if (code === "auth/email-already-in-use") {
          errorMessage = "This email is already registered.";
        } else if (code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else {
          errorMessage =
            error.message || "An unexpected error occurred. Please try again.";
        }

        setAuthStatus({ message: errorMessage, isError: true });
      }
    }
  };

  const handleResend = async () => {
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
    } catch (error) {
      setEmailVerificationModalStatus({
        message: "Failed to resend email. Please try again.",
        isError: true,
      });
      console.error("Resend error:", error);
    }
  };

  const handleStartOver = () => {
    setShowVerificationModal(false);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setAuthStatus({ message: "", isError: false });
    setEmailVerificationModalStatus({ message: "", isError: false });
    localStorage.removeItem("pendingUserData");
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center relative">
        <h2 className="text-center font-monsterrat text-2xl font-bold text-fresh-1500">
          Create an account with Playo
        </h2>
        <form
          className="mt-6 w-100 mx-auto"
          onSubmit={handleSubmit}
          noValidate
          id="signup-form"
        >
          {authModalConfig?.signup?.fields?.map((field) => (
            <div key={field.name} className="mb-6 w-full h-12">
              <label htmlFor={field.name} className="sr-only">
                {field.placeholder}
              </label>
              <div className="relative w-full">
                <input
                  type={
                    field.type === "password" && showPassword[field.name]
                      ? "text"
                      : field.type
                  }
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => {
                    handleInput(e);
                    validateOnChange(e.target.name, e.target.value);
                  }}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={`block w-full mx-auto h-10 border rounded-md p-2 ${
                    errors[field.name]
                      ? "border-red-400"
                      : "border-glacier-1100"
                  } bg-glacier-200 focus:outline-glacier-1100`}
                />
                {field.type === "password" ? (
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility(field.name)}
                    className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-fresh-1500 cursor-pointer"
                    aria-label={
                      showPassword[field.name]
                        ? "Hide password"
                        : "Show password"
                    } // for screen readers
                  >
                    {showPassword[field.name] ? (
                      <PiEyeClosedBold className="h-5 w-5" />
                    ) : (
                      <PiEyeBold className="h-5 w-5" />
                    )}
                  </button>
                ) : null}
                {errors[field.name] ? (
                  <FaCircleExclamation className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-400" />
                ) : (
                  formData[field.name] &&
                  validFields[field.name] && (
                    <FaCircleCheck className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-400" />
                  )
                )}
              </div>
              {errors[field.name] && (
                <p className="text-red-400 text-[12px] mt-[2px] tracking-wider leading-3 ml-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="border-2 border-fresh-1600 text-fresh-1600 font-bold text-[1rem] px-5 py-2 m-auto flex justify-center items-center cursor-pointer rounded-md hover:bg-glacier-1100 transition"
          >
            Create Account
          </button>
        </form>
        {showVerificationModal && (
          <EmailVerificationModal
            email={submittedEmail}
            onResend={handleResend}
            onStartOver={handleStartOver}
            emailVerificationModalStatus={emailVerificationModalStatus}
            setEmailVerificationModalStatus={setEmailVerificationModalStatus}
          />
        )}
        <div>
          <AuthOptions />
        </div>
      </div>
      {authStatus.message && (
      <div className="absolute flex items-center -bottom-0 -right-85 bg-glacier-500 p-3 text-fresh-500 text-xl font-bold rounded-md">
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
export default SignupTab;
