import { MapPin, Navigation } from 'lucide-react';

export default function LocationSection() {
  // Static location data - you can replace this with props or context
  const location = {
    address: 'Plot No. 123, Sector 5, Business District',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    google_maps_embed_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9471794726937!2d72.82776831490005!3d19.01441408711871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce9a0a87e607%3A0xf5b6d8e1e1f8e1f8!2sGateway%20of%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin',
    map_image_url: '',
    nearby_places: [
      { name: 'International Airport', distance: '8 km' },
      { name: 'Metro Station', distance: '500 m' },
      { name: 'Shopping Mall', distance: '1.2 km' },
      { name: 'Hospital', distance: '2 km' },
      { name: 'IT Park', distance: '3 km' },
      { name: 'International School', distance: '1.5 km' },
      { name: 'Business Hub', distance: '2.5 km' },
      { name: 'Expressway', distance: '4 km' }
    ]
  };

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Prime <span className="text-amber-600">Location</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located in the heart of the city with excellent connectivity to key destinations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-600 rounded-lg flex-shrink-0">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">{location.address}</p>
                  <p className="text-gray-600 mt-2">
                    {location.city}, {location.state} - {location.pincode}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Navigation className="text-amber-600" size={28} />
                Nearby Landmarks
              </h3>
              <div className="space-y-4">
                {location.nearby_places.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="font-medium text-slate-900">{place.name}</span>
                    </div>
                    <span className="text-amber-600 font-semibold">{place.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px] border-4 border-gray-200">
            {location.google_maps_embed_url ? (
              <iframe
                src={location.google_maps_embed_url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            ) : location.map_image_url ? (
              <img
                src={location.map_image_url}
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}