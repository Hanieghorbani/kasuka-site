import './Navbar.css'
import "../../bootstrap-icons.min.css";
export default function Navbar() {
  return (
    <div className='navbar d-flex flex-row-reverse justify-content-between align-items-center px-5 text-white'>
        <div className='logo d-flex align-items-center'>
           <h2><a href="#" className='text-white'>KASUKA</a></h2>
           <img src="imgs/logo-kasuka.png"/>
        </div>
        
            <ul className=''>
                <li>خانه</li>
                <li>درباره ما</li>
                <li>خدمات</li>
                <li>نمونه کارها</li>
                <li>تیم</li>
                <li className=''>
                لیست کشویی
                <i className='bi bi-chevron-down me-1'></i>
                </li>
                <li>تماس با ما</li>
            </ul>
        
        <button className='btn btn-outline-warning '>شروع</button>
    </div>
  )
}
