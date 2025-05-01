
import "./LearnMore.css";
import HomeAbout from "../../assets/HomeAbout.png"
import HeroPic from "../../assets/FinalProfilePic.png"
import logo from "../../assets/LogoNoText.png"
export default function LearnMore() {
  return (
    <section className="learn-more-container bg-image" style={{ backgroundImage: `url(${HomeAbout})` }}>
        <div className="learn-more-image-container">
            <img src={HeroPic} alt="home-about" className="learn-more-image" />
        </div>
        <div className="learn-more-content body-padding">
            <img src={logo} alt="logo" className="learn-more-logo" />
            <div className="learn-more-title title-md" style={{color:'white'}}>Kuldip Kahlon</div>
            <p className="learn-more-description body-text" style={{color:'white'}}>
                With expertise in both real estate and insurance, I provide a streamlined experience that puts
                you at ease — so you don’t need multiple agents, just one trusted advisor who understands your goals.
            </p>
            <button className="learn-more-button button">Learn More</button>
        </div>
        
    </section>
  )
}
