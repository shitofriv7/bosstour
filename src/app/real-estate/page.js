"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, MapPin, DollarSign, Layout, ArrowLeft, Loader2, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '../translations';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { useEffect } from 'react';

export default function RealEstatePage() {
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [dynamicProperties, setDynamicProperties] = useState([]);
  
  const { lang, setLang, t } = useLanguage();
  useEffect(() => {
    const fetchDynamic = async () => {
      const { data, error } = await supabase.from('real_estate').select('*').order('created_at', { ascending: false });
      if (!error) setDynamicProperties(data || []);
    };
    fetchDynamic();
  }, []);

  const allProperties = [...(t?.realEstate?.list || []), ...(dynamicProperties || []).map(p => ({
    ...p,
    propertyType: p.property_type,
    desc: p.description
  }))];


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const text = `Hello, I am interested in ${selectedItem.name}. \nName: ${formData.name}\nMessage: ${formData.message}`;
      window.open(`https://wa.me/905324567890?text=${encodeURIComponent(text)}`, '_blank');
      setLoading(false);
      setSelectedItem(null);
    }, 1500);
  };

  return (
    <main style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)', 
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
                {t.realEstate.title}
              </h1>
              <p className="luxury-para" style={{ maxWidth: '700px', margin: '0 auto' }}>{t.realEstate.subtitle}</p>
            </motion.div>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '40px' }}>
            {allProperties.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                className="luxury-card property-card" 
                onClick={() => window.location.href = `/real-estate/${item.slug}`}
                style={{ cursor: 'pointer', padding: '0', overflow: 'hidden', background: '#fff' }}
              >
                <div style={{ height: '350px', position: 'relative' }}>
                  <Image src={item.images[0]} alt={item.name} fill style={{ objectFit: 'cover' }} />
                  <div className="vibrant-badge" style={{ position: 'absolute', bottom: '25px', left: '25px', borderRadius: '12px' }}>{item.price}</div>
                </div>
                <div style={{ padding: '40px' }}>
                  <h3 className="serif" style={{ fontSize: '2.4rem', marginBottom: '15px' }}>{item.name}</h3>
                  <div style={{ display:'flex', alignItems:'center', gap:'8px', opacity:0.5, marginBottom:'20px' }}><MapPin size={16}/>{item.location}</div>
                  <p className="luxury-para" style={{ fontSize: '1rem', marginBottom: '30px', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.desc}</p>
                  <button className="btn-gold" style={{ width: '100%', height: '60px', borderRadius: '18px' }}>{t.realEstate.viewDetails}</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#ffffff', marginTop: '100px' }}>
        <p style={{ fontSize: '11px', opacity: 0.6 }}>BOSS REAL ESTATE © 2026</p>
      </footer>
    </main>
  );
}
