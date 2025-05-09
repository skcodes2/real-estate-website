import bg from "../../assets/ContactBg.png"
import Pic from "../../assets/ContactPic.png"
import "./ContactStart.css"
import { useLanguage } from "../../hooks/useLanguage";
import { contactTranslations } from "../../constants";
export default function ContactStart() {
  const { language } = useLanguage();
  const translations = contactTranslations[language];
  return (
    <section className="contact-start-container bg-image" style={{ backgroundImage: `url(${bg})` }}>
        <div className="contact-image">
            <img src={Pic} alt="" className="contact-image-pic" />
        </div>
      <p className="contact-start-description title-lg" style={{ color: 'white' }}>{translations.contactStartTitle}</p>
    </section>
  )
}
