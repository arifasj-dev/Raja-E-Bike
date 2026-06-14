import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { useNavigate } from 'react-router-dom';

export default function Home({ onBookTestRide }) {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <Hero onBookTestRide={onBookTestRide} />
      <Features />
      
      {/* Dynamic Showroom Photo Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 text-left z-10">
              <span className="text-[#00E676] font-semibold text-xs tracking-widest uppercase leading-none mb-3 block">
                Flagship Store
              </span>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-white mb-6">
                Visit Our Showroom
              </h2>
              <p className="text-[#9E9EAF] font-light text-lg leading-relaxed mb-8">
                Step into the future of electric mobility at our flagship Raja E-Bikes showroom. Experience the premium build quality of our Gaura scooters in person, get expert advice from our staff, and take a test ride today.
              </p>
              <button 
                onClick={onBookTestRide}
                className="px-8 py-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] text-white hover:border-[#00E5FF] hover:bg-[rgba(0,229,255,0.05)] font-bold text-sm transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                Get Directions
              </button>
            </div>

            <div className="lg:w-1/2 relative perspective-1000 w-full group">
              {/* Dynamic Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E676] to-[#00E5FF] opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700 rounded-3xl z-0 pointer-events-none"></div>
              
              {/* Image Container with 3D Float Effect */}
              <div className="relative z-10 w-full rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-2xl transition-all duration-700 ease-out transform group-hover:scale-[1.03] group-hover:rotate-y-2 group-hover:rotate-x-2 bg-[#0E0E12]">
                <img 
                  src="/assets/Showroom_front.png" 
                  alt="Raja E Bikes Showroom Exterior" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/assets/showroom.png'; // Fallback to existing showroom png if available
                  }}
                />
                
                {/* Glassmorphic Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div>
                    <div className="text-white font-bold text-sm">Pudukkottai Branch</div>
                    <div className="text-[#00E5FF] text-xs mt-0.5">Open Today until 8:00 PM</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                    📍
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick teaser to redirect to Models */}
      <section className="py-20 relative bg-[#0B0B0E] border-t border-[rgba(255,255,255,0.02)] overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-black font-heading text-white mb-6">Discover the lineup</h2>
          <p className="text-[#9E9EAF] max-w-2xl mx-auto mb-10">
            From daily commuters to high-performance cyber rides, explore our full range of electric scooters and motorcycles.
          </p>
          <button 
            onClick={() => navigate('/models')}
            className="px-8 py-3 rounded-xl border border-[#00E5FF] text-[#00E5FF] hover:bg-[rgba(0,229,255,0.1)] font-bold text-sm transition-all duration-300 cursor-pointer"
          >
            Explore Our Models →
          </button>
        </div>
      </section>
    </div>
  );
}
