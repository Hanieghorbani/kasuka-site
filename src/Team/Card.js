import "./team.css"
export default function Card({img,name,job}) {
  return (
    <div className="card-team shadow rounded text-end pb-2">
      <img src={img} className="rounded-top" />
      <div className="m-3">
        <h5>{name}</h5>
        <p className="text-secondary">{job}</p>
      </div>
    </div>
  )
}
