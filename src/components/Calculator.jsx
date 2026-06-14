import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

export default function Calculator() {
  const [commute, setCommute] = useState(45); // Daily commute in km
  const [petrolPrice, setPetrolPrice] = useState(103); // ₹ per liter
  const [mileage, setMileage] = useState(40); // km per liter

  // E-Bike constants
  const eBikeCostPerKm = 0.15; // ₹0.15 per km based on ₹15 charge for 100km

  const [savings, setSavings] = useState({
    daily: 0,
    monthly: 0,
    annual: 0,
    fiveYears: 0,
    co2Saved: 0,
    treesEquivalent: 0
  });

  useEffect(() => {
    // Petrol calculations
    const dailyPetrolLiters = commute / mileage;
    const dailyPetrolCost = dailyPetrolLiters * petrolPrice;

    // E-Bike calculations
    const dailyEbikeCost = commute * eBikeCostPerKm;

    // Savings calculations
    const dailySavings = Math.max(0, dailyPetrolCost - dailyEbikeCost);
    const monthlySavings = dailySavings * 30;
    const annualSavings = dailySavings * 365;
    const fiveYearsSavings = annualSavings * 5;

    // CO2 calculations (Approx 2.3 kg CO2 per liter of petrol)
    const annualLitersPetrol = dailyPetrolLiters * 365;
    const co2Saved = Math.round(annualLitersPetrol * 2.3);
    const trees = Math.round(co2Saved / 22); // A tree absorbs ~22kg of CO2 per year

    setSavings({
      daily: Math.round(dailySavings),
      monthly: Math.round(monthlySavings),
      annual: Math.round(annualSavings),
      fiveYears: Math.round(fiveYearsSavings),
      co2Saved,
      treesEquivalent: trees
    });
  }, [commute, petrolPrice, mileage]);

  return (
    <section id="why-electric" className="relative bg-[#08080A] section-padding overflow-hidden">
      
      {/* Background spotlights */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00E676] font-semibold text-xs tracking-widest uppercase leading-none">
            Smart Financial Widget
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-white mt-4 mb-6">
            Fuel Savings Calculator
          </h2>
          <p className="text-[#9E9EAF] font-light text-md md:text-lg">
            Input your current petrol commute specs below and instantly visualize the massive financial savings 
            and positive eco-impact of switching to a Raja E-Bike.
          </p>
        </div>

        {/* Main Grid: Sliders Left, Graph/Metrics Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-5 glass-container p-8 flex flex-col justify-center border-[rgba(255,255,255,0.03)] bg-[rgba(14,14,18,0.4)]">
            <h3 className="text-2xl font-bold font-heading text-white mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#00E5FF]" /> Commute Details
            </h3>

            {/* Commute Distance Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#9E9EAF]">Daily Commute Distance</label>
                <span className="text-lg font-bold font-heading text-[#00E5FF]">{commute} km</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={commute}
                onChange={(e) => setCommute(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#00E5FF]"
              />
              <div className="flex justify-between text-[10px] text-[#646474] mt-2 font-medium">
                <span>10 km</span>
                <span>80 km</span>
                <span>150 km</span>
              </div>
            </div>

            {/* Petrol Price Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#9E9EAF]">Petrol Price (Pudukkottai)</label>
                <span className="text-lg font-bold font-heading text-[#00E676]">₹{petrolPrice} / L</span>
              </div>
              <input
                type="range"
                min="95"
                max="115"
                step="0.5"
                value={petrolPrice}
                onChange={(e) => setPetrolPrice(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#00E676]"
              />
              <div className="flex justify-between text-[10px] text-[#646474] mt-2 font-medium">
                <span>₹95</span>
                <span>₹105</span>
                <span>₹115</span>
              </div>
            </div>

            {/* Mileage Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-[#9E9EAF]">Current Scooter Mileage</label>
                <span className="text-lg font-bold font-heading text-white">{mileage} km / L</span>
              </div>
              <input
                type="range"
                min="25"
                max="65"
                step="1"
                value={mileage}
                onChange={(e) => setMileage(Number(e.target.value))}
                className="w-full cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] text-[#646474] mt-2 font-medium">
                <span>25 km/L</span>
                <span>45 km/L</span>
                <span>65 km/L</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.1)] text-xs text-[#9E9EAF] leading-relaxed">
              <AlertCircle className="w-4.5 h-4.5 text-[#00E5FF] shrink-0 mt-0.5" />
              <span>
                Raja E-Bike calculation accounts for an average battery rating of 2.5 kWh, requiring ₹15 per full charge (100km range) at standard Tamil Nadu tariffs.
              </span>
            </div>

          </div>

          {/* Savings Display Panel */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Main Big Savings Card */}
            <div className="glass-card flex flex-col justify-between border-[rgba(255,255,255,0.03)] bg-[rgba(18,18,24,0.4)] md:col-span-2">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#00E676] uppercase bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.15)] px-3 py-1 rounded-md mb-4 inline-block">
                  ⚡ Cumulative Savings
                </span>
                <h4 className="text-lg font-semibold text-[#9E9EAF] mt-2">Annual Savings with Raja E-Bike</h4>
                <div className="text-5xl md:text-6xl font-black font-heading text-white mt-4 tracking-tight flex items-baseline gap-2">
                  ₹{savings.annual.toLocaleString('en-IN')}
                  <span className="text-[#00E676] text-xl font-bold">/ Year</span>
                </div>
              </div>

              {/* Stacked comparison bar chart */}
              <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.04)]">
                <div className="flex justify-between text-xs text-[#9E9EAF] mb-2 font-medium">
                  <span>Daily Fuel Costs</span>
                  <span>Petrol vs. E-Bike</span>
                </div>
                <div className="h-6 w-full rounded-full bg-red-500/10 overflow-hidden flex border border-red-500/20">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-[10px] text-white font-bold transition-all duration-300"
                    style={{ width: `${Math.max(15, ( (commute / mileage * petrolPrice) / ((commute / mileage * petrolPrice) + (commute * eBikeCostPerKm)) ) * 100)}%` }}
                  >
                    Petrol: ₹{Math.round(commute / mileage * petrolPrice)}
                  </div>
                  <div 
                    className="h-full bg-gradient-to-r from-[#00E676] to-[#00E5FF] flex items-center justify-center text-[10px] text-black font-black transition-all duration-300"
                    style={{ width: `${Math.max(15, ( (commute * eBikeCostPerKm) / ((commute / mileage * petrolPrice) + (commute * eBikeCostPerKm)) ) * 100)}%` }}
                  >
                    Raja: ₹{Math.round(commute * eBikeCostPerKm)}
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly and 5-Year Small Cards */}
            <div className="glass-card flex flex-col justify-between border-[rgba(255,255,255,0.03)] p-6 bg-[rgba(18,18,24,0.4)]">
              <div>
                <h4 className="text-xs font-semibold text-[#646474] uppercase tracking-wider">Monthly Savings</h4>
                <div className="text-3xl font-black font-heading text-[#00E5FF] mt-2">
                  ₹{savings.monthly.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-[#9E9EAF] mt-2 font-light">Equivalent to free utility recharge and phone bills.</p>
              </div>
              <div className="mt-6 text-[10px] font-bold text-white flex items-center gap-1.5 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-lg w-max">
                <TrendingUp className="w-3.5 h-3.5 text-[#00E5FF]" /> ₹{savings.daily} Saved Daily
              </div>
            </div>

            <div className="glass-card flex flex-col justify-between border-[rgba(255,255,255,0.03)] p-6 bg-[rgba(18,18,24,0.4)]">
              <div>
                <h4 className="text-xs font-semibold text-[#646474] uppercase tracking-wider">5-Year Savings</h4>
                <div className="text-3xl font-black font-heading text-[#00E676] mt-2 animate-pulseGlow">
                  ₹{savings.fiveYears.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-[#9E9EAF] mt-2 font-light">Enough savings to buy a brand new second E-bike!</p>
              </div>
              <div className="mt-6 text-[10px] font-bold text-black flex items-center gap-1.5 bg-[#00E676] px-2.5 py-1.5 rounded-lg w-max">
                💸 Buy Next Scooter Free
              </div>
            </div>

            {/* Eco Impact Indicator */}
            <div className="glass-card md:col-span-2 flex flex-col md:flex-row items-center gap-6 border-[rgba(0,230,118,0.08)] bg-gradient-to-br from-[rgba(0,230,118,0.04)] to-transparent">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(0,230,118,0.1)] border border-[rgba(0,230,118,0.2)] flex items-center justify-center text-[#00E676] shrink-0 shadow-[0_0_20px_rgba(0,230,118,0.15)]">
                <Leaf className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-white flex items-center gap-2">
                  Your Green Impact Score
                </h4>
                <p className="text-sm text-[#9E9EAF] font-light mt-1 max-w-xl">
                  By commuting electric, you will save <span className="text-[#00E676] font-bold">{savings.co2Saved.toLocaleString()} kg of CO₂ emissions</span> annually. That is equivalent to planting <span className="text-[#00E5FF] font-bold">{savings.treesEquivalent} mature trees</span>!
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
