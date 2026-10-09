import "./Hero.css";
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx";
import { scrollToSection } from "../../utils/scrollToSection.js";

function Hero() {
  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-title">
      <SectionContainer size="narrow" className="hero-content">
        <h1 className="hero-title" id="hero-title">
          Soluciones Metalúrgicas de Precisión
        </h1>
        <p className="hero-description" id="hero-description">
          Mecanizados convencionales, tecnología CNC y reparaciones industriales.
        </p>
        <button
          className="hero-cta"
          type="button"
          onClick={(event) => scrollToSection(event, "contact")}
        >
          Solicitar presupuesto <span aria-hidden="true">→</span>
        </button>
      </SectionContainer>
    </section>
  );
}

export default Hero;
