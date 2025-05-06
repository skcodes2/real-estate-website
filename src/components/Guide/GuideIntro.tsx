
import bg from "../../assets/GuideBg.png"
import "./Guideintro.css"
export default function GuideIntro() {
  return (
    <section className="guide-container bg-image" style={{ backgroundImage: `url(${bg})` }}>
      <p className='title-lg' style={{ color: 'white' }}>Your Real Estate Guide</p>
    </section>
  )
}
