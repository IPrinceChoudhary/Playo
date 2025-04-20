import { authModalConfig } from "../config/authModalConfig";
import AuthOptions from "./AuthOptions";
import useForm from "../hooks/useForm";
import useFormValidation from "../hooks/useFormValidation";
import useErrorTimeout from "../hooks/useErrorTimeout";
import usePasswordVisibility from "../hooks/usePasswordVisibility";
import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

const SigninTab = () => {
  const { formData, handleInput } = useForm({
    email: "",
    password: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateOnSubmit()) {
      console.log("SigninTab", formData);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-center font-montserrat text-2xl font-bold mt-8 text-fresh-1500">
        Sign in if you have a Playo account
      </h2>
      <form
        className="mt-6 w-100 mx-auto"
        noValidate
        id="signin-form"
        onSubmit={handleSubmit}
      >
        {authModalConfig?.signin?.fields?.map((field) => (
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
          Sign In
        </button>
        <button className="text-fresh-1100 cursor-pointer mt-5 flex m-auto underline underline-offset-3">forgot password?</button>
      </form>
      <div>
        <AuthOptions />
      </div>
    </div>
  );
};
export default SigninTab;
