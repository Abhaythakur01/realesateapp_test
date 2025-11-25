import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function StickyBottomCTA() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const phoneNumber = '+91 1234567890'; // Update with your actual phone number
  const enquiryEmail = 'info@saisiddhi.com'; // Update with your actual email

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEnquireNow = () => {
    // Scroll to contact section or open enquiry modal
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Or you can trigger the enquiry modal to open
    // setShowEnquiryModal(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="grid grid-cols-2 shadow-2xl">
        {/* Call Now Button */}
        <button
          onClick={handleCallNow}
          className="flex items-center justify-center gap-2 bg-slate-900 text-white py-4 px-4 font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-slate-800 transition-colors duration-200 border-r border-slate-700"
        >
          <Phone size={18} className="animate-pulse" />
          <span>Call Now</span>
        </button>

        {/* Enquire Now Button */}
        <button
          onClick={handleEnquireNow}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white py-4 px-4 font-bold text-xs sm:text-sm uppercase tracking-wide hover:from-amber-700 hover:to-amber-600 transition-all duration-200"
        >
          <Mail size={18} />
          <span>Enquire Now</span>
        </button>
      </div>
    </div>
  );
}
