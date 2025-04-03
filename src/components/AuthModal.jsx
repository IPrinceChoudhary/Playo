import { RxCross2 } from "react-icons/rx";

const AuthModal = ({
  onclose,
  openSignIn,
  openSignUp,
  setIsSignInOpen,
  setIsSignUpOpen,
}) => {
  return (
    <section className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[95%] w-[50%] shadow-xl bg-gray-100 transition-all">
      <button
        className="h-8 w-8 absolute -right-3 -top-3 rounded-full flex justify-center items-center cursor-pointer bg-primary-light"
        onClick={onclose}
      >
        <RxCross2 className="h-full w-full" />
      </button>
      <div className="flex border h-10 gap-1">
        <button
          className="w-1/2 border cursor-pointer"
          onClick={() => {
            setIsSignInOpen(true);
            setIsSignUpOpen(false);
          }}
        >
          Sign In
        </button>
        <button
          className="w-1/2 border cursor-pointer"
          onClick={() => {
            setIsSignInOpen(false);
            setIsSignUpOpen(true);
          }}
        >
          Sign Up
        </button>
      </div>
      {openSignIn && (
        <>
          <h2>If you have a Playo account, please enter your credentials.</h2>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div></div>
          <div></div>
        </>
      )}
      {openSignUp && (
        <>
          <h2>Create an account with Playo.</h2>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div></div>
          <div></div>
        </>
      )}
    </section>
  );
};
export default AuthModal;
