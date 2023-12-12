import "./team.css"
import Card from "./Card"
export default function Team() {
  return (
    <div className="team-container m-4">
      <div className="title mb-2 mt-5 text-end">
        <p className="bg-white p-2 fs-5 text-secondary">تیم</p>
        <h1 className="h1-port mb-5">تیم ما را بررسی کنید</h1>
      </div>

      <div className="d-flex justify-content-lg-between flex-wrap justify-content-center">
       <Card img='imgs/team-1.jpg' name='والتر وایت' job='مدیر ارشد اجرایی'/>
       <Card img='imgs/team-2.jpg' name='سارا جونسون' job='مدیر تولید'/>
       <Card img='imgs/team-3.jpg' name='ویلیام اندرسون' job='CTO'/>
       <Card img='imgs/team-4.jpg' name='آماندا جیسون' job='حسابدار'/>
      </div>
    </div>
  )
}
