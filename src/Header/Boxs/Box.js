import "./Box.css"

export default function Box({ title, icon }) {
  return (
    <div className="border text-center fs-5 box-header mb-2">
      <i className='text-warning fw-bold'></i>
      <p className="text-white fw-bold">{title}</p>
    </div>
  )
  
}
