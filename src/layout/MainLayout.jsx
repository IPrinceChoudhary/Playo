import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const mainLayout = () => {
  return (
    <div className="relative h-screen">
      <Header/>
      <Sidebar/>
    </div>
  )
}
export default mainLayout