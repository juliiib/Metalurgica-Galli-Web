import AboutUs from "./sections/aboutUs/AboutUs.jsx";
import Header from "./components/header/Header.jsx";
import WhatsAppNav from "./components/whatsApp-nav/WhatsApp-nav.jsx";
import Hero from "./sections/hero/Hero.jsx";
import Services from "./sections/Services/Services.jsx";

function App() {
    return (
        <>
            <Header />
            <main className="page-snap-container page-snap-bleed">
                <Hero />
                <AboutUs />
                <Services />
                {/* <Clients /> */}
            </main>
            <WhatsAppNav />
        </>
    )
}

export default App
