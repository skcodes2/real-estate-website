
import "./LearnMore.css";
import HomeAbout from "../../assets/HomeAbout.png"
import HeroPic from "../../assets/FinalProfilePic.png"
import logo from "../../assets/LogoNoText.png"
import { useLanguage } from "../../hooks/useLanguage";
import { homeTranslations } from "../../constants";
export default function LearnMore() {
  const { language } = useLanguage();
  const translations = homeTranslations[language];
  return (
    <section className="learn-more-container bg-image" style={{ backgroundImage: `url(${HomeAbout})` }}>
        <div className="learn-more-image-container">
            <img src={HeroPic} alt="home-about" className="learn-more-image" />
        </div>
        <div className="learn-more-content body-padding">
            <img src={logo} alt="logo" className="learn-more-logo" />
        <div className="learn-more-title title-md" style={{ color: 'white' }}>{translations.learnMoreTitle}</div>
            <p className="learn-more-description body-text" style={{color:'white'}}>
          {translations.learnMoreText}
            </p>
        <button className="learn-more-button button">{translations.learnMoreButton}</button>
        </div>
        
    </section>
  )
}
