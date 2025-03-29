import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const mainLayout = () => {
  return (
    <div className="mx-5 my-1">
      <Header/>
      <Sidebar/>
    </div>
  )
}
export default mainLayout