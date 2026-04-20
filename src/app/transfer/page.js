"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Users, Clock, Shield, ArrowLeft, Loader2, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '../translations';
import Navbar from '../../components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TransferPage() {
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '', hotel: '', room: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  
  const { lang, setLang, t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send to API for Telegram & DB
      await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carName: selectedItem?.name,
          startDate: formData.date,
          endDate: formData.date, 
          customerName: formData.name,
          customerPhone: formData.phone,
          customerEmail: 'transfer-customer@bosstour.com',
          hotel: formData.hotel,
          room: formData.room,
          time: formData.time,
          lang: lang
        })
      });

      // 2. Prepare WhatsApp
      const text = `*YENİ TRANSFER REZERVASYONU*\n\n` +
                   `🚐 *Araç:* ${selectedItem?.name}\n` +
                   `👤 *Müşteri:* ${formData.name}\n` +
                   `📱 *Telefon:* ${formData.phone}\n` +
                   `🏨 *Otel:* ${formData.hotel} - *Oda:* ${formData.room}\n` +
                   `📅 *Tarih:* ${formData.date}\n` +
                   `⏰ *Saat:* ${formData.time}\n\n` +
                   `💰 *Fiyat:* ${selectedItem?.price || 'Belli Değil'}`;
      
      window.open(`https://wa.me/905424142586?text=${encodeURIComponent(text)}`, '_blank');
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedItem(null);
      }, 3000);
    } catch (err) {
      console.error("Transfer booking error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ 
      background: 'linear-gradient(135deg, #f0fbff 0%, #ffffff 50%, #fff8f0 100%)', 
      color: 'var(--text-main)', 
      minHeight: '100vh', 
      position: 'relative' 
    }}>
      <div className="noise-overlay" />
      <div className="bg-glow" />
      
      <Navbar lang={lang} setLang={setLang} t={t} />

      <section style={{ padding: '160px 0 100px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '80px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <button 
                onClick={() => window.location.href = '/'}
                style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto 20px auto', fontWeight: '800' }}
              >
                <ArrowLeft size={16} /> 
                {lang === 'tr' ? 'ANA SAYFAYA DÖN' : 'BACK TO HOME'}
              </button>
              <h1 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '20px' }}>
                {t?.transfer?.title}
              </h1>
              <p className="luxury-para" style={{ maxWidth: '700px', margin: '0 auto' }}>{t?.transfer?.subtitle}</p>
            </motion.div>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '40px' }}>
            {(t?.transfer?.list || []).map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                className="luxury-card interactive" 
                onClick={() => setSelectedItem(item)}
                style={{ cursor: 'pointer', padding: '0', overflow: 'hidden' }}
              >
                <div style={{ height: '300px', position: 'relative' }}>
                  {item?.images?.[0] && (
                    <Image src={item.images[0]} alt={item?.name || ''} fill style={{ objectFit: 'cover' }} />
                  )}
                  <div className="vibrant-badge" style={{ position: 'absolute', top: '25px', right: '25px' }}>{item?.price}</div>
                </div>
                <div style={{ padding: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '2.2rem', marginBottom: '15px' }}>{item?.name}</h3>
                  <p className="luxury-para" style={{ fontSize: '1rem', marginBottom: '25px' }}>{item?.desc}</p>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                    <span style={{ display:'flex', alignItems:'center', gap: '8px', fontSize: '13px', opacity: 0.6 }}><Users size={16}/>{item?.capacity}</span>
                    <span style={{ display:'flex', alignItems:'center', gap: '8px', fontSize: '13px', opacity: 0.6 }}><Shield size={16}/>VIP Service</span>
                  </div>
                  <button className="btn-gold" style={{ width: '100%', height: '60px', borderRadius: '18px' }}>{t?.transfer?.viewDetails}</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Booking Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="modal-overlay"
            style={{ 
              background: 'rgba(255, 255, 255, 0.98)', 
              backdropFilter: 'blur(15px)',
              position: 'fixed', inset: 0, zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="luxury-card" 
              style={{ 
                maxWidth: '1200px', width: '95%', maxHeight: '90vh',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                padding: '0', overflowY: 'auto',
                boxShadow: '0 50px 100px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Visual Summary */}
              <div style={{ minHeight: '400px', position:'relative', background: '#000' }}>
                <Image src={selectedItem?.images?.[0]} alt="Selected" fill style={{ objectFit: 'cover', opacity: 0.7 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <span className="section-label" style={{ color: 'var(--primary)', border: '1px solid var(--primary)' }}>{lang === 'tr' ? 'TRANSFER ARACI' : 'TRANSFER VEHICLE'}</span>
                  <h2 className="serif" style={{ fontSize: '3.5rem', lineHeight: 1, color: '#fff' }}>{selectedItem?.name}</h2>
                  <p style={{ marginTop: '20px', fontSize: '1.1rem', opacity: 0.8, color: '#fff', maxWidth: '400px' }}>{selectedItem?.desc}</p>
                  <div style={{ marginTop: '30px', fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)' }}>{selectedItem?.price}</div>
                </div>
                <button onClick={() => setSelectedItem(null)} style={{ position:'absolute', top:'40px', left:'40px', background:'rgba(255,255,255,0.1)', color:'#fff', border:'none', width:'50px', height:'50px', borderRadius:'50%', cursor:'pointer', backdropFilter: 'blur(10px)', zIndex: 10 }}>✕</button>
              </div>

              {/* Right Side: Form */}
              <div style={{ padding: '60px', background: '#fff', overflowY: 'auto' }}>
                <div style={{ marginBottom: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{t?.transfer?.bookingTitle}</h3>
                  <p style={{ opacity: 0.5 }}>{lang === 'tr' ? 'Lütfen transfer detaylarını giriniz.' : 'Please enter your transfer details below.'}</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '25px' }}>
                  <div className="modal-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'AD SOYAD' : 'FULL NAME'}</label>
                      <input className="luxury-input" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'TELEFON' : 'PHONE'}</label>
                      <input className="luxury-input" required placeholder="+90 ..." value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>


                  <div className="modal-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{t?.modal?.hotel}</label>
                      <input className="luxury-input" placeholder="Titanic..." value={formData.hotel} onChange={e => setFormData({...formData, hotel: e.target.value})} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{t?.modal?.roomNo}</label>
                      <input className="luxury-input" placeholder="102" value={formData.room} onChange={e => setFormData({...formData, room: e.target.value})} />
                    </div>
                  </div>

                  <div className="modal-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'TARİH' : (lang === 'de' ? 'DATUM' : (lang === 'ru' ? 'ДАТА' : 'DATE'))}</label>
                      <input className="luxury-input" required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                       <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'SAAT' : (lang === 'de' ? 'UHRZEIT' : (lang === 'ru' ? 'ВРЕМЯ' : 'TIME'))}</label>
                       <input className="luxury-input" required placeholder="14:30" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                    </div>
                  </div>

                  <button disabled={loading || showSuccess} className="btn-gold" style={{ width: '100%', height: '80px', borderRadius: '20px', fontSize: '1.2rem', marginTop: '20px' }}>
                    {loading ? <Loader2 className="animate-spin mx-auto" /> : (showSuccess ? (lang === 'tr' ? 'TALEP ALINDI ✅' : (lang === 'de' ? 'ANFRAGE ERHALTEN ✅' : (lang === 'ru' ? 'ЗАПРОС ПРИНЯТ ✅' : 'REQUEST RECEIVED ✅'))) : t?.transfer?.completeBooking)}
                  </button>
                  {showSuccess && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', color: '#059669', fontWeight: '700' }}>
                      {t?.modal?.confirmDesc}
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer lang={lang} />
    </main>
  );
}
