import { CompanyInfo } from "../data/CompanyInformation.js"
import iso9001Certification from "../assets/certification/ISO-9001-6449.jpg"
import iqnetCertification from "../assets/certification/IQNet.png"
import "./aboutUs.css"

function AboutUs() {
	return (
        <div className="d-flex flex-column">
            <section id="about-us" className="container-fluid px-0 page-snap-section d-flex flex-column justify-content-center" aria-labelledby="about-us-title">
                <div className="row w-100 g-4 align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="ratio ratio-4x3 rounded-4 bg-secondary-subtle" role="img" aria-label="Espacio reservado para una imagen" />
                    </div>
                    <div className="col-12 col-md-6">
                        <header className="mb-4">
                            <p className="text-primary mb-2">- Trayectoria Solida</p>
                            <h2 className="h2 fw-semibold text-black mb-0" id="about-us-title">Nuestra historia</h2>
                        </header>
                        <div>
                            {CompanyInfo.history.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid px-0 page-snap-section d-flex flex-column justify-content-center" aria-label="Misión y visión">
                <div className="row w-100 g-4">
                    <div className="col-12 col-md-6">
                        <header className="mb-4">
                            <p className="text-primary mb-2">- Proyección y liderazgo</p>
                            <h2 className="h2 fw-semibold text-black mb-0" id="about-us-vision-title">Nuestra Visión</h2>
                        </header>
                        <div>
                            {CompanyInfo.vision.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <header className="mb-4">
                            <p className="text-primary mb-2">- Compromiso Industrial</p>
                            <h2 className="h2 fw-semibold text-black mb-0" id="about-us-mission-title">Nuestra Misión</h2>
                        </header>
                        <p>{CompanyInfo.mission}</p>
                        <div className="d-flex flex-wrap gap-3 mt-4" aria-label="Certificaciones">
                            <img
                                className="certification-badge"
                                src={iso9001Certification}
                                alt="Certificación ISO 9001"
                            />
                            <img
                                className="certification-badge"
                                src={iqnetCertification}
                                alt="Certificación IQNet"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
	)
}

export default AboutUs
