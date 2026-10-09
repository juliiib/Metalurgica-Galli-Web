import { clientLogos } from "../../data/CompanyInformation.js";
import SectionContainer from "../../components/SectionContainer/SectionContainer.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import "./Clients.css";

function Clients() {
  return (
    <SectionContainer
      as="section"
      className="clients-section d-flex flex-column justify-content-center"
      aria-labelledby="clients-title"
    >
      <SectionHeader title="Nuestros clientes" id="clients-title" className="mb-4" />

      <div className="clients-carousel" aria-label="Logos de nuestros clientes">
        <div className="clients-carousel-track d-flex">
          {[0, 1].map((copy) => (
            <div
              className="clients-carousel-group d-flex flex-shrink-0 align-items-center"
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {clientLogos.map((client) => (
                <div
                  className="clients-carousel-item d-flex flex-shrink-0 align-items-center justify-content-center"
                  key={client.id}
                >
                  <img
                    className="img-fluid object-fit-contain"
                    src={client.route}
                    alt={copy === 0 ? client.alt : ""}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Clients;
