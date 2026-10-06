import "./Hero.css"
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"

function Hero() {
	return (
		<section id="hero" className="hero-section" aria-labelledby="hero-title">
			<SectionContainer size="narrow" className="hero-content">
				<h1 className="hero-title" id="hero-title">
					MECANIZADOS CONVENCIONALES Y CNC REPARACIONES
				</h1>
				<button
					className="hero-cta"
					type="button"
					onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
				>
					Solicitar presupuesto <span aria-hidden="true">→</span>
				</button>
			</SectionContainer>
		</section>
	)
}

export default Hero
