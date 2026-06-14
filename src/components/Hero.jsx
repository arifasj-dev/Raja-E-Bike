import React from 'react';
import { ShieldCheck, Zap, Fuel, Leaf } from 'lucide-react';

export default function Hero({ onBookTestRide }) {
  return (
    <section id="home" className="relative min-h-screen bg-[#08080A] pt-32 pb-20 flex items-center overflow-hidden">
      
      {/* Background Neon Spotlight Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[rgba(0,230,118,0.15)] to-transparent filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[rgba(0,229,255,0.12)] to-transparent filter blur-[120px] pointer-events-none"></div>
      
      {/* Visual Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy & Headlines */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Badge indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.2)] text-[#00E676] text-xs font-semibold tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(0,230,118,0.1)]">
            <Zap className="w-3.5 h-3.5 fill-[#00E676]" /> Zero Emissions • Maximum Thrills
          </div>

          <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tight text-white mb-6 leading-[1.1]">
            Revolutionize <br />
            <span className="gradient-text-dual">Your Ride.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#9E9EAF] font-light max-w-xl mb-10 leading-relaxed">
            Pudukkottai’s premier destination for premium electric two-wheelers. 
            Experience robust performance, stunning aesthetics, and unmatched cost-efficiency. 
            <span className="text-[#00E5FF] font-medium"> Save Smart. Ride Green.</span>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={onBookTestRide}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00E5FF] text-black font-bold font-heading shadow-[0_0_25px_rgba(0,230,118,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(0,230,118,0.5)] cursor-pointer"
            >
              Book a Test Ride
            </button>
            <a
              href="#models"
              className="px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-white hover:bg-[rgba(255,255,255,0.06)] hover:border-[#00E5FF] font-semibold font-heading transition-all duration-300 hover:scale-[1.03] text-decoration-none flex items-center justify-center cursor-pointer"
            >
              Explore Models
            </a>
          </div>

          {/* Micro Stats Row */}
          <div className="grid grid-cols-3 gap-6 border-t border-[rgba(255,255,255,0.06)] pt-8 w-full max-w-lg">
            <div className="relative group">
              <div className="flex items-center gap-1.5">
                <div className="text-3xl font-black font-heading text-white">120-130<span className="text-[#00E5FF] text-xl font-bold">km</span></div>
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[9px] font-black text-white cursor-help transition-colors select-none">i</span>
              </div>
              <div className="text-xs text-[#646474] font-medium tracking-wide uppercase mt-1">Single Charge</div>
              
              <div className="absolute bottom-full left-0 mb-2 w-48 p-2 rounded-lg bg-[#121218]/95 backdrop-blur-md border border-[rgba(255,255,255,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-center text-[10px] text-[#9E9EAF] font-medium leading-normal pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-bottom-left z-50">
                Depending on payload and terrain
              </div>
            </div>
            <div>
              <div className="text-3xl font-black font-heading text-white">₹0.15</div>
              <div className="text-xs text-[#646474] font-medium tracking-wide uppercase mt-1">Cost per KM</div>
            </div>
            <div>
              <div className="text-3xl font-black font-heading text-white">100%</div>
              <div className="text-xs text-[#646474] font-medium tracking-wide uppercase mt-1">Lithium/LFP Powered</div>
            </div>
          </div>

        </div>

        {/* Right Side: High-End Cinematic E-Scooter Representation */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Circular Neon Backlight (Ambient Glow) */}
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-[rgba(0,229,255,0.08)] bg-[rgba(0,229,255,0.01)] flex items-center justify-center animate-pulseGlow pointer-events-none z-0"></div>

          {/* Futuristic Glowing Card Badges overlaying image */}
          <div className="absolute top-[10%] left-[-5%] p-4 rounded-2xl bg-[rgba(14,14,18,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] shadow-2xl flex items-center gap-3 animate-float z-20 max-w-[180px]">
            <div className="w-10 h-10 rounded-lg bg-[rgba(0,230,118,0.1)] flex items-center justify-center text-[#00E676]">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-xs font-bold font-heading">Eco-Drive</div>
              <div className="text-[#9E9EAF] text-[10px] mt-0.5">100% Green commute</div>
            </div>
          </div>

          <div className="absolute bottom-[10%] right-[-5%] p-4 rounded-2xl bg-[rgba(14,14,18,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] shadow-2xl flex items-center gap-3 animate-float z-20 max-w-[180px] animation-delay-2000">
            <div className="w-10 h-10 rounded-lg bg-[rgba(0,229,255,0.1)] flex items-center justify-center text-[#00E5FF]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white text-xs font-bold font-heading">Anti-Theft</div>
              <div className="text-[#9E9EAF] text-[10px] mt-0.5">Live GPS tracking</div>
            </div>
          </div>

          {/* Cinematic Scooter Image Card */}
          <div className="relative z-10 w-full max-w-md lg:max-w-none rounded-[28px] overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#0E0E12] shadow-2xl transition-all duration-500 hover:scale-[1.03] group">
            <img 
              src="/assets/gaura_main_concrete_no_light.png" 
              alt="Gaura E-Scooter" 
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>

        </div>

      </div>

    </section>
  );
}
