// Import machinery images.
import machiningCenter from "../assets/machinery/centro-de-mecanizado .webp"
import cncMillingMachine from "../assets/machinery/fresadora-cnc .webp"
import cncLathe from "../assets/machinery/torno-cnc .webp"
import cncLatheSecond from "../assets/machinery/torno-cnc-2.webp"
import conventionalLathe from "../assets/machinery/torno-convencional .webp"
import conventionalLatheSecond from "../assets/machinery/torno-convencional-2 .webp"
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

export const machinery = [
    {
        id: 1 ,
        title: "Tornos convencionales",
        amount: "6",
        specifications: "hasta Ø1000 x 6000 / Ø1800 x 5000"
    },
    {
        id: 2 ,
        title: "Fresadoras convencionales",
        amount: "2",
        specifications: "Dimensiones X1000 Y300 Z500"
    },
    {
        id: 3 ,
        title: "Alesadora",
        amount: "1",
        specifications: "Dimensiones X1000 Y1000 Z700"
    },
    {
        id: 4 ,
        title: "Centros de mecanizado CNC",
        amount: "4",
        specifications: "Dimensiones X1200 Y600 Z700"
    },
    {
        id: 5 ,
        title: "Frezadora CNC",
        amount: "1",
        specifications: "X1800 Y700 Z700"
    },
    {
        id: 6 ,
        title: "Rectificadora Universal",
        amount: "1",
        specifications: "Dimensiones Ø400 x 2000"
    },
    {
        id: 7 ,
        title: "Rectificadora Tangencial",
        amount: "1",
        specifications: "Dimensiones 1500 x 300"
    },
    {
        id: 8 ,
        title: "Agujereadoras",
        amount: "3",
        specifications: "Dimensiones máx. X500 Y500 Z1000"
    },
    {
        id: 9 ,
        title: "Prensa",
        amount: "1",
        specifications: "200 Tn"
    },
    {
        id: 10 ,
        title: "Pantografo plasma CNC",
        amount: "1",
        specifications: "Dimensiones 2500 x 6000"
    },
    {
        id: 11 ,
        title: "Grabadora láser CNC",
        amount: "1",
        specifications: ""
    },
    {
        id: 12 ,
        title: "Tornos CNC",
        amount: "3",
        specifications: "Dimensiones hasta Ø500 x 1500"
    }
]

export const machineryImages = [
    {
        id: 1,
        alt: "centro de mecanizado",
        route: machiningCenter
    },
    {
        id: 2,
        alt: "fresadora CNC",
        route: cncMillingMachine
    },
    {
        id: 3,
        alt: "torno CNC",
        route: cncLathe
    },
    {
        id: 4,
        alt: "torno CNC",
        route: cncLatheSecond
    },
    {
        id: 5,
        alt: "torno convencional",
        route: conventionalLathe
    },
    {
        id: 6,
        alt: "torno convencional",
        route: conventionalLatheSecond
    },
]

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
