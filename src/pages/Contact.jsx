import React, { useState } from 'react';
import { MapPin, Phone, Mail, FileText, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    
    setLoading(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '56f4bfc2-9287-4ec2-b3af-c86bbe8d97bc',
          subject: 'New Contact Form Message - Raja E-Bike',
          from_name: 'Raja E-Bike Website',
          'Customer Name': formState.name,
          'Phone Number': formState.phone,
          'Message': formState.message || 'No message provided',
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Failed to submit message. Please try again or call us directly.");
      }
    } catch (error) {
      alert("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneCall = (num) => {
    window.location.href = `tel:${num.replace(/\\s+/g, '')}`;
  };

  const handleWhatsApp = (num) => {
    const cleanNum = num.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNum}?text=Hello%20Raja%20E-Bike%20team,%20I%20am%20interested%20in%20your%20electric%20scooters!`, '_blank');
  };

  return (
    <div className="animate-fade-in relative bg-[#0E0E12] pt-12 pb-24 overflow-hidden min-h-[80vh]">
      
      {/* Backlighting */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.04)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.04)_0%,transparent_70%)] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Visual Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00E5FF] font-semibold text-xs tracking-widest uppercase leading-none">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white mt-4 mb-4">
            Visit Our Showroom
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E676] to-[#00E5FF] mx-auto rounded-full"></div>
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Business Details Column */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Showroom Address */}
            <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] flex flex-col justify-between h-full md:col-span-2">
              <div>
                <div className="flex items-center gap-3 text-[#00E676] mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,230,118,0.08)] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold font-heading text-lg">LOCATION</h4>
                </div>
                <div className="text-[#9E9EAF] text-sm leading-relaxed font-light">
                  <p className="font-bold text-white text-base mb-1">RAJA E-BIKE</p>
                  <p>No. 112, Thirumayam Road,</p>
                  <p>Near ADR & Karpaga Vinayaga Mahal,</p>
                  <p>Malayeedu, Pudukkottai - 622003.</p>
                  <p className="font-semibold text-white mt-1">Tamil Nadu, India.</p>
                </div>
              </div>
              <button 
                onClick={() => window.open('https://maps.google.com/?q=RAJA+E-BIKE+Pudukkottai', '_blank')}
                className="mt-6 w-max px-5 py-2.5 rounded-lg border border-[rgba(255,255,255,0.06)] hover:border-[#00E676] hover:bg-[#00E676]/5 text-white font-semibold text-xs transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                🗺️ Open in Google Maps
              </button>
            </div>

            {/* Calling Details */}
            <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 text-[#00E5FF] mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,255,0.08)] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold font-heading text-lg">CONTACT US</h4>
                </div>
                <div className="text-sm text-[#9E9EAF] flex flex-col gap-2 font-light">
                  <div>
                    <span className="font-medium text-white block">Sales / General Inquiry</span>
                    <span className="cursor-pointer hover:text-white transition-colors" onClick={() => handlePhoneCall('+91 90809 37384')}>+91 90809 37384</span>
                  </div>
                  <div>
                    <span className="font-medium text-white block">WhatsApp Live Support</span>
                    <span className="cursor-pointer hover:text-[#00E676] transition-colors" onClick={() => handleWhatsApp('+91 86677 50006')}>+91 86677 50006</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button 
                  onClick={() => handlePhoneCall('+91 90809 37384')}
                  className="px-3.5 py-2 rounded-lg bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] text-[#00E5FF] hover:bg-[rgba(0,229,255,0.15)] font-bold text-xs transition-all cursor-pointer"
                >
                  📞 Call
                </button>
                <button 
                  onClick={() => handleWhatsApp('+91 86677 50006')}
                  className="px-3.5 py-2 rounded-lg bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.15)] text-[#00E676] hover:bg-[rgba(0,230,118,0.15)] font-bold text-xs transition-all cursor-pointer"
                >
                  💬 WhatsApp
                </button>
              </div>
            </div>

            {/* Email & GST Details */}
            <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 text-[#D500F9] mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(213,0,249,0.08)] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-bold font-heading text-lg">ONLINE METADATA</h4>
                </div>
                <div className="text-sm text-[#9E9EAF] flex flex-col gap-3 font-light">
                  <div>
                    <span className="font-semibold text-white block">Email Address</span>
                    <a href="mailto:rajaebikepudugai@gmail.com" className="text-[#00E5FF] hover:text-white transition-colors text-decoration-none">
                      rajaebikepudugai@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-white block flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-white/50" /> GSTIN Verified
                    </span>
                    <span className="font-mono text-white text-xs bg-white/5 px-2.5 py-1 rounded-md mt-1 inline-block">
                      33GWLPD4252A1ZZ
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Query Form Column */}
          <div className="lg:col-span-5 glass-container p-8 border-[rgba(255,255,255,0.03)] bg-[rgba(14,14,18,0.4)]">
            <h3 className="text-2xl font-bold font-heading text-white mb-6 text-left">Quick Query</h3>
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <CheckCircle className="w-16 h-16 text-[#00E676] mb-4 animate-float" />
                <h4 className="text-xl font-bold text-white mb-2">Query Submitted!</h4>
                <p className="text-xs text-[#9E9EAF] max-w-xs leading-relaxed">
                  Thank you for reaching out. A Raja E-Bike sales advisor will call you shortly on your provided phone number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div>
                  <label className="text-xs font-semibold text-[#9E9EAF] mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[rgba(255,255,255,0.05)] focus:border-[#00E5FF] text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#9E9EAF] mb-1.5 block">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[rgba(255,255,255,0.05)] focus:border-[#00E5FF] text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#9E9EAF] mb-1.5 block">Your Message (Optional)</label>
                  <textarea
                    rows="3"
                    placeholder="Any specific scooter specs or models you want to know about?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[rgba(255,255,255,0.05)] focus:border-[#00E5FF] text-white text-sm outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,230,118,0.3)] text-black font-bold font-heading text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
