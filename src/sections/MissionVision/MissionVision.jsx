import { CompanyInfo } from "../../data/CompanyInformation.js"
import { certifications } from "../../data/CompanyInformation.js"

import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx"
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx"

import "./missionVision.css"

function MissionVision() {
    return (
        <section className="container-fluid px-0 page-snap-section mission-vision-section d-flex flex-column justify-content-center" aria-label="Misión y visión">
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
                                src={certifications[0].route}
                                alt="Certificación ISO 9001"
                            />
                            <img
                                className="certification-badge"
                                src={certifications[1].route}
                                alt="Certificación IQNet"
                            />
                        </div>
                    </div>
                </SectionContainer>
            </section>
    )
}

export default MissionVision;