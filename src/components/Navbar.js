"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.fleet, href: "#fleet" },
    { name: t.nav.contact, href: "#contact" }
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 2000,
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          width: '100%',
          maxWidth: scrolled ? '1000px' : '1200px',
          height: '70px',
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 30px',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Logo Section */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            background: 'var(--primary)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontWeight: '900',
            fontSize: '18px',
            boxShadow: '0 0 20px rgba(212,175,55,0.3)'
          }}>B</div>
          <motion.div 
            style={{ 
              fontSize: '20px', 
              fontWeight: '900', 
              letterSpacing: '5px',
              fontFamily: "'Playfair Display', serif",
              color: '#fff'
            }}
          >
            BOOS<span style={{ color: 'var(--primary)' }}>TOUR</span>
          </motion.div>
        </div>

        {/* Links Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div className="desktop-links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {navItems.map((item) => (
              <motion.a 
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05, color: 'var(--primary)' }}
                style={{ 
                  fontSize: '11px', 
                  fontWeight: '700', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: '0.3s'
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Lang Dropdown Concept */}
            <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', padding: '3px' }}>
              {['en', 'tr', 'de', 'ru'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? 'var(--primary)' : 'transparent',
                    border: 'none',
                    color: lang === l ? '#000' : '#fff',
                    padding: '6px 12px',
                    borderRadius: '100px',
                    fontSize: '10px',
                    fontWeight: '900',
                    cursor: 'pointer',
                    textTransform: 'uppercase'
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenu(true)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--primary)', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Menu size={28} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Modern Mobile Dashboard Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', inset: 0, zIndex: 3000, 
              background: 'rgba(2, 4, 8, 0.98)', 
              backdropFilter: 'blur(30px)',
              padding: '60px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '4px' }}>BOOS<span style={{ color: 'var(--primary)' }}>TOUR</span></div>
              <button 
                onClick={() => setMobileMenu(false)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display:'flex', alignItems:'center', justifyContent:'center' }}
              >
                <X size={30} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {navItems.map((item, idx) => (
                <motion.a 
                  key={item.href} 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  href={item.href} 
                  onClick={() => setMobileMenu(false)}
                  className="serif"
                  style={{ fontSize: '3.5rem', color: '#fff', textDecoration: 'none', lineHeight: '1' }}
                >
                  {item.name}
                  <motion.span style={{ color: 'var(--primary)', marginLeft: '10px' }}>.</motion.span>
                </motion.a>
              ))}
            </nav>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'grid', gap: '15px' }}>
              <p style={{ fontSize: '12px', opacity: 0.5, letterSpacing: '2px' }}>CONTACT US</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>+90 (555) 000 00 00</h3>
              <p style={{ fontSize: '14px', opacity: 0.7 }}>Antalya / Turkey</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
