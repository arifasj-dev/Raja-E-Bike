import React from 'react';
import Calculator from '../components/Calculator';
import { Leaf, BatteryCharging, Zap } from 'lucide-react';

export default function WhyElectric() {
  return (
    <div className="animate-fade-in pt-12 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black font-heading text-white mb-6">
          Why Switch to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00E5FF]">Electric?</span>
        </h1>
        <p className="text-[#9E9EAF] text-lg font-light leading-relaxed">
          The future of mobility is here. Not only do you save thousands on fuel, but you also drastically reduce your carbon footprint while enjoying a silent, zero-vibration ride.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: <Zap className="w-8 h-8 text-[#00E5FF]" />, title: 'Instant Torque', desc: 'Experience immediate acceleration without lag. Electric motors deliver 100% torque from 0 RPM.' },
          { icon: <BatteryCharging className="w-8 h-8 text-[#00E676]" />, title: 'Low Maintenance', desc: 'No oil changes, no spark plugs, no exhaust system. Just charge and ride with minimal upkeep.' },
          { icon: <Leaf className="w-8 h-8 text-[#00E676]" />, title: 'Zero Emissions', desc: 'Ride guilt-free. Our scooters produce exactly 0 tailpipe emissions, helping keep our cities clean.' }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(0,229,255,0.3)] transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-[rgba(255,255,255,0.03)] flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-[#9E9EAF] font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* The Calculator */}
      <Calculator />
    </div>
  );
}
