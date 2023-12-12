import "./contact.css"
import ContactInfo from "./Conctact-info"
export default function Contact() {
  return (
    <div className="contact-container mx-3">
      <div className="title mb-2 mt-5 text-end">
        <p className="bg-white p-2 fs-5 text-secondary">تماس با ما</p>
        <h1 className="h1-port mb-5">با ما تماس بگیرید</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
        frameborder="0"
        allowfullscreen=""
        className="w-100"
      ></iframe>

      <div className="row mt-5">
        <div className=" me-4 col-lg-4">
          <ContactInfo title='مکان' info='تهران' icon='bi bi-geo-alt'/>
          <ContactInfo title='ایمیل' info='hnie.ghorbani@gmail.com' icon='bi bi-envelope'/>
          <ContactInfo title='شماره تماس' info='09121234567' icon='bi bi-phone'/>
        </div>

        <div className="col-lg-7 input-box d-flex flex-column mx-2 mx-lg-0">
          <div className="row row-input">
            <div className="col-lg-6">
              <input
                type="text"
                placeholder="نام"
                className="w-100 form-control"
              />
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                placeholder="ایمیل"
                className="w-100 form-control"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="عنوان"
            className="w-100 form-control"
          />
          <textarea
            placeholder="پیام"
            rows="5"
            className="w-100 form-control"
          ></textarea>
          <button className="btn btn-warning align-self-center w-auto py-1 px-4 fs-6 mt-4">
            ارسال پیام
          </button>
        </div>
      </div>
    </div>
  )
}
