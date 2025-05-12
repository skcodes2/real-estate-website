import HeroBg from '../../assets/HeroBg.png';
import HeroPic from "../../assets/FinalProfilePic.png"
import "./HeroSection.css"
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useLanguage } from '../../hooks/useLanguage';
import { homeTranslations, PERSONAL_INFO } from '../../constants';
export default function HeroSection() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const translations = homeTranslations[language];
  return (
      <section className="hero-section-container bg-image" style={{ backgroundImage: `url(${HeroBg})` }}>

          <div className="hero-section-content body-padding">
              <div className="content">
                  <div className="hero-title title-sm" style={{ color: 'white' }}>{translations.homeHeroTitle}</div>
                  <div className="hero-divider"></div>
                  <p className="hero-description body-text" style={{ color: 'white' }}>{translations.homeHeroText}</p>
                  <button className="hero-button button" onClick={() => navigate("/contact")}>{translations.heroButton}</button>
                  <div className="social-icons">
                      <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon className="social-icon" fontSize='large' sx={{ color: 'white', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
                      <a href={PERSONAL_INFO.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon className="social-icon" fontSize='large' sx={{ color: 'white', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
                      <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="social-icon" fontSize='large' sx={{ color: 'white', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon className="social-icon" fontSize='large' sx={{ color: 'white', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
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
