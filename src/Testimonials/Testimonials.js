import "./testimonials.css"

export default function Testimonials() {
  return (
    <div className="testimonials-container d-flex justify-content-center flex-column text-white text-center">
      <img src="imgs/testimonials-5.jpg" className="img-testimonials mx-auto"/>
      <div>
        <h5 className="mt-2 fs-4 fs-lg-5">جان لارسون</h5>
        <p className="fs-5 fs-lg-6">کارآفرین</p>
      </div>
      <div className="d-flex flex-row-reverse w-75 mx-auto text-end lh-lg my-3">
        <i className="bi bi-quote fs-3 mb-2"></i>
        <p className="fs-5 fs-lg-6">
          زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم
          هستند ، چیزهایی که هیچ کدام از آنها نخواهد آمد ، و زحمت کسانی که
          کمترین زمان را دارند ، زحماتی که من کشیدم ، و عشق به کسانی که کمترین
          افراد خواهند بود.
        </p>
      </div>

      <div className="dots">
        <span></span>
        <span className="bg-warning"></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
