import { useNavigate } from "react-router-dom"
import "./SuccessFormula.css"
export default function SuccessFormula() {
  const navigate = useNavigate()
  return (
    <section className="bg-color success-formula-container">
      <div className="success-formula-content body-padding">
        <div className="success-formula-title title-md">A Proven Sucess Formula</div>
        <div className="success-formula-divider"></div>
        <p className="success-formula-description body-text">
          I have dedicated my career to helping individuals and families navigate the world of real estate and insurance. My approach is built on a foundation of industry expertise,
          honest communication, and a relentless drive for client success. With years of proven results and hundreds of
          satisfied clients, I’m committed to delivering personalized
          strategies, expert advice, and outcomes you can trust.
        </p>
        <button onClick={() => navigate('/contact')} className="request button2">REQUEST A CONSULTAION →</button>
      </div>
    </section>
  )
}
