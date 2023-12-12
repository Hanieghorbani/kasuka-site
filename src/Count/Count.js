import "./Count.css"
import CardCount from "./card-count/card-count"

export default function Count() {
  return (
    <div className="row mx-3 count-container flex-lg-row-reverse">
      <div className="col-lg-5">
        <img src="imgs/counts-img.jpg" className="w-100 img-count" />
      </div>
      <div className="col-lg-7 count-content d-flex justify-content-between flex-column py-5">
        <h1 className="">شایسته ترین لذت را به هر حال ارائه می دهد</h1>
        <p className="">
          خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به
          آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
        </p>
        <div className="d-flex flex-wrap">
        <CardCount count={65}/>
          <CardCount count={85}/>
          <CardCount count={35}/>
          <CardCount count={20}/>
        </div>
      </div>
    </div>
  )
}
