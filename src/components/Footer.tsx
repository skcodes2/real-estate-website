import "./Footer.css"
import logo from "../assets/LogoWithText.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactFlex from "./ContactFlex";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavBar/NavLink";

export default function Footer() {
    const navigate = useNavigate();
  return (
    <section className="footer-container bg-color">
        <div className="footer-divider divider1"></div>
        <div className="footer-content">
            <div className="footer-content-column">

                <div className="footer-content-column-logo">
                    <img src={logo} className="footer-logo" alt="" />
                </div>

                <p className="footer-content-column-description body-text">
                Real Estate & Insurance                                    
                Services You Can Rely On
                </p>


                <div className="footer-social-icons-container">
                      <p className="footer-social-icons-title title-sm">Social Media</p>  
                      <div className="footer-social-icons">
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><InstagramIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
                        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FacebookIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
                      </div>
                </div>

            </div>
           <ContactFlex 
           vGap={7}
           hGap={22}
           />
        </div>
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
    </section>
  )
}
