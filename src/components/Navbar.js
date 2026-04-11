"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "/#home" },
    { name: t.nav.services, href: "/tours" },
    { name: t.nav.fleet, href: "/fleet" },
    { name: t.nav.contact, href: "/#contact" }
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
        className="nav-pill"
        style={{
          width: '100%',
          maxWidth: scrolled ? '1000px' : '1200px',
          height: '70px',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(var(--primary-rgb), 0.2)',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          overflow: 'visible'
        }}
      >
        <div className="nav-inner" style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: '100%' 
        }}>
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          >
            <div style={{
              width: '40px', height: '40px', background: 'var(--primary)',
              borderRadius: '12px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: '#fff', fontWeight: '900',
              fontSize: '18px', boxShadow: '0 5px 15px rgba(0,102,255,0.3)', flexShrink: 0
            }}>B</div>
            <motion.div className="logo-text" style={{ 
              fontWeight: '900', 
              fontFamily: "var(--font-sans)", /* Use modern sans for colorful look */
              fontSize: '22px',
              letterSpacing: '2px',
              color: 'var(--text-main)' 
            }}>
              BOSS<span style={{ 
                background: 'linear-gradient(to right, #ff7811, #00d2ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>TOUR</span>
            </motion.div>
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div className="desktop-links" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              {navItems.map((item) => (
                <a 
                  key={item.href} href={item.href} 
                  style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--text-main)', opacity: 0.7, textDecoration: 'none' }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Lang Dropdown */}
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  style={{
                    background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)',
                    color: 'var(--text-main)', padding: '8px 12px', borderRadius: '100px',
                    fontSize: '11px', fontWeight: '900', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase'
                  }}
                >
                  <Globe size={14} style={{ color: 'var(--primary)' }} />
                  <span className="lang-code">{lang}</span>
                  <ChevronDown size={12} style={{ opacity: 0.5, transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                </button>
                
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      style={{
                        position: 'absolute', top: '50px', right: 0,
                        background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '20px',
                        padding: '8px', display: 'grid', minWidth: '140px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)', zIndex: 100
                      }}
                    >
                      {['en', 'tr', 'de', 'ru'].map((l) => (
                        <button
                          key={l}
                          onClick={() => { setLang(l); setIsLangOpen(false); }}
                          style={{
                            background: lang === l ? 'var(--vibrant-gradient)' : 'transparent',
                            border: 'none', color: '#fff',
                            padding: '10px 15px', borderRadius: '12px', fontSize: '12px',
                            fontWeight: '700', cursor: 'pointer', textAlign: 'left',
                            textTransform: 'uppercase'
                          }}
                        >
                          {l === 'en' ? 'ENGLISH' : l === 'tr' ? 'TÜRKÇE' : l === 'de' ? 'DEUTSCH' : 'РУССКИЙ'}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <button 
                onClick={() => setMobileMenu(true)}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '5px' }}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', inset: 0, zIndex: 3000, 
              background: 'rgba(2, 4, 8, 0.98)', backdropFilter: 'blur(30px)',
              padding: '60px 40px', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '4px' }}>BOSS<span style={{ color: 'var(--primary)' }}>TOUR</span></div>
              <button 
                onClick={() => setMobileMenu(false)}
                style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '50px', height: '50px', borderRadius: '50%', display:'flex', alignItems:'center', justifyContent:'center' }}
              ><X size={30} /></button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {navItems.map((item, idx) => (
                <motion.a 
                  key={item.href} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }}
                  href={item.href} onClick={() => setMobileMenu(false)}
                  className="serif" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', color: '#fff', textDecoration: 'none', lineHeight: '1' }}
                >
                  {item.name}<span style={{ color: 'var(--primary)', marginLeft: '10px' }}>.</span>
                </motion.a>
              ))}
            </nav>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
              <p style={{ fontSize: '12px', opacity: 0.5, letterSpacing: '2px' }}>CONTACT US</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '10px' }}>+90 (555) 000 00 00</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .nav-inner { padding: 0 30px; }
        .logo-text { font-size: 20px; letter-spacing: 5px; }
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-inner { padding: 0 15px !important; }
          .logo-text { font-size: 16px !important; letter-spacing: 2px !important; }
          .nav-pill { height: 60px !important; }
        }
        @media (max-width: 400px) {
          .logo-text { display: none; }
        }
      `}</style>
    </nav>
  );
}
