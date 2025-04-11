import { useState, useEffect } from "react";
import { authModalConfig } from "../config/authModalConfig";
import AuthOptions from "./AuthOptions";
import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";

const SignupTab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateField = (value, fieldConfig)=>{
    const errors = [];
    const fieldValue = value.trim();

    fieldConfig.validation.forEach(({rule, message, value, matchField})=>{
      if(rule === "required" && !fieldValue){
        errors.push(message);
      } else if(rule === "minLength" && fieldValue && fieldValue.length < value){
        errors.push(message);
      } else if(rule === "maxLength" && fieldValue && fieldValue.length > value){
        errors.push(message);
      } else if(rule === "pattern" && fieldValue && !value.test(fieldValue)){
        errors.push(message);
      } else if(rule === "matchField" && fieldValue !== formData[matchField]){
        errors.push(message)
      }
    })
    return errors[0] || ""
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    // real time validation
    const fieldConfig = authModalConfig.signup.fields.find((field)=>field.name === name);
    if(fieldConfig){
      const error = validateField(name, value, fieldConfig);
      setErrors((prev)=> ({...prev, [name]: error}))
    }
  };

  // const getErrorMessage = (fieldName) => {
  //   const formattedFieldError =
  //     fieldName !== "confirmPassword"
  //       ? fieldName.charAt(0).toUpperCase() + fieldName.slice(1) // capital first letter
  //       : "Confirm Password";
  //   return `${formattedFieldError} field is required`;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!authModalConfig?.signup?.fields) {
      return;
    }

    authModalConfig.signup.fields.forEach((field) => {
      const error = validateField(formData[field.name], field);
      if(error){
        newErrors[field.name] = error;
      }
    });
    setErrors(newErrors);

    // proceed if no validation errors 
    if(Object.keys(newErrors).length === 0){
      // firebase
      console.log("SignupTab", formData)
    }
  };


  useEffect(()=>{
    if(Object.keys(errors).length > 0){
      const timeOutId = setTimeout(()=>{
        setErrors({})
      }, 3000);
      return ()=> clearTimeout(timeOutId);
    }
  }, [errors])

  return (
    <div className="w-full">
      <h2 className="text-center font-monsterrat text-2xl font-bold mt-8 text-fresh-1500">
        Create an account with Playo
      </h2>
      <form
        className="mt-6 w-100 mx-auto"
        onSubmit={handleSubmit}
        noValidate
        id="signup-form"
      >
        {authModalConfig.signup.fields.map((field) => (
          <div key={field.name} className="mb-7 w-full h-12">
            <label htmlFor={field.name} className="sr-only">
              {field.placeholder}
            </label>
            <div className="relative w-full">
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInput}
                placeholder={field.placeholder}
                required={field.required}
                className={`block w-full mx-auto h-10 border rounded-md p-2 ${errors[field.name] ? "border-red-400" : "border-glacier-1100"} bg-glacier-200 focus:outline-glacier-1100`}
              />
              {errors[field.name] ? (
                <FaCircleExclamation className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-400"/>
              ) : formData[field.name] && !errors[field.name] ? (
                <FaCircleCheck className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-400"/>
              ) : null}
            </div>
            {errors[field.name] && (
              <p className="text-red-400 text-[12px] mt-[2px] tracking-wider ml-1">
                {errors[field.name]}
              </p>
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
