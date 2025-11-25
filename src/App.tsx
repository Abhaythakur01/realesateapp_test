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
import EnquiryModal from './components/EnquiryModal';
import StickyBrochureButton from './components/StickyBrochureButton';
import StickyBottomCTA from './components/StickyBottomCTA'; 

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <main className="w-full overflow-x-hidden pb-16 lg:pb-0">
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
      <EnquiryModal />
      <StickyBrochureButton />
      <StickyBottomCTA />
    </div>
  );
}

export default App;
