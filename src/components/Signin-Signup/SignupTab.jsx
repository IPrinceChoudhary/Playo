import { useState } from "react";
import { authModalConfig } from "../../config/authModalConfig";
import AuthOptions from "./AuthOptions";
import useForm from "../../hooks/useForm";
import useFormValidation from "../../hooks/useFormValidation";
import usePasswordVisibility from "../../hooks/usePasswordVisibility";
import useErrorTimeout from "../../hooks/useErrorTimeout";
import EmailVerificationModal from "./EmailVerificationModal";
import InputFields from "./InputFields";
import SubmitButton from "./SubmitButton";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import StatusMessage from "./StatusMessage";
import FormWrapper from "./FormWrapper";

const SignupTab = () => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  //custom hooks
  const { formData, handleInput, setFormData } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {
    errors,
    validFields,
    validateOnChange,
    validateOnSubmit,
    clearErrors,
  } = useFormValidation(formData, authModalConfig.signup);

  const {
    showPassword,
    togglePasswordVisibility,
    setShowPassword,
    initialState,
  } = usePasswordVisibility(["password", "confirmPassword"]);

  const {
    authStatus,
    setAuthStatus,
    emailVerificationModalStatus,
    setEmailVerificationModalStatus,
    showSpinner,
    signup,
    resendVerification,
  } = useFirebaseAuth();

  useErrorTimeout(errors, clearErrors);
  useErrorTimeout(authStatus, setAuthStatus);

  // logic functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateOnSubmit()) {
      await signup(
        formData.email,
        formData.password,
        formData,
        setSubmittedEmail,
        setShowVerificationModal
      );
    }
  };

  const handleStartOver = () => {
    setShowVerificationModal(false);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setAuthStatus({ message: "", isError: false });
    setEmailVerificationModalStatus({ message: "", isError: false });
    setShowPassword(initialState);
    localStorage.removeItem("pendingUserData");
  };

  return (
    <>
      <FormWrapper
        title="Create an account with Playo"
        onSubmit={handleSubmit}
        formId="signup-form"
      >
        {authModalConfig?.signup?.fields?.map((field) => (
          <InputFields
            key={field?.name}
            field={field}
            formData={formData}
            errors={errors}
            validFields={validFields}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
            handleInput={handleInput}
            validateOnChange={validateOnChange}
          />
        ))}
        <SubmitButton
          label="Create Account"
          errors={errors}
          showSpinner={showSpinner}
        />
      </FormWrapper>
      {showVerificationModal && (
        <EmailVerificationModal
          email={submittedEmail}
          onResend={resendVerification}
          onStartOver={handleStartOver}
          emailVerificationModalStatus={emailVerificationModalStatus}
          setEmailVerificationModalStatus={setEmailVerificationModalStatus}
        />
      )}
      <div>
        <AuthOptions />
      </div>
      <StatusMessage status={authStatus} positionClass="bottom-3 -right-85" />
    </>
  );
};

export default SignupTab;
