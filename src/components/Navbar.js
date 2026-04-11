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
        padding: scrolled ? '15px 40px' : '30px 40px',
        transition: 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div 
        className={scrolled ? "luxury-card" : ""} 
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: scrolled ? '10px 30px' : '0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(0,0,0,0.4)' : 'transparent',
          border: scrolled ? '1px solid var(--glass-border)' : 'none',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderRadius: scrolled ? '100px' : '0'
        }}
      >
        {/* Logo */}
        <motion.div 
          layout
          style={{ 
            fontSize: '28px', 
            fontWeight: '900', 
            letterSpacing: '4px',
            fontFamily: "'Playfair Display', serif"
          }}
          className="interactive"
        >
          BOOS<span style={{ color: 'var(--primary)' }}>TOUR</span>
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
          <div className="desktop-links" style={{ display: 'flex', gap: '35px' }}>
            {navItems.map((item) => (
              <motion.a 
                key={item.href}
                href={item.href}
                whileHover={{ y: -2, color: 'var(--primary)' }}
                style={{ 
                  fontSize: '13px', 
                  fontWeight: '600', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  opacity: 0.8 
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Language Switcher */}
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', padding: '4px' }}>
              {['en', 'tr', 'de', 'ru'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? 'var(--primary)' : 'transparent',
                    border: 'none',
                    color: lang === l ? '#000' : '#fff',
                    padding: '6px 14px',
                    borderRadius: '100px',
                    fontSize: '11px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    transition: '0.3s'
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            <button className="btn-gold" style={{ padding: '12px 24px', fontSize: '13px' }}>
              {t.nav.book}
            </button>
            
            {/* Mobile Toggle */}
            <Menu 
              className="mobile-toggle" 
              onClick={() => setMobileMenu(true)} 
              style={{ display: 'none', cursor: 'pointer' }} 
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
