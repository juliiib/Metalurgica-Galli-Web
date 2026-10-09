import "./Footer.css";
import { ContactInfo } from "../../data/CompanyInformation.js";
import SectionContainer from "../SectionContainer/SectionContainer.jsx";

function Footer() {
  return (
    <footer className="footer-section page-snap-section" aria-labelledby="footer-title">
      <SectionContainer className="footer-content">
        <h2 className="h2 fw-semibold mb-4" id="footer-title">
          Dirección y horarios
        </h2>
        <div className="row g-3 mb-4">
          <div className="col-12 col-md-6">
            <h3 className="h6 fw-semibold mb-1">Dirección</h3>
            <p className="mb-0">{ContactInfo.address}</p>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="h6 fw-semibold mb-1">Horarios</h3>
            <p className="mb-0">{ContactInfo.schedule}</p>
          </div>
        </div>
        <iframe
          className="footer-map"
          title="Ubicación de Metalúrgica Galli en Google Maps"
          src="https://maps.google.com/maps?q=Metal%C3%BArgica%20Galli&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </SectionContainer>
    </footer>
  );
}

export default Footer;
