import AboutUs from "./sections/aboutUs/AboutUs.jsx";
import Header from "./components/header/Header.jsx";
import WhatsAppNav from "./components/whatsApp-nav/WhatsApp-nav.jsx";

function App() {
    return (
        <>
            <Header />
            <main className="page-snap-container">
                <AboutUs />
                {/* <Clients /> */}
            </main>
            <WhatsAppNav />
        </>
    )
}

export default App
