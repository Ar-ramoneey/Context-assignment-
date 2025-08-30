import { useState } from "react";
import { FormContext } from "./FormContext";

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
  });
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      street: "",
    });
  };

  const formDataUpdate = (field, value) => {
    setFormData((prevForm) => ({ ...prevForm, [field]: value }));
  };
  const value = { formData, formDataUpdate, resetForm };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
