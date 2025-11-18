import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AmenitiesSection from './components/AmenitiesSection';
import ConfigurationsSection from './components/ConfigurationsSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import DeveloperSection from './components/DeveloperSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AmenitiesSection />
        <ConfigurationsSection />
        <GallerySection />
        <LocationSection />
        <DeveloperSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
