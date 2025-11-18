import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

export default function ContactSection() {
  // Static contact info - you can replace this with props or context
  const contact = {
    phone_primary: '+91 98765 43210',
    phone_secondary: '+91 98765 43211',
    whatsapp_number: '+91 98765 43210',
    email: 'info@luxuryresidences.com',
    corporate_address: '123 Business Park, Sector 5, Mumbai, Maharashtra 400001, India',
    social_media: {
      facebook: 'https://facebook.com/luxuryresidences',
      instagram: 'https://instagram.com/luxuryresidences',
      linkedin: 'https://linkedin.com/company/luxuryresidences',
      youtube: 'https://youtube.com/@luxuryresidences'
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In <span className="text-amber-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Our team is here to help you find your dream home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Phone</p>
                    <a
                      href={`tel:${contact.phone_primary}`}
                      className="text-gray-700 hover:text-amber-600 transition-colors block"
                    >
                      {contact.phone_primary}
                    </a>
                    {contact.phone_secondary && (
                      <a
                        href={`tel:${contact.phone_secondary}`}
                        className="text-gray-700 hover:text-amber-600 transition-colors block"
                      >
                        {contact.phone_secondary}
                      </a>
                    )}
                  </div>
                </div>

                {contact.whatsapp_number && (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <MessageCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">WhatsApp</p>
                      <a
                        href={`https://wa.me/${contact.whatsapp_number.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-green-600 transition-colors"
                      >
                        {contact.whatsapp_number}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Corporate Office</p>
                    <p className="text-gray-700">{contact.corporate_address}</p>
                  </div>
                </div>
              </div>

              {contact.social_media && Object.keys(contact.social_media).length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="font-semibold text-slate-900 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {contact.social_media.facebook && (
                      <a
                        href={contact.social_media.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-amber-100 rounded-lg transition-colors"
                      >
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                    {contact.social_media.instagram && (
                      <a
                        href={contact.social_media.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-amber-100 rounded-lg transition-colors"
                      >
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                    {contact.social_media.linkedin && (
                      <a
                        href={contact.social_media.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-amber-100 rounded-lg transition-colors"
                      >
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {contact.social_media.youtube && (
                      <a
                        href={contact.social_media.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-amber-100 rounded-lg transition-colors"
                      >
                        <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us A Message</h3>
            <EnquiryForm source="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}