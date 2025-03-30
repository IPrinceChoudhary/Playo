import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Settings from "./Settings"

const Header = () => {
  return (
    <div className="flex items-center bg-bg justify-between">
      <div className="flex items-center">
        <FaBars className="h-6 w-6" />
        <Logo />
      </div>
      <SearchBar />
      <div>
        <Settings/>
      </div>
    </div>
  );
};
export default Header;
