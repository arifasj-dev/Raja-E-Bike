import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0E0E12] pt-16 pb-8 border-t border-[rgba(255,255,255,0.04)] mt-auto">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-white font-black font-heading text-xl tracking-wider leading-none flex items-center gap-1.5 mb-2">
              RAJA E-BIKE
            </div>
            <div className="text-[10px] text-[#00E5FF] font-medium tracking-widest leading-none mb-6 uppercase">
              ⚡ RIDE GREEN • COMMUTE SMART
            </div>
            <p className="text-[#9E9EAF] text-sm leading-relaxed font-light mb-6">
              Pudukkottai's premier destination for high-performance, eco-friendly electric scooters and motorcycles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-[#9E9EAF] text-sm">
              <li><Link to="/models" className="hover:text-[#00E5FF] transition-colors text-decoration-none">Explore Models</Link></li>
              <li><Link to="/services" className="hover:text-[#00E5FF] transition-colors text-decoration-none">Spares & Services</Link></li>
              <li><Link to="/about" className="hover:text-[#00E5FF] transition-colors text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#00E5FF] transition-colors text-decoration-none">Contact Dealership</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold font-heading mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="flex flex-col gap-4 text-[#9E9EAF] text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <p>No. 112, Thirumayam Road,<br/>Near ADR & Karpaga Vinayaga Mahal,<br/>Malayeedu, Pudukkottai - 622003.</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <a href="tel:+919080937384" className="hover:text-white transition-colors text-decoration-none">+91 90809 37384</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D500F9] shrink-0" />
                <a href="mailto:rajaebikepudugai@gmail.com" className="hover:text-white transition-colors text-decoration-none">rajaebikepudugai@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="text-xs text-[#646474]">
            © {new Date().getFullYear()} <span className="text-white font-semibold">RAJA E-BIKE</span>. All Rights Reserved. Designed for the Future.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
