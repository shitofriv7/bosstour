"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Settings, Users, Fuel, ArrowLeft, Loader2, FaGithub } from 'lucide-react';
import { translations } from '../translations';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function FleetPage() {
  const [lang, setLang] = useState('tr');
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errorMsg, setErrorMsg] = useState('');
  
  const t = translations[lang];

  const formatDisplayPrice = (price) => {
    return price;
  };

  const calculateTotal = (basePrice) => {
    return basePrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.open(`https://wa.me/905324567890?text=Hello, I want to rent ${selectedItem.name}`, '_blank');
      setLoading(false);
      setSelectedItem(null);
    }, 1500);
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
                {t.fleet.title}
              </h1>
              <p className="luxury-para" style={{ maxWidth: '700px', margin: '0 auto' }}>{t.fleet.subtitle}</p>
            </motion.div>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '40px' }}>
            {t.fleet.list.map((car, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                className="luxury-card interactive" 
                onClick={() => setSelectedItem(car)}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ height: '300px', position: 'relative', background: 'rgba(255,255,255,0.3)', borderRadius: '25px', overflow: 'hidden' }}>
                  <Image src={car.images[0]} alt={car.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain', padding: '40px' }} />
                  <div className="vibrant-badge" style={{ position: 'absolute', top: '25px', right: '25px' }}>{car.price}</div>
                </div>
                <div style={{ padding: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '2.2rem', marginBottom: '20px' }}>{car.name}</h3>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
                    <span style={{ display:'flex', alignItems:'center', gap: '8px', fontSize: '13px', background: 'rgba(0,0,0,0.03)', padding: '8px 15px', borderRadius: '12px' }}><Settings size={16}/>{car.gear}</span>
                    <span style={{ display:'flex', alignItems:'center', gap: '8px', fontSize: '13px', background: 'rgba(0,0,0,0.03)', padding: '8px 15px', borderRadius: '12px' }}><Fuel size={16}/>{car.fuel}</span>
                  </div>
                  <button className="btn-gold" style={{ width: '100%', height: '60px', borderRadius: '18px', fontSize: '1rem' }}>{t.fleet.viewDetails}</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal (Shared with home) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay">
            <motion.div initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }} className="luxury-card" style={{ maxWidth: '900px', width: '95%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', padding: '0', overflow: 'hidden' }}>
              <div style={{ height:'100%', minHeight: '400px', position:'relative', backgroundColor:'#fff' }}>
                <Image src={selectedItem.images[0]} alt="Selected" fill style={{ objectFit: 'contain', padding: '30px' }} />
                <button onClick={() => setSelectedItem(null)} style={{ position:'absolute', top:'20px', left:'20px', background:'rgba(0,0,0,0.4)', color:'#fff', border:'none', width:'40px', height:'40px', borderRadius:'50%', cursor:'pointer' }}>✕</button>
              </div>
              <div style={{ padding: '50px', background: '#fff' }}>
                <h2 className="serif" style={{ fontSize: '2.8rem', lineHeight: 1 }}>{selectedItem.name}</h2>
                <p className="luxury-para" style={{ margin: '30px 0', fontSize: '0.95rem' }}>{selectedItem.longDesc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                   <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '15px', textAlign:'center' }}><Settings size={20} style={{margin:'0 auto 8px auto', color:'var(--primary)'}}/><p style={{fontSize:'12px',fontWeight:'700'}}>{selectedItem.gear}</p></div>
                   <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '15px', textAlign:'center' }}><Fuel size={20} style={{margin:'0 auto 8px auto', color:'var(--primary)'}}/><p style={{fontSize:'12px',fontWeight:'700'}}>{selectedItem.fuel}</p></div>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input className="luxury-input" required placeholder={lang === 'tr' ? 'Ad Soyad' : 'Full Name'} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input className="luxury-input" required placeholder={lang === 'tr' ? 'Telefon' : 'Phone'} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', background:'#f1f5f9', padding:'20px', borderRadius:'15px' }}>
                    <div><p style={{fontSize:'10px',opacity:0.4}}>TOTAL</p><p style={{fontSize:'2rem',fontWeight:'900',color:'var(--primary)'}}>{selectedItem.price}</p></div>
                    <button disabled={loading} className="btn-gold" style={{ height:'60px' }}>{loading ? <Loader2 className="animate-spin" /> : (lang === 'tr' ? 'KİRALA' : 'BOOK NOW')}</button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '11px', opacity: 0.6 }}>
          <span>DEVELOPED FOR</span>
          <a href="https://github.com/shitofriv7" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary) !important' }} className="interactive">
            <span style={{ fontWeight: '700' }}>SHITOfRIV7</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
