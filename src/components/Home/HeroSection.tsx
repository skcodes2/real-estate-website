import HeroBg from '../../assets/HeroBg.png';

export default function HeroSection() {
  return (
    <section className="hero-section-container bg-image" style={{backgroundImage: `url(${HeroBg})`}}></section>
  )
}
