import { useState } from 'react';
import pic from "../../assets/KuldipPic4.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { PERSONAL_INFO } from "../../constants";
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
        <p className="about-phone-number body-text">{PERSONAL_INFO.phone}</p>
        <p className="about-email title-sm">Email:</p>
        <p className="about-email-text body-text">{PERSONAL_INFO.email}</p>
        <p className="about-address title-sm">Address:</p>
        <p className="about-address-text body-text">London, Ontario</p>

        <p className="about-description body-text">
          Kuldip Kahlon is a licensed real estate professional with over 5 years of hands-on experience helping clients buy, sell, and invest with confidence. She is also a certified insurance advisor, offering guidance on how to protect what matters most through customized coverage solutions. Kuldip’s unique combination of real estate and insurance expertise allows her to provide well-rounded advice that supports both immediate goals and long-term security.
          {expanded && (
            <>
              {' '}
              Known for her approachable nature, strong communication skills, and results-driven mindset, Kuldip is dedicated to simplifying complex decisions and delivering personalized service every step of the way. Whether you're entering the market for the first time or preparing for the next phase of life, she is committed to making the process seamless and rewardin
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
