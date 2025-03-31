import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Settings from "./Settings"
import SigninSignup from "./SigninSignup";

const Header = () => {
  return (
    <div className="flex items-center bg-bg-medium justify-between">
      <div className="flex items-center">
        <FaBars className="h-6 w-6" />
        <Logo />
      </div>
      <SearchBar />
      <div className="flex items-center justify-between">
        <Settings/>
        <SigninSignup/>
      </div>
    </div>
  );
};
export default Header;
