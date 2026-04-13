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
    <div className="min-h-screen overflow-hidden bg-night text-mist selection:bg-ocean/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_8%,rgba(40,182,200,0.18),transparent_28rem),radial-gradient(circle_at_84%_18%,rgba(199,167,106,0.14),transparent_26rem),linear-gradient(180deg,#07131f_0%,#0a1b2b_44%,#07131f_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.18] mix-blend-screen [background-image:repeating-radial-gradient(circle_at_20%_10%,rgba(255,255,255,.16)_0_1px,transparent_1px_5px)]" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AgenciesMapSection />
        <AboutSection />
        <ServicesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
