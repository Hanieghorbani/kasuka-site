import './contact.css'

export default function ConctactInfo({title,info,icon}) {
  return (
    <div className='d-flex info-box  w-75 align-items-center mb-3'>
        
          <i className='bi bi-geo-alt bg-warning  rounded ms-4 d-flex justify-content-center align-items-center'></i>
          <div>
            <h4>{title}:</h4>
            <p>{info}</p>
          </div>
        
    </div>
  )
}
