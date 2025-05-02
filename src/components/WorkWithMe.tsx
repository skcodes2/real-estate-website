import "./WorkWithMe.css";
import { useNavigate } from "react-router-dom";
import bg from "../assets/WorkWithMeImage.png"
export default function WorkWithMe() {
    const navigate = useNavigate();
  return (
    <section className="work-with-me bg-image body-padding" style={{height:'60dvh' ,backgroundImage: `url(${bg})` }}>

      <div className="work-with-me-content">
        <div className="work-with-me-title title-md" style={{color:'white'}}>Work With Me</div>
        <div className="work-with-me-divider"></div>
        <div className="work-with-me-description bg-text" style={{color:'white'}}>
        Whether you’re searching for the perfect home, preparing to list your property, or making sure your investment is 
        properly protected, I combine real estate and insurance expertise to give you a complete, stress-free experience.
        </div>
      </div>
      <div className="work-with-me-button-container">
        <button className="work-with-me-button button2" onClick={() => navigate("/contact")}>
          Contact Me
        </button>
      </div>
    </section>
  )
}
