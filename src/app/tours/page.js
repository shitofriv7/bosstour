"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, ArrowLeft, Loader2, Calendar, Users } from 'lucide-react';
import { translations } from '../translations';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

export default function ToursPage() {
  const [lang, setLang] = useState('tr');
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });
  const [dbPrices, setDbPrices] = useState([]);
  
  const t = translations[lang];

  React.useEffect(() => {
    const fetchDbPrices = async () => {
      const { data } = await supabase.from('prices').select('*').eq('type', 'tour');
      if (data) setDbPrices(data);
    };
    fetchDbPrices();
  }, []);

  if (t && dbPrices.length > 0) {
    t.tours.list = t.tours.list.map(tour => {
      const override = dbPrices.find(p => p.id === tour.slug);
      return override ? { ...tour, price: override.price } : tour;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.open(`https://wa.me/905324567890?text=Hello, I want to book the ${selectedItem.name} on ${formData.date}`, '_blank');
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
                {t.tours.title}
              </h1>
              <p className="luxury-para" style={{ maxWidth: '700px', margin: '0 auto' }}>{t.tours.subtitle}</p>
            </motion.div>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '40px' }}>
            {t.tours.list.map((tour, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                className="luxury-card tour-card" 
                onClick={() => window.location.href = `/tours/${tour.slug}`}
                style={{ cursor: 'pointer', overflow: 'hidden', padding: '0' }}
              >
                <div style={{ height: '300px', position: 'relative' }}>
                  <Image src={tour.images[0]} alt={tour.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  <div className="vibrant-badge" style={{ position: 'absolute', top: '25px', right: '25px' }}>{tour.price}</div>
                </div>
                <div style={{ padding: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{tour.name}</h3>
                  <p className="luxury-para" style={{ fontSize: '0.9rem', marginBottom: '25px', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{tour.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', opacity: 0.5, display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14}/>{tour.duration}</span>
                    <button className="btn-gold" style={{ padding: '10px 20px', fontSize: '12px' }}>{t.tours.viewTour}</button>
                  </div>
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
              <div style={{ height:'100%', minHeight: '400px', position:'relative' }}>
                <Image src={selectedItem.images[0]} alt="Selected" fill style={{ objectFit: 'cover' }} />
                <button onClick={() => setSelectedItem(null)} style={{ position:'absolute', top:'20px', left:'20px', background:'rgba(0,0,0,0.4)', color:'#fff', border:'none', width:'40px', height:'40px', borderRadius:'50%', cursor:'pointer' }}>✕</button>
              </div>
              <div style={{ padding: '50px', background: '#fff' }}>
                <h2 className="serif" style={{ fontSize: '2.8rem', lineHeight: 1 }}>{selectedItem.name}</h2>
                <p className="luxury-para" style={{ margin: '30px 0', fontSize: '0.95rem' }}>{selectedItem.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                   <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '15px', textAlign:'center' }}><Clock size={20} style={{margin:'0 auto 8px auto', color:'var(--primary)'}}/><p style={{fontSize:'12px',fontWeight:'700'}}>{selectedItem.duration}</p></div>
                   <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '15px', textAlign:'center' }}><MapPin size={20} style={{margin:'0 auto 8px auto', color:'var(--primary)'}}/><p style={{fontSize:'12px',fontWeight:'700'}}>{lang === 'tr' ? 'Antalya Başlangıç' : 'Starts in Antalya'}</p></div>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input className="luxury-input" required placeholder={lang === 'tr' ? 'Ad Soyad' : 'Full Name'} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input className="luxury-input" required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', background:'#f1f5f9', padding:'20px', borderRadius:'15px' }}>
                    <div><p style={{fontSize:'10px',opacity:0.4}}>PRICE PP</p><p style={{fontSize:'2rem',fontWeight:'900',color:'var(--primary)'}}>{selectedItem.price}</p></div>
                    <button disabled={loading} className="btn-gold" style={{ height:'60px' }}>{loading ? <Loader2 className="animate-spin" /> : (lang === 'tr' ? 'REZERVASYON' : 'BOOK NOW')}</button>
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
