"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, ArrowLeft, Loader2, Calendar, Users, X, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '../translations';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Footer from '@/components/Footer';

export default function ToursPage() {
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', adults: '1', children: '0', time: '', hotel: '', room: '' });
  
  const { lang, setLang, t } = useLanguage();

  const handleReserve = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send to API for Database & Telegram
      await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carName: selectedItem?.name, // Using 'carName' field for tour name to match API
          startDate: formData.date,
          endDate: formData.date,
          customerName: formData.name,
          customerPhone: formData.phone,
          customerEmail: 'tour-customer@bosstour.com',
          hotel: formData.hotel,
          room: formData.room,
          time: formData.time,
          adults: formData.adults,
          children: formData.children,
          lang: lang
        })
      });

      // 2. WhatsApp message
      const text = `*YENİ TUR REZERVASYONU*\n\n` +
                   `🌟 *Tur:* ${selectedItem?.name}\n` +
                   `👤 *Müşteri:* ${formData.name}\n` +
                   `📱 *Telefon:* ${formData.phone}\n` +
                   `🏨 *Otel:* ${formData.hotel} - *Oda:* ${formData.room}\n` +
                   `📅 *Tarih:* ${formData.date}\n` +
                   `⏰ *Saat:* ${formData.time}\n` +
                   `👥 *Kişi:* ${formData.adults} Yetişkin, ${formData.children} Çocuk\n\n` +
                   `💰 *Fiyat:* ${selectedItem?.price}`;
      
      window.open(`https://wa.me/905424142586?text=${encodeURIComponent(text)}`, '_blank');
      setSuccess(true);
    } catch (err) {
      console.error("Tour booking failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />

      <section style={{ padding: '120px 0 60px 0', background: '#f8fafc' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', textAlign: 'center' }}>
            <span className="section-label">{t?.nav?.tours}</span>
            <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>{t?.tours?.title}</h1>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 120px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {(t?.tours?.list || []).map((tour, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="luxury-card interactive"
                style={{ padding: '0', overflow: 'hidden' }}
              >
                <Link href={`/tours/${tour?.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ height: '240px', position: 'relative' }}>
                    <Image src={tour?.images?.[0]} alt={tour?.name} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', color: '#fff', padding: '8px 15px', borderRadius: '100px', fontWeight: '900', fontSize: '14px' }}>
                      {tour?.price}
                    </div>
                  </div>
                  <div style={{ padding: '30px' }}>
                    <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{tour?.name}</h3>
                    <p style={{ opacity: 0.6, fontSize: '14px', marginBottom: '25px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{tour?.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5, fontSize: '12px' }}>
                        <Clock size={16} />
                        <span>{tour?.duration}</span>
                      </div>
                      <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '14px' }}>{t?.fleet?.viewDetails} →</span>
                    </div>
                  </div>
                </Link>
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedItem(tour); }}
                  style={{ width: '100%', padding: '15px', background: '#f8fafc', border: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--primary)', fontWeight: '900', fontSize: '12px', cursor: 'pointer', transition: '0.3s' }}
                  onMouseEnter={e => e.target.style.background = '#f0f4f8'}
                  onMouseLeave={e => e.target.style.background = '#f8fafc'}
                >
                  {t?.modal?.book || 'QUICK BOOK'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal Redesigned */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
            onClick={() => { if(!loading) setSelectedItem(null); setSuccess(false); }}
          >
            <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} 
              className="luxury-card" 
              style={{ maxWidth: '800px', width: '95%', padding: '0', overflowY: 'auto', maxHeight: '95vh', background:'#fff', boxShadow:'0 50px 100px -20px rgba(0,0,0,0.2)' }}
              onClick={e => e.stopPropagation()}
            >
              {success ? (
                <div style={{ padding: '80px 40px', textAlign: 'center' }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type:'spring', bounce: 0.6 }}><CheckCircle2 size={100} style={{ color: 'var(--primary)', marginBottom: '30px' }} /></motion.div>
                  <h2 className="serif" style={{ fontSize: '2.5rem' }}>{t?.modal?.confirm}</h2>
                  <p className="luxury-para">{t?.modal?.confirmDesc}</p>
                  <button onClick={() => { setSelectedItem(null); setSuccess(false); }} className="btn-gold" style={{marginTop:'30px', padding:'15px 40px'}}>Ok</button>
                </div>
              ) : (
                <div style={{ padding: '40px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
                    <button onClick={() => setSelectedItem(null)} style={{ position:'absolute', top:'-10px', right:'-10px', background:'rgba(0,0,0,0.05)', color:'var(--text-main)', border:'none', width:'40px', height:'40px', borderRadius:'50%', cursor:'pointer' }}>✕</button>
                    <h2 className="serif" style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '10px' }}>{selectedItem?.name}</h2>
                    <p style={{ opacity: 0.5, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight:'900' }}>Rezervasyon Bilgileri</p>
                  </div>

                  <form onSubmit={handleReserve} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    

                    {/* SECTION 2 */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', opacity: 0.6, fontWeight: '900', fontSize: '11px', letterSpacing: '1.5px' }}><Users size={14}/> MÜŞTERİ BİLGİLERİ</div>
                      <div className="modal-grid">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>{t?.modal?.name || 'Ad Soyad (Name)'}</label>
                          <input className="luxury-input" required placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>{lang === 'tr' ? 'Telefon No' : 'Phone No'}</label>
                          <input className="luxury-input" required placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                        </div>
                      </div>
                      <div className="modal-grid" style={{ marginTop: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>{t?.modal?.hotel}</label>
                          <input className="luxury-input" placeholder="Titanic..." value={formData.hotel} onChange={e => setFormData({...formData, hotel: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>{t?.modal?.roomNo}</label>
                          <input className="luxury-input" placeholder="102" value={formData.room} onChange={e => setFormData({...formData, room: e.target.value})} />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3 */}
                    <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '30px', border: '1px solid rgba(0,0,0,0.03)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary)', fontWeight: '900', fontSize: '11px', letterSpacing: '1.5px' }}><Calendar size={14}/> TUR DETAYLARI</div>
                      <div className="modal-grid">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Tarih (Datum)</label>
                          <input className="luxury-input" required type="date" style={{ background: '#fff' }} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Saat (Uhr)</label>
                          <input className="luxury-input" required placeholder="10:30" style={{ background: '#fff' }} value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                        </div>
                      </div>
                      <div className="modal-grid" style={{ marginTop: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Yetişkin (Adults)</label>
                          <input className="luxury-input" required type="number" min="1" style={{ background: '#fff' }} value={formData.adults} onChange={e => setFormData({...formData, adults: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Çocuk (Children)</label>
                          <input className="luxury-input" required type="number" min="0" style={{ background: '#fff' }} value={formData.children} onChange={e => setFormData({...formData, children: e.target.value})} />
                        </div>
                      </div>
                    </div>

                    <button disabled={loading} className="btn-gold" style={{ width: '100%', height: '80px', borderRadius: '40px', background: 'var(--vibrant-gradient)', color: '#fff', fontSize: '18px', fontWeight: '900', boxShadow: '0 20px 40px rgba(var(--primary-rgb), 0.3)', marginTop:'10px' }}>
                      {loading ? <Loader2 className="animate-spin" /> : (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                          <span>REZERVASYONU TAMAMLA</span>
                          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.3)' }} />
                          <span style={{ fontSize: '20px' }}>{selectedItem.price}</span>
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer lang={lang} />
    </main>
  );
}
