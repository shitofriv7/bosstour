"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Calendar, Users, Star, CheckCircle2, Shield, Zap, X, Loader2, MessageCircle } from 'lucide-react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { lang, setLang, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', adults: '1', children: '0', time: '', hotel: '', room: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dbPrices, setDbPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const { data } = await supabase.from('prices').select('*');
      if (data) {
        const priceMap = {};
        data.forEach(item => {
          priceMap[item.id] = item.price;
        });
        setDbPrices(priceMap);
      }
    };
    fetchPrices();
  }, []);

  const getCarSlug = (name) => {
    if (!name) return '';
    return name.toLowerCase()
      .replace('suzuki jeep (retro)', 'klassik-suzuki-jeep')
      .replace(/[\s\W-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const syncPrices = (list, type) => {
    if (!list) return [];
    return list.map(item => {
      const id = type === 'car' ? getCarSlug(item.name) : item.slug;
      return {
        ...item,
        price: dbPrices[id] || item.price
      };
    });
  };

  const tourList = syncPrices(t?.tours?.list, 'tour');
  const carList = syncPrices(t?.fleet?.cars, 'car');

  const handleReserve = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send to API for Database & Telegram Notification
      await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carName: selectedItem?.name,
          startDate: formData.date,
          endDate: formData.date, // Same day for quick tours
          customerName: formData.name,
          customerPhone: formData.phone,
          customerEmail: formData.email || 'no-email@bosstour.com',
          hotel: formData.hotel,
          room: formData.room,
          lang: lang
        })
      });

      // 2. Prepare WhatsApp Message
      const message = `*YENİ REZERVASYON TALEBİ*\n\n` +
        `🚗 *Hizmet:* ${selectedItem?.name}\n` +
        `👤 *Müşteri:* ${formData.name}\n` +
        `📱 *Telefon:* ${formData.phone}\n` +
        `🏨 *Otel:* ${formData.hotel} - *Oda:* ${formData.room}\n` +
        `📅 *Tarih:* ${formData.date}\n` +
        `⏰ *Saat:* ${formData.time}\n` +
        `👥 *Kişi:* ${formData.adults} Yetişkin, ${formData.children} Çocuk\n\n` +
        `💰 *Fiyat:* ${selectedItem?.price || 'Belli Değil'}`;

      const whatsappUrl = `https://wa.me/905424142586?text=${encodeURIComponent(message)}`;
      
      // small delay for premium feel
      await new Promise(r => setTimeout(r, 800));
      window.open(whatsappUrl, '_blank');
      
      setSuccess(true);
    } catch (err) {
      console.error("Booking failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedItem) {
      setFormData(prev => ({ ...prev, turTipi: selectedItem.name }));
    }
  }, [selectedItem]);

  return (
    <main style={{ background: '#fff' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <Hero t={t} />

      {/* Fleet Section */}
      <section id="fleet" style={{ padding: '120px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">{t?.nav?.fleet}</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{t?.fleet?.title}</h2>
          </div>
          {carList.filter(car => 
            (car.name.includes('Egea') || 
             car.name.includes('Clio') || 
             car.name.includes('Elek') || 
             car.name.includes('Electric')) &&
            !car.name.includes('Cross')
          ).map((car, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="luxury-card"
              style={{ gridColumn: 'span 4', padding: '0', overflow: 'hidden' }}
            >
              <div style={{ height: '320px', position: 'relative', background: 'linear-gradient(to bottom, #f8fafc, #fff)', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                {car?.images?.[0] && (
                  <Image src={car?.images?.[0]} alt={car?.name || ''} fill style={{ objectFit: 'contain', padding: '30px' }} />
                )}
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', color: '#fff', padding: '8px 15px', borderRadius: '100px', fontWeight: '900', fontSize: '14px' }}>
                  {car?.price}
                </div>
              </div>
              <div style={{ padding: '30px' }}>
                <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{car?.name}</h3>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {(car?.features || []).map((f, i) => (
                    <div key={i} style={{ opacity: 0.5, fontSize: '12px' }}>{f}</div>
                  ))}
                </div>
                <button 
                  onClick={() => { setSelectedItem(car); setSuccess(false); }}
                  className="btn-gold" 
                  style={{ width: '100%', marginTop: '30px', height: '60px' }}
                >
                  {t?.fleet?.bookNow}
                </button>
              </div>
            </motion.div>
          ))}
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginTop: '50px' }}>
            <Link href="/fleet" className="btn-gold glass" style={{ padding: '15px 40px', textDecoration: 'none', display: 'inline-block' }}>
              {t?.fleet?.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" style={{ padding: '120px 0', background: '#fff', color: '#000' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">{t?.nav?.tours}</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{t?.tours?.title}</h2>
          </div>
          {tourList.slice(0, 3).map((tour, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="luxury-card interactive"
              style={{ gridColumn: 'span 4', padding: '0', overflow: 'hidden', background: '#fff', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div style={{ height: '300px', position: 'relative' }}>
                {tour?.images?.[0] && (
                  <Image src={tour.images[0]} alt={tour.name || ''} fill style={{ objectFit: 'cover' }} />
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <div style={{ fontSize: '12px', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '5px', color: '#fff' }}>
                    <Clock size={12} /> {tour?.duration}
                  </div>
                  <h3 className="serif" style={{ fontSize: '1.5rem', marginTop: '5px', color: '#fff' }}>{tour?.name}</h3>
                </div>
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--primary)', color: '#fff', padding: '8px 15px', borderRadius: '100px', fontWeight: '900', fontSize: '14px' }}>
                  {tour?.price}
                </div>
              </div>
              <div style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={() => setSelectedItem(tour)} className="btn-gold" style={{ padding: '12px 25px', fontSize: '12px' }}>{t?.modal?.book}</button>
                <Link href={`/tours/${tour?.slug}`} style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                   {t?.fleet?.viewDetails} <CheckCircle2 size={14} style={{ color: 'var(--primary)' }} />
                </Link>
              </div>
            </motion.div>
          ))}
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginTop: '60px' }}>
            <Link 
              href="/tours"
              className="btn-gold" 
              style={{ padding: '20px 50px', background: 'transparent', border: '2px solid var(--primary)', color: 'var(--primary)', textDecoration: 'none', display: 'inline-block' }}
            >
              {t?.tours?.title} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: '120px 0', background: '#f8fafc' }}>
        <div className="main-grid">
          <div style={{ gridColumn: 'span 12', textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">Elite Standards</span>
            <h2 className="serif" style={{ fontSize: '3rem' }}>{t?.whyUs?.title}</h2>
          </div>
          {(t?.whyUs?.items || []).map((item, i) => (
            <div key={i} className="luxury-card" style={{ gridColumn: 'span 4', textAlign: 'center', padding: '50px' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '30px' }}>
                {i === 0 ? <Zap size={40} /> : i === 1 ? <Shield size={40} /> : <Star size={40} />}
              </div>
              <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{item?.title}</h3>
              <p className="luxury-para">{item?.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials t={t} />
      

      {/* Redesigned Reservation Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', inset: 0, zIndex: 9999, 
              background: 'rgba(255, 255, 255, 0.98)', 
              backdropFilter: 'blur(15px)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center' 
            }}
            onClick={() => { if(!loading) setSelectedItem(null); setSuccess(false); }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              style={{ 
                width: '100%', maxWidth: '1200px', height: 'auto', maxHeight: '90vh',
                background: '#fff', borderRadius: '40px', 
                boxShadow: '0 50px 100px rgba(0,0,0,0.1)', 
                overflowY: 'auto', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                border: '1px solid rgba(0,0,0,0.05)',
                margin: '20px'
              }}
              className="modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Visual Summary */}
              <div style={{ position: 'relative', background: '#000', color: '#fff', minHeight: '400px' }}>
                <Image 
                  src={selectedItem.images?.[0] || selectedItem.image} 
                  fill style={{ objectFit: 'cover', opacity: 0.7 }} 
                  alt="Selected Item" 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <span className="section-label" style={{ color: 'var(--primary)', border: '1px solid var(--primary)' }}>{lang === 'tr' ? 'SEÇİLEN HİZMET' : 'SELECTED SERVICE'}</span>
                  <h2 className="serif" style={{ fontSize: '3.5rem', marginBottom: '10px' }}>{selectedItem.name}</h2>
                  <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '400px' }}>{selectedItem.desc || selectedItem.longDesc?.substring(0, 100) + '...'}</p>
                  <div style={{ marginTop: '30px', fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>{selectedItem.price}</div>
                </div>
                <button onClick={() => setSelectedItem(null)} style={{ position:'absolute', top:'40px', left:'40px', background:'rgba(255,255,255,0.1)', color:'#fff', border:'none', width:'50px', height:'50px', borderRadius:'50%', cursor:'pointer', backdropFilter: 'blur(10px)', zIndex: 10 }}>✕</button>
              </div>

              {/* Right Side: Form */}
              <div style={{ padding: '60px', overflowY: 'auto' }}>
                {success ? (
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type:'spring', bounce: 0.6 }}>
                      <CheckCircle2 size={100} style={{ color: 'var(--primary)', marginBottom: '30px' }} />
                    </motion.div>
                    <h2 className="serif" style={{ fontSize: '2.5rem' }}>{t?.modal?.confirm}</h2>
                    <p className="luxury-para">{t?.modal?.confirmDesc}</p>
                    <button onClick={() => { setSelectedItem(null); setSuccess(false); }} className="btn-gold" style={{marginTop:'30px', padding:'15px 60px'}}>Ok</button>
                  </div>
                ) : (
                  <div>
                    <div style={{ marginBottom: '40px' }}>
                      <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{lang === 'tr' ? 'Hızlı Rezervasyon' : 'Quick Booking'}</h3>
                      <p style={{ opacity: 0.5 }}>{lang === 'tr' ? 'Lütfen bilgilerinizi eksiksiz doldurunuz.' : 'Please fill in your details below.'}</p>
                    </div>

                    <form onSubmit={handleReserve} style={{ display: 'grid', gap: '25px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'AD SOYAD' : 'NAME SURNAME'}</label>
                          <input className="luxury-input" required placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'TELEFON' : 'PHONE'}</label>
                          <input className="luxury-input" required placeholder="+90 ..." value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                        </div>
                      </div>


                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'TARİH' : 'DATE'}</label>
                          <input className="luxury-input" type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'SAAT' : 'TIME'}</label>
                          <input className="luxury-input" required placeholder="09:00" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{t?.modal?.hotel}</label>
                          <input className="luxury-input" placeholder="Titanic..." value={formData.hotel} onChange={e => setFormData({...formData, hotel: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{t?.modal?.roomNo}</label>
                          <input className="luxury-input" placeholder="102" value={formData.room} onChange={e => setFormData({...formData, room: e.target.value})} />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'YETİŞKİN' : 'ADULTS'}</label>
                          <input className="luxury-input" type="number" min="1" value={formData.adults} onChange={e => setFormData({...formData, adults: e.target.value})} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <label style={{ fontSize: '11px', fontWeight: '800', opacity: 0.6, letterSpacing: '1px' }}>{lang === 'tr' ? 'ÇOCUK' : 'CHILDREN'}</label>
                          <input className="luxury-input" type="number" min="0" value={formData.children} onChange={e => setFormData({...formData, children: e.target.value})} />
                        </div>
                      </div>

                      <button disabled={loading} className="btn-gold" style={{ width: '100%', height: '80px', borderRadius: '20px', fontSize: '1.2rem', marginTop: '20px' }}>
                        {loading ? <Loader2 className="animate-spin" /> : (lang === 'tr' ? 'REZERVASYONU TAMAMLA' : 'COMPLETE RESERVATION')}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer lang={lang} />
    </main>
  );
}

const Hero = ({ t }) => (
  <section id="home" style={{ minHeight: '95vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#fff' }}>
    {/* Background Image Layer */}
    <div style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', zIndex: 0 }}>
       <motion.div 
         initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
         style={{ position: 'relative', width: '100%', height: '100%' }}
       >
         <Image src="https://i.imgur.com/GyAspcV.jpg" fill priority style={{ objectFit: 'cover' }} alt="Hero" />
         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #fff, transparent)' }} />
       </motion.div>
    </div>

    <div className="main-grid" style={{ position: 'relative', zIndex: 10 }}>
      <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 0.9, color: '#000', marginBottom: '30px' }}>
            {t?.hero?.title}
          </h1>
          <p className="luxury-para" style={{ 
            fontSize: '1.2rem', 
            borderLeft: '4px solid var(--primary)', 
            paddingLeft: '30px', 
            maxWidth: '600px', 
            marginBottom: '40px', 
            color: 'rgba(0,0,0,0.7)',
            lineHeight: 1.6
          }}>
            {t?.hero?.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }} className="hero-btns">
            <button className="btn-gold" style={{ padding: '20px 40px', fontSize: '14px', minWidth: '180px' }} onClick={() => document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' })}>{t?.hero?.cta}</button>
            <button className="btn-outline" style={{ padding: '20px 40px', fontSize: '14px', minWidth: '180px' }} onClick={() => document.getElementById('tours').scrollIntoView({ behavior: 'smooth' })}>{t?.hero?.explore || 'EXPLORE'}</button>
            <Link href="/transfer" className="btn-outline" style={{ padding: '20px 40px', fontSize: '14px', minWidth: '180px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t?.hero?.cta3 || 'TRANSFER'}</Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);


const Testimonials = ({ t }) => (
  <section style={{ padding: '120px 0', background: 'rgba(0,102,255,0.02)' }}>
    <div className="main-grid">
        {(t?.testimonials?.list || []).map((item, i) => (
          <div key={i} className="luxury-card" style={{ gridColumn: 'span 4', padding: '40px' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '25px' }}>{[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" style={{display:'inline'}}/>)}</div>
            <p className="luxury-para" style={{ fontStyle: 'italic', marginBottom: '35px' }}>"{item?.text}"</p>
            <div><div style={{ fontWeight: '800' }}>{item?.name}</div><div style={{ fontSize: '10px', color: 'var(--primary)', textTransform:'uppercase' }}>{item?.role}</div></div>
          </div>
        ))}
    </div>
  </section>
);
