
import { useNavigate } from 'react-router-dom'
import NavLink from './NavBar/NavLink'
export default function FooterEnd() {
    const navigate = useNavigate()
  return (
    <div className="footer-end-container">
       <div className="footer-divider"></div>
            <div className="footer-end">
                <div className="footer-nav">
                    <NavLink name="Home" open={false} toggleMenu={() => {}} />
                    <NavLink name="About" open={false} toggleMenu={() => {}} />
                    <NavLink name="Guide" open={false} toggleMenu={() => {}} />
                    <NavLink name="Properties" open={false} toggleMenu={() => {}} />
                    <NavLink name="Contact" open={false} toggleMenu={() => {}} />
                    
                </div>
                <p className="book-call body-text" onClick={()=>navigate("/contact")}>Book a Call</p>
                <p className="footer-copyright body-text"> © 2025 Kuldip Kahlon. All rights reserved.  Licensed Realtor & Insurance Advisor in Ontario.</p>
            </div>
    </div>
  )
}
