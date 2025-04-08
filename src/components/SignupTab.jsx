import { useState } from "react";
import { authModalConfig } from "../config/authModalConfig";
import AuthOptions from "./AuthOptions";

const SignupTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    authModalConfig?.signup?.fields?.forEach((field) => {
      if (field?.required && !formData[field?.name].trim()) {
        newErrors[field?.name] = `${
          field?.name !== "confirmPassword"
            ? field?.name?.charAt(0)?.toUpperCase() +
              field?.name?.slice(1) +
              " " +
              "field is required"
            : "Confirm Password field is required"
        }`;
      } // capital first letter
    });
    setErrors(newErrors);
  };

  return (
    <div>
      <h2 className="text-center font-monsterrat text-2xl font-bold mt-10 text-fresh-1500">
        Create an account with Playo
      </h2>
      <form
        className="mt-8"
        onSubmit={handleSubmit}
        noValidate
        id="signup-form"
      >
        {authModalConfig?.signup?.fields?.map((field) => (
          <div
            key={field?.name}
            className="flex flex-col items-center justify-center mb-7"
          >
            <input
              type={field?.type}
              name={field?.name}
              value={formData[field?.name] || ""}
              onChange={handleInput}
              placeholder={field?.placeholder}
              required={field?.required}
              className="w-100 h-10 border p-2 focus:outline-none bg-glacier-200"
            />
            {errors[field?.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field?.name]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="border font-bold text-[1rem] w-35 py-2 m-auto flex justify-center items-center cursor-pointer"
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
