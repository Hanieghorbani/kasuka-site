import Box from "./Boxs/Box"
import "./Header.css"
import "./Navbar/Navbar"
import Navbar from "./Navbar/Navbar"


export default function Header() {
  return (
    <div className="header">
    <div className="gradient">
      <Navbar />
      <div className="content d-flex justify-content-center flex-column align-items-center text-white">
        <h1 className="">راه حل های قدرتمند دیجیتال با</h1>
        <h4 className="text-warning">Kasuka</h4>
        <p className="fs-4">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
      </div>

      <div className="d-flex mx-auto w-75 justify-content-between mb-5">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
      
    </div>
  )
}
