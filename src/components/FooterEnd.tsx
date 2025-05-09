
import { useNavigate } from 'react-router-dom'
import NavLink from './NavBar/NavLink'
import { useLanguage } from '../hooks/useLanguage'
import { footerTranslations } from '../constants'
export default function FooterEnd() {
    const navigate = useNavigate()
  const { language } = useLanguage()
  const translations = footerTranslations[language]
  return (
    <div className="footer-end-container">
       <div className="footer-divider"></div>
            <div className="footer-end">
                <div className="footer-nav">
          <NavLink name={translations.footerHome} open={false} toggleMenu={() => { }} />
          <NavLink name={translations.footerAbout} open={false} toggleMenu={() => { }} />
          <NavLink name={translations.footerGuide} open={false} toggleMenu={() => { }} />
          <NavLink name={translations.footerProperties} open={false} toggleMenu={() => { }} />
          <NavLink name={translations.footerContact} open={false} toggleMenu={() => { }} />
                    
                </div>
        <p className="book-call body-text" onClick={() => navigate("/contact")}>{translations.footerBooking}</p>
        <p className="footer-copyright body-text"> {translations.footerCopyright}</p>
            </div>
    </div>
  )
}
