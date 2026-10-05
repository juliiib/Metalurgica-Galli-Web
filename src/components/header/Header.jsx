import "./header.css"
import companyLogo from "../../assets/icons/Galli.png"

const navigationItems = [
	{ label: "INICIO", target: "hero" },
	{ label: "SOBRE NOSOTROS", target: "about-us" },
	{ label: "MAQUINARIAS", target: "machinery" },
	{ label: "PROYECTOS", target: "projects" },
	{ label: "CONTACTO", target: "contact" },
]

function scrollToSection(event, sectionId) {
	event.preventDefault()

	const scrollContainer = document.querySelector(".page-snap-container")
	const targetSection = document.getElementById(sectionId)

	if (!scrollContainer || !targetSection) return

	const containerTop = scrollContainer.getBoundingClientRect().top
	const sectionTop = targetSection.getBoundingClientRect().top
	const targetScrollTop = scrollContainer.scrollTop + sectionTop - containerTop

	scrollContainer.scrollTo({ top: targetScrollTop, behavior: "smooth" })
	window.history.pushState(null, "", `#${sectionId}`)
}

function Header() {
	return (
		<header className="site-header fixed-top">
			<div className="container-fluid row gx-0 align-items-center">
				<div className="col-5 col-md-4">
					<img className="site-header-logo img-fluid" src={companyLogo} alt="Metalúrgica Galli" />
				</div>
				<nav className="site-header-navigation col-7 col-md-8 d-flex flex-wrap justify-content-end align-items-center" aria-label="Navegación principal">
				{navigationItems.map(({ label, target }) => (
					<a
						className="nav-link text-white px-1 px-md-2 py-2"
						href={`#${target}`}
						onClick={(event) => scrollToSection(event, target)}
						key={target}
					>
						{label}
					</a>
				))}
			</nav>
			</div>
		</header>
	)
}

export default Header
