import { Award, Building, Calendar, ExternalLink } from 'lucide-react';

export default function DeveloperSection() {
  // Static developer info - you can replace this with props or context
  const developer = {
    name: 'Premium Builders & Developers',
    description: 'With over two decades of excellence in real estate development, we have established ourselves as one of the most trusted names in the industry. Our commitment to quality, innovation, and customer satisfaction has helped us deliver numerous landmark projects across the region. We believe in creating not just buildings, but communities where families thrive and memories are made. Our focus on sustainable development and modern amenities ensures that every project we undertake sets new benchmarks in luxury living.',
    established_year: 2000,
    projects_completed: 50,
    logo_url: '', // Add your logo URL here
    website_url: 'https://www.premiumbuilders.com'
  };

  return (
    <section id="developer" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About The <span className="text-amber-600">Developer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl opacity-10 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 shadow-2xl">
              <div className="text-center space-y-8">
                {developer.logo_url ? (
                  <img
                    src={developer.logo_url}
                    alt={developer.name}
                    className="h-24 mx-auto object-contain"
                  />
                ) : (
                  <div className="p-6 bg-amber-600 rounded-2xl inline-block">
                    <Building size={48} className="text-white" />
                  </div>
                )}

                <h3 className="text-3xl font-bold text-white">{developer.name}</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <Calendar className="text-amber-400 mx-auto mb-3" size={32} />
                    <p className="text-3xl font-bold text-white mb-1">
                      {new Date().getFullYear() - developer.established_year}+
                    </p>
                    <p className="text-gray-300 text-sm">Years of Excellence</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <Award className="text-amber-400 mx-auto mb-3" size={32} />
                    <p className="text-3xl font-bold text-white mb-1">
                      {developer.projects_completed}+
                    </p>
                    <p className="text-gray-300 text-sm">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {developer.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Our Commitment</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Quality construction and timely delivery</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Transparent business practices</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Customer satisfaction and trust</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Sustainable and eco-friendly development</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
