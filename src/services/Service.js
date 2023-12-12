import "./service.css"
import Box from "./Boxes-serv/Box-ser"

export default function Service() {
  return (
    <div className="servic-content mx-5">
      <div>
        <div className="title mb-2">
          <p className="bg-white p-2 fs-5 text-secondary">خدمات</p>
        </div>
        <h1>خدمات ما را بررسی کنید</h1>
      </div>
      <div className="grid-serv mt-5">
        <Box title="لورم ایپسوم" />
        <Box title="اما همانطور که مشاهده می کنید" />
        <Box title="دردهای بزرگ" />
        <Box title="هیچکس دیگر" />
        <Box title="ذهنتان را پاک کنید" />
        <Box title="دیوار را ببینید" />
      </div>
    </div>
  )
}
