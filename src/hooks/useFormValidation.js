import { useState } from "react";

const useFormValidation = (formData, config) => {
  const [errors, setErrors] = useState({});
  const [validFields, setValidFields] = useState({});

  const validateField = (value, fieldConfig) => {
    const fieldErrors = [];
    const fieldValue = value.trim();
    let isValid = true;

    fieldConfig.validation.forEach(({ rule, message, value }) => {
      if (rule === "required" && !fieldValue) {
        fieldErrors.push(message);
        isValid = false;
      } else if (
        rule === "minLength" &&
        fieldValue &&
        fieldValue.length < value
      ) {
        fieldErrors.push(message);
        isValid = false;
      } else if (
        rule === "maxLength" &&
        fieldValue &&
        fieldValue.length > value
      ) {
        fieldErrors.push(message);
        isValid = false;
      } else if (rule === "pattern" && fieldValue && !value.test(fieldValue)) {
        fieldErrors.push(message);
        isValid = false;
      } else if (rule === "match" && fieldValue !== formData[value]) {
        fieldErrors.push(message);
        isValid = false;
      }
    });
    console.log(fieldErrors);
    return { error: fieldErrors[0] || "", isValid };
  };

  const validateOnChange = (name, value) => {
    const fieldConfig = config.fields.find((field) => field.name === name);
    if (fieldConfig) {
      const { error, isValid } = validateField(value, fieldConfig);
      setErrors((prev) => ({ ...prev, [name]: error }));
      setValidFields((prev) => ({ ...prev, [name]: isValid }));
    }
  };

  const validateOnSubmit = () => {
    const newErrors = {};

    config.fields.forEach((field) => {
      const { error } = validateField(formData[field.name], field);
      if (error) {
        newErrors[field.name] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearErrors = () => {
    setErrors({});
  };

  return {errors, validFields, setErrors, validateOnChange, validateOnSubmit, clearErrors };
};

export default useFormValidation;
