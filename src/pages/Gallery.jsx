import React, { useState } from 'react';
import { X, PlayCircle } from 'lucide-react';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Automatically find any images or videos placed in the public/assets/gallery/ folder (including subfolders)
  const modules = import.meta.glob('/public/assets/gallery/**/*.{jpg,jpeg,png,webp,mp4}', { query: '?url', eager: true });
  const galleryItems = Object.keys(modules).map((path, index) => {
    // Use Vite's resolved URL directly
    const srcPath = modules[path].default;
    const isVideo = srcPath.toLowerCase().endsWith('.mp4');
    return {
      id: index + 1,
      src: srcPath,
      alt: `Raja E-Bike Gallery Item ${index + 1}`,
      type: isVideo ? 'video' : 'image'
    };
  });

  return (
    <div className="animate-fade-in pt-12 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#00E5FF] font-semibold text-xs tracking-widest uppercase leading-none">
          Inside Raja E-Bike
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-heading text-white mt-4 mb-6">
          Showroom Gallery
        </h1>
        <p className="text-[#9E9EAF] text-lg font-light leading-relaxed">
          Take a look inside Pudukkottai's premier electric vehicle destination.
        </p>
      </div>

      {/* CSS Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] aspect-[4/3] flex items-center justify-center"
            onClick={() => setSelectedItem(item)}
          >
            {item.type === 'video' ? (
              <>
                <video 
                  src={item.src} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  autoPlay loop muted playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white transition-colors drop-shadow-lg" />
                </div>
              </>
            ) : (
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'https://placehold.co/600x400/121212/00E5FF?text=Error+Loading+Image'
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-semibold">
                {item.type === 'video' ? 'Video View' : item.alt}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button 
            className="absolute top-6 right-6 z-[60] text-white hover:text-[#00E5FF] transition-colors cursor-pointer"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {selectedItem.type === 'video' ? (
            <video 
              src={selectedItem.src} 
              controls 
              autoPlay 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain animate-fade-in outline-none"
            />
          ) : (
            <img 
              src={selectedItem.src} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain animate-fade-in"
            />
          )}
        </div>
      )}
    </div>
  );
}
