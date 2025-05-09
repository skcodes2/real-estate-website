import bg from "../../assets/PropertiesBg.png"
import "./PropertiesIntro.css"
import { useLanguage } from "../../hooks/useLanguage";
import { propertiesTranslations } from "../../constants";
export default function PropertiesIntro() {
  const { language } = useLanguage();
  const translations = propertiesTranslations[language];
  return (
    <section className="properties-intro-container bg-image" style={{ backgroundImage: `url(${bg})`}}>
      <p className="properties-intro-title title-lg" style={{ color: 'white' }}>{translations.propertiesTitle}</p>
    </section>
  )
}
