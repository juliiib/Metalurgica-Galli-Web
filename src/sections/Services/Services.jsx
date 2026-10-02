import { useEffect, useRef } from "react"
import Carousel from "bootstrap/js/dist/carousel"
import { machinery, machineryImages } from "../../data/CompanyInformation.js"
import "./services.css"

function Services() {
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
				id="services"
				className="container-fluid px-0 page-snap-section services-banner-section d-flex flex-column justify-content-center"
				aria-labelledby="services-title"
			>
				<div className="services-content">
					<p className="text-primary mb-2">- CAPACIDAD TÉCNICA</p>
					<h2 className="h2 fw-semibold text-black mb-3" id="services-title">
						Nuestros Servicios
					</h2>
					<div
						className="services-banner carousel slide"
						id="services-machinery-carousel"
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
							data-bs-target="#services-machinery-carousel"
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true" />
							<span className="visually-hidden">Imagen anterior</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#services-machinery-carousel"
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true" />
							<span className="visually-hidden">Imagen siguiente</span>
						</button>
					</div>
				</div>
			</section>

			<section
				id="machinery"
				className="container-fluid px-0 page-snap-section machinery-section d-flex flex-column justify-content-center"
				aria-label="Inventario de maquinaria"
			>
				<div className="row g-3" aria-label="Inventario de maquinaria">
					{machinery.map((machine) => (
						<div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={machine.id}>
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
			</section>
		</>
	)
}

export default Services