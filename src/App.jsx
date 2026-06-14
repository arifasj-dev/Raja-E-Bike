import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Models from './pages/Models';
import WhyElectric from './pages/WhyElectric';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SparesServices from './pages/SparesServices';
import TestRideModal from './components/TestRideModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout onBookTestRide={handleOpenModal} />}>
          <Route index element={<Home onBookTestRide={handleOpenModal} />} />
          <Route path="models" element={<Models onBookTestRide={handleOpenModal} />} />
          <Route path="why-electric" element={<WhyElectric />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<SparesServices />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      {/* Overlay Test Ride Booking Popup Form (Global) */}
      <TestRideModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Router>
  );
}
