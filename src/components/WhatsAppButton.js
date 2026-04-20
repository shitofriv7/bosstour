"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function WhatsAppButton() {
  const [activeTab, setActiveTab] = useState('whatsapp'); // 'whatsapp' or 'instagram'
  const phoneNumber = "905424142586";
  const message = "Merhaba! Boss Tour ile iletişime geçmek istiyorum.";
  const instagramUrl = "https://www.instagram.com/boss_tour_rentacar/";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => prev === 'whatsapp' ? 'instagram' : 'whatsapp');
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const isWhatsapp = activeTab === 'whatsapp';

  return (
    <motion.a
      href={isWhatsapp ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}` : instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '65px',
        height: '65px',
        background: isWhatsapp ? '#25D366' : 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: isWhatsapp ? '0 10px 25px rgba(37, 211, 102, 0.4)' : '0 10px 25px rgba(204, 35, 102, 0.4)',
        zIndex: 9999,
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background 0.5s ease, box-shadow 0.5s ease'
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0, 0.4]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          inset: -10,
          borderRadius: '50%',
          border: `4px solid ${isWhatsapp ? '#25D366' : '#cc2366'}`,
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {isWhatsapp ? <FaWhatsapp size={35} /> : <FaInstagram size={35} />}
        </motion.div>
      </AnimatePresence>
    </motion.a>
  );
}
