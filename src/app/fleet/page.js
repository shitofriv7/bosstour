"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Loader2, Car, Users, Fuel, Settings } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '../translations';
import Navbar from '../../components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function FleetPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', hotel: '', room: '' });

  const { lang, setLang, t: ctxT } = useLanguage() || {};
  const activeLang = lang || 'tr';
  const t = ctxT || translations[activeLang] || translations['tr'];

  const cars = (t && t.fleet && t.fleet.cars) ? t.fleet.cars : [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send to API for Database & Telegram
      await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carName: selectedItem?.name,
          startDate: formData.date,
          endDate: formData.date, 
          customerName: formData.name,
          customerPhone: formData.phone,
          customerEmail: 'fleet-customer@bosstour.com',
          hotel: formData.hotel,
          room: formData.room,
          time: formData.time,
          lang: activeLang
        })
      });

      // 2. Prepare WhatsApp
      const message = activeLang === 'tr' 
        ? `*YENİ ARAÇ KİRALAMA TALEBİ*\n\n🚗 *Araç:* ${selectedItem?.name}\n👤 *Müşteri:* ${formData.name}\n📱 *Telefon:* ${formData.phone}\n🏨 *Otel:* ${formData.hotel} - *Oda:* ${formData.room}\n📅 *Tarih:* ${formData.date}\n⏰ *Saat:* ${formData.time}\n💰 *Fiyat:* ${selectedItem?.price}`
        : `*NEW CAR RENTAL REQUEST*\n\n🚗 *Vehicle:* ${selectedItem?.name}\n👤 *Customer:* ${formData.name}\n📱 *Phone:* ${formData.phone}\n🏨 *Hotel:* ${formData.hotel} - *Room:* ${formData.room}\n📅 *Date:* ${formData.date}\n⏰ *Time:* ${formData.time}\n💰 *Price:* ${selectedItem?.price}`;
      
      window.open(`https://wa.me/905424142586?text=${encodeURIComponent(message)}`, '_blank');
      setSelectedItem(null);
    } catch (err) {
      console.error("Booking error:", err);
    } finally {
      setLoading(false);
    }
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
                    {car?.price}<span style={{fontSize: '0.8rem', opacity: 0.8, marginLeft: '4px'}}>{activeLang === 'tr' ? '/gün' : '/day'}</span>
                  </div>
                </div>
                <div style={{ padding: '40px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <h3 className="serif" style={{ fontSize: '2.4rem' }}>{car?.name}</h3>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    {(car?.features || []).map((f, idx) => {
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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="modal-overlay"
            style={{ 
              zIndex: 10000, 
              background: 'rgba(255, 255, 255, 0.98)', 
              backdropFilter: 'blur(15px)',
              position: 'fixed', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 30, opacity: 0 }}
              className="luxury-card" 
              style={{ 
                maxWidth: '1200px', width: '100%', maxHeight: '90vh',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
                padding: '0', overflow: 'hidden',
                background: '#fff', borderRadius: '40px',
                boxShadow: '0 50px 100px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Visual Summary */}
              <div style={{ minHeight: '400px', position: 'relative', background: 'linear-gradient(to bottom, #f8fafc, #fff)' }}>
                {selectedItem.images && selectedItem.images[0] && (
                  <Image src={selectedItem.images[0]} alt="Selected" fill style={{ objectFit: 'contain', padding: '60px', opacity: 1 }} />
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,0.9), transparent)', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <span className="section-label" style={{ marginBottom: '15px' }}>{activeLang === 'tr' ? 'SEÇİLEN ARAÇ' : 'SELECTED VEHICLE'}</span>
                  <h2 className="serif" style={{ fontSize: '3.5rem', lineHeight: 1, color: '#000' }}>{selectedItem.name}</h2>
                  <div style={{ marginTop: '30px', fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)' }}>
                    {selectedItem.price}<span style={{fontSize: '1rem', opacity: 0.5, color: '#000'}}> / {activeLang === 'tr' ? 'gün' : 'day'}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedItem(null)} 
                  style={{ 
                    position: 'absolute', top: '40px', left: '40px', 
                    background: 'rgba(0,0,0,0.05)', color: '#000', border: 'none', 
                    width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer',
                    zIndex: 10 
                  }}
                >✕</button>
              </div>

              {/* Right Side: Form */}
              <div style={{ padding: '60px', background: '#fff', overflowY: 'auto' }}>
                <div style={{ marginBottom: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{activeLang === 'tr' ? 'Araç Kiralama' : 'Car Rental'}</h3>
                  <p style={{ opacity: 0.5 }}>{activeLang === 'tr' ? 'Lütfen kiralama detaylarını doldurun.' : 'Please fill in your rental details below.'}</p>
                </div>
                
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '25px' }}>
                  <div className="modal-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{activeLang === 'tr' ? 'AD SOYAD' : 'NAME SURNAME'}</label>
                      <input className="luxury-input" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{activeLang === 'tr' ? 'TELEFON' : 'PHONE'}</label>
                      <input className="luxury-input" required placeholder="+90 ..." value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                  </div>


                  <div className="modal-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{t?.modal?.hotel}</label>
                      <input className="luxury-input" placeholder="Titanic..." value={formData.hotel} onChange={e => setFormData({ ...formData, hotel: e.target.value })} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{t?.modal?.roomNo}</label>
                      <input className="luxury-input" placeholder="102" value={formData.room} onChange={e => setFormData({ ...formData, room: e.target.value })} />
                    </div>
                  </div>

                  <div className="modal-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{activeLang === 'tr' ? 'TARİH' : 'DATE'}</label>
                      <input className="luxury-input" type="date" required value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{activeLang === 'tr' ? 'SAAT' : 'TIME'}</label>
                      <input className="luxury-input" required placeholder="09:00" value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} />
                    </div>
                  </div>
                  
                  <button disabled={loading} className="btn-gold" style={{ width: '100%', height: '80px', borderRadius: '20px', fontSize: '1.2rem', marginTop: '20px' }}>
                    {loading ? <Loader2 className="animate-spin" /> : (activeLang === 'tr' ? 'REZERVASYONU TAMAMLA' : 'COMPLETE RESERVATION')}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer lang={activeLang} />
    </main>
  );
}
