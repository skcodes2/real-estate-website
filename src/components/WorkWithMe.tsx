import "./WorkWithMe.css";
import { useNavigate } from "react-router-dom";
import bg from "../assets/WorkWithMeImage.png"
import { useLanguage } from "../hooks/useLanguage";
import { workWithMeTranslations } from "../constants";
export default function WorkWithMe() {
    const navigate = useNavigate();
  const { language } = useLanguage();
  const translations = workWithMeTranslations[language];
  return (
    <section className="work-with-me bg-image body-padding" style={{height:'60dvh' ,backgroundImage: `url(${bg})` }}>

      <div className="work-with-me-content">
        <div className="work-with-me-title title-md" style={{ color: 'white' }}>{translations.workWithMeTitle}</div>
        <div className="work-with-me-divider"></div>
        <div className="work-with-me-description bg-text" style={{color:'white'}}>
          {translations.workWithMeText}
        </div>
      </div>
      <div className="work-with-me-button-container">
        <button className="work-with-me-button button2" style={{ color: 'white' }} onClick={() => navigate("/contact")}>
          {translations.workWithMeButton}
        </button>
      </div>
    </section>
  )
}
