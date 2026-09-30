import { clientLogos } from "../data/CompanyInformation.js"
import "./clients.css"

const clientAssets = import.meta.glob("../assets/client-logo/*", {
	eager: true,
	import: "default",
	query: "?url",
})

function Clients() {
	return (
		<section className="container-fluid px-0 overflow-hidden page-snap-section d-flex flex-column justify-content-center" aria-labelledby="clients-title">
			<h2 className="h2 fw-semibold text-black mb-4" id="clients-title">
				Nuestros clientes
			</h2>

			<div className="clients-carousel" aria-label="Logos de nuestros clientes">
				<div className="clients-carousel-track d-flex">
					{[0, 1].map((copy) => (
						<div
							className="clients-carousel-group d-flex flex-shrink-0 align-items-center"
							key={copy}
							aria-hidden={copy === 1 ? "true" : undefined}
						>
							{clientLogos.map((client) => {
								const assetPath = client.route.replace("./src", "..");
								const imageSrc = clientAssets[assetPath] ?? client.route;

								return (
									<div className="clients-carousel-item d-flex flex-shrink-0 align-items-center justify-content-center" key={client.id}>
										<img className="img-fluid object-fit-contain" src={imageSrc} alt={copy === 0 ? client.alt : ""} />
									</div>
								)
							})}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Clients
