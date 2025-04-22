import ClipLoader from "react-spinners/ClipLoader";

const SubmitButton = ({ label, errors, showSpinner }) => {
  return (
    <button
      type="submit"
      disabled={showSpinner && Object.keys(errors).length === 0}
      className={`border-2 border-fresh-1600 text-fresh-1600 font-bold text-[1rem] px-5 py-2 m-auto flex justify-center items-center cursor-pointer rounded-md hover:bg-glacier-1100 transition gap-2 ${
        showSpinner && "disabled:bg-gray-400 disabled:cursor-not-allowed"
      }`}
    >
      {label}{" "}
      {showSpinner && Object.keys(errors).length === 0 && (
        <ClipLoader
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </button>
  );
};
export default SubmitButton;
