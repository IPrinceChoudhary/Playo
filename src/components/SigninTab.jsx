import { authModalConfig } from "../config/authModalConfig";

const SigninTab = () => {
  return (
    <div>
      <h2>If you have a Playo account, please enter your credentials.</h2>
      <form>
        {authModalConfig?.signin?.fields?.map((field) => (
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
          Sign In
        </button>
      </form>
    </div>
  );
};
export default SigninTab;
