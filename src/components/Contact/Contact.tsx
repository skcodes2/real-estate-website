import { useState, ChangeEvent, JSX } from "react";
import "./Contact.css";
import ContactFlex from "../ContactFlex";
import MapComponent from "../Map";
import FooterEnd from "../FooterEnd";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { API_URL, PERSONAL_INFO } from "../../constants";
import { useLanguage } from "../../hooks/useLanguage";
import { contactTranslations } from "../../constants";
type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  choice: string;
  message: string;
};

function Sanitizer(
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFunc: (val: string) => void,
  regex: RegExp
): void {
  const userInput = event.target.value;
  const sanitizedInput = userInput.replace(regex, '');
  setFunc(sanitizedInput);
}

export default function Contact(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState('');
  const { language } = useLanguage();
  const translations = contactTranslations[language];
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    choice: '',
    message: ''
  });

  const handleSanitizeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof FormData,
    regex: RegExp
  ): void => {
    Sanitizer(e, (val) =>
      setFormData((prev) => ({
        ...prev,
        [key]: val
      })),
      regex
    );
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({
      ...prev,
      choice: e.target.value
    }));
  };

  const handleSubmit = (): void => {
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (!emailValidation(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    fetch(API_URL + "/api/send-email", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (!response.ok) {
          setErrorMessage("An error occurred while sending the message. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        setErrorMessage(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage("An error occurred while sending the message. Please try again later.");
      });





  };

  const emailValidation = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  return (
    <div className="bg-color">
    <section className="contact-container bg-color">
      <div className="messaging-container">
        <div className="messaging-header">
            <p className="messaging-title title-md">{translations.contactFormTitle}</p>
          <div className="messaging-divider"></div>
          <p className="messaging-subtitle body-text" style={{ fontSize: '24px' }}>
              {translations.contactFormSubtitle}
          </p>
        </div>

        <div className="messaging-form">
          <div className="names">
            <div className="first">
                <label className="first-name body-text">{translations.contactFormFirstNameLabel}</label>
              <input
                type="text"
                className="first-name-input form-input"
                  placeholder={translations.contactPlaceholderFirstName}
                value={formData.firstname}
                onChange={(e) => handleSanitizeChange(e, 'firstname', /[^a-zA-Z\s'-]/g)}
              />
            </div>
            <div className="last">
                <label className="last-name body-text">{translations.contactFormLastNameLabel}</label>
              <input
                type="text"
                className="last-name-input form-input"
                  placeholder={translations.contactPlaceholderLastName}
                value={formData.lastname}
                onChange={(e) => handleSanitizeChange(e, 'lastname', /[^a-zA-Z\s'-]/g)}
              />
            </div>
          </div>

          <div className="phone">
              <label className="phone body-text">{translations.contactFormPhoneLabel}</label>
            <input
              type="number"
              className="phone-input form-input"
                placeholder={translations.contactPlaceholderPhone}
              value={formData.phone}
              onChange={(e) => handleSanitizeChange(e, 'phone', /[^0-9]/g)}
            />
          </div>

          <div className="email">
              <label className="email body-text">{translations.contactFormEmailLabel}</label>
            <input
              type="text"
              className="email-input form-input"
                placeholder={translations.contactPlaceholderEmail}
              value={formData.email}
              onChange={(e) => handleSanitizeChange(e, 'email', /[^a-zA-Z0-9@._-]/g)}
            />
          </div>

          <div className="multiple-choice">
              <p className="multiple-choice-title title-sm">{translations.contactFormChoiceTitle}</p>
            <div className="radio-container">
              {["Buying", "Selling", "Other"].map((opt) => (
                <div key={opt}>
                  <input
                    type="radio"
                    className="radio-button"
                    id={opt.toLowerCase()}
                    name="choice"
                    value={opt}
                    checked={formData.choice === opt}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor={opt.toLowerCase()} className="radio-label body-text">
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="long-description">
              <label className="descrip body-text">{translations.contactPlaceholderDescription}</label>
            <textarea
              maxLength={1500}
              rows={4}
              cols={50}
              className="descrip-input form-input"
                placeholder={translations.contactPlaceholderDescription}
              value={formData.message}
              onChange={(e) => handleSanitizeChange(e, 'message', /[^a-zA-Z0-9\s.,!?'"@#%&()\-]/g)}
            />
          </div>

          <div className="form-button">
              {errorMessage && (
                <p className="error-message body-text" style={{ color: 'red' }}>{errorMessage}</p>
              )}
              <button className="send-message body-text button" onClick={handleSubmit}>
                {translations.contactFormButton}
              </button>
            </div>
        </div>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-details-container">
          <p className="contact-details-title title-md">{translations.contactDetailsTitle}</p>
        <div className="messaging-divider"></div>
        <ContactFlex vGap={5} hGap={9} />
        <div className="map">
            <MapComponent latitude={42.9849} longitude={-81.2453} />
        </div>
        <div className="social-icons" style={{ justifyContent: 'center' }}>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
            <a href={PERSONAL_INFO.facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
            <a href={PERSONAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
        </div>

        </div>

    </section>
      <FooterEnd />
    </div> 
  );
}
