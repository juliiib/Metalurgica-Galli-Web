import { useEffect, useRef } from "react"
import Carousel from "bootstrap/js/dist/carousel"
import { machinery, machineryImages } from "../../data/machineryData.js"
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx"
import "./machinery.css"

function Machinery() {
	const bannerCarouselRef = useRef(null)

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
	}, [])

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
						className="machinery-banner carousel slide carousel-fade"
						id="machinery-carousel"
						ref={bannerCarouselRef}
						aria-label="Galería de maquinaria"
					>
						<div className="carousel-inner h-100">
							{machineryImages.map((image, index) => (
								<div className={`carousel-item h-100${index === 0 ? " active" : ""}`} key={image.id}>
									<img src={image.route} alt={image.alt} />
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
					{machinery.map((machine) => (
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

export default Machinery