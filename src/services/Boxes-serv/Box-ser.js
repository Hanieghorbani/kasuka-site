import './Box-ser.css'

export default function Box({title}) {
  return (
    <div className='border d-flex justify-content-center align-items-center flex-column p-5 ser-box'>
        <i className='bi bi-images py-3 px-4 rounded fs-3 iconBox'></i>
        <h4 className='my-3'>{title}</h4>
        <p>برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد</p>
    </div>
  )
}
