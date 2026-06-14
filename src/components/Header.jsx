import React, { useState, useEffect } from 'react';
import { Menu, X, Bike } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ onBookTestRide }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Our Models', href: '/models' },
    { name: 'Why Electric?', href: '/why-electric' },
    { name: 'Spares & Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isOpen 
        ? 'py-4 bg-[#08080A]' 
        : scrolled 
          ? 'py-4 bg-[#08080A]/90 border-b border-[rgba(255,255,255,0.06)] backdrop-blur-md' 
          : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group text-decoration-none">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E676] to-[#00E5FF] shadow-[0_0_15px_rgba(0,230,118,0.3)]">
            <Bike className="w-6 h-6 text-black" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <div>
            <div className="text-white font-black font-heading text-xl tracking-wider leading-none flex items-center gap-1.5">
              RAJA E-BIKE
            </div>
            <div className="text-[10px] text-[#00E5FF] font-medium tracking-widest leading-none mt-1 uppercase">
              ⚡ The Future of Riding
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-[#9E9EAF] hover:text-white font-medium text-[15px] transition-colors duration-200 text-decoration-none relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#00E5FF] after:transition-all after:duration-300 ${location.pathname === item.href ? 'after:w-full text-white' : 'after:w-0 hover:after:w-full'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={onBookTestRide}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00E5FF] text-black font-semibold font-heading text-sm transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] cursor-pointer"
          >
            Book a Test Ride
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-[#00E5FF] transition-colors duration-200 cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-[#08080A] z-40 transition-all duration-300 md:hidden flex flex-col ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-[100dvh] gap-8 px-6 pt-20 pb-20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-semibold text-2xl tracking-wide text-decoration-none transition-colors duration-200 ${location.pathname === item.href ? 'text-[#00E5FF]' : 'text-white hover:text-[#00E5FF]'}`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              onBookTestRide();
            }}
            className="w-full max-w-xs mt-4 py-4 rounded-xl bg-gradient-to-r from-[#00E676] to-[#00E5FF] text-black font-bold font-heading transition-all duration-300 shadow-[0_0_15px_rgba(0,230,118,0.3)] cursor-pointer"
          >
            Book a Test Ride
          </button>
        </div>
      </div>
    </header>
  );
}
