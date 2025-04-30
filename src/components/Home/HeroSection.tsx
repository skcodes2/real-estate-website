import HeroBg from '../../assets/HeroBg.png';
import HeroPic from "../../assets/FinalProfilePic.png"
import "./HeroSection.css"
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function HeroSection() {
    const navigate = useNavigate();
  return (
      <section className="hero-section-container bg-image" style={{ backgroundImage: `url(${HeroBg})` }}>

          <div className="hero-section-content body-padding">
              <div className="content">
                  <div className="hero-title title-sm">Your Trusted Realtor for London Homes</div>
                  <div className="hero-divider"></div>
                  <p className="hero-description body-text">With expertise in both real estate and insurance, I provide a streamlined experience that puts you at ease — so you don’t need multiple agents, just one trusted advisor who understands your goals.</p>
                  <button className="hero-button button" onClick={() => navigate("/contact")}>Let's Talk</button>
                  <div className="social-icons">
                      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><InstagramIcon className="social-icon" fontSize='large' sx={{ color: 'white' }} /></a>
                      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FacebookIcon className="social-icon" fontSize='large' sx={{ color: 'white' }} /></a>
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="social-icon" fontSize='large' sx={{ color: 'white' }} /></a>
                      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="social-icon" fontSize='large' sx={{ color: 'white' }} /></a>
                  </div>
              </div>

          </div>

          <div className="hero-scroll-down">
              <a href="#about"><KeyboardArrowDownIcon className="scroll-icon" fontSize='large' sx={{ color: 'white' }} /></a>
          </div>

          <div className="hero-section-image-container ">
              <div className="hero-image">
                  <img src={HeroPic} alt="hero" className="hero-image" />
              </div>
          </div>

      </section>
  )
}
