import React from 'react';
import { Leaf, BatteryCharging, Wrench, ShieldCheck, Zap, Coins, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const evBenefits = [
    {
      icon: <Coins className="w-6 h-6 text-[#00E676]" />,
      title: "Massive Cost Savings",
      desc: "Compared to petrol vehicles, electric scooters cost a fraction per kilometer. Save thousands on daily commuting with practically zero fuel costs."
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#00E5FF]" />,
      title: "Zero Tailpipe Emissions",
      desc: "Ride clean and breathe easy. EVs produce zero exhaust emissions, actively helping to reduce urban air pollution and combat climate change."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#D500F9]" />,
      title: "Instant Torque & Power",
      desc: "Electric BLDC motors deliver 100% of their torque instantly from 0 RPM, giving you rapid acceleration and a thrilling, silent ride."
    },
    {
      icon: <Wrench className="w-6 h-6 text-yellow-400" />,
      title: "Ultra-Low Maintenance",
      desc: "No engine oil, no spark plugs, no complex gearboxes. With fewer moving parts, your EV requires drastically less maintenance than a petrol bike."
    }
  ];

  const showroomSpecs = [
    "State-of-the-Art Display Floor featuring the latest Gaura EV models",
    "On-Site Test Ride Zone for real-world experience",
    "Certified Modern Service Bays with diagnostic tech",
    "Extensive OEM Spare Parts Inventory",
    "Dedicated Customer Lounge & Consultation Area",
    "Dedicated Battery Health Testing Stations"
  ];

  return (
    <div className="animate-fade-in bg-[#08080A] min-h-screen pt-12 pb-24 overflow-hidden relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.03)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.03)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#00E5FF] font-semibold text-xs tracking-widest uppercase leading-none">
            Raja E-Bike Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white mt-4 mb-6 leading-tight">
            Leading the EV Revolution in Pudukkottai
          </h1>
          <p className="text-[#9E9EAF] font-light text-lg leading-relaxed">
            We are more than just a dealership; we are Pudukkottai's premier destination for sustainable, high-performance electric mobility.
          </p>
        </div>

        {/* Section 1: Showroom & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E676] to-[#00E5FF] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700 rounded-[32px]"></div>
            <img 
              src="/assets/showroom.png" 
              alt="Raja E-Bike Showroom" 
              className="w-full h-auto rounded-[32px] border border-[rgba(255,255,255,0.05)] shadow-2xl relative z-10 transition-transform duration-700 hover:scale-[1.02]"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80"; }}
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Premium Dealership Experience</h2>
            <p className="text-[#9E9EAF] font-light text-base leading-relaxed mb-8">
              Raja E-Bike was established with a singular vision: to bring top-tier, reliable electric two-wheelers to our community. We understand that transitioning to an EV is a big step, which is why our flagship showroom is designed to offer a complete ecosystem. From expert sales consultations to post-purchase peace of mind, we stand by our products.
            </p>
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-2xl p-6">
              <h3 className="text-white font-bold font-heading mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00E676]" /> Showroom Specifications
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {showroomSpecs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#9E9EAF] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Why Go Electric? */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Why Switch to Electric?</h2>
          <p className="text-[#9E9EAF] max-w-2xl mx-auto font-light">Electric vehicles aren't just the future; they are the smartest choice today. Here's why you should make the switch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {evBenefits.map((benefit, idx) => (
            <div key={idx} className="glass-container p-8 border-[rgba(255,255,255,0.03)] bg-[rgba(14,14,18,0.4)] hover:bg-[rgba(255,255,255,0.02)] hover:border-[rgba(0,229,255,0.2)] transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-white font-bold font-heading text-lg mb-3">{benefit.title}</h3>
              <p className="text-[#9E9EAF] text-sm leading-relaxed font-light">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 3: The LFP Battery Advantage */}
        <div className="bg-gradient-to-r from-[rgba(0,230,118,0.05)] to-[rgba(0,229,255,0.05)] border border-[rgba(255,255,255,0.05)] rounded-[32px] p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-[#00E676] font-semibold text-xs tracking-widest uppercase mb-3">
                <BatteryCharging className="w-4 h-4" /> Core Technology
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">The Lithium/LFP Advantage</h2>
              <p className="text-[#9E9EAF] font-light text-base leading-relaxed mb-6">
                Safety and longevity are our top priorities. All our Gaura electric scooters are powered by advanced <strong>Lithium Iron Phosphate (LFP)</strong> battery chemistry. 
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-[#9E9EAF] text-sm font-light">
                  <div className="w-6 h-6 rounded-full bg-[rgba(0,230,118,0.1)] flex items-center justify-center shrink-0 mt-0.5">🔥</div>
                  <span><strong>Highest Thermal Stability:</strong> LFP batteries are significantly safer and highly resistant to overheating, making them perfect for Indian climates.</span>
                </li>
                <li className="flex items-start gap-3 text-[#9E9EAF] text-sm font-light">
                  <div className="w-6 h-6 rounded-full bg-[rgba(0,229,255,0.1)] flex items-center justify-center shrink-0 mt-0.5">🔋</div>
                  <span><strong>Longer Lifespan:</strong> Enjoy thousands of charging cycles with minimal degradation, outlasting traditional lead-acid or older NMC lithium tech.</span>
                </li>
                <li className="flex items-start gap-3 text-[#9E9EAF] text-sm font-light">
                  <div className="w-6 h-6 rounded-full bg-[rgba(213,0,249,0.1)] flex items-center justify-center shrink-0 mt-0.5">🧠</div>
                  <span><strong>Smart BMS:</strong> Our batteries feature intelligent Battery Management Systems that protect against overcharging, deep discharge, and short circuits.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-square rounded-full border-4 border-dashed border-[rgba(0,229,255,0.2)] flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
                <div className="absolute inset-4 rounded-full border-2 border-[rgba(0,230,118,0.2)] animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#00E676] to-[#00E5FF] opacity-10 blur-xl animate-pulse"></div>
                <BatteryCharging className="w-24 h-24 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animation: 'none'}} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
