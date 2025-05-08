import "./MiniContact.css";
import pic from "../../assets/KuldipPic4.png";
import { useNavigate } from "react-router-dom";
import { PERSONAL_INFO } from "../../constants";

export default function MiniContact() {
    const navigate = useNavigate();
  return (
    <section className="mini-contact-container bg-color">
      <div className="mini-contact-image-wrapper">
        <img src={pic} alt="Kuldip" className="mini-contact-image" />
      </div>

      <div className="mini-contact-content">
        <div className="mini-name title-md">Kuldip Kahlon</div>
        <div className="mini-divider"></div>

        <div className="mini-info">
          <div className="mini-info-section">
            <p className="mini-info-label body-text">Title</p>
            <p className="mini-info-value body-text">Real Estate Agent</p>
          </div>
          <div className="mini-info-section">
            <p className="mini-info-label body-text">Email</p>
            <p className="mini-info-value body-text">{PERSONAL_INFO.email}</p>
          </div>
          <div className="mini-info-section">
            <p className="mini-info-label body-text">Phone Number</p>
            <p className="mini-info-value body-text">{PERSONAL_INFO.phone}</p>
          </div>
        </div>

        <div className="mini-button-wrapper">
          <button className="mini-button button2 " onClick={()=>navigate("/contact")}>Contact Me</button>
        </div>
      </div>
    </section>
  );
}
