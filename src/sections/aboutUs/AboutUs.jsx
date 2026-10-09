import { CompanyInfo } from "../../data/CompanyInformation.js"
import { AboutImage } from "../../data/CompanyInformation.js"
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx"

import "./aboutUs.css"

function AboutUs() {
	return (
        <div className="d-flex flex-column">
            <section id="about-us" className="container-fluid px-0 page-snap-section about-us-section d-flex flex-column justify-content-center" aria-labelledby="about-us-title">
            <SectionContainer className="row g-4">
                    <div className="col-12 col-md-6" id="history-Photo">
                        <img src={AboutImage.route} alt={AboutImage.alt} className="img-fluid rounded-4" />
                    </div>
                    <div className="col-12 col-md-6" id="history-text">
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
        </div>
	)
}

export default AboutUs
