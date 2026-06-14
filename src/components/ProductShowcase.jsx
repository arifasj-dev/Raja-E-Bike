import React, { useState } from 'react';
import { ShieldCheck, Compass, Zap, BatteryCharging, Gauge } from 'lucide-react';

export default function ProductShowcase({ onBookTestRide }) {
  const [activeTab, setActiveTab] = useState(0);

  const models = [
    {
      name: 'Gaura G6',
      tagline: 'High-Speed Flagship Model.',
      description: 'The flagship model provides longer ranges and higher speeds for daily commuting. Features a 64V LFP battery with 4-5 hour charging times, a powerful BLDC motor, and CBS dual disc brakes.',
      image: '/assets/Models/Gaura Title 02.png',
      specs: [
        { name: 'Top Speed', value: '65 km/h - 75 km/h', icon: Gauge },
        { name: 'Charge Range', value: '120 km to 140+ km', icon: Compass },
        { name: 'Battery Spec', value: '3.3 kWh LFP', icon: Zap },
        { name: 'Charge Time', value: '4-5 Hours', icon: BatteryCharging }
      ],
      features: ['1.8 kW BLDC Motor (2.7 kW max)', 'CBS Both Disc Brakes', '103 kg Weight', 'High-Speed Capable']
    },
    {
      name: 'Gaura G5',
      tagline: 'A Highly Capable, Zippy Commuter.',
      description: 'A highly capable, zippy commuter scooter with advanced smart battery technology. Built with 64V LFP batteries, reliable BLDC motors, and precise disc brakes for a smooth ride.',
      image: '/assets/Models/g56762a570319ac.jpg',
      specs: [
        { name: 'Top Speed', value: '65 km/h', icon: Gauge },
        { name: 'Charge Range', value: '60-80 km', icon: Compass },
        { name: 'Battery Spec', value: '64V 30Ah LFP', icon: Zap },
        { name: 'Charge Time', value: '4-5 Hours', icon: BatteryCharging }
      ],
      features: ['1.8 kW BLDC Motor (2.7 kW max)', 'Advanced Smart Battery', '102 kg Weight', 'Disc Brakes']
    },
    {
      name: 'Gaura Warrior 5G',
      tagline: 'Accessible Everyday Commuter.',
      description: 'An accessible everyday model optimized for affordability and city travel. Features a reliable battery pack, an efficient motor, and ultra-lightweight design for effortless maneuvering.',
      image: '/assets/Models/gaura-warrior-5g-li-plus-electric-scooter-grey-500x500.jpg',
      specs: [
        { name: 'Top Speed', value: '25 km/h - 40 km/h', icon: Gauge },
        { name: 'Charge Range', value: '40 km - 60 km', icon: Compass },
        { name: 'Battery Spec', value: '1.34 kWh', icon: Zap },
        { name: 'Charge Time', value: '4-5 Hours', icon: BatteryCharging }
      ],
      features: ['250 W Efficient Motor', 'City Travel Optimized', '75-93 kg Weight', 'Highly Affordable']
    }
  ];

  return (
    <section id="models" className="relative bg-[#0E0E12] section-padding overflow-hidden">
      
      {/* Background neon glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_70%)] filter blur-3xl pointer-events-none animate-pulseGlow"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.05)_0%,transparent_70%)] filter blur-3xl pointer-events-none animate-pulseGlow"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00E5FF] font-semibold text-xs tracking-widest uppercase leading-none">
            Rider Catalogue
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-white mt-4 mb-6">
            Explore Our Models
          </h2>
          <p className="text-[#9E9EAF] font-light text-md md:text-lg">
            Choose your companion from our state-of-the-art electric fleet, 
            designed to deliver spectacular power, stunning comfort, and elite visual status.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 border-b border-[rgba(255,255,255,0.04)] pb-8">
          {models.map((model, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-8 py-3.5 rounded-xl font-bold font-heading text-sm transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#00E676] to-[#00E5FF] text-black shadow-[0_0_20px_rgba(0,230,118,0.25)]'
                  : 'bg-[rgba(255,255,255,0.02)] text-[#9E9EAF] hover:text-white border border-[rgba(255,255,255,0.04)] hover:border-[#00E5FF]/40'
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        {/* Selected Model Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Specs Details Left */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-sm font-bold text-[#00E5FF] uppercase tracking-wider mb-2">
              {models[activeTab].tagline}
            </span>
            
            <div className="flex items-baseline gap-4 mt-2 mb-6">
              <h3 className="text-4xl md:text-5xl font-black font-heading text-white">
                {models[activeTab].name}
              </h3>
            </div>

            <p className="text-[#9E9EAF] font-light leading-relaxed mb-8">
              {models[activeTab].description}
            </p>

            {/* Specifications Cards Grid */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              {models[activeTab].specs.map((spec, sIdx) => {
                const SpecIcon = spec.icon;
                return (
                  <div key={sIdx} className="p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] hover:border-[#00E5FF]/20 transition-all duration-300 relative group">
                    <div className="flex items-center gap-2.5 text-[#00E5FF] mb-1.5">
                      <SpecIcon className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#646474]">
                        {spec.name}
                      </span>
                      {spec.name === 'Charge Range' && (
                        <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-white/10 hover:bg-white/20 text-[8px] font-black text-white cursor-help transition-colors select-none">i</span>
                      )}
                    </div>
                    <div className={`${spec.value.length > 20 ? 'text-xs' : 'text-lg sm:text-xl'} font-bold font-heading text-white leading-tight`}>
                      {spec.value}
                    </div>
                    
                    {spec.name === 'Charge Range' && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded-lg bg-[#121218]/95 backdrop-blur-md border border-[rgba(255,255,255,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.5)] text-center text-[10px] text-[#9E9EAF] font-medium leading-normal pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-bottom z-50">
                        Depending on payload and terrain
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Micro Smart Features List */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {models[activeTab].features.map((feature, fIdx) => (
                <span key={fIdx} className="inline-flex items-center gap-1.5 text-xs text-[#9E9EAF] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)] px-3 py-1.5 rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00E676]" />
                  {feature}
                </span>
              ))}
            </div>

            <button
              onClick={onBookTestRide}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00E5FF] text-black font-bold font-heading shadow-[0_0_20px_rgba(0,230,118,0.25)] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
            >
              Book a Test Ride
            </button>

          </div>

          {/* Model High-Resolution Visual Right */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Visual background ambient glow spots */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.04)_0%,transparent_70%)] filter blur-2xl animate-pulseGlow pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-lg lg:max-w-none filter drop-shadow-[0_0_35px_rgba(0,229,255,0.15)] hover:scale-[1.02] transition-transform duration-500 rounded-[28px] overflow-hidden border border-[rgba(255,255,255,0.04)] bg-gradient-to-br from-[#121218] to-transparent">
              <img
                src={models[activeTab].image}
                alt={models[activeTab].name}
                className="w-full h-auto max-h-[500px] object-contain transition-opacity duration-300"
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
