import "./Footer.css"
import logo from "../assets/LogoWithText.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactFlex from "./ContactFlex";
import FooterEnd from "./FooterEnd";

export default function Footer() {

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
        <div className="footer-contact-details">
           <ContactFlex 
           vGap={7}
            hGap={20}
           />
        </div>
      </div>

      <FooterEnd />
    </section>
  )
}
