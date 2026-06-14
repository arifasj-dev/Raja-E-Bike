import React, { useState } from 'react';
import { X, Wrench, ShieldCheck, Zap } from 'lucide-react';

export default function SparesServices({ onBookTestRide }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Dynamically load images from the Spares and services folder
  const modules = import.meta.glob('/public/assets/Spares and services/**/*.{jpg,jpeg,png,webp,mp4}', { query: '?url', eager: true });
  const galleryItems = Object.keys(modules).map((path, index) => {
    return {
      id: index + 1,
      src: modules[path].default,
      alt: `Spares and Services Gallery Item ${index + 1}`
    };
  });

  return (
    <div className="animate-fade-in pt-12 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#00E5FF] font-semibold text-xs tracking-widest uppercase leading-none">
          Maintenance & Support
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-heading text-white mt-4 mb-6">
          Spares and Services
        </h1>
        <p className="text-[#9E9EAF] text-lg font-light leading-relaxed">
          We provide the best services at an incredibly affordable price. Our team consists of highly experienced mechanics who are experts in electric vehicles, ensuring your scooter runs perfectly. From routine check-ups to complex part replacements, we have you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 hover:border-[#00E5FF]/40 transition-colors">
          <div className="w-12 h-12 bg-[rgba(0,229,255,0.1)] rounded-xl flex items-center justify-center text-[#00E5FF] mb-6">
            <Wrench className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 font-heading">Expert Mechanics</h3>
          <p className="text-[#9E9EAF] font-light text-sm">
            Trained specifically for EV architectures. Our mechanics diagnose and resolve issues with pinpoint accuracy.
          </p>
        </div>

        <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 hover:border-[#00E676]/40 transition-colors">
          <div className="w-12 h-12 bg-[rgba(0,230,118,0.1)] rounded-xl flex items-center justify-center text-[#00E676] mb-6">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 font-heading">Genuine Spares</h3>
          <p className="text-[#9E9EAF] font-light text-sm">
            We stock only 100% genuine Gaura OEM replacement parts, ensuring your warranty remains intact and performance stays peak.
          </p>
        </div>

        <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 hover:border-[#00E5FF]/40 transition-colors">
          <div className="w-12 h-12 bg-[rgba(0,229,255,0.1)] rounded-xl flex items-center justify-center text-[#00E5FF] mb-6">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 font-heading">Affordable Pricing</h3>
          <p className="text-[#9E9EAF] font-light text-sm">
            Premium service doesn't have to break the bank. We offer highly competitive pricing for all maintenance work.
          </p>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-black font-heading text-white">Our Service Gallery</h2>
        <p className="text-[#9E9EAF] mt-2">Take a look at our workshop and genuine spare parts inventory.</p>
      </div>

      {/* CSS Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative rounded-xl overflow-hidden cursor-pointer bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] aspect-square flex items-center justify-center"
            onClick={() => setSelectedImage(item.src)}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://placehold.co/600x600/121212/00E5FF?text=Loading...'
              }}
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold tracking-wide uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button 
            className="absolute top-6 right-6 z-[60] text-white hover:text-[#00E5FF] transition-colors cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain animate-fade-in"
          />
        </div>
      )}
    </div>
  );
}
