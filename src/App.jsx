import AboutUs from "./sections/AboutUs.jsx";
import Header from "./components/Header.jsx";
import WhatsAppNav from "./components/WhatsApp-nav.jsx";

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
