import { Download, Maximize2, IndianRupee } from 'lucide-react';

export default function ConfigurationsSection() {
  // Static configurations data - you can replace this with props or context
  const configurations = [
    {
      id: 1,
      type: '1 BHK',
      description: 'Cozy & Efficient',
      size_sqft: 650,
      size_sqm: 60,
      price_starting_from: 4500000,
      thumbnail_url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      floor_plan_pdf_url: '/floor-plans/1bhk.pdf',
      is_active: true,
      display_order: 1
    },
    {
      id: 2,
      type: '2 BHK',
      description: 'Perfect Balance',
      size_sqft: 1050,
      size_sqm: 98,
      price_starting_from: 7200000,
      thumbnail_url: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      floor_plan_pdf_url: '/floor-plans/2bhk.pdf',
      is_active: true,
      display_order: 2
    },
    {
      id: 3,
      type: '3 BHK',
      description: 'Spacious Living',
      size_sqft: 1450,
      size_sqm: 135,
      price_starting_from: 10500000,
      thumbnail_url: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
      floor_plan_pdf_url: '/floor-plans/3bhk.pdf',
      is_active: true,
      display_order: 3
    },
    {
      id: 4,
      type: '4 BHK',
      description: 'Ultimate Luxury',
      size_sqft: 2100,
      size_sqm: 195,
      price_starting_from: 15800000,
      thumbnail_url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      floor_plan_pdf_url: '/floor-plans/4bhk.pdf',
      is_active: true,
      display_order: 4
    }
  ];

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(2)} Cr`;
    }
    return `${(price / 100000).toFixed(2)} Lac`;
  };

  return (
    <section id="floor-plans" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Floor <span className="text-amber-600">Plans</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our meticulously designed floor plans that cater to your lifestyle needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {configurations.map((config) => (
            <div
              key={config.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                <img
                  src={config.thumbnail_url}
                  alt={config.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1">{config.type}</h3>
                  <p className="text-amber-400 font-medium">{config.description}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                      <Maximize2 size={16} />
                      <span>Sq. Ft.</span>
                    </div>
                    <p className="text-xl font-bold text-slate-900">
                      {config.size_sqft.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                      <Maximize2 size={16} />
                      <span>Sq. M.</span>
                    </div>
                    <p className="text-xl font-bold text-slate-900">
                      {config.size_sqm.toLocaleString()}
                    </p>
                  </div>
                </div>

                {config.price_starting_from > 0 && (
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-amber-700 text-sm mb-1">
                      <IndianRupee size={16} />
                      <span>Starting From</span>
                    </div>
                    <p className="text-2xl font-bold text-amber-900">
                      {formatPrice(config.price_starting_from)}
                    </p>
                  </div>
                )}

                {config.floor_plan_pdf_url && (
                  <a
                    href={config.floor_plan_pdf_url}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <Download size={18} />
                    Download Plan
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            * Prices are subject to change. Please contact our sales team for the latest pricing.
          </p>
        </div>
      </div>
    </section>
  );
}