import { useEffect, useRef } from "react"
import Carousel from "bootstrap/js/dist/carousel"
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx"
import "./projects.css"
import { projectsImages } from "../../data/projectsData.js"

const projectSlides = Array.from(
	{ length: Math.ceil(projectsImages.length / 4) },
	(_, slideIndex) => projectsImages.slice(slideIndex * 4, slideIndex * 4 + 4),
)

function Projects() {
	const projectCarouselRef = useRef(null)

	useEffect(() => {
		if (!projectCarouselRef.current || projectSlides.length < 2) return undefined

		const carousel = new Carousel(projectCarouselRef.current, {
			interval: 8000,
			pause: false,
			wrap: true,
			touch: true,
			ride: "carousel",
		})

		return () => carousel.dispose()
	}, [])

	return (
		<section className="projects-section page-snap-section" id="projects" aria-labelledby="projects-title">
			<SectionContainer className="projects-content">
				<SectionHeader
					eyebrow="- Soluciones entregadas"
					title="Proyectos Concluidos"
					id="projects-title"
					className="mb-3"
				/>
				<p className="mb-0">
					Garantía de robustez en cada pieza metálica. Fabricados bajo los más altos estándares de control de materiales.
				</p>
				{projectSlides.length > 0 ? (
					<div
						className="projects-carousel carousel slide"
						id="projects-carousel"
						ref={projectCarouselRef}
						aria-label="Galería de proyectos concluidos"
					>
						<div className="carousel-inner">
							{projectSlides.map((slide, slideIndex) => (
								<div className={`carousel-item${slideIndex === 0 ? " active" : ""}`} key={slide[0].id}>
									<div className="projects-gallery">
										{slide.map((image) => (
											<img className="projects-image" src={image.route} alt={image.alt} key={image.id} />
										))}
									</div>
								</div>
							))}
						</div>
						{projectSlides.length > 1 && (
							<>
								<button className="carousel-control-prev" type="button" data-bs-target="#projects-carousel" data-bs-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true" />
									<span className="visually-hidden">Proyectos anteriores</span>
								</button>
								<button className="carousel-control-next" type="button" data-bs-target="#projects-carousel" data-bs-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true" />
									<span className="visually-hidden">Proyectos siguientes</span>
								</button>
							</>
						)}
					</div>
				) : (
					<p className="projects-empty mb-0">Próximamente, nuevos proyectos concluidos.</p>
				)}
			</SectionContainer>
		</section>
	)
}

export default Projects
