// Import machinery images.
import machiningCenter from "../assets/machinery/centro-de-mecanizado .webp"
import cncMillingMachine from "../assets/machinery/fresadora-cnc .webp"
import cncLathe from "../assets/machinery/torno-cnc .webp"
import cncLatheSecond from "../assets/machinery/torno-cnc-2.webp"
import conventionalLathe from "../assets/machinery/torno-convencional .webp"
import conventionalLatheSecond from "../assets/machinery/torno-convencional-2 .webp"

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