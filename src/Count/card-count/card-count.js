
export default function CardCount({count}) {
  return (
    <div className='d-flex flex-column  cardCount-container'>
        <div className='d-flex align-items-center'>
            <i className='bi bi-emoji-smile fs-1 text-warning ms-3'></i>
            <h1>{count}</h1>
        </div>
        <p className='ps-5'>
        مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.
        </p>
    </div>
  )
}
