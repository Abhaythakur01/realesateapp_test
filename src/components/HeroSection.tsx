import { ChevronDown } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function HeroSection() {
  // Static hero data - you can replace this with props or context
  const hero = {
    title: 'LUXURY RESIDENCES',
    tagline: 'Experience the epitome of luxury living in the heart of the city',
    background_image_url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rera_number: 'P51234567890',
    cta_text: 'Enquire Now',
    is_active: true
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70 z-10" />
        <img
          src={hero.background_image_url || ''}
          alt="Luxury Residence"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm font-medium tracking-wider">
                RERA: {hero.rera_number}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-amber-500 mb-2">{hero.title}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-xl">
              {hero.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-md hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Explore More
              <ChevronDown size={20} />
            </a>
            <a
              href="#floor-plans"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              View Floor Plans
            </a>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 lg:p-10">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {hero.cta_text || 'Enquire Now'}
            </h3>
            <p className="text-gray-600">
              Fill in your details and our team will contact you shortly
            </p>
          </div>
          <EnquiryForm source="hero" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="block text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}