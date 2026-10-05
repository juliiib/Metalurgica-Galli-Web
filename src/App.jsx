import AboutUs from "./sections/aboutUs/AboutUs.jsx";
import Header from "./components/header/Header.jsx";
import WhatsAppNav from "./components/whatsApp-nav/WhatsApp-nav.jsx";
import Hero from "./sections/hero/Hero.jsx";
import Machinery from "./sections/Machinery/Machinery.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Contacts from "./sections/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Header />
            <main className="page-snap-container page-snap-bleed">
                <Hero />
                <AboutUs />
                <Machinery />
                <Projects />
                {/* <Clients /> */}
                <Contacts />
                <Footer />
            </main>
            <WhatsAppNav />
        </>
    )
}

export default App
