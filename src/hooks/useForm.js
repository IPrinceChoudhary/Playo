// formData and the handleInput logic

import { useState } from "react"

const useForm = (initialState)=>{
  const [formData, setFormData] = useState(initialState);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    })
  }
  const resetForm = () => {
    setFormData(initialState);
  };
  return {formData, handleInput, resetForm, setFormData}
}

export default useForm