import { useState, useEffect } from 'react';
import { X, User, Phone, Mail, Send } from 'lucide-react';

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    consent: true
  });

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolled past 300px and hasn't triggered yet in this session
      if (!hasTriggered && window.scrollY > 300) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Modal Form Submitted:', formData);
    alert('Thank you! We will contact you shortly.');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 font-sans">
      {/* Blurred Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-all duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg transform transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* The Card */}
        <div className="relative bg-[#020617] border-2 border-slate-700 p-8 shadow-2xl">
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl text-white font-serif tracking-wide mb-2">
              Enquire Now
            </h2>
            <div className="h-0.5 w-12 bg-white mx-auto mb-3 opacity-50"></div>
            <p className="text-gray-300 text-sm font-medium tracking-wider uppercase">
              Please Enter Your Details
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name Field */}
            <div className="flex shadow-sm">
              <div className="w-12 bg-[#0F172A] border border-r-0 border-slate-600 flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
              <input 
                type="text" 
                required
                placeholder="Name*" 
                className="flex-1 px-4 py-3 bg-white text-slate-900 placeholder-gray-500 outline-none focus:ring-0 border border-l-0 border-slate-600"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Mobile Field */}
            <div className="flex shadow-sm">
              <div className="w-12 bg-[#0F172A] border border-r-0 border-slate-600 flex items-center justify-center">
                <Phone size={20} className="text-white" />
              </div>
              <input 
                type="tel" 
                required
                placeholder="Mobile*" 
                className="flex-1 px-4 py-3 bg-white text-slate-900 placeholder-gray-500 outline-none focus:ring-0 border border-l-0 border-slate-600"
                value={formData.mobile}
                onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              />
            </div>

            {/* Email Field */}
            <div className="flex shadow-sm">
              <div className="w-12 bg-[#0F172A] border border-r-0 border-slate-600 flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <input 
                type="email" 
                required
                placeholder="Email*" 
                className="flex-1 px-4 py-3 bg-white text-slate-900 placeholder-gray-500 outline-none focus:ring-0 border border-l-0 border-slate-600"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 mt-2">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded cursor-pointer"
                />
              </div>
              <label htmlFor="consent" className="text-xs text-gray-300 leading-tight cursor-pointer">
                I agree to be contacted by the sales team via email, SMS, WhatsApp, and Calls.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-white text-slate-900 font-bold py-3 px-6 hover:bg-gray-100 transition-colors duration-200 shadow-lg tracking-wide text-sm uppercase flex items-center justify-center gap-2"
            >
               Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}