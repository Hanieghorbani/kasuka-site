import Box from "./Boxs/Box"
import "./Header.css"
import "./Navbar/Navbar"
import Navbar from "./Navbar/Navbar"

export default function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="content d-flex justify-content-center flex-column align-items-center text-white">
        <h1 className="">راه حل های قدرتمند دیجیتال با</h1>
        <h4 className="text-warning">Kasuka</h4>
        <p className="fs-4">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
      </div>

      <div className="d-flex mx-auto w-75 justify-content-between mb-5 boxs-header">
        <Box title="منابع و اطلاعات" icon='bi bi-graph-up'/>
        <Box title="متن نمایشی" icon='bi bi-menu-button-wide-fill '/>
        <Box title="نمودار کیفی" icon='bi bi-bar-chart-line-fill'/>
        <Box title="نمونه کارها" icon='bi bi-grid-1x2-fill'/>
        <Box title="اطلاعات ذخیره شده" icon='bi bi-calendar '/>
      </div>
    </div>
  )
}
