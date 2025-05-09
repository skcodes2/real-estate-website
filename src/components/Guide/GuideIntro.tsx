
import bg from "../../assets/GuideBg.png"
import "./Guideintro.css"
import { useLanguage } from "../../hooks/useLanguage";
import { guideTranslations } from "../../constants";
export default function GuideIntro() {
  const { language } = useLanguage();
  const translations = guideTranslations[language];
  return (
    <section className="guide-container bg-image" style={{ backgroundImage: `url(${bg})` }}>
      <p className='title-lg' style={{ color: 'white' }}>{translations.guideIntroTitle}</p>
    </section>
  )
}
