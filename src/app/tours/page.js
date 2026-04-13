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

export default function ToursPage() {
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ turTipi: '', hotel: '', konNo: '', zmrNr: '', name: '', phone: '', email: '', date: '', adults: '1', children: '0', time: '', restBtr: '', informer: '' });
  
  const { lang, setLang, t } = useLanguage();

  const handleReserve = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />

      <section style={{ padding: '120px 0 60px 0', background: '#f8fafc' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', textAlign: 'center' }}>
            <span className="section-label">{t.nav.tours}</span>
            <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>{t.tours.title}</h1>
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
                <Link href={`/tours/${tour.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ height: '240px', position: 'relative' }}>
                    <Image src={tour.images[0]} alt={tour.name} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', color: '#fff', padding: '8px 15px', borderRadius: '100px', fontWeight: '900', fontSize: '14px' }}>
                      {tour.price}
                    </div>
                  </div>
                  <div style={{ padding: '30px' }}>
                    <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{tour.name}</h3>
                    <p style={{ opacity: 0.6, fontSize: '14px', marginBottom: '25px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{tour.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.5, fontSize: '12px' }}>
                        <Clock size={16} />
                        <span>{tour.duration}</span>
                      </div>
                      <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '14px' }}>{t.fleet.viewDetails} →</span>
                    </div>
                  </div>
                </Link>
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedItem(tour); }}
                  style={{ width: '100%', padding: '15px', background: '#f8fafc', border: 'none', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--primary)', fontWeight: '900', fontSize: '12px', cursor: 'pointer', transition: '0.3s' }}
                  onMouseEnter={e => e.target.style.background = '#f0f4f8'}
                  onMouseLeave={e => e.target.style.background = '#f8fafc'}
                >
                  {t.modal.book || 'QUICK BOOK'}
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
                  <h2 className="serif" style={{ fontSize: '2.5rem' }}>{t.modal.confirm}</h2>
                  <p className="luxury-para">{t.modal.confirmDesc}</p>
                  <button onClick={() => { setSelectedItem(null); setSuccess(false); }} className="btn-gold" style={{marginTop:'30px', padding:'15px 40px'}}>Ok</button>
                </div>
              ) : (
                <div style={{ padding: '40px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
                    <button onClick={() => setSelectedItem(null)} style={{ position:'absolute', top:'-10px', right:'-10px', background:'rgba(0,0,0,0.05)', color:'var(--text-main)', border:'none', width:'40px', height:'40px', borderRadius:'50%', cursor:'pointer' }}>✕</button>
                    <h2 className="serif" style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '10px' }}>{selectedItem.name}</h2>
                    <p style={{ opacity: 0.5, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight:'900' }}>Rezervasyon Bilgileri</p>
                  </div>

                  <form onSubmit={handleReserve} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    
                    {/* SECTION 1 */}
                    <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '30px', border: '1px solid rgba(0,0,0,0.03)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary)', fontWeight: '900', fontSize: '11px', letterSpacing: '1.5px' }}><MapPin size={14}/> REZERVASYON BİLGİLERİ</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Tur Tipi</label>
                          <input className="luxury-input" required placeholder="Tur Tipi" style={{ background: '#fff' }} value={formData.turTipi} onChange={e => setFormData({...formData, turTipi: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Otel / Gidilen Yer</label>
                          <input className="luxury-input" required placeholder="Otel" style={{ background: '#fff' }} value={formData.hotel} onChange={e => setFormData({...formData, hotel: e.target.value})} />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Rezervasyon No (No.kon.)</label>
                          <input className="luxury-input" required placeholder="No.kon." style={{ background: '#fff' }} value={formData.konNo} onChange={e => setFormData({...formData, konNo: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Zaman No (Zmr.Nr.)</label>
                          <input className="luxury-input" required placeholder="Zmr.Nr." style={{ background: '#fff' }} value={formData.zmrNr} onChange={e => setFormData({...formData, zmrNr: e.target.value})} />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2 */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', opacity: 0.6, fontWeight: '900', fontSize: '11px', letterSpacing: '1.5px' }}><Users size={14}/> MÜŞTERİ BİLGİLERİ</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Ad Soyad (Name)</label>
                          <input className="luxury-input" required placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Telefon No</label>
                          <input className="luxury-input" required placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3 */}
                    <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '30px', border: '1px solid rgba(0,0,0,0.03)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--primary)', fontWeight: '900', fontSize: '11px', letterSpacing: '1.5px' }}><Calendar size={14}/> TUR DETAYLARI</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Tarih (Datum)</label>
                          <input className="luxury-input" required type="date" style={{ background: '#fff' }} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Saat (Uhr)</label>
                          <input className="luxury-input" required placeholder="Uhr" style={{ background: '#fff' }} value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Kişi Sayısı (Abanc)</label>
                          <input className="luxury-input" required type="number" min="1" style={{ background: '#fff' }} value={formData.adults} onChange={e => setFormData({...formData, adults: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Çocuk Sayısı (Kinder)</label>
                          <input className="luxury-input" required type="number" min="0" style={{ background: '#fff' }} value={formData.children} onChange={e => setFormData({...formData, children: e.target.value})} />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 4 */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', opacity: 0.6, fontWeight: '900', fontSize: '11px', letterSpacing: '1.5px' }}><Zap size={14}/> EK BİLGİLER</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Restoran / Yer (Rest Btr.)</label>
                          <input className="luxury-input" placeholder="Rest Btr." value={formData.restBtr} onChange={e => setFormData({...formData, restBtr: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                          <label style={{ fontSize: '10px', opacity: 0.5 }}>Bilgilendiren (Informer)</label>
                          <input className="luxury-input" placeholder="Informer" value={formData.informer} onChange={e => setFormData({...formData, informer: e.target.value})} />
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
      
      <footer style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#ffffff' }}>
        <p style={{ opacity: 0.4, fontSize: '12px' }}>© 2026 Boss Tour • Luxury Destination Management</p>
      </footer>
    </main>
  );
}
