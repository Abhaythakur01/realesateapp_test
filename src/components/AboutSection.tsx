import { Building2, MapPin, Check } from 'lucide-react';

export default function AboutSection() {
  // Static project info - you can replace this with props or context
  const projectInfo = {
    description: 'Experience unparalleled luxury living in the heart of the city. Our exclusive residential development combines contemporary architecture with world-class amenities, offering you a lifestyle that exceeds all expectations. Each residence is meticulously designed to provide comfort, elegance, and sophistication.',
    land_parcel_size: '5.2 Acres',
    number_of_towers: '4',
    highlights: [
      'Premium location with excellent connectivity',
      'State-of-the-art clubhouse and fitness center',
      'Landscaped gardens and green spaces',
      'Advanced security systems with 24/7 monitoring',
      'Smart home automation features',
      'Swimming pool and kids play area',
      'Dedicated parking spaces',
      'Power backup and water supply',
      'Earthquake resistant RCC framed structure'
    ]
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About The <span className="text-amber-600">Project</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {projectInfo.description}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Land Parcel</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {projectInfo.land_parcel_size}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Building2 className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Towers</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {projectInfo.number_of_towers}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl opacity-10 blur-xl"></div>
            <img
              src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Project"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl w-full">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
            Project Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectInfo.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 md:p-5 rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="p-1 bg-amber-500 rounded-full">
                    <Check size={16} className="text-white" />
                  </div>
                </div>
                <p className="text-white text-sm md:text-base font-medium leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}