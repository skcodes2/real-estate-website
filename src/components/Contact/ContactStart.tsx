import bg from "../../assets/ContactBg.png"
import Pic from "../../assets/ContactPic.png"
import "./ContactStart.css"
export default function ContactStart() {
  return (
    <section className="contact-start-container bg-image" style={{ backgroundImage: `url(${bg})` }}>
        <div className="contact-image">
            <img src={Pic} alt="" className="contact-image-pic" />
        </div>
        <p className="contact-start-description title-lg">GET IN TOUCH</p>
    </section>
  )
}
