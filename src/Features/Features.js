import Feature from "./feature/Feature"

export default function Features() {
  return (
    <div className="row mx-3 my-5  feature-container flex-lg-row-reverse">
      <div className="col-lg-6 mx-0">
        <img src="imgs/features.jpg" className="w-100 feature-img" />
      </div>
      <div className="col-lg-6 d-flex justify-content-between flex-column">
      <Feature title='تبلیغ سختی است'/>
       <Feature title='کدام یک از اینهاست'/>
       <Feature title='یا کور شده است'/>
       <Feature title='حقیقت مبارک'/>
      </div>
    </div>
  )
}
