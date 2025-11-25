import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

interface GalleryItem {
  id: number;
  title: string;
  media_url: string;
  media_type: 'image' | 'video';
  category: string;
  is_active: boolean;
  display_order: number;
}

export default function GallerySection() {
  // Static gallery items - you can replace this with props or context
  const [galleryItems] = useState<GalleryItem[]>([
    {
      id: 1,
      title: 'Main Entrance',
      media_url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'exterior',
      is_active: true,
      display_order: 1
    },
    {
      id: 2,
      title: 'Building Facade',
      media_url: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'exterior',
      is_active: true,
      display_order: 2
    },
    {
      id: 3,
      title: 'Living Room',
      media_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'interior',
      is_active: true,
      display_order: 3
    },
    {
      id: 4,
      title: 'Modern Kitchen',
      media_url: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'interior',
      is_active: true,
      display_order: 4
    },
    {
      id: 5,
      title: 'Master Bedroom',
      media_url: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'interior',
      is_active: true,
      display_order: 5
    },
    {
      id: 6,
      title: 'Swimming Pool',
      media_url: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'amenities',
      is_active: true,
      display_order: 6
    },
    {
      id: 7,
      title: 'Fitness Center',
      media_url: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'amenities',
      is_active: true,
      display_order: 7
    },
    {
      id: 8,
      title: 'Landscaped Gardens',
      media_url: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'amenities',
      is_active: true,
      display_order: 8
    },
    {
      id: 9,
      title: 'Clubhouse',
      media_url: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      media_type: 'image',
      category: 'amenities',
      is_active: true,
      display_order: 9
    }
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'interior', label: 'Interior' },
    { id: 'amenities', label: 'Amenities' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const title = useScrollAnimation({ animation: 'slideInDown' });
  const grid = useStaggerAnimation(filteredItems.length, { animation: 'scaleIn' });

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={title.ref}
          className={`text-center mb-16 ${title.className}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Project <span className="text-amber-600">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the stunning visuals of our luxury residences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer aspect-[4/3] ${grid.getItemClassName(index)}`}
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={item.media_url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {item.media_type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                    <Play size={48} className="text-white" />
                  </div>
                </div>
              )}
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">{item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white hover:text-amber-500 transition-colors z-50"
          >
            <X size={32} />
          </button>

          {lightboxIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-50"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {lightboxIndex < filteredItems.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-50"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <div className="max-w-7xl max-h-[90vh] px-4">
            {filteredItems[lightboxIndex].media_type === 'image' ? (
              <img
                src={filteredItems[lightboxIndex].media_url}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[90vh] object-contain"
              />
            ) : (
              <video
                src={filteredItems[lightboxIndex].media_url}
                controls
                autoPlay
                className="max-w-full max-h-[90vh]"
              />
            )}
            {filteredItems[lightboxIndex].title && (
              <p className="text-white text-center mt-4 text-lg">
                {filteredItems[lightboxIndex].title}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}