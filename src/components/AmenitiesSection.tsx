import * as Icons from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

export default function AmenitiesSection() {
  // Static amenities data - you can replace this with props or context
  const amenities = [
    {
      id: 1,
      name: 'Swimming Pool',
      description: 'Olympic-sized pool',
      icon_name: 'Waves',
      is_active: true,
      display_order: 1
    },
    {
      id: 2,
      name: 'Fitness Center',
      description: 'State-of-the-art gym',
      icon_name: 'Dumbbell',
      is_active: true,
      display_order: 2
    },
    {
      id: 3,
      name: 'Kids Play Area',
      description: 'Safe and fun space',
      icon_name: 'Baby',
      is_active: true,
      display_order: 3
    },
    {
      id: 4,
      name: 'Clubhouse',
      description: 'Premium lounge',
      icon_name: 'Home',
      is_active: true,
      display_order: 4
    },
    {
      id: 5,
      name: 'Landscaped Gardens',
      description: 'Green spaces',
      icon_name: 'Trees',
      is_active: true,
      display_order: 5
    },
    {
      id: 6,
      name: '24/7 Security',
      description: 'CCTV surveillance',
      icon_name: 'Shield',
      is_active: true,
      display_order: 6
    },
    {
      id: 7,
      name: 'Parking',
      description: 'Covered parking',
      icon_name: 'Car',
      is_active: true,
      display_order: 7
    },
    {
      id: 8,
      name: 'Power Backup',
      description: '100% backup',
      icon_name: 'Zap',
      is_active: true,
      display_order: 8
    },
    {
      id: 9,
      name: 'Yoga & Meditation',
      description: 'Wellness center',
      icon_name: 'Heart',
      is_active: true,
      display_order: 9
    },
    {
      id: 10,
      name: 'Indoor Games',
      description: 'Recreation room',
      icon_name: 'Gamepad2',
      is_active: true,
      display_order: 10
    },
    {
      id: 11,
      name: 'Jogging Track',
      description: 'Outdoor track',
      icon_name: 'Activity',
      is_active: true,
      display_order: 11
    },
    {
      id: 12,
      name: 'Amphitheater',
      description: 'Community events',
      icon_name: 'Theater',
      is_active: true,
      display_order: 12
    }
  ];

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon size={32} /> : <Icons.Circle size={32} />;
  };

  const title = useScrollAnimation({ animation: 'slideInDown' });
  const grid = useStaggerAnimation(amenities.length, { animation: 'scaleIn' });

  return (
    <section id="amenities" className="py-16 md:py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          ref={title.ref}
          className={`text-center mb-16 ${title.className}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            World-Class <span className="text-amber-600">Amenities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury living with our carefully curated selection of premium amenities
            designed to elevate your lifestyle.
          </p>
        </div>

        <div ref={grid.ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.id}
              className={`group bg-gradient-to-br from-gray-50 to-white p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${grid.getItemClassName(index)}`}
            >
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg md:rounded-xl group-hover:from-amber-600 group-hover:to-amber-500 transition-all duration-300">
                  <div className="text-amber-600 group-hover:text-white transition-colors duration-300">
                    {getIcon(amenity.icon_name)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm md:text-base mb-1">
                    {amenity.name}
                  </h3>
                  {amenity.description && (
                    <p className="text-xs md:text-sm text-gray-600">{amenity.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}