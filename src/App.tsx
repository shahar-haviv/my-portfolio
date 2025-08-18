
import './App.css'
import Navigation from "./components/Navigation";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-[url('/src/assets/bg16.svg')] bg-cover bg-fixed">

      {/* Right-side Navigation */}
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  )
}

export default App
