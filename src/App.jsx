import AboutUs from "./sections/AboutUs/AboutUs.jsx";
import Header from "./components/Header/Header.jsx";
import WhatsAppNav from "./components/WhatsAppNav/WhatsAppNav.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Machines from "./sections/Machines/Machines.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Contacts from "./sections/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MissionVision from "./sections/MissionVision/MissionVision.jsx";
import Clients from "./sections/Clients/Clients.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <MissionVision />
        <Machines />
        <Projects />
        <Clients />
        <Contacts />
        <Footer />
      </main>
      <WhatsAppNav />
    </>
  );
}

export default App;
