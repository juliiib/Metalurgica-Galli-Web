import { useEffect, useMemo, useRef, useState } from "react"
import Carousel from "bootstrap/js/dist/carousel"
import { machines, machinesImages } from "../../data/machinesData.js"
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx"
import "./machines.css"

const MOBILE_QUERY = "(max-width: 767.98px)"

function chunkImages(images, size) {
	return Array.from({ length: Math.ceil(images.length / size) }, (_, slideIndex) =>
		images.slice(slideIndex * size, slideIndex * size + size),
	)
}

function Machines() {
	const bannerCarouselRef = useRef(null)
	const [isMobile, setIsMobile] = useState(
		() => typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches,
	)

	useEffect(() => {
		const mediaQuery = window.matchMedia(MOBILE_QUERY)
		const handleChange = (event) => setIsMobile(event.matches)

		mediaQuery.addEventListener("change", handleChange)
		return () => mediaQuery.removeEventListener("change", handleChange)
	}, [])

	// En móvil el banner muestra una imagen por slide; en el resto, grupos de 3.
	const bannerSlides = useMemo(() => chunkImages(machinesImages, isMobile ? 1 : 3), [isMobile])

	useEffect(() => {
		if (!bannerCarouselRef.current) return undefined

		const carousel = new Carousel(bannerCarouselRef.current, {
			interval: 8000,
			pause: false,
			wrap: true,
			touch: true,
		})
		carousel.cycle()

		return () => carousel.dispose()
	}, [bannerSlides])

	return (
		<>
			<section
				id="machinery"
				className="container-fluid px-0 page-snap-section machinery-banner-section d-flex flex-column justify-content-center"
				aria-labelledby="machinery-title"
			>
				<SectionContainer className="machinery-content">
					<SectionHeader
						eyebrow="- CAPACIDAD TÉCNICA"
						title="Nuestras Maquinas"
						id="machinery-title"
						className="mb-3"
					/>
					<div
						className="machinery-banner carousel slide"
						id="machinery-carousel"
						key={isMobile ? "mobile" : "desktop"}
						ref={bannerCarouselRef}
						aria-label="Galería de maquinaria"
					>
						<div className="carousel-inner h-100">
							{bannerSlides.map((slide, slideIndex) => (
								<div className={`carousel-item h-100${slideIndex === 0 ? " active" : ""}`} key={slide[0].id}>
									<div className="machinery-banner-group">
										{slide.map((image) => (
											<img src={image.route} alt={image.alt} key={image.id} />
										))}
									</div>
								</div>
							))}
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#machinery-carousel"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Imagen anterior</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#machinery-carousel"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Imagen siguiente</span>
						</button>
					</div>
				</SectionContainer>
			</section>

			<section
				id="machinery-inventory"
				className="container-fluid px-0 page-snap-section machinery-section d-flex flex-column justify-content-center"
				aria-label="Inventario de maquinaria"
			>
				<SectionContainer className="machinery-inventory">
					<div className="row g-3" aria-label="Inventario de maquinaria">
					{machines.map((machine) => (
						<div className="col-6 col-lg-4 col-xl-3" key={machine.id}>
							<article className="machinery-card">
								<div className="machinery-card-heading mb-2">
									<p className="machinery-card-amount mb-0">
										<span className="visually-hidden">Cantidad: </span>
										{machine.amount}
									</p>
									<h3 className="h5 fw-semibold mb-0">{machine.title}</h3>
								</div>
								{machine.specifications && (
									<p className="machinery-card-specifications mb-0">
										{machine.specifications}
									</p>
								)}
							</article>
						</div>
					))}
					</div>
				</SectionContainer>
			</section>
		</>
	)
}

export default Machines