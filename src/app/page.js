"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Calendar, Users, Star, CheckCircle2, Shield, Zap, X, Loader2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const { lang, setLang, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ turTipi: '', hotel: '', konNo: '', zmrNr: '', name: '', phone: '', email: '', date: '', adults: '1', children: '0', time: '', restBtr: '', informer: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleReserve = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <main style={{ background: '#fff' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <Hero t={t} />

      {/* Fleet Section */}
      <section id="fleet" style={{ padding: '120px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">{t.nav.fleet}</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{t.fleet.title}</h2>
          </div>
          {t.fleet.cars.map((car, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="luxury-card"
              style={{ gridColumn: 'span 4', padding: '0', overflow: 'hidden' }}
            >
              <div style={{ height: '280px', position: 'relative' }}>
                <Image src={car.images[0]} alt={car.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', color: '#fff', padding: '8px 15px', borderRadius: '100px', fontWeight: '900', fontSize: '14px' }}>
                  {car.price}
                </div>
              </div>
              <div style={{ padding: '30px' }}>
                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{car.name}</h3>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {car.features.map((f, i) => (
                    <span key={i} style={{ fontSize: '11px', opacity: 0.5, textTransform: 'uppercase', fontWeight: '800' }}>{f}</span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedItem(car)}
                  className="btn-gold" 
                  style={{ width: '100%', marginTop: '30px', height: '60px' }}
                >
                  {t.fleet.bookNow}
                </button>
              </div>
            </motion.div>
          ))}
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginTop: '50px' }}>
            <button className="btn-gold glass" style={{ padding: '15px 40px' }}>{t.fleet.viewAll} →</button>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" style={{ padding: '120px 0', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: '#fff' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>{t.nav.tours}</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{t.tours.title}</h2>
          </div>
          {t.tours.list.slice(0, 3).map((tour, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="luxury-card interactive"
              style={{ gridColumn: 'span 4', padding: '0', overflow: 'hidden', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div style={{ height: '300px', position: 'relative' }}>
                <Image src={tour.images[0]} alt={tour.name} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <div style={{ fontSize: '12px', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Clock size={12} /> {tour.duration}
                  </div>
                  <h3 className="serif" style={{ fontSize: '1.5rem', marginTop: '5px' }}>{tour.name}</h3>
                </div>
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', color: '#fff', padding: '8px 15px', borderRadius: '100px', fontWeight: '900', fontSize: '14px' }}>
                  {tour.price}
                </div>
              </div>
              <div style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={() => setSelectedItem(tour)} className="btn-gold" style={{ padding: '12px 25px', fontSize: '12px' }}>{t.modal.book}</button>
                <a href={`/tours/${tour.slug}`} style={{ color: '#fff', fontSize: '12px', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                   {t.fleet.viewDetails} <CheckCircle2 size={14} style={{ color: 'var(--primary)' }} />
                </a>
              </div>
            </motion.div>
          ))}
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginTop: '60px' }}>
            <button 
              onClick={() => window.location.href = '/tours'}
              className="btn-gold" 
              style={{ padding: '20px 50px', background: 'transparent', border: '2px solid var(--primary)', color: 'var(--primary)' }}
            >
              {t.tours.title} →
            </button>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: '120px 0', background: '#f8fafc' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">Elite Standards</span>
            <h2 className="serif" style={{ fontSize: '3rem' }}>{t.whyUs.title}</h2>
          </div>
          {t.whyUs.items.map((item, i) => (
            <div key={i} className="luxury-card" style={{ gridColumn: 'span 4', textAlign: 'center', padding: '50px' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '30px' }}>
                {i === 0 ? <Zap size={40} /> : i === 1 ? <Shield size={40} /> : <Star size={40} />}
              </div>
              <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{item.title}</h3>
              <p className="luxury-para">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials t={t} />
      
      {/* Contact */}
      <section id="contact" style={{ padding: '120px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: '1 / -1' }}>
            <div className="luxury-card responsive-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
              <div>
                <span className="section-label">{t.contact.connectTitle}</span>
                <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>{t.contact.contactDesc}</h2>
                <div style={{ marginTop: '50px', display: 'grid', gap: '25px' }}>
                  <div style={{ display: 'grid', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems:'center', gap: '20px' }}>
                      <div className="glass" style={{ padding: '12px', borderRadius: '10px', color: 'var(--primary)' }}><Phone size={20}/></div>
                      <span style={{ fontSize: '1rem', fontWeight: '700' }}>+90 543 449 95 52</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems:'center', gap: '20px' }}>
                    <div className="glass" style={{ padding: '12px', borderRadius: '10px', color: 'var(--primary)' }}>
                      <Mail size={20}/>
                    </div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>bosstourrentacar@gmail.com</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleReserve} style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input className="luxury-input" placeholder={t.contact.name} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input className="luxury-input" placeholder={t.contact.phone} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <input className="luxury-input" placeholder={t.contact.email} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                <textarea className="luxury-input" placeholder={t.contact.message} rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                <button disabled={loading} className="btn-gold" style={{ width: '100%', height: '65px' }}>{loading ? <Loader2 className="animate-spin" /> : t.contact.send}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Modal Redesigned */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
            onClick={() => { if(!loading) setSelectedItem(null); setSuccess(false); }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              style={{ width: '100%', maxWidth: '800px', background: '#fff', borderRadius: '40px', boxShadow: '0 40px 70px rgba(0,0,0,0.1)', overflowY: 'auto', maxHeight: '90vh', border:'1px solid rgba(0,0,0,0.05)' }}
              onClick={(e) => e.stopPropagation()}
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
        <div style={{ marginTop:'20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '11px', opacity: 0.6 }}>
          <span>{lang === 'tr' ? 'İÇİN GELİŞTİRİLDİ' : 'DEVELOPED FOR'}</span>
          <a href="https://github.com/shitofriv7" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
            <FaGithub size={18} />
            <span style={{ fontWeight: '700' }}>SHITOfRIV7</span>
          </a>
        </div>
      </footer>
    </main>
  );
}

const Hero = ({ t }) => (
  <section id="home" style={{ minHeight: '85vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Image src="https://i.imgur.com/GyAspcV.jpg" fill priority style={{ objectFit: 'cover' }} alt="Hero" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.4)' }} />
    </div>
    <div className="main-grid" style={{ position: 'relative', zIndex: 10 }}>
      <div style={{ gridColumn: 'span 12' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-label" style={{ color: 'var(--primary)', fontWeight: '900' }}>Est. 2012 • Elite Travel</span>
          <h1 className="luxury-title serif" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', lineHeight: 0.9, background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px' }}>{t.hero.title}</h1>
          <p className="luxury-para" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', maxWidth: '650px', margin: '40px 0', color: 'var(--text-main)', fontWeight: '500' }}>{t.hero.subtitle}</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button className="btn-gold" style={{ padding: '22px 55px' }} onClick={() => document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' })}>{t.hero.cta}</button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Testimonials = ({ t }) => (
  <section style={{ padding: '120px 0', background: 'rgba(0,102,255,0.02)' }}>
    <div className="main-grid">
      {t.testimonials.list.map((item, i) => (
        <div key={i} className="luxury-card" style={{ gridColumn: 'span 4', padding: '40px' }}>
          <div style={{ color: 'var(--primary)', marginBottom: '25px' }}>{[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" style={{display:'inline'}}/>)}</div>
          <p className="luxury-para" style={{ fontStyle: 'italic', marginBottom: '35px' }}>"{item.text}"</p>
          <div><div style={{ fontWeight: '800' }}>{item.name}</div><div style={{ fontSize: '10px', color: 'var(--primary)', textTransform:'uppercase' }}>{item.role}</div></div>
        </div>
      ))}
    </div>
  </section>
);
