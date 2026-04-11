"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { translations } from './translations';
import Navbar from '../components/Navbar';
import { 
  CheckCircle2, Loader2, X, MessageCircle, Star, Phone, Mail, 
  MapPin, Clock, Calendar, AlertTriangle, ChevronDown, 
  Users, Fuel, Settings, Map, Compass, Shield, Zap, ArrowRight
} from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass" style={{ marginBottom: '15px', borderRadius: '20px', overflow: 'hidden' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}
      >
        <span style={{ fontSize: '1.1rem', fontWeight: '600', textAlign: 'left' }}>{item.q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: 'spring', damping: 20 }}>
          <ChevronDown size={20} style={{ color: 'var(--primary)' }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 25px 25px', opacity: 0.6, fontSize: '0.95rem', lineHeight: '1.8' }}>{item.a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [lang, setLang] = useState('tr');
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showIntro, setShowIntro] = useState(true);
  const [eurToTry, setEurToTry] = useState(36.5); // Varsayılan değer
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [formData, setFormData] = useState({ 
    name: '', phone: '', email: '', startDate: '', endDate: '', message: ''
  });
  
  const t = translations[lang];

  useEffect(() => {
    // 1. Cihaz dilini algıla
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['tr', 'en', 'de', 'ru'];
    if (supportedLangs.includes(browserLang)) {
      setLang(browserLang);
    } else {
      setLang('en'); // Diğer tüm diller için İngilizce
    }

    const timer = setTimeout(() => setShowIntro(false), 2500);
    // Kuru merkez bankasından çek
    fetch('/api/currency')
      .then(res => res.json())
      .then(data => setEurToTry(data.rate))
      .catch(err => console.error("Kur çekilemedi", err));
      
    return () => clearTimeout(timer);
  }, []);

  if (!t) return null;

  // Fiyatı dile göre formatlayan yardımcı fonksiyon
  const formatDisplayPrice = (priceStr) => {
    const priceNum = parseInt(priceStr.replace(/[^0-9]/g, ''));
    if (lang === 'tr') {
      const converted = Math.round(priceNum * eurToTry);
      return `₺${converted.toLocaleString('tr-TR')}`;
    }
    return priceStr;
  };

  const calculateDays = () => {
    if (!formData.startDate || !formData.endDate) return 1;
    const s = new Date(formData.startDate);
    const e = new Date(formData.endDate);
    const d = Math.ceil((e - s) / (1000 * 60 * 60 * 24));
    return d > 0 ? d : 1;
  };

  const calculateTotal = (priceStr) => {
    const priceNum = parseInt(priceStr.replace(/[^0-9]/g, ''));
    const baseTotal = selectedItem?.type === 'tour' ? priceNum : priceNum * calculateDays();
    
    if (lang === 'tr') {
      return `₺${Math.round(baseTotal * eurToTry).toLocaleString('tr-TR')}`;
    }
    return `€${baseTotal}`;
  };

  const handleReserve = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    
    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carName: selectedItem.name,
          startDate: formData.startDate || new Date().toISOString().split('T')[0],
          endDate: formData.endDate || new Date().toISOString().split('T')[0],
          customerName: formData.name,
          customerPhone: formData.phone,
          customerEmail: formData.email,
          lang
        })
      });

      const resData = await response.json();
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => { setSelectedItem(null); setSuccess(false); setFormData({ name:'', phone:'', email:'', startDate:'', endDate:'' }); }, 3000);
      } else {
        setErrorMsg(resData.error);
      }
    } catch (err) {
      setErrorMsg('System error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ position: 'relative', background: 'var(--bg-dark)', color: '#fff' }}>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="noise-overlay" />
      <div className="bg-glow" />
      
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.1 }}
            style={{ position: 'fixed', inset: 0, zIndex: 10000, background: '#020408', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration: 1 }} style={{ textAlign: 'center' }}>
              <h1 className="serif" style={{ fontSize: '10vw', color: 'var(--primary)', letterSpacing: '0.2em' }}>BOOS TOUR</h1>
              <motion.div 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }} 
                style={{ height: '2px', background: 'var(--primary)', maxWidth: '400px', margin: '20px auto', originX: 0.5 }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar lang={lang} setLang={setLang} t={t} />

      <motion.a 
        href="https://wa.me/905550000000" 
        target="_blank" 
        className="whatsapp-float interactive"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={32} />
      </motion.a>

      <Hero t={t} />

      {/* Stats Section */}
      <section style={{ padding: '80px 0', overflow: 'hidden' }}>
        <div className="main-grid">
          {[
            { n: "500+", label: "Happy Clients" },
            { n: "50+", label: "Modern Cars" },
            { n: "24/7", label: "VIP Support" },
            { n: "10+", label: "Antalya Tours" }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity:0, y: 20 }} whileInView={{ opacity:1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
              style={{ gridColumn: 'span 3', textAlign: 'center' }}
            >
              <div className="stat-number serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{s.n}</div>
              <div style={{ opacity: 0.5, fontSize: '11px', letterSpacing: '2px', marginTop: '10px' }}>{s.label.toUpperCase()}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Tours */}
      <section id="tours" style={{ padding: '120px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">{t.tours.title}</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>{t.tours.subtitle}</h2>
          </div>
          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {t.tours.list.map((tour, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                className="luxury-card" style={{ padding: '0' }}
              >
                <div style={{ height: '320px', position: 'relative' }}>
                  <Image src={tour.image} alt={tour.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--primary)', color: '#000', padding: '8px 20px', borderRadius: '50px', fontWeight: '900', fontSize: '13px' }}>{formatDisplayPrice(tour.price)}</div>
                </div>
                <div style={{ padding: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{tour.name}</h3>
                  <p className="luxury-para" style={{ marginBottom: '30px', fontSize: '0.95rem' }}>{tour.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', opacity: 0.5 }}><Clock size={14} style={{ display:'inline', marginRight: '5px' }}/>{tour.duration}</span>
                    <button onClick={() => setSelectedItem({...tour, type: 'tour'})} className="btn-gold" style={{ padding: '12px 25px', fontSize: '11px' }}>{t.tours.viewTour}</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section id="fleet" style={{ padding: '120px 0', background: 'rgba(255,255,255,0.01)' }}>
        <div className="main-grid">
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">{t.fleet.title}</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>{t.fleet.subtitle}</h2>
          </div>
          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '40px' }}>
            {t.fleet.list.map((car, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i*0.1 }}
                className="luxury-card interactive" onClick={() => setSelectedItem(car)}
              >
                <div style={{ height: '260px', position: 'relative' }}>
                  <Image src={car.image} alt={car.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain', padding: '30px' }} />
                  <div style={{ position: 'absolute', bottom: '20px', right: '30px', background: 'var(--glass)', padding: '10px 20px', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '1.1rem' }}>{formatDisplayPrice(car.price)}</span>
                  </div>
                </div>
                <div style={{ padding: '35px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <h3 className="serif" style={{ fontSize: '2rem' }}>{car.name}</h3>
                  <div style={{ display: 'flex', gap: '20px', marginTop: '15px', opacity: 0.4, fontSize: '12px' }}>
                    <span style={{ display:'flex', alignItems:'center', gap: '8px' }}><Settings size={14}/>{car.gear}</span>
                    <span style={{ display:'flex', alignItems:'center', gap: '8px' }}><Fuel size={14}/>{car.fuel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide & Why Us Section */}
      <section style={{ padding: '120px 0' }}>
        <div className="main-grid" style={{ rowGap: '60px' }}>
          <div style={{ gridColumn: '1 / span 5' }}>
            <span className="section-label">{t.whyUs.title}</span>
            <div style={{ display: 'grid', gap: '30px', marginTop: '40px' }}>
              {t.whyUs.items.map((item, i) => (
                <div key={i} style={{ display:'flex', gap: '20px' }}>
                  <div className="glass" style={{ width: '50px', height: '50px', borderRadius: '12px', flexShrink: 0, display:'flex', alignItems:'center', justifyContent: 'center', color: 'var(--primary)' }}><Zap size={24}/></div>
                  <div><h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{item.title}</h4><p className="luxury-para" style={{ fontSize: '0.9rem' }}>{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ gridColumn: '7 / -1' }}>
            <span className="section-label">Traveler's Insights</span>
            <div style={{ display: 'grid', gap: '15px', marginTop: '40px' }}>
              {t.guide.list.map((place, i) => (
                <motion.div key={i} whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }} className="glass" style={{ padding: '25px', borderRadius: '20px', display:'flex', justifyContent: 'space-between', alignItems:'center', transition: '0.3s' }}>
                  <div><h4 className="serif" style={{ fontSize: '1.4rem' }}>{place.name}</h4><p style={{ fontSize: '10px', opacity: 0.4, marginTop: '4px' }}>{place.tags.join(' • ')}</p></div>
                  <div style={{ textAlign: 'right' }}><div style={{ color: 'var(--primary)', fontWeight: '800' }}>{place.dist}</div><ArrowRight size={16} style={{ opacity: 0.2 }}/></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '120px 0', background: 'rgba(0,0,0,0.2)' }}>
        <div className="main-grid">
          <div style={{ gridColumn: '2 / span 10' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="section-label">Support</span>
              <h2 className="serif" style={{ fontSize: '3.5rem' }}>{t.faq.title}</h2>
            </div>
            {t.faq.list.map((item, i) => <FAQItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      <Testimonials t={t} />
      
      {/* Contact */}
      <section id="contact" style={{ padding: '120px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: '1 / -1' }}>
            <div className="luxury-card responsive-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
              <div>
                <span className="section-label">Quick Connect</span>
                <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>Get in Touch.</h2>
                <div style={{ marginTop: '50px', display: 'grid', gap: '25px' }}>
                  <div style={{ display: 'flex', alignItems:'center', gap: '20px' }}>
                    <div className="glass" style={{ padding: '12px', borderRadius: '10px', color: 'var(--primary)' }}>
                      <Phone size={20}/>
                    </div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>+90 (555) 000 00 00</span>
                  </div>
                  <div style={{ display: 'flex', alignItems:'center', gap: '20px' }}>
                    <div className="glass" style={{ padding: '12px', borderRadius: '10px', color: 'var(--primary)' }}>
                      <Mail size={20}/>
                    </div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>hello@boostour.com</span>
                  </div>
                </div>
              </div>
              <form style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input className="luxury-input" placeholder={t.contact.name} />
                  <input className="luxury-input" placeholder={t.contact.phone} />
                </div>
                <input className="luxury-input" placeholder={t.contact.email} />
                <textarea className="luxury-input" placeholder={t.contact.message} rows={4} />
                <button className="btn-gold" style={{ width: '100%', height: '65px' }}>{t.contact.send}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '0 0 120px 0' }}>
        <div className="main-grid">
          <div style={{ gridColumn: '1 / -1' }}>
            <div className="luxury-card" style={{ padding: '10px', overflow: 'hidden', height: '400px' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1417.9198511336483!2d31.768684222910434!3d36.62197859888501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dcaf85295ecf93%3A0x67948ee32120a6e0!2sBOSS%20RENT%20A%20CAR!5e0!3m2!1sen!2str!4v1775908429059!5m2!1sen!2str" width="100%" height="100%" style={{ border: 0, borderRadius: '24px', filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Modal Backdrop */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(2, 4, 8, 0.98)', backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
            onClick={() => { if(!loading) setSelectedItem(null); setSuccess(false); }}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
              className="luxury-card"
              style={{ width: '100%', maxWidth: '1050px', padding: '0', background: '#0f172a', border: '1px solid rgba(212,175,55,0.2)', maxHeight: '95vh', overflowY: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              {success ? (
                <div style={{ padding: '100px', textAlign: 'center' }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type:'spring', bounce: 0.6 }}><CheckCircle2 size={100} style={{ color: 'var(--primary)', marginBottom: '30px' }} /></motion.div>
                  <h2 className="serif" style={{ fontSize: '3rem' }}>CONFIRMED</h2>
                  <p className="luxury-para">We will contact you shortly.</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                  <div style={{ position: 'relative', minHeight: '300px', background: '#020617' }}>
                    <Image src={selectedItem.image} alt={selectedItem.name} fill sizes="(max-width: 1100px) 100vw, 50vw" style={{ objectFit: 'contain', padding: '30px' }} />
                  </div>
                  <div className="modal-content" style={{ padding: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h2 className="serif" style={{ fontSize: '2.5rem' }}>{selectedItem.name}</h2>
                      <button onClick={() => setSelectedItem(null)} className="glass" style={{ width:'45px', height:'45px', borderRadius:'50%', border:'none', color:'#fff', cursor:'pointer' }}><X size={20}/></button>
                    </div>
                    <form onSubmit={handleReserve} style={{ marginTop: '30px', display: 'grid', gap: '18px' }}>
                      {selectedItem.type !== 'tour' && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                          <div><label style={{ fontSize: '10px', opacity: 0.4, marginBottom: '5px', display:'block' }}>PICKUP</label><input className="luxury-input" required type="date" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} /></div>
                          <div><label style={{ fontSize: '10px', opacity: 0.4, marginBottom: '5px', display:'block' }}>RETURN</label><input className="luxury-input" required type="date" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} /></div>
                        </div>
                      )}
                      <input className="luxury-input" required placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      <input className="luxury-input" required placeholder="Phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      {errorMsg && <div style={{ color: '#ff4444', fontSize: '12px' }}>{errorMsg}</div>}
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', background:'rgba(0,0,0,0.2)', padding:'20px', borderRadius:'15px', marginTop: '10px' }}>
                        <div><p style={{fontSize:'10px',opacity:0.4}}>ESTIMATED TOTAL</p><p style={{fontSize:'2.2rem',fontWeight:'900',color:'var(--primary)'}}>{calculateTotal(selectedItem.price)}</p></div>
                        <button disabled={loading} className="btn-gold" style={{ height:'60px' }}>{loading ? <Loader2 className="animate-spin" /> : 'BOOK'}</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#020408' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '11px', opacity: 0.6 }}>
          <span>DEVELOPED FOR</span>
          <a href="https://github.com/shitofriv7" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary) !important' }} className="interactive">
            <FaGithub size={18} />
            <span style={{ fontWeight: '700' }}>SHITOfRIV7</span>
          </a>
        </div>
      </footer>
    </main>
  );
}

const Hero = ({ t }) => (
  <section id="home" style={{ height: '90vh', position: 'relative', display: 'flex', alignItems: 'center' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
      <Image src="https://images.unsplash.com/photo-1612192723783-094191316538?q=80&w=2070" fill priority sizes="100vw" style={{ objectFit: 'cover', opacity: 0.4 }} alt="Background" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #020408 40%, transparent 100%)' }} />
    </div>
    <div className="main-grid">
      <div className="hero-content">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }}>
          <span className="section-label">Est. 2012</span>
          <h1 className="luxury-title serif">{t.hero.title}</h1>
          <p className="luxury-para" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', maxWidth: '550px', margin: '40px 0' }}>{t.hero.subtitle}</p>
          <div className="hero-btns" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button className="btn-gold" onClick={() => document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' })}>{t.hero.cta}</button>
            <button className="btn-outline" onClick={() => document.getElementById('tours').scrollIntoView({ behavior: 'smooth' })}>View Adventures</button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Testimonials = ({ t }) => (
  <section style={{ padding: '120px 0', background: 'rgba(0,0,0,0.1)' }}>
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
