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

  const handleInput = (e)=>{
    const {name, value} = e.target;
    setFormData((prev)=>{
      return {...prev, [name]: value}
    })
  }

  return (
    <div>
      <h2 className="text-center font-monsterrat text-2xl font-bold mt-10 text-fresh-1500">
        Create an account with Playo
      </h2>
      <form className="mt-8">
        {authModalConfig?.signup?.fields?.map((field) => (
          <div
            key={field?.name}
            className="flex items-center justify-center mb-7"
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
          </div>
        ))}
        <button type="submit" className="border">
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
