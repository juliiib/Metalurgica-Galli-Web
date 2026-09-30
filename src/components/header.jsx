import "./header.css"
import companyLogo from "../assets/icons/Galli.png"

const navigationItems = ["INICIO", "SOBRE NOSOTROS", "SERVICIOS", "PROYECTOS", "CONTACTO"]

function Header() {
	return (
		<header className="site-header fixed-top">
			<div className="container-fluid row gx-0 align-items-center">
				<div className="col-5 col-md-4">
					<img className="site-header-logo img-fluid" src={companyLogo} alt="Metalúrgica Galli" />
				</div>
				<nav className="site-header-navigation col-7 col-md-8 d-flex flex-wrap justify-content-end align-items-center" aria-label="Navegación principal">
				{navigationItems.map((item) => (
					item === "SOBRE NOSOTROS" ? (
						<a className="nav-link text-white px-1 px-md-2 py-2" href="#about-us" key={item}>
							{item}
						</a>
					) : (
						<button className="nav-link text-white border-0 bg-transparent px-1 px-md-2 py-2" key={item} type="button">
							{item}
						</button>
					)
				))}
			</nav>
			</div>
		</header>
	)
}

export default Header
