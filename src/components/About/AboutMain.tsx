import { useState } from 'react';
import pic from "../../assets/KuldipPic4.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PERSONAL_INFO } from "../../constants";
import "./AboutMain.css";
import { useLanguage } from '../../hooks/useLanguage';
import { aboutTranslations } from '../../constants';

export default function AboutMain() {
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();
  const translations = aboutTranslations[language];
  const toggleReadMore = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <section className="about-container bg-color">
      <div className="about-image-section">
        <div className="about-image-container">
          <img src={pic} alt="Kuldip Kahlon" className="about-image" />
        </div>
        <div className="social-icons" style={{ justifyContent: 'center' }}>
          <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="social-icon" fontSize="large" sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} />
          </a>
          <a href={PERSONAL_INFO.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="social-icon" fontSize="large" sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} />
          </a>
          <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="social-icon" fontSize="large" sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="social-icon" fontSize="large" sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} />
          </a>
        </div>
      </div>

      <div className="about-content-section">
        <div className="about-title-section">
          <p className="about-title title-md">{translations.aboutTitle}</p>
          <div className="about-divider"></div>
        </div>
        <p className="about-phone title-sm">{translations.aboutPhoneLabel}</p>
        <p className="about-phone-number body-text">{PERSONAL_INFO.phone}</p>
        <p className="about-email title-sm">{translations.aboutEmailLabel}</p>
        <p className="about-email-text body-text">{PERSONAL_INFO.email}</p>
        <p className="about-address title-sm">{translations.aboutAddressLabel}</p>
        <p className="about-address-text body-text">{translations.aboutAddressText}</p>

        <p className="about-description body-text">
          {translations.aboutDescription}
          {expanded && (
            <>
              {' '}
              {translations.aboutDescriptionExpanded}
            </>
          )}
        </p>

        <p
          className="about-read-more body-text read-toggle"
          onClick={toggleReadMore}
        >
          {expanded ? translations.aboutReadLess : translations.aboutReadMore}
        </p>
      </div>
    </section>
  );
}
