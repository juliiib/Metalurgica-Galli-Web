// Import client logos.
import arcelorMittalLogo from "../assets/client-logo/arcelor-mittal.png"
import argentalLogo from "../assets/client-logo/argental.png"
import acerbragLogo from "../assets/client-logo/logo-acerbrag.svg"
import seccoLogo from "../assets/client-logo/logosecco.svg"
import rhiMagnesitaLogo from "../assets/client-logo/rhi-magnesita_logo_grey.jpg"
import sidersaLogo from "../assets/client-logo/sidersa.png"
import techintLogo from "../assets/client-logo/techint.png"
import terniumLogo from "../assets/client-logo/ternium-logo_brandlogos.net_nuhs6.png"
import weldingAlloysLogo from "../assets/client-logo/welding-Alloys.png"
import yaraLogo from "../assets/client-logo/yara.png"
// Import certification images.
import iso9001Certification from "../assets/certification/ISO-9001-6449.jpg"
import iqnetCertification from "../assets/certification/IQNet.png"

export const ContactInfo = {
    phoneNumber: "5493364272165",
    whatsAppMessage: "Hola, me contacto desde la web. Quería consultar por un presupuesto.",
    email: "admin2@metalurgicagalli.com.ar",
    horario: "pendiente a confirmar",
    address: "Rivarola 4973, Villa Constitución, Santa Fe, Argentina",
}

export const CompanyInfo = {
    history: [
        "Somos una empresa con más de 30 años de trayectoria, donde hemos evolucionado de ser un emprendimiento familiar a llegar a ser una PYME.", 
        "Nuestro principio es, la innovación y la mejora continua como clave fundamental para el desarrollo a nivel empresarial. Como así también, ofrecer un servicio de calidad a través del compromiso y responsabilidad."
    ],
    mission: "Brindar servicios industriales confiables, competitivos y en tiempo. Maximizar producción y rentabilidad",
    vision: [
        "Ser referente en prestación de servicios industriales, con mano de obra especializada y calificada por medio del uso de equipos de última generación.", 
        "Cumpliendo con normas de seguridad y el medio ambiente Instalaciones que permitan el buen desarrollo de las actividades Ganar un mejor posicionamiento en el mercado y atraer nuevos clientes de otros sectores"
    ]
}

export const clientLogos = [
    {
        id: 1,
        alt: "Logo de ArcelorMittal",
        route: arcelorMittalLogo
    },
    {
        id: 2,
        alt: "Logo de Argental",
        route: argentalLogo
    },
    {
        id: 3,
        alt: "Logo de AcerBrag",
        route: acerbragLogo
    },
    {
        id: 4,
        alt: "Logo de Secco",
        route: seccoLogo
    },
    {
        id: 5,
        alt: "Logo de RHI Magnesita",
        route: rhiMagnesitaLogo
    },
    {
        id: 6,
        alt: "Logo de Sidersa",
        route: sidersaLogo
    },
    {
        id: 7,
        alt: "Logo de Techint",
        route: techintLogo
    },
    {
        id: 8,
        alt: "Logo de Ternium",
        route: terniumLogo
    },
    {
        id: 9,
        alt: "Logo de Welding Alloys",
        route: weldingAlloysLogo
    },
    {
        id: 10,
        alt: "Logo de Yara",
        route: yaraLogo
    },
]

export const certifications = [
    {
        id: 1,
        alt: "Certificación ISO 9001",
        route: iso9001Certification
    },
    {
        id: 2,
        alt: "IQNet",
        route: iqnetCertification
    }
]
