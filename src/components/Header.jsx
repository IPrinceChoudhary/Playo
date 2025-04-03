import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Settings from "./Settings"
import SigninSignup from "./SigninSignup";

const Header = () => {
  return (
    <header className="flex items-center bg-bg-medium justify-between px-5 py-2">
      <div className="flex items-center ml-5">
        <FaBars className="h-6 w-6 mr-5" />
        <Logo />
      </div>
      <SearchBar />
      <div className="flex items-center justify-between mr-5 w-[22rem]">
        <Settings/>
        <SigninSignup/>
      </div>
    </header>
  );
};
export default Header;
