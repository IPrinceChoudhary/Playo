import { useState } from "react";

const usePasswordVisibility = (fields) => {

  const initialState = fields.reduce((acc, field) => {
    acc[field] = false;
    return acc;
  }, {});
  
  const [showPassword, setShowPassword] = useState(initialState);
  
  const togglePasswordVisibility = (fieldName) => {
    setShowPassword((prev) => ({ ...prev, [fieldName]: !prev[fieldName] }));
  };
  
  return { showPassword, togglePasswordVisibility };
};
export default usePasswordVisibility;
