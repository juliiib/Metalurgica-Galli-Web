import { useEffect, useMemo, useRef, useState } from "react"
import Carousel from "bootstrap/js/dist/carousel"
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx"
import "./projects.css"
import { projectsImages } from "../../data/projectsData.js"

const MOBILE_QUERY = "(max-width: 575.98px)"

function chunkImages(images, size) {
	return Array.from({ length: Math.ceil(images.length / size) }, (_, slideIndex) =>
		images.slice(slideIndex * size, slideIndex * size + size),
	)
}

function Projects() {
	const projectCarouselRef = useRef(null)
	const [isMobile, setIsMobile] = useState(
		() => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches,
	)

	useEffect(() => {
		const mediaQuery = window.matchMedia(MOBILE_QUERY)
		const handleChange = (event) => setIsMobile(event.matches)

		mediaQuery.addEventListener("change", handleChange)
		return () => mediaQuery.removeEventListener("change", handleChange)
	}, [])

	// En móvil se muestra una imagen por slide; en el resto, grupos de 4.
	const projectSlides = useMemo(() => chunkImages(projectsImages, isMobile ? 1 : 4), [isMobile])

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
	}, [projectSlides])

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
						key={isMobile ? "mobile" : "desktop"}
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
