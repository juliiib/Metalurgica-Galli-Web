import { CompanyInfo } from "../../data/CompanyInformation.js"
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx"
import iso9001Certification from "../../assets/certification/ISO-9001-6449.jpg"
import iqnetCertification from "../../assets/certification/IQNet.png"
import "./aboutUs.css"

function AboutUs() {
	return (
        <div className="d-flex flex-column">
            <section id="about-us" className="container-fluid px-0 page-snap-section about-us-section d-flex flex-column justify-content-center" aria-labelledby="about-us-title">
            <SectionContainer className="row g-4">
                    <div className="col-12 col-md-6">
                        <div className="ratio ratio-4x3 rounded-4 bg-secondary-subtle" role="img" aria-label="Espacio reservado para una imagen" />
                    </div>
                    <div className="col-12 col-md-6">
                        <SectionHeader
                            eyebrow="- Trayectoria Solida"
                            title="Nuestra historia"
                            id="about-us-title"
                            className="mb-4"
                        />
                        <div>
                            {CompanyInfo.history.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                    </div>
                </SectionContainer>
            </section>

            <section className="container-fluid px-0 page-snap-section about-us-section d-flex flex-column justify-content-center" aria-label="Misión y visión">
                <SectionContainer className="row g-4">
                    <div className="col-12 col-md-6">
                        <SectionHeader
                            eyebrow="- Proyección y liderazgo"
                            title="Nuestra Visión"
                            id="about-us-vision-title"
                            className="mb-4"
                        />
                        <div>
                            {CompanyInfo.vision.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <SectionHeader
                            eyebrow="- Compromiso Industrial"
                            title="Nuestra Misión"
                            id="about-us-mission-title"
                            className="mb-4"
                        />
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
                </SectionContainer>
            </section>
        </div>
	)
}

export default AboutUs
