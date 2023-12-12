import "./portfolio.css"

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div
        className="title mb-2 me-5"
      >
        <p className="bg-white p-2 fs-5 text-secondary">نمونه کارها</p>
        <h1 className="h1-port">نمونه کارها ما را بررسی کنید</h1>
      </div>

      <ul>
        <li className="bg-warning">همه</li>
        <li>برنامه</li>
        <li>محصول</li>
        <li>اینترنت</li>
      </ul>

      <div className="grid-portfolio container mb-5">
        <img src="imgs/portfolio-1.jpg" />
        <img src="imgs/portfolio-2.jpg" />
        <img src="imgs/portfolio-3.jpg" />
        <img src="imgs/portfolio-4.jpg" />
        <img src="imgs/portfolio-5.jpg" />
        <img src="imgs/portfolio-6.jpg" />
        <img src="imgs/portfolio-7.jpg" />
        <img src="imgs/portfolio-8.jpg" />
        <img src="imgs/portfolio-9.jpg" />
      </div>
    </div>
  )
}
