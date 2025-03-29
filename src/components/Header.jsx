import { FaBars } from "react-icons/fa6";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center">
      <FaBars className="h-6 w-6" />
      <Logo />
      <SearchBar />
    </div>
  );
};
export default Header;
