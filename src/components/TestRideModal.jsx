import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, User, CheckCircle, Zap } from 'lucide-react';

export default function TestRideModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    model: 'Gaura G6',
    date: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    setLoading(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          // Web3Forms access key
          access_key: '56f4bfc2-9287-4ec2-b3af-c86bbe8d97bc',
          subject: 'New Test Ride Booking - Raja E-Bike',
          from_name: 'Raja E-Bike Website',
          'Customer Name': formData.name,
          'Phone Number': formData.phone,
          'Selected Scooter': formData.model,
          'Preferred Date': formData.date,
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Failed to submit booking. Please try again or contact us directly.");
        console.error(result);
      }
    } catch (error) {
      alert("A network error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      model: 'Gaura G6',
      date: ''
    });
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Backdrop overlay */}
      <div 
        onClick={submitted ? handleReset : onClose} 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      ></div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-[#0E0E12] border border-[rgba(255,255,255,0.06)] shadow-2xl overflow-hidden animate-float">
        
        {/* Border glow sweeping border */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00E676] to-[#00E5FF]"></div>

        {/* Close Button */}
        <button 
          onClick={submitted ? handleReset : onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/5 text-[#9E9EAF] hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Content area */}
        <div className="p-8">
          {submitted ? (
            
            /* Success State */
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.2)] flex items-center justify-center text-[#00E676] mb-6 shadow-[0_0_30px_rgba(0,230,118,0.2)] animate-pulseGlow">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <h3 className="text-3xl font-black font-heading text-white mb-2">Booking Confirmed!</h3>
              <span className="text-[#00E5FF] font-semibold text-xs tracking-wider uppercase mb-6 inline-block">
                ⚡ Ready to Ride
              </span>

              <div className="p-5 rounded-2xl bg-white/3 border border-white/5 text-left w-full mb-8">
                <div className="grid grid-cols-2 gap-4 text-xs text-[#9E9EAF]">
                  <div>
                    <span className="text-[#646474] block uppercase font-bold text-[9px] tracking-wider mb-0.5">Rider Name</span>
                    <span className="text-white font-semibold text-sm">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-[#646474] block uppercase font-bold text-[9px] tracking-wider mb-0.5">Selected Scooter</span>
                    <span className="text-white font-semibold text-sm">{formData.model}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#646474] block uppercase font-bold text-[9px] tracking-wider mb-0.5">Scheduled Slot</span>
                    <span className="text-white font-semibold text-sm">{new Date(formData.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#9E9EAF] max-w-sm leading-relaxed mb-6 font-light">
                Our sales team in Pudukkottai will contact you on <span className="text-white font-semibold">{formData.phone}</span> in the next hour to finalize the timings and documents required.
              </p>

              <button
                onClick={handleReset}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00E5FF] text-black font-bold font-heading text-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,230,118,0.25)] cursor-pointer"
              >
                Awesome, Close
              </button>
            </div>

          ) : (

            /* Form State */
            <div className="text-left">
              <div className="mb-6">
                <span className="text-[#00E676] font-semibold text-xs tracking-widest uppercase leading-none">
                  Test Ride Booking
                </span>
                <h3 className="text-3xl font-black font-heading text-white mt-1">Book a Test Ride</h3>
                <p className="text-xs text-[#9E9EAF] mt-1.5 font-light">
                  Complete the form below to lock your exclusive time slot at our Malayeedu showroom.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Rider Name */}
                <div>
                  <label className="text-xs font-semibold text-[#9E9EAF] mb-1.5 block">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#646474]">
                      <User className="w-4.5 h-4.5" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#08080A] border border-[rgba(255,255,255,0.05)] focus:border-[#00E5FF] text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-xs font-semibold text-[#9E9EAF] mb-1.5 block">Mobile Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#646474]">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#08080A] border border-[rgba(255,255,255,0.05)] focus:border-[#00E5FF] text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Scooter Model Dropdown */}
                <div>
                  <label className="text-xs font-semibold text-[#9E9EAF] mb-1.5 block">Select Scooter Model</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#646474]">
                      <Zap className="w-4.5 h-4.5" />
                    </div>
                    <select
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#08080A] border border-[rgba(255,255,255,0.05)] focus:border-[#00E5FF] text-white text-sm outline-none transition-colors cursor-pointer appearance-none"
                    >
                      <option value="Gaura G6">Gaura G6 (High-Speed Flagship)</option>
                      <option value="Gaura G5">Gaura G5 (Zippy Commuter)</option>
                      <option value="Gaura Warrior 5G">Gaura Warrior 5G (Everyday City Rider)</option>
                    </select>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="text-xs font-semibold text-[#9E9EAF] mb-1.5 block">Preferred Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#646474]">
                      <Calendar className="w-4.5 h-4.5" />
                    </div>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#08080A] border border-[rgba(255,255,255,0.05)] focus:border-[#00E5FF] text-white text-sm outline-none transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00E5FF] text-black font-bold font-heading text-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,230,118,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span>Scheduling Slot...</span>
                  ) : (
                    <>
                      Confirm Appointment ⚡
                    </>
                  )}
                </button>

              </form>
            </div>

          )}
        </div>

      </div>

    </div>
  );
}
