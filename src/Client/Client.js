import "./Client.css"

export default function Client() {
  return (
    <div>
      <div className="row client-row m-3 align-items-center justify-content-center">
        <div className="col-4 col-lg-2">
          <img src="imgs/client-1.png" />
        </div>
        <div className="col-4 col-lg-2">
          <img src="imgs/client-2.png" />
        </div>
        <div className="col-4 col-lg-2">
          <img src="imgs/client-3.png" />
        </div>
        <div className="col-2 d-none d-lg-block ">
          <img src="imgs/client-4.png" />
        </div>
        <div className="col-2 d-none d-lg-block">
          <img src="imgs/client-5.png" />
        </div>
        <div className="col-2 d-none d-lg-block">
          <img src="imgs/client-6.png" />
        </div>
      </div>

      <div className="dots">
          <span></span><span className="bg-warning"></span><span></span><span></span><span></span><span></span>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}
