import { useState } from "react"
import "./header.css"
import companyLogo from "../../assets/icons/Galli.png"

const navigationItems = [
	{ label: "INICIO", target: "hero" },
	{ label: "SOBRE NOSOTROS", target: "about-us" },
	{ label: "MAQUINAS", target: "machinery" },
	{ label: "PROYECTOS", target: "projects" },
	{ label: "CONTACTO", target: "contact" },
]

function scrollToSection(event, sectionId, onComplete) {
	event.preventDefault()

	const scrollContainer = document.querySelector(".page-snap-container")
	const targetSection = document.getElementById(sectionId)

	if (onComplete) onComplete()

	if (!scrollContainer || !targetSection) return

	const containerTop = scrollContainer.getBoundingClientRect().top
	const sectionTop = targetSection.getBoundingClientRect().top
	const targetScrollTop = scrollContainer.scrollTop + sectionTop - containerTop

	scrollContainer.scrollTo({ top: targetScrollTop, behavior: "smooth" })
	window.history.pushState(null, "", `#${sectionId}`)
}

function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen((prev) => !prev)
	const closeMenu = () => setIsOpen(false)

	return (
		<header className="site-header fixed-top">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<a href="#hero" className="d-flex align-items-center text-decoration-none" onClick={(e) => scrollToSection(e, "hero", closeMenu)}>
					<img className="site-header-logo img-fluid" src={companyLogo} alt="Metalúrgica Galli" />
				</a>

				{/* Botón hamburguesa (solo mobile y tablets) */}
				<button
					className="site-header-burger d-lg-none border-0 bg-transparent text-white"
					type="button"
					onClick={toggleMenu}
					aria-expanded={isOpen}
					aria-label="Abrir menú de navegación"
				>
					<span className="burger-icon">{isOpen ? "✕" : "☰"}</span>
				</button>

				{/* Navegación desktop + overlay mobile */}
				<nav
					className={`site-header-navigation d-flex align-items-center ${isOpen ? "is-open" : ""}`}
					aria-label="Navegación principal"
				>
					{navigationItems.map(({ label, target }) => (
						<a
							className="nav-link text-white px-2 py-2"
							href={`#${target}`}
							onClick={(event) => scrollToSection(event, target, closeMenu)}
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