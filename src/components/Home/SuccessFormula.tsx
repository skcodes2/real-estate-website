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
          My work focuses on more than closing deals or issuing policies. I believe in helping people make decisions that impact their future with clarity and confidence. Whether it’s buying a home, protecting your family’s income, or planning ahead, I’m here to simplify the process and walk alongside you with care and expertise.
        </p>
        <button onClick={() => navigate('/contact')} className="request button2">REQUEST A CONSULTAION →</button>
      </div>
    </section>
  )
}
