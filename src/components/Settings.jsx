import { BsThreeDotsVertical } from "react-icons/bs";

const Settings = () => {
  return (
    <div>
      <button className="cursor-pointer h-10 w-10 rounded-full flex justify-center items-center hover:bg-hover transition">
        <BsThreeDotsVertical className="w-7 h-7"/>
      </button>
    </div>
  );
};
export default Settings;
