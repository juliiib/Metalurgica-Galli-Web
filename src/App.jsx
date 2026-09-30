import AboutUs from "./sections/aboutUs.jsx";
import Clients from "./sections/clients.jsx";
import Header from "./components/header.jsx";
import WhatsAppNav from "./components/whatsApp-nav.jsx";

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
