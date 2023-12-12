export default function FooterCom({ title, li1, li2, li3, li4, li5 }) {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        <li>
          <i className="bi-chevron-left"></i>
          {li1}
        </li>
        <li>
          <i className="bi-chevron-left"></i>
          {li2}
        </li>
        <li>
          <i className="bi-chevron-left"></i>
          {li3}
        </li>
        <li>
          <i className="bi-chevron-left"></i>
          {li4}
        </li>
        <li>
          <i className="bi-chevron-left"></i>
          {li5}
        </li>
      </ul>
    </div>
  )
}
