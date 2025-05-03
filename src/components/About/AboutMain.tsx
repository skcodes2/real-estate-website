import { useState } from 'react';
import pic from "../../assets/KuldipPic4.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./AboutMain.css";

export default function AboutMain() {
  const [expanded, setExpanded] = useState(false);

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
          <a href="#" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="social-icon" fontSize="large" sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className="social-icon" fontSize="large" sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="social-icon" fontSize="large" sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="social-icon" fontSize="large" sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} />
          </a>
        </div>
      </div>

      <div className="about-content-section">
        <div className="about-title-section">
          <p className="about-title title-md">Kuldip Kahlon</p>
          <div className="about-divider"></div>
        </div>
        <p className="about-phone title-sm">Phone Number:</p>
        <p className="about-phone-number body-text">(416)-605-4058</p>
        <p className="about-email title-sm">Email:</p>
        <p className="about-email-text body-text">kuldipsandhu1@outlook.com</p>
        <p className="about-address title-sm">Address:</p>
        <p className="about-address-text body-text">London, Ontario</p>

        <p className="about-description body-text">
          Kuldip Kahlon graduated from the University of Toronto with a degree in Business Management. She began her career in the insurance industry, helping individuals and families protect their futures, before transitioning into real estate where she combined her passion for client service with her business expertise.
          {expanded && (
            <>
              {' '}
              For over a decade, Kuldip has built a trusted reputation offering both real estate and insurance services. Her clients value her honesty, professionalism, and personalized approach. Whether you’re buying your first home or planning for long-term security, Kuldip is committed to guiding you every step of the way.
            </>
          )}
        </p>

        <p
          className="about-read-more body-text read-toggle"
          onClick={toggleReadMore}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </p>
      </div>
    </section>
  );
}
