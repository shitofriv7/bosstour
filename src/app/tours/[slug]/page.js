"use client";
import React, { useState, use, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '../../translations';
import Navbar from '../../../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Euro, MapPin, Users, CheckCircle2, X, Loader2, Star, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

export default function TourDetail({ params: paramsPromise }) {
  const params = use(paramsPromise);
  
  const [dbPrice, setDbPrice] = useState(null);
  const { lang, setLang, t } = useLanguage();
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
  const [formData, setFormData] = useState({ turTipi: '', hotel: '', konNo: '', zmrNr: '', name: '', phone: '', email: '', date: '', adults: '1', children: '0', time: '', restBtr: '', informer: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (tour?.images?.length > 0) {
      const timer = setInterval(() => {
        setActiveImg(prev => (prev + 1) % tour.images.length);
        setCounter(c => c + 1);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [tour?.images]);

  const nextImg = () => {
    setActiveImg(prev => (prev + 1) % tour.images.length);
    setCounter(c => c + 1);
  };

  const prevImg = () => {
    setActiveImg(prev => (prev === 0 ? tour.images.length - 1 : prev - 1));
    setCounter(c => c + 1);
  };

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
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <main style={{ background: '#fff', minHeight: '100vh', color: 'var(--text-main)' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* Hero Slider */}
      <section style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div key={counter} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} style={{ position: 'absolute', inset: 0 }}>
            <Image src={tour.images[activeImg]} alt={tour.name} fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
          </motion.div>
        </AnimatePresence>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%), rgba(0,0,0,0.2)' }} />
        
        {tour?.images && (
          <>
            <button onClick={prevImg} style={{ position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)', zIndex: 20, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', transition: 'all 0.3s ease' }} className="slider-btn">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImg} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', zIndex: 20, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', transition: 'all 0.3s ease' }} className="slider-btn">
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="main-grid" style={{ position: 'absolute', bottom: '60px', left: 0, right: 0, zIndex: 10 }}>
          <div style={{ gridColumn: 'span 12' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="section-label" style={{ color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>{t.nav.services}</span>
              <h1 className="serif" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', margin: '20px 0' }}>{tour.name}</h1>
              <div style={{ display: 'flex', gap: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                  <Clock size={18} /> <span style={{ fontWeight: '700' }}>{tour.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                  <Euro size={18} /> <span style={{ fontWeight: '700' }}>{tour.price}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '100px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 7' }}>
            <div className="luxury-card" style={{ padding: '50px' }}>
              <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>{t.fleet.viewDetails}</h2>
              <p className="luxury-para" style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px' }}>{tour.longDesc || tour.desc}</p>
              {tour.highlights && (
                <div style={{ marginBottom: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{t.tours.highlightsLabel}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    {tour.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} /> <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {tour.included && (
                <div style={{ marginBottom: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{t.tours.includedLabel}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    {tour.included.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckCircle2 size={16} style={{ color: '#10b981' }} /> <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div style={{ gridColumn: 'span 5' }}>
            <div className="luxury-card glass" style={{ padding: '40px', position: 'sticky', top: '120px', border: '1px solid var(--primary)' }}>
              <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '10px' }}>{t.modal.book}</h3>
              <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}><span style={{ opacity: 0.5 }}>{tour.name}</span><span style={{ fontWeight: '800' }}>{tour.price}</span></div>
                <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '15px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontWeight: '800' }}>TOTAL</span><span style={{ fontWeight: '900', color: 'var(--primary)', fontSize: '1.5rem' }}>{tour.price}</span></div>
              </div>
              <button onClick={() => setBookingModal(true)} className="btn-gold" style={{ width: '100%', height: '70px', fontSize: '18px' }}>{t.modal.book}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={() => { if(!loading) setBookingModal(false); setSuccess(false); }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} style={{ width: '100%', maxWidth: '800px', background: '#fff', borderRadius: '40px', boxShadow: '0 40px 70px rgba(0,0,0,0.1)', overflowY: 'auto', maxHeight: '90vh', border:'1px solid rgba(0,0,0,0.05)' }} onClick={e => e.stopPropagation()}>
              {success ? (
                <div style={{ padding: '80px 40px', textAlign: 'center' }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type:'spring', bounce: 0.6 }}><CheckCircle2 size={100} style={{ color: 'var(--primary)', marginBottom: '30px' }} /></motion.div>
                  <h2 className="serif" style={{ fontSize: '2.5rem' }}>{t.modal.confirm}</h2>
                  <p className="luxury-para">{t.modal.confirmDesc}</p>
                  <button onClick={() => { setBookingModal(false); setSuccess(false); }} className="btn-gold" style={{marginTop:'30px', padding:'15px 40px'}}>Ok</button>
                </div>
              ) : (
                <div style={{ padding: '40px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative' }}>
                    <button onClick={() => setBookingModal(false)} style={{ position:'absolute', top:'-10px', right:'-10px', background:'rgba(0,0,0,0.05)', color:'var(--text-main)', border:'none', width:'40px', height:'40px', borderRadius:'50%', cursor:'pointer' }}>✕</button>
                    <h2 className="serif" style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '10px' }}>{tour.name}</h2>
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
                          <span style={{ fontSize: '20px' }}>{tour.price}</span>
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

      <style jsx>{`
        .section-label { display: inline-block; padding: 8px 15px; border-radius: 100px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; }
        .slider-btn:hover { background: rgba(255,255,255,0.4) !important; transform: translateY(-50%) scale(1.1) !important; }
      `}</style>
    </main>
  );
}
