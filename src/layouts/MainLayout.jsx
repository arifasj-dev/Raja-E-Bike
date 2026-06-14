import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ onBookTestRide }) {
  const openWhatsApp = () => {
    window.open('https://wa.me/918667750006?text=Hello%20Raja%20E-Bike%20team,%20I%20am%20interested%20in%20your%20electric%20scooters!', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-white flex flex-col relative select-none">
      <Header onBookTestRide={onBookTestRide} />
      <main className="flex-grow pt-24">
        {/* We use pt-24 so content isn't hidden under the fixed header */}
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Widget */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 cursor-pointer animate-float"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-7 h-7"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" fill="currentColor" stroke="none" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" fill="#25D366" stroke="none" />
        </svg>
      </button>
    </div>
  );
}
