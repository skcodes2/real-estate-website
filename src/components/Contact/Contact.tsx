import { useState, ChangeEvent, JSX } from "react";
import "./Contact.css";
import ContactFlex from "../ContactFlex";
import MapComponent from "../Map";
import FooterEnd from "../FooterEnd";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

  return (
    <div className="bg-color">
    <section className="contact-container bg-color">
      <div className="messaging-container">
        <div className="messaging-header">
          <p className="messaging-title title-md">Got a Question?</p>
          <div className="messaging-divider"></div>
          <p className="messaging-subtitle body-text" style={{ fontSize: '24px' }}>
            Contact Kuldip by filling out the form
          </p>
        </div>

        <div className="messaging-form">
          <div className="names">
            <div className="first">
              <label className="first-name body-text">First Name (Required)</label>
              <input
                type="text"
                className="first-name-input form-input"
                placeholder="Enter your first name"
                value={formData.firstname}
                onChange={(e) => handleSanitizeChange(e, 'firstname', /[^a-zA-Z\s'-]/g)}
              />
            </div>
            <div className="last">
              <label className="last-name body-text">Last Name (Required)</label>
              <input
                type="text"
                className="last-name-input form-input"
                placeholder="Enter your last name"
                value={formData.lastname}
                onChange={(e) => handleSanitizeChange(e, 'lastname', /[^a-zA-Z\s'-]/g)}
              />
            </div>
          </div>

          <div className="phone">
            <label className="phone body-text">Phone Number (Required)</label>
            <input
              type="number"
              className="phone-input form-input"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleSanitizeChange(e, 'phone', /[^0-9]/g)}
            />
          </div>

          <div className="email">
            <label className="email body-text">Email (Required)</label>
            <input
              type="text"
              className="email-input form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleSanitizeChange(e, 'email', /[^a-zA-Z0-9@._-]/g)}
            />
          </div>

          <div className="multiple-choice">
            <p className="multiple-choice-title title-sm">I'm interested In</p>
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
            <label className="descrip body-text">How can I help? (optional)</label>
            <textarea
              maxLength={1500}
              rows={4}
              cols={50}
              className="descrip-input form-input"
              placeholder="Enter your message here (250 words maximum)..."
              value={formData.message}
              onChange={(e) => handleSanitizeChange(e, 'message', /[^a-zA-Z0-9\s.,!?'"@#%&()\-]/g)}
            />
          </div>

          <div className="form-button">
            <button className="send-message body-text button">Send Message</button>
          </div>
        </div>
      </div>
      <div className="contact-divider"></div>
      <div className="contact-details-container">
        <p className="contact-details-title title-md">Contact Details</p>
        <div className="messaging-divider"></div>
        <ContactFlex vGap={5} hGap={9} />
        <div className="map">
          <MapComponent />
        </div>
        <div className="social-icons" style={{ justifyContent: 'center' }}>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><InstagramIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FacebookIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="social-icon" fontSize='large' sx={{ color: 'var(--text-color)', '&:hover': { color: 'var(--secondary-color)' } }} /></a>
        </div>

        </div>

    </section>
      <FooterEnd />
    </div> 
  );
}
