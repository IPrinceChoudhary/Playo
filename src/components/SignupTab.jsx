import { authModalConfig } from "../config/authModalConfig";
import AuthOptions from "./AuthOptions";
import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import useForm from "../hooks/useForm";
import useFormValidation from "../hooks/useFormValidation";
import usePasswordVisibility from "../hooks/usePasswordVisibility";
import useErrorTimeout from "../hooks/useErrorTimeout";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";

const SignupTab = () => {
  const { formData, handleInput, setFormData } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { errors, validFields, validateOnChange, validateOnSubmit, clearErrors } =
    useFormValidation(formData, authModalConfig.signup);

  const {showPassword, togglePasswordVisibility} = usePasswordVisibility([
    "password",
    "confirmPassword"
  ]);

  useErrorTimeout(errors, clearErrors);

  const [authStatus, setAuthStatus] = useState({message: "", isError: false});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateOnSubmit()) {
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        console.log(userCredentials)
        await sendEmailVerification(userCredentials.user)
        setAuthStatus({message: "Account Created Successfully!", isError: false})
        setFormData({name: "", email: "", password: "", confirmPassword: ""})
      } catch (error) {
        let errorMessage = "Failed to create account. Please try again."
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "This email is already registered.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          case "auth/weak-password":
            errorMessage = "Password is too weak. Use at least 6 characters.";
            break;
          default:
            console.error("Firebase error:", error);
        }
        setAuthStatus({ message: errorMessage, isError: true });
      }
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-center font-monsterrat text-2xl font-bold mt-8 text-fresh-1500">
        Create an account with Playo
      </h2>
      {authStatus.message && (
        <p
          className={`text-center mt-4 ${
            authStatus.isError ? "text-red-400" : "text-green-400"
          }`}
        >
          {authStatus.message}
        </p>
      )}
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
                  errors[field.name] ? "border-red-400" : "border-glacier-1100"
                } bg-glacier-200 focus:outline-glacier-1100`}
              />
              {field.type === "password" ? (
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility(field.name)}
                  className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-fresh-1500 cursor-pointer"
                  aria-label={
                    showPassword[field.name] ? "Hide password" : "Show password"
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
      <div>
        <AuthOptions />
      </div>
    </div>
  );
};
export default SignupTab;