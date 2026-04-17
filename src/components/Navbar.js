"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = t?.nav ? [
    { name: t.nav.home, href: "/" },
    { name: t.nav.tours, href: "/tours" },
    { name: t.nav.fleet, href: "/fleet" },
    { name: t.nav.transfer, href: "/transfer" },
    { name: t.nav.about, href: "/about" }
  ] : [];

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
          maxWidth: scrolled ? '1100px' : '1300px',
          height: '110px',
          background: 'rgba(15, 23, 42, 0.25)',
          backdropFilter: 'blur(35px)',
          WebkitBackdropFilter: 'blur(35px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          position: 'relative'
        }}
      >
        {/* Intense Animated Colorful Blobs Inside Navbar */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden', borderRadius: '100px' }}>
          <motion.div 
            animate={{ 
              x: [-100, 100, -100], 
              y: [-50, 50, -50],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', top: '-100px', left: '10%', 
              width: '400px', height: '400px', 
              background: 'radial-gradient(circle, rgba(255, 120, 17, 0.6) 0%, transparent 80%)',
              filter: 'blur(60px)'
            }} 
          />
          <motion.div 
            animate={{ 
              x: [100, -100, 100], 
              y: [50, -50, 50],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', bottom: '-150px', right: '5%', 
              width: '500px', height: '500px', 
              background: 'radial-gradient(circle, rgba(0, 210, 255, 0.5) 0%, transparent 80%)',
              filter: 'blur(70px)'
            }} 
          />
          <motion.div 
            animate={{ 
              x: [50, -50, 50], 
              y: [-100, 100, -100],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', top: '10%', right: '20%', 
              width: '350px', height: '350px', 
              background: 'radial-gradient(circle, rgba(0, 242, 105, 0.45) 0%, transparent 80%)',
              filter: 'blur(60px)'
            }} 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', top: '20%', left: '40%', 
              width: '200px', height: '200px', 
              background: 'radial-gradient(circle, rgba(255, 187, 0, 0.5) 0%, transparent 70%)',
              filter: 'blur(50px)'
            }} 
          />
        </div>

        <div className="nav-inner" style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: '100%',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Logo Container */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer', 
              height: '100%',
              padding: '0 10px'
            }}
          >
            <div style={{ position: 'relative', width: 'clamp(210px, 55vw, 290px)', height: 'clamp(70px, 14vw, 95px)' }}>
              <Image 
                src="https://i.imgur.com/IW7B7av.png" 
                alt="Boss Tour Logo" 
                fill 
                priority
                style={{ 
                  objectFit: 'contain', 
                  objectPosition: 'center', 
                  filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.5)) brightness(1.2) contrast(1.1)' 
                }} 
              />
            </div>
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '12px' }}>
            <div className="desktop-links" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              {navItems.map((item) => (
                <a 
                  key={item.href} href={item.href} 
                  style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#fff', opacity: 0.8, textDecoration: 'none' }}
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
                    background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff', padding: '8px 12px', borderRadius: '100px',
                    fontSize: '11px', fontWeight: '900', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '4px', textTransform: 'uppercase'
                  }}
                >
                  <Globe size={14} style={{ color: 'var(--primary)' }} />
                  <span className="lang-code-text" style={{ minWidth: '18px' }}>{lang}</span>
                  <ChevronDown size={12} style={{ opacity: 0.5, transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                </button>
                
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      style={{
                        position: 'absolute', top: '50px', right: 0,
                        background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(20px)',
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
              background: 'rgba(2, 4, 8, 0.85)', backdropFilter: 'blur(30px)',
              padding: '60px 40px', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: 'clamp(220px, 70vw, 320px)', height: 'clamp(80px, 18vw, 110px)' }}>
                <Image 
                  src="https://i.imgur.com/IW7B7av.png" 
                  alt="Boss Tour Logo" 
                  fill 
                  style={{ objectFit: 'contain', objectPosition: 'left' }} 
                />
              </div>
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

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '12px', opacity: 0.5, letterSpacing: '2px' }}>{t?.nav?.about?.toUpperCase()}</p>
              
              <a 
                href="https://wa.me/905424142586" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', opacity: 0.5, fontWeight: '800', color: '#fff' }}>WhatsApp 1</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#fff', margin: 0 }}>+90 542 414 25 86</h3>
                </div>
              </a>

              <a 
                href="https://wa.me/905434499552" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '10px', opacity: 0.5, fontWeight: '800', color: '#fff' }}>WhatsApp 2</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#fff', margin: 0 }}>+90 543 449 95 52</h3>
                </div>
              </a>
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
          .nav-pill { height: 75px !important; }
        }
        @media (max-width: 400px) {
          .logo-text { display: none; }
        }
      `}</style>
    </nav>
  );
}
