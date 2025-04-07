import { FcGoogle } from "react-icons/fc";
import { HiUserCircle } from "react-icons/hi2";

const AuthOptions = () => {
  return (
    <div>
      <p>Or create your account with</p>
      <div className="flex">
        <FcGoogle/>
        <HiUserCircle/>
      </div>
    </div>
  )
}
export default AuthOptions