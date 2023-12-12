import "./footer.css"
import "./FooterCom"
import FooterCom from "./FooterCom"
export default function Footer() {
  return (
    <div className=" text-white footer-container">
      <div className="row pt-5 px-4 px-lg-5 gy-5 gy-lg-0">
        <div className="col-lg-3 info-footer">
          <div className="logo-footer d-flex flex-row-reverse justify-content-end align-items-center">
            <h2>KASUKA</h2>
            <img src="imgs/logo-kasuka.png" className="w-25" />
          </div>
          <ul>
            <li>تهران </li>
            <li>تلفن: 09121234567</li>
            <li>ایمیل: hnie.ghorbani@gmail.com</li>
          </ul>
          <div className="">
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-skype"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
        <div className="col-lg-2 links">
          <FooterCom title='لینک های مفید' li1='خانه' li2='درباره ما' li3='خدمات' li4='شرایط استفاده از خدمات' li5='سیاست حفظ حریم خصوصی'/>
        </div>
        <div className="col-lg-3 links">
          <FooterCom title='خدمات ما' li1='طراحی وب سایت' li2='توسعه وب' li3='مدیریت تولید' li4='بازاریابی' li5='طراحی گرافیک'/>
        </div>
        <div className="col-lg-4 col4-footer">
          <h5>خبرنامه ما</h5>
          <p>
            با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
            بود
          </p>
          <div>
            <input type="email" />
            <button className="">دنبال کردن</button>
          </div>
        </div>
      </div>
      <div className="footer-b mt-5 text-center pt-4">
        <h6>تمامی حقوق برای سایت <span className="text-warning">kasuka</span> محفوظ است.</h6>
        <p>طراحی شده توسط <span className="text-warning">حانیه</span></p>
      </div>
    </div>
  )
}
