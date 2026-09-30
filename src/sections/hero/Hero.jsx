import "./Hero.css"

function Hero() {
	return (
		<section id="hero" className="hero-section" aria-labelledby="hero-title">
			<div className="hero-content">
				<h1 className="hero-title" id="hero-title">
					MECANIZADOS CONVENCIONALES Y CNC REPARACIONES
				</h1>
				<button className="hero-cta" type="button">
					Solicitar presupuesto <span aria-hidden="true">→</span>
				</button>
			</div>
		</section>
	)
}

export default Hero
