"use client";
import React, { useState, use, useEffect } from 'react';
import { translations } from '../../translations';
import Navbar from '../../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Euro, MapPin, CheckCircle2, X, Loader2, Star, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

export default function TourDetail({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const [lang, setLang] = useState('tr');
  const [dbPrice, setDbPrice] = useState(null);
  const t = translations[lang];
  const slug = params.slug;

  React.useEffect(() => {
    const fetchPrice = async () => {
      const { data } = await supabase.from('prices').select('price').eq('id', slug).single();
      if (data) setDbPrice(data.price);
    };
    fetchPrice();
  }, [slug]);

  let tour = t.tours.list.find(item => item.slug === slug);
  if (tour && dbPrice) {
    tour = { ...tour, price: dbPrice };
  }

  const [bookingModal, setBookingModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (tour?.images?.length > 1) {
      const timer = setInterval(() => {
        setActiveImg(prev => (prev + 1) % tour.images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [tour?.images]);

  if (!tour) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        <h1 className="serif">Tour Not Found</h1>
      </div>
    );
  }

  const handleReserve = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <main style={{ background: '#fff', minHeight: '100vh', color: 'var(--text-main)' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* Hero Section with Slider */}
      <section style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image 
              src={tour.images[activeImg]} 
              alt={tour.name} 
              fill 
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }} 
            />
          </motion.div>
        </AnimatePresence>
        
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%), rgba(0,0,0,0.2)' 
        }} />

        {/* Image Indicators */}
        <div style={{ position: 'absolute', bottom: '120px', right: '5%', zIndex: 20, display: 'flex', gap: '10px' }}>
          {tour.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              style={{
                width: idx === activeImg ? '40px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                background: idx === activeImg ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
        
        <div className="main-grid" style={{ position: 'absolute', bottom: '60px', left: 0, right: 0, zIndex: 10 }}>
          <div style={{ gridColumn: 'span 12' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="section-label" style={{ color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>{t.nav.services}</span>
              <h1 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', margin: '20px 0' }}>{tour.name}</h1>
              <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                  <div className="glass" style={{ padding: '10px', borderRadius: '50%' }}><Clock size={18} /></div>
                  <span style={{ fontWeight: '700' }}>{tour.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                  <div className="glass" style={{ padding: '10px', borderRadius: '50%' }}><Euro size={18} /></div>
                  <span style={{ fontWeight: '700' }}>{tour.price}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 7' }}>
            <div className="luxury-card" style={{ padding: '50px' }}>
              <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>{t.fleet.viewDetails}</h2>
              <p className="luxury-para" style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px' }}>
                {tour.longDesc || tour.desc}
              </p>

              {tour.highlights && (
                <div style={{ marginBottom: '50px' }}>
                  <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{t.tours.highlightsLabel}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                    {tour.highlights.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ background: 'rgba(var(--primary-rgb), 0.1)', padding: '5px', borderRadius: '50%', color: 'var(--primary)' }}>
                          <CheckCircle2 size={16} />
                        </div>
                        <span style={{ fontWeight: '600', fontSize: '15px' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tour.included && (
                <div style={{ marginBottom: '50px', background: '#f8fafc', padding: '40px', borderRadius: '30px' }}>
                  <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{t.tours.includedLabel}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    {tour.included.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--success)' }} />
                        <span style={{ fontSize: '14px', opacity: 0.8 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                <div className="glass" style={{ padding: '30px', borderRadius: '20px' }}>
                  <Shield style={{ color: 'var(--primary)', marginBottom: '15px' }} />
                  <h4 style={{ fontWeight: '800' }}>{t.whyUs.items[1].title}</h4>
                  <p style={{ fontSize: '12px', opacity: 0.6 }}>{t.whyUs.items[1].desc}</p>
                </div>
                <div className="glass" style={{ padding: '30px', borderRadius: '20px' }}>
                  <Zap style={{ color: 'var(--accent)', marginBottom: '15px' }} />
                  <h4 style={{ fontWeight: '800' }}>{t.whyUs.items[0].title}</h4>
                  <p style={{ fontSize: '12px', opacity: 0.6 }}>{t.whyUs.items[0].desc}</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: 'span 5' }}>
            <div className="luxury-card glass" style={{ padding: '40px', position: 'sticky', top: '120px', border: '1px solid var(--primary)' }}>
              <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '10px' }}>{t.modal.book}</h3>
              <p style={{ opacity: 0.6, fontSize: '14px', marginBottom: '30px' }}>{t.hero.subtitle}</p>
              
              <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{ opacity: 0.5 }}>{tour.name}</span>
                  <span style={{ fontWeight: '800' }}>{tour.price}</span>
                </div>
                <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '15px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '800' }}>{t.modal.total}</span>
                  <span style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '1.5rem' }}>{tour.price}</span>
                </div>
              </div>

              <button 
                onClick={() => setBookingModal(true)}
                className="btn-gold" 
                style={{ width: '100%', height: '70px', fontSize: '18px' }}
              >
                {t.modal.book}
              </button>
              
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <a href={`https://wa.me/905550000000?text=I want to join ${tour.name}`} className="interactive" style={{ color: 'var(--success)', fontWeight: '700', fontSize: '14px' }}>
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingModal && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
            onClick={() => { if(!loading) setBookingModal(false); setSuccess(false); }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              style={{ width: '100%', maxWidth: '900px', background: '#fff', borderRadius: '30px', boxShadow: '0 40px 70px rgba(0,0,0,0.1)', overflow: 'hidden' }}
              onClick={(e) => e.stopPropagation()}
            >
              {success ? (
                <div style={{ padding: '100px', textAlign: 'center' }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type:'spring', bounce: 0.6 }}><CheckCircle2 size={100} style={{ color: 'var(--primary)', marginBottom: '30px' }} /></motion.div>
                  <h2 className="serif" style={{ fontSize: '3rem' }}>{t.modal.confirm}</h2>
                  <p className="luxury-para">{t.modal.confirmDesc}</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                  <div style={{ position: 'relative', minHeight: '300px', background: '#f8fafc' }}>
                    <Image src={tour.images[0]} alt={tour.name} fill sizes="(max-width: 1100px) 100vw, 50vw" style={{ objectFit: 'contain', padding: '30px' }} />
                  </div>
                  <div className="modal-content" style={{ padding: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h2 className="serif" style={{ fontSize: '2.5rem' }}>{tour.name}</h2>
                      <button onClick={() => setBookingModal(false)} className="glass" style={{ width:'45px', height:'45px', borderRadius:'50%', border:'none', color:'var(--text-main)', cursor:'pointer' }}><X size={20}/></button>
                    </div>
                    <form onSubmit={handleReserve} style={{ marginTop: '30px', display: 'grid', gap: '18px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '18px' }}>
                        <div><label style={{ fontSize: '10px', opacity: 0.4, marginBottom: '5px', display:'block' }}>{t.modal.pickup}</label><input className="luxury-input" required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} /></div>
                      </div>
                      <input className="luxury-input" required placeholder={t.contact.name} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      <input className="luxury-input" required placeholder={t.contact.phone} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      <button disabled={loading} className="btn-gold" style={{ height:'60px', marginTop: '10px' }}>{loading ? <Loader2 className="animate-spin" /> : t.modal.book}</button>
                    </form>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .section-label {
          display: inline-block;
          padding: 8px 15px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }
      `}</style>
    </main>
  );
}
