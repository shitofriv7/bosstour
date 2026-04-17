"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = "905424142586";
  const message = "Merhaba! Boss Tour ile iletişime geçmek istiyorum.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
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
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
        zIndex: 9999,
        textDecoration: 'none',
        cursor: 'pointer'
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
          border: '4px solid #25D366',
        }}
      />
      <FaWhatsapp size={32} />
    </motion.a>
  );
}
