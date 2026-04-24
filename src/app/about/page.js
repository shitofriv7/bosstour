"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Award, MapPin, Phone, MessageSquare, Star, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <main style={{ background: '#ffffff', color: '#000', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* 1. EDITORIAL HERO */}
      <section style={{ paddingTop: '180px', paddingBottom: '100px', background: '#fcfcfc' }}>
        <div className="main-grid">
           <div style={{ gridColumn: 'span 12', textAlign: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                 <span style={{ fontSize: '11px', letterSpacing: '8px', fontWeight: '900', color: 'var(--primary)', display: 'block', marginBottom: '30px' }}>SINCE 2012</span>
                 <h1 className="serif" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: '#000', lineHeight: 1, fontWeight: '900', letterSpacing: '-2px' }}>
                    {lang === 'tr' ? 'Lüksün ve Güvenin' : 'The Legacy of'}<br/>
                    <span style={{ color: 'var(--primary)' }}>{lang === 'tr' ? 'On Yıllık Mirası.' : 'Luxury & Trust.'}</span>
                 </h1>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 2. THE HQ SHOWCASE - BENTO STYLE MODERNITY */}
      <section style={{ padding: '80px 0' }}>
        <div className="main-grid">
           {/* Main Shop Image */}
           <div style={{ gridColumn: 'span 8' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                style={{ position: 'relative', width: '100%', height: '650px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.05)' }}
              >
                <Image src="https://i.imgur.com/OEIUzWY.jpeg" fill style={{ objectFit: 'cover' }} alt="Boss Tour Storefront" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,0.4), transparent)' }} />
              </motion.div>
           </div>

           {/* Stats / Info Block & New Shop Image */}
           <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                style={{ background: '#f8fafc', padding: '50px', borderRadius: '40px', flex: 1, border: '1px solid #eee', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                 <Star color="var(--primary)" size={32} style={{ marginBottom: '30px' }} />
                 <h3 className="serif" style={{ fontSize: '2.2rem', marginBottom: '20px' }}>{lang === 'tr' ? 'Neden Biz?' : 'Why Us?'}</h3>
                 <p style={{ opacity: 0.6, lineHeight: 1.6, marginBottom: '30px' }}>
                   {lang === 'tr' ? 
                     '12 yılı aşkın süredir Antalya’nın en seçkin noktalarında, en lüks araçlarla misafirlerimize hizmet veriyoruz.' : 
                     'For over 12 years, we have been serving our guests with the most luxurious vehicles in the most exclusive spots of Antalya.'}
                 </p>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                       <p style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', margin: 0 }}>15k+</p>
                       <p style={{ fontSize: '10px', letterSpacing: '2px', opacity: 0.5 }}>HAPPY GUESTS</p>
                    </div>
                    <div>
                       <p style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', margin: 0 }}>24+</p>
                       <p style={{ fontSize: '10px', letterSpacing: '2px', opacity: 0.5 }}>LUXURY FLEET</p>
                    </div>
                 </div>
              </motion.div>

              {/* Second Shop Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                style={{ position: 'relative', width: '100%', height: '270px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
              >
                <Image src="https://i.imgur.com/Yl8LUQM.jpeg" fill style={{ objectFit: 'cover' }} alt="Boss Tour Office Interior" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* 3. BRAND GALLERY - NEW ASSETS */}
      <section style={{ padding: '40px 0' }}>
        <div className="main-grid">
           <div style={{ gridColumn: 'span 4' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
              >
                <Image src="https://i.imgur.com/W6Nizou.jpeg" fill style={{ objectFit: 'cover' }} alt="Boss Tour Image 1" />
              </motion.div>
           </div>
           <div style={{ gridColumn: 'span 4' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
              >
                <Image src="https://i.imgur.com/rtPNBcC.jpeg" fill style={{ objectFit: 'cover' }} alt="Boss Tour Image 2" />
              </motion.div>
           </div>
           <div style={{ gridColumn: 'span 4' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
              >
                <Image src="https://i.imgur.com/01mVJW0.jpeg" fill style={{ objectFit: 'cover' }} alt="Boss Tour Image 3" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* 4. INTERACTIVE MAP SECTION - CLEAN WHITE */}
      <section style={{ padding: '100px 0' }}>
         <div className="main-grid">
            {/* Map Frame */}
            <div style={{ gridColumn: 'span 7' }}>
               <motion.div 
                 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                 style={{ width: '100%', height: '500px', borderRadius: '40px', overflow: 'hidden', border: '1px solid #eee', boxShadow: '0 20px 50px rgba(0,0,0,0.03)' }}
               >
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25617.800138416842!2d31.732807159423817!3d36.62096994719122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dcaf85295ecf93%3A0x67948ee32120a6e0!2sBOSS%20RENT%20A%20CAR!5e0!3m2!1sen!2str!4v1776354967073!5m2!1sen!2str" 
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" 
                 ></iframe>
               </motion.div>
            </div>

            {/* Contact Details */}
            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '40px' }}>
               <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '10px', letterSpacing: '4px' }}>DIRECT LINE</span>
                  <h3 className="serif" style={{ fontSize: '3rem', margin: '20px 0' }}>{lang === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}</h3>
                  <div style={{ marginBottom: '40px' }}>
                     <p style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', fontSize: '1rem', opacity: 0.6, marginBottom: '20px' }}>
                        <MapPin size={20} color="var(--primary)" style={{ marginTop: '5px', flexShrink: 0 }} />
                        <span>AVSALLAR MAH. SÖGÜT CAD. ÜNAL APTARTMANI SİTESİ ÜNAL APARTMAN NO: 17A ALANYA / ANTALYA</span>
                     </p>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <a href="tel:+905434499552" style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.8rem', fontWeight: '900', color: '#000', textDecoration: 'none' }}>
                           <Phone size={24} color="var(--primary)" />
                           +90 543 449 95 52
                        </a>
                        <a href="mailto:bosstourrentacar@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.4rem', fontWeight: '800', color: '#000', textDecoration: 'none' }}>
                           <Mail size={24} color="var(--primary)" />
                           bosstourrentacar@gmail.com
                        </a>
                     </div>
                  </div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                     <a href="https://wa.me/905434499552" target="_blank" className="btn-gold" style={{ padding: '18px 40px', fontSize: '11px' }}>WHATSAPP CHAT</a>
                     <a href="https://www.google.com/maps/search/?api=1&query=AVSALLAR+MAH+SÖGÜT+CAD+ÜNAL+APTARTMANI+SİTESİ+ALANYA" target="_blank" className="btn-outline" style={{ padding: '18px 40px', fontSize: '11px' }}>DIRECTIONS</a>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 4. VALUES GRID */}
      <section style={{ padding: '120px 0', background: '#fcfcfc', borderTop: '1px solid #eee' }}>
        <div className="main-grid">
           {[
             { title: lang === 'tr' ? 'Güvenlik' : 'Security', icon: <Shield size={32}/>, d: lang === 'tr' ? 'Huzurunuz için en yüksek güvenlik standartları.' : 'Highest safety standards for your peace of mind.' },
             { title: lang === 'tr' ? 'Tecrübe' : 'Experience', icon: <Award size={32}/>, d: lang === 'tr' ? 'Antalya’da 12 yıllık yerel uzmanlık.' : '12 years of local expertise in Antalya.' },
             { title: lang === 'tr' ? 'Evrensel' : 'Global', icon: <Globe size={32}/>, d: lang === 'tr' ? 'Dünya çapındaki misafirlerimize çok dilli hizmet.' : 'Serving guests worldwide in multiple languages.' }
           ].map((v, i) => (
             <div key={i} style={{ gridColumn: 'span 4' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>{v.icon}</div>
                  <h4 className="serif" style={{ fontSize: '1.6rem', marginBottom: '15px' }}>{v.title}</h4>
                  <p style={{ opacity: 0.5, lineHeight: 1.6, fontSize: '0.9rem' }}>{v.d}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 5. FAQ SECTION - CLEAN MODERN */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="main-grid">
           <div style={{ gridColumn: 'span 4' }}>
              <span style={{ fontSize: '10px', letterSpacing: '4px', color: 'var(--primary)', fontWeight: '900' }}>{lang === 'tr' ? 'YARDIM MERKEZİ' : 'SUPPORT CENTER'}</span>
              <h2 className="serif" style={{ fontSize: '3rem', marginTop: '20px' }}>{lang === 'tr' ? 'Sıkça Sorulan Sorular' : 'Common Questions'}</h2>
              <p style={{ opacity: 0.5, marginTop: '20px', lineHeight: 1.6 }}>{lang === 'tr' ? 'Aklınıza takılan her şeyi bize çekinmeden sorabilirsiniz.' : 'Feel free to ask us anything on your mind.'}</p>
           </div>
           
           <div style={{ gridColumn: 'span 7', gridStart: 6 }}>
              {[
                { 
                  q: lang === 'tr' ? 'Çocuk koltuğu mevcut mu?' : 'Are child seats available?', 
                  a: lang === 'tr' ? 'Evet, tüm VIP transfer araçlarımızda ücretsiz çocuk koltuğu seçeneği sunuyoruz.' : 'Yes, we offer free child seats in all our VIP transfer vehicles.' 
                },
                { 
                  q: lang === 'tr' ? 'Elektrikli bisiklet için ehliyet lazım mı?' : 'Need a license for e-bikes?', 
                  a: lang === 'tr' ? 'Hayır, filomuzdaki elektrikli 3 tekerli bisikletler için ehliyet gerekmemektedir.' : 'No, electric 3-wheel bicycles in our fleet do not require a driving license.' 
                },
                { 
                  q: lang === 'tr' ? 'Turlar kişiye özel mi (Private)?' : 'Are tours private?', 
                  a: lang === 'tr' ? 'Evet, isteğinize bağlı olarak tamamen size özel VIP turlar organize edebiliyoruz.' : 'Yes, depending on your request, we can organize fully private VIP tours.' 
                }
              ].map((faq, i) => (
                <div key={i} style={{ padding: '30px 0', borderBottom: '1px solid #f0f0f0' }}>
                   <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px' }}>{faq.q}</h4>
                   <p style={{ fontSize: '1rem', opacity: 0.5, lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. TRUST & LEGAL STRIP */}
      <section style={{ padding: '60px 0', background: '#f8fafc', borderTop: '1px solid #eee' }}>
        <div className="main-grid" style={{ alignItems: 'center' }}>
           <div style={{ gridColumn: 'span 12', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '80px', opacity: 0.6, filter: 'grayscale(1)' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                 <Shield size={45} color="var(--primary)" />
                 <div style={{ display: 'flex', flexDirection: 'column' }}>
                   <span style={{ fontWeight: '900', fontSize: '18px', letterSpacing: '2px', color: '#000' }}>KING BOSS TOUR</span>
                   <span style={{ fontSize: '12px', fontWeight: '700', opacity: 0.8 }}>TÜRSAB Belge No: 17331</span>
                 </div>
               </div>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" width={100} height={35} alt="Visa" style={{ objectFit: 'contain' }} />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" width={80} height={50} alt="Mastercard" style={{ objectFit: 'contain' }} />
              <div style={{ fontWeight: '900', fontSize: '16px' }}>TRIPADVISOR CHOICE</div>
           </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
