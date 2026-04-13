import { Navbar } from "./components/Navbar.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { AgenciesMapSection } from "./components/AgenciesMapSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";
import { TrustSection } from "./components/TrustSection.jsx";
import { CTASection } from "./components/CTASection.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink selection:bg-cyan/30 selection:text-ink">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <AboutSection />
        <AgenciesMapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
