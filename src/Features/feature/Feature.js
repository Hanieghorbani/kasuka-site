import './feature.css'

export default function Feature({title}) {
  return (
    <div className='d-flex flex-row-reverse align-items-center'>
        <div>
            <i className="bi bi-images fs-1 text-warning ms-3 icon-feature"></i>
        </div>
        <div className="feature-content pt-4">
            <h5>{title}</h5>
            <p className='text-secondary fw-bold'>کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند</p>
        </div>
    </div>
  )
}
