"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Loader2, Car, Users, Fuel, Settings } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '../translations';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function FleetPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const { lang, setLang, t: ctxT } = useLanguage() || {};
  const activeLang = lang || 'tr';
  const t = ctxT || translations[activeLang] || translations['tr'];

  const cars = (t && t.fleet && t.fleet.cars) ? t.fleet.cars : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const message = activeLang === 'tr' 
        ? `Merhaba, ${selectedItem?.name || ''} kiralamak istiyorum. Adım: ${formData.name}, Tel: ${formData.phone}`
        : `Hello, I want to rent ${selectedItem?.name || ''}. Name: ${formData.name}, Tel: ${formData.phone}`;
      
      window.open(
        `https://wa.me/905434499552?text=${encodeURIComponent(message)}`,
        '_blank'
      );
      setLoading(false);
      setSelectedItem(null);
    }, 1500);
  };

  return (
    <main style={{
      background: 'var(--bg-dark)',
      color: 'var(--text-main)',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <div className="noise-overlay" />
      <div className="bg-glow" />
      <div className="blob-1 floating-blob" />
      <div className="blob-2 floating-blob" />
      <div className="blob-3 floating-blob" />

      <Navbar lang={activeLang} setLang={setLang || (() => {})} t={t} />

      <section style={{ padding: '160px 0 100px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '80px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <button
                onClick={() => window.location.href = '/'}
                style={{ 
                  background: 'rgba(var(--primary-rgb), 0.1)', 
                  border: 'none', 
                  color: 'var(--primary)', 
                  cursor: 'pointer', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  padding: '10px 20px',
                  borderRadius: '100px',
                  marginBottom: '20px', 
                  fontWeight: '800',
                  fontSize: '12px',
                  letterSpacing: '1px'
                }}
              >
                <ArrowLeft size={16} />
                {activeLang === 'tr' ? 'ANA SAYFAYA DÖN' : 'BACK TO HOME'}
              </button>
              <h1 className="serif" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', lineHeight: 1, marginBottom: '20px', background: 'var(--vibrant-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t?.fleet?.title || 'Fleet'}
              </h1>
              <p className="luxury-para" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.7 }}>
                {t?.fleet?.subtitle || ''}
              </p>
            </motion.div>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '40px' }}>
            {cars.map((car, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card interactive"
                onClick={() => setSelectedItem(car)}
                style={{ cursor: 'pointer', background: '#fff' }}
              >
                <div style={{ height: '320px', position: 'relative', background: 'linear-gradient(to bottom, #f8fafc, #fff)', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                  {car.images && car.images[0] && (
                    <Image src={car.images[0]} alt={car.name || ''} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain', padding: '40px' }} />
                  )}
                  <div style={{ 
                    position: 'absolute', 
                    top: '25px', 
                    right: '25px',
                    background: 'var(--vibrant-gradient)',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '15px',
                    fontWeight: '900',
                    fontSize: '1.2rem',
                    boxShadow: '0 10px 20px rgba(var(--primary-rgb), 0.2)'
                  }}>
                    {car.price}<span style={{fontSize: '0.8rem', opacity: 0.8, marginLeft: '4px'}}>{activeLang === 'tr' ? '/gün' : '/day'}</span>
                  </div>
                </div>
                <div style={{ padding: '40px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <h3 className="serif" style={{ fontSize: '2.4rem' }}>{car.name}</h3>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    {(car.features || []).map((f, idx) => {
                      const Icon = idx === 0 ? Fuel : idx === 1 ? Settings : Users;
                      return (
                        <div key={idx} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px', 
                          fontSize: '12px', 
                          fontWeight: '700',
                          background: 'rgba(0,0,0,0.03)', 
                          padding: '8px 14px', 
                          borderRadius: '10px',
                          color: 'var(--text-muted)'
                        }}>
                          <Icon size={14} style={{color: 'var(--primary)'}} />
                          {f}
                        </div>
                      );
                    })}
                  </div>
                  
                  <button className="btn-gold" style={{ width: '100%', height: '65px', borderRadius: '20px', fontSize: '1.1rem' }}>
                    {t?.fleet?.bookNow || 'Book Now'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="modal-overlay"
            style={{ 
              zIndex: 10000, 
              background: 'rgba(15, 23, 42, 0.85)', 
              backdropFilter: 'blur(15px)',
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 50 }}
              className="luxury-card" 
              style={{ 
                maxWidth: '960px', 
                width: '100%', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                padding: '0', 
                overflow: 'hidden',
                background: '#fff',
                borderRadius: '40px'
              }}
            >
              <div style={{ height: '100%', minHeight: '450px', position: 'relative', backgroundColor: '#f8fafc', padding: '40px' }}>
                {selectedItem.images && selectedItem.images[0] && (
                  <Image src={selectedItem.images[0]} alt="Selected" fill style={{ objectFit: 'contain', padding: '40px' }} />
                )}
                <button 
                  onClick={() => setSelectedItem(null)} 
                  style={{ 
                    position: 'absolute', 
                    top: '25px', 
                    left: '25px', 
                    background: '#fff', 
                    color: '#000', 
                    border: '1px solid rgba(0,0,0,0.1)', 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                    zIndex: 10
                  }}
                >✕</button>
              </div>
              <div style={{ padding: '60px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="section-label" style={{ marginBottom: '15px' }}>{activeLang === 'tr' ? 'HIZLI REZERVASYON' : 'FAST BOOKING'}</span>
                <h2 className="serif" style={{ fontSize: '3.5rem', lineHeight: 1, marginBottom: '25px' }}>{selectedItem.name}</h2>
                
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
                  {(selectedItem.features || []).map((f, idx) => (
                    <div key={idx} style={{ 
                      background: 'rgba(var(--primary-rgb), 0.05)', 
                      padding: '18px', 
                      borderRadius: '20px', 
                      textAlign: 'center', 
                      flex: 1, 
                      minWidth: '90px',
                      border: '1px solid rgba(var(--primary-rgb), 0.1)'
                    }}>
                      <p style={{ fontSize: '13px', fontWeight: '800', color: 'var(--primary)' }}>{f}</p>
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <input className="luxury-input" required placeholder={activeLang === 'tr' ? 'Ad Soyad' : 'Full Name'} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    <input className="luxury-input" required placeholder={activeLang === 'tr' ? 'Telefon' : 'Phone'} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-dark)', padding: '30px', borderRadius: '25px', marginTop: '10px' }}>
                    <div>
                      <p style={{ fontSize: '11px', fontWeight: '800', opacity: 0.4, letterSpacing: '1px' }}>{activeLang === 'tr' ? 'GÜNLÜK FİYAT' : 'DAILY PRICE'}</p>
                      <p style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', lineHeight: 1 }}>{selectedItem.price}</p>
                    </div>
                    <button disabled={loading} className="btn-gold" style={{ height: '70px', padding: '0 40px' }}>
                      {loading ? <Loader2 className="animate-spin" /> : (activeLang === 'tr' ? 'HEMEN REZERVE ET' : 'BOOK NOW')}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#fff', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '2px', opacity: 0.4 }}>BOSS TOUR ANTALYA © 2026</p>
      </footer>
    </main>
  );
}
