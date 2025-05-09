import { useNavigate } from "react-router-dom"
import "./SuccessFormula.css"
import { useLanguage } from "../../hooks/useLanguage"
import { homeTranslations } from "../../constants"
export default function SuccessFormula() {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const translations = homeTranslations[language]
  return (
    <section className="bg-color success-formula-container">
      <div className="success-formula-content body-padding">
        <div className="success-formula-title title-md">{translations.successTitle}</div>
        <div className="success-formula-divider"></div>
        <p className="success-formula-description body-text">
          {translations.successText}
        </p>
        <button onClick={() => navigate('/contact')} className="request button2">{translations.successButton}</button>
      </div>
    </section>
  )
}
