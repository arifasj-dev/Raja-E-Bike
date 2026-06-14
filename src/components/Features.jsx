import React from 'react';
import { Leaf, Coins, Cpu, ArrowRight } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      title: 'Zero Emissions',
      subtitle: '100% Eco-Friendly',
      desc: 'Protect the environment while you commute. Zero exhaust gases means pure silent cruising and a cleaner Pudukkottai.',
      icon: Leaf,
      color: '#00E676',
      glow: 'rgba(0, 230, 118, 0.15)',
      badge: 'Green Tech'
    },
    {
      title: 'Massive Savings',
      subtitle: 'Charge for pennies, ride for miles',
      desc: 'Say goodbye to petrol hikes and expensive services. Switching to electric saves you up to ₹60,000+ annually on fuel costs alone.',
      icon: Coins,
      color: '#00E5FF',
      glow: 'rgba(0, 229, 255, 0.15)',
      badge: 'Cost-Effective'
    },
    {
      title: 'Smart Technology',
      subtitle: 'Advanced Smart Integration',
      desc: 'Equipped with bright smart digital clusters, real-time GPS tracking, anti-theft alerts, and reliable long-life Lithium/LFP batteries.',
      icon: Cpu,
      color: '#D500F9',
      glow: 'rgba(213, 0, 249, 0.15)',
      badge: 'Futuristic'
    }
  ];

  return (
    <section id="why-electric" className="relative bg-[#0E0E12] section-padding overflow-hidden">
      
      {/* Dynamic spot glows */}
      <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00E5FF] font-semibold text-xs tracking-widest uppercase leading-none">
            Why Switch to Electric?
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-white mt-4 mb-6">
            The Silent Revolution
          </h2>
          <p className="text-[#9E9EAF] font-light text-md md:text-lg">
            Experience an unmatched blend of zero emissions, substantial monetary savings, 
            and premium smart tech that elevates every single ride.
          </p>
        </div>

        {/* Features 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="glass-card green-hover flex flex-col justify-between group h-full relative"
                style={{
                  '--mouse-x': '50%',
                  '--mouse-y': '50%'
                }}
              >
                
                {/* Glow backdrop boundary */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(600px at 50% 0%, ${item.glow}, transparent 50%)`
                  }}
                ></div>

                <div className="relative z-10">
                  
                  {/* Badge */}
                  <span 
                    className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md mb-6"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    {item.badge}
                  </span>

                  {/* Icon Card Container */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.color}10`,
                      borderColor: `${item.color}30`,
                      boxShadow: `0 0 20px ${item.color}15`
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-[#00E5FF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-sm font-semibold text-[#00E5FF]/80 mb-4">
                    {item.subtitle}
                  </h4>

                  <p className="text-[#9E9EAF] text-sm leading-relaxed font-light mb-8">
                    {item.desc}
                  </p>

                </div>

                <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#00E5FF] transition-colors duration-300 mt-auto pt-4 border-t border-[rgba(255,255,255,0.03)] cursor-pointer">
                  Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
