import bg from "../../assets/PropertiesBg.png"
import "./PropertiesIntro.css"
export default function PropertiesIntro() {
  return (
    <section className="properties-intro-container bg-image" style={{ backgroundImage: `url(${bg})`}}>
        <p className="properties-intro-title title-lg">Featured Properties</p>
    </section>
  )
}
