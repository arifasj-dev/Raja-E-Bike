import React, { useState } from 'react';
import ProductShowcase from '../components/ProductShowcase';
import { X } from 'lucide-react';

export default function Models({ onBookTestRide }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Dynamically load all images from the Models folder
  const modules = import.meta.glob('/public/assets/Models/*.{jpg,jpeg,png,webp}', { query: '?url', eager: true });
  const modelImages = Object.keys(modules).map((path, index) => {
    return {
      id: index,
      src: path.replace('/public', ''),
      alt: `Gaura Model Image ${index + 1}`
    };
  });

  return (
    <div className="animate-fade-in pt-12 pb-24">
      <div className="text-center max-w-2xl mx-auto mb-12 px-6">
        <span className="text-[#00E676] font-semibold text-xs tracking-widest uppercase leading-none">
          Our Fleet
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-heading text-white mt-4 mb-6">
          Premium Electric Models
        </h1>
        <p className="text-[#9E9EAF] text-lg font-light">
          Compare specifications and find the perfect ride for your lifestyle. High-performance, eco-friendly, and breathtakingly fast.
        </p>
      </div>
      
      <ProductShowcase onBookTestRide={onBookTestRide} />

      {/* Model Image Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black font-heading text-white">More Views & Angles</h2>
          <p className="text-[#9E9EAF] mt-2">Explore additional shots of our Gaura models.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {modelImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-[rgba(255,255,255,0.05)] group bg-[rgba(255,255,255,0.02)]"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-semibold tracking-wide uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#00E5FF] transition-colors cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded model view" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain animate-fade-in"
          />
        </div>
      )}
    </div>
  );
}
