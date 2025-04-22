import { FaCircleExclamation, FaCircleCheck } from "react-icons/fa6";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

const InputFields = ({
  field,
  formData,
  errors,
  validFields,
  showPassword,
  togglePasswordVisibility,
  handleInput,
  validateOnChange,
}) => {
  return (
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
  );
};
export default InputFields;
