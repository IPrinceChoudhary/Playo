import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="flex items-center w-xl">
      <input type="text" className="h-9 w-full pl-3 pb-1 rounded-tl-2xl rounded-bl-2xl border border-r-0 focus:outline-none" placeholder="Search"/>
      <button className="flex h-9 cursor-pointer w-15 rounded-tr-2xl rounded-br-2xl border">
        <HiSearch className="w-6 h-6 m-auto items-center justify-center"/>
      </button>
    </div>
  );
};
export default SearchBar;
