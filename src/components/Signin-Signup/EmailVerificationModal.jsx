import useErrorTimeout from "../../hooks/useErrorTimeout";
import StatusMessage from "./StatusMessage";

const EmailVerificationModal = ({
  email,
  onResend,
  onStartOver,
  emailVerificationModalStatus,
  setEmailVerificationModalStatus,
}) => {
  useErrorTimeout(emailVerificationModalStatus, setEmailVerificationModalStatus);

  return (
    <div className="fixed -inset-x-80 -inset-y-3 bg-gray-500/50 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-glacier-500 rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-center font-montserrat text-2xl font-bold text-fresh-1500">
          Verify Your Email
        </h2>
        <p className="text-center mt-4 text-gray-800">
          We just sent an email to{" "}
          <span className="font-semibold">{email}</span> with a link to verify
          your account. Please check your inbox and other folders like spam or
          promotions.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onResend}
            className="border font-bold text-[1rem] px-5 py-2 rounded-md hover:bg-glacier-1100 transition cursor-pointer"
          >
            Resend Link
          </button>
          <button
            onClick={onStartOver}
            className="border font-bold text-[1rem] px-5 py-2 rounded-md bg-fresh-500 hover:bg-glacier-1100 transition cursor-pointer"
          >
            Start Over
          </button>
        </div>
      </div>
      <StatusMessage
        status={emailVerificationModalStatus}
        positionClass="bottom-3 right-3"
      />
    </div>
  );
};

export default EmailVerificationModal;