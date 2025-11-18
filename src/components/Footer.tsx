import { Building2 } from 'lucide-react';

export default function Footer() {
  // Static settings - you can replace this with props or context
  const settings = {
    site_title: 'LUXURY RESIDENCES',
    rera_disclaimer: 'This project is registered under RERA. Registration No: P51234567890. All specifications, plans, and designs are subject to change as may be decided by the competent authority and/or the developer. Computer-generated images are the artist\'s impression and are indicative in nature. The Developer/Owner reserves the right to make additions/deletions/alterations as may be necessary.',
    footer_text: `© ${new Date().getFullYear()} Luxury Residences. All rights reserved.`
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Floor Plans', href: '#floor-plans' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-amber-500" size={32} />
              <h3 className="text-2xl font-bold text-white">
                {settings?.site_title || 'Luxury Residences'}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience unparalleled luxury and sophistication in our meticulously crafted residences.
              Your dream home awaits.
            </p>
            {settings?.rera_disclaimer && (
              <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
                <p className="text-sm text-amber-200 leading-relaxed">
                  <strong className="block mb-2">RERA Disclaimer:</strong>
                  {settings.rera_disclaimer}
                </p>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-500">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200">
                  RERA Details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {settings?.footer_text || `© ${currentYear} Luxury Residences. All rights reserved.`}
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              Designed & Developed with precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}