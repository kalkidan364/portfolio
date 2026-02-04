import Navbar from './components/Layout/Navbar';
import HorizontalNav from './components/Layout/HorizontalNav';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import JourneySection from './components/Journey/JourneySection';
import WorkSection from './components/Work/WorkSection';
import ContactSection from './components/Contact/ContactSection';
import './App.css';

function App() {
  return (
    <div className="App bg-black text-white overflow-hidden">
      <Navbar />
      <HorizontalNav />
      {/* Horizontal Scroll Container */}
      <div className="horizontal-scroll-container">
        <div className="horizontal-scroll-wrapper">
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <WorkSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
