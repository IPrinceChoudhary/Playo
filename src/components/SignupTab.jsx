import { authModalConfig } from "../config/authModalConfig";

const SignupTab = () => {
  return (
    <div>
      <h2>Create an account with Playo.</h2>
      <form>
        {authModalConfig?.signup?.fields?.map((field) => (
          <div key={field.name}>
            <input
              type={field?.type}
              name={field?.name}
              placeholder={field?.placeholder}
              required={field?.required}
              className="w-20 h-10"
            />
          </div>
        ))}
        <button type="submit" className="">
          Create Account
        </button>
      </form>
    </div>
  );
};
export default SignupTab;
