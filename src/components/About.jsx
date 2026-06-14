import React from 'react';
import { Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  const credentials = [
    {
      title: "Pudukkottai's Pioneer",
      desc: "The very first premier electric-only retail showroom bringing the silent revolution to our town.",
      icon: Award
    },
    {
      title: "Lithium/LFP Safety Assurance",
      desc: "All of our e-bikes feature heavy-duty certified Lithium/LFP battery architectures with smart BMS safety.",
      icon: ShieldCheck
    },
    {
      title: "Lifetime Customer Care",
      desc: "On-site modern service bays, certified mechanics, instant spare parts supply, and direct claims guidance.",
      icon: HeartHandshake
    }
  ];

  return (
    <section id="about" className="relative bg-[#08080A] section-padding overflow-hidden">
      
      {/* Background soft ambient lights */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.05)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Showroom Interior Image Display */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          
          {/* Radial cyan ambient backing light */}
          <div className="absolute w-[90%] h-[90%] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.03)_0%,transparent_70%)] filter blur-2xl pointer-events-none"></div>

          {/* Luxury frame wrapper */}
          <div className="relative z-10 w-full max-w-lg lg:max-w-none border border-[rgba(255,255,255,0.06)] rounded-[32px] overflow-hidden shadow-2xl filter drop-shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-transform duration-500 hover:scale-[1.01]">
            <img
              src="assets/showroom.png"
              alt="Raja E-Bike Premium Showroom Pudukkottai"
              className="w-full h-[450px] object-cover"
            />
            
            {/* Visual overlay indicator badge */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0E0E12/90] backdrop-blur-md border border-[rgba(255,255,255,0.05)] text-left">
              <div className="text-white font-bold font-heading text-sm">📍 Thirumayam Road, Pudukkottai</div>
              <div className="text-[#00E676] text-xs mt-1 font-medium">Walk in today for a free test ride & consultation.</div>
            </div>
          </div>

        </div>

        {/* Right Side: Copy & Credentials Grid */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <span className="text-[#00E676] font-semibold text-xs tracking-widest uppercase leading-none">
            Welcome to the Showroom
          </span>
          
          <h2 className="text-4xl md:text-5xl font-black font-heading text-white mt-4 mb-6 leading-tight">
            Welcome to <span className="gradient-text-green">RAJA E-BIKE</span>
          </h2>

          <p className="text-[#9E9EAF] font-light leading-relaxed text-md mb-10">
            We are Pudukkottai's leading retail showroom bringing you the finest selection of electric two-wheelers. Built for the modern commuter, our e-bikes combine stunning aesthetics, robust performance, and unmatched cost-efficiency. Step into our showroom today and experience the silent revolution.
          </p>

          {/* Credentials Stack */}
          <div className="flex flex-col gap-6 w-full">
            {credentials.map((cred, idx) => {
              const CredIcon = cred.icon;
              return (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] hover:border-[#00E5FF]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] flex items-center justify-center text-[#00E5FF] shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.05)]">
                    <CredIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-heading text-lg">
                      {cred.title}
                    </h4>
                    <p className="text-xs text-[#9E9EAF] mt-1 font-light leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
