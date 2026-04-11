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
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        padding: '20px',
        transition: '0.4s',
        display: scrolled ? 'flex' : 'block',
        justifyContent: 'center'
      }}
    >
      <div 
        className={scrolled ? "luxury-card" : ""} 
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: scrolled ? '10px 25px' : '10px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(0,0,0,0.6)' : 'transparent',
          border: scrolled ? '1px solid var(--glass-border)' : 'none',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderRadius: scrolled ? '100px' : '0'
        }}
      >
        <motion.div 
          layout
          onClick={() => window.scrollTo(0, 0)}
          style={{ 
            fontSize: '24px', 
            fontWeight: '900', 
            letterSpacing: '3px',
            fontFamily: "'Playfair Display', serif",
            cursor: 'pointer'
          }}
        >
          BOOS<span style={{ color: 'var(--primary)' }}>TOUR</span>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div className="desktop-links" style={{ display: scrolled ? 'flex' : 'none', gap: '25px' }}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', opacity: 0.7 }}>
                {item.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div className="lang-switcher" style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', padding: '3px' }}>
              {['en', 'tr', 'de', 'ru'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? 'var(--primary)' : 'transparent',
                    border: 'none',
                    color: lang === l ? '#000' : '#fff',
                    padding: '5px 10px',
                    borderRadius: '100px',
                    fontSize: '10px',
                    fontWeight: '800',
                    cursor: 'pointer'
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            
            <Menu 
              className="mobile-toggle" 
              onClick={() => setMobileMenu(true)} 
              style={{ cursor: 'pointer', color: scrolled ? '#fff' : 'var(--primary)' }} 
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            style={{ 
              position: 'fixed', inset: 0, zIndex: 3000, 
              background: 'rgba(2, 4, 8, 0.98)', 
              backdropFilter: 'blur(15px)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px'
            }}
          >
            <button 
              onClick={() => setMobileMenu(false)}
              style={{ position: 'absolute', top: '40px', right: '40px', background: 'none', border: 'none', color: '#fff' }}
            >
              <X size={40} />
            </button>
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setMobileMenu(false)}
                className="serif"
                style={{ fontSize: '3rem', color: '#fff', textDecoration: 'none' }}
              >
                {item.name}
              </a>
            ))}
            <button className="btn-gold" style={{ marginTop: '20px' }} onClick={() => { setMobileMenu(false); document.getElementById('fleet').scrollIntoView(); }}>{t.nav.book}</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .desktop-links { display: flex !important; }
        .mobile-toggle { display: none !important; }

        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
