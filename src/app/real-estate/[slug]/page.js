"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, MapPin, DollarSign, Layout, ArrowLeft, Loader2, Phone, 
  CheckCircle2, Ruler, DoorOpen, Building2, User, Share2, Heart, MessageCircle,
  Thermometer, Sofa, Calendar, ShieldCheck, Waves, Car, Dumbbell,
  Train, Anchor, Hospital, School, ExternalLink, Play
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '../../translations';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { useParams } from 'next/navigation';

export default function PropertyDetail() {
  const { slug } = useParams();
  
  const [activeImg, setActiveImg] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [property, setProperty] = useState(null);
  const [dynamicLoading, setDynamicLoading] = useState(true);

  const { lang, setLang, t } = useLanguage();

  
  useEffect(() => {
    const fetchProperty = async () => {
      // First check translations (static)
      const staticProp = t.realEstate.list.find(p => p.slug === slug);
      if (staticProp) {
        setProperty(staticProp);
        setDynamicLoading(false);
      } else {
        // Fetch from Supabase
        const { data, error } = await supabase
          .from('real_estate')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (data && !error) {
          setProperty({
            ...data,
            propertyType: data.property_type, // normalize key
            desc: data.description // normalize key
          });
        }
        setDynamicLoading(false);
      }
    };
    fetchProperty();
  }, [slug, lang]);

  useEffect(() => {
    if (!property) return;
    const timer = setInterval(() => {
      if (property.images?.length > 1) {
        setActiveImg(prev => (prev + 1) % property.images.length);
      }
    }, 5000);
    if (dynamicLoading) return <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><Loader2 className="animate-spin" size={40} /></div>;
  if (!property) return <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Property not found.</div>;
  return () => clearInterval(timer);
  }, [property?.images?.length]);


  const stats = [
    { icon: <DollarSign size={20}/>, label: lang === 'tr' ? 'Fiyat' : 'Price', value: property.price },
    { icon: <Ruler size={20}/>, label: lang === 'tr' ? 'Alan' : 'Area', value: property.area },
    { icon: <DoorOpen size={20}/>, label: lang === 'tr' ? 'Oda' : 'Rooms', value: property.rooms },
    { icon: <Building2 size={20}/>, label: lang === 'tr' ? 'Kat' : 'Floor', value: property.floor },
    { icon: <Calendar size={20}/>, label: lang === 'tr' ? 'Yaş' : 'Age', value: property.age },
    { icon: <Thermometer size={20}/>, label: lang === 'tr' ? 'Isıtma' : 'Heating', value: property.heating },
    { icon: <Sofa size={20}/>, label: lang === 'tr' ? 'Eşyalı' : 'Furnished', value: property.furnished },
  ];

  if (dynamicLoading) return <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><Loader2 className="animate-spin" size={40} /></div>;
  if (!property) return <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>Property not found.</div>;
  return (
    <main style={{ background: '#fff', color: 'var(--text-main)', minHeight: '100vh', paddingBottom: '100px' }}>
      <Navbar lang={lang} setLang={setLang} t={t} />

      {/* Hero Section */}
      <section style={{ height: '70vh', position: 'relative', marginTop: '100px', padding: '0 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', height: '100%', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
          <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', inset: 0 }}
              >
                <Image src={property.images[activeImg]} alt={property.name} fill style={{ objectFit: 'cover' }} priority />
              </motion.div>
            </AnimatePresence>
            <div className="vibrant-badge" style={{ position: 'absolute', top: '30px', left: '30px' }}>
              {property.type}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '20px' }}>
            <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden' }}>
              <Image src={property.images[(activeImg + 1) % property.images.length]} alt="Sub" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden' }}>
              <Image src={property.images[(activeImg + 2) % property.images.length]} alt="Sub" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button style={{ background: '#fff', border: 'none', padding: '15px 30px', borderRadius: '20px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Layout size={20}/> {lang === 'tr' ? 'Tüm Fotoğraflar' : 'All Photos'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-grid" style={{ marginTop: '60px' }}>
        <div style={{ gridColumn: '1 / 9' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <span style={{ padding: '6px 15px', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', borderRadius: '10px', fontSize: '13px', fontWeight: '800' }}>
                  {property.propertyType}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.5, fontSize: '14px' }}>
                  <MapPin size={16}/> {property.location}
                </span>
              </div>
              <h1 className="serif" style={{ fontSize: '4rem', lineHeight: 1 }}>{property.name}</h1>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button onClick={() => setIsLiked(!isLiked)} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid #eee', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: isLiked ? '#f43f5e' : '#000' }}>
                <Heart size={24} fill={isLiked ? '#f43f5e' : 'none'}/>
              </button>
              <button style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid #eee', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Share2 size={24}/>
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px', marginBottom: '60px' }}>
            {stats.map((stat, i) => (
              <div key={i} className="luxury-card" style={{ padding: '25px', textAlign: 'center', background: '#f8fafc', border: 'none' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <div style={{ fontSize: '11px', opacity: 0.5, textTransform: 'uppercase', marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ fontWeight: '800', fontSize: '1.2rem' }}>{stat.value}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{lang === 'tr' ? 'Açıklama' : 'Description'}</h3>
            <p className="luxury-para" style={{ lineHeight: 1.8 }}>{property.desc}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: '800', marginBottom: '25px' }}>
                <Building2 size={20} style={{ color: 'var(--primary)' }}/> {lang === 'tr' ? 'İç Özellikler' : 'Interior Features'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {property.features.interior.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', opacity: 0.8 }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }}/> {f}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: '800', marginBottom: '25px' }}>
                <ShieldCheck size={20} style={{ color: 'var(--secondary)' }}/> {lang === 'tr' ? 'Dış Özellikler' : 'Exterior Features'}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                {property.features.exterior.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', opacity: 0.8 }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }}/> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: '800', marginBottom: '25px' }}>
              <Anchor size={20} style={{ color: 'var(--primary)' }}/> {lang === 'tr' ? 'Konum Avantajları' : 'Location Advantages'}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {property.features.location.map((f, i) => (
                <div key={i} style={{ padding: '12px 25px', background: '#f1f5f9', borderRadius: '15px', fontSize: '14px', fontWeight: '600' }}>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Sticky */}
        <div style={{ gridColumn: '9 / 13' }}>
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="luxury-card" style={{ padding: '40px', background: '#fff', border: '1px solid #eee', boxShadow: '0 30px 60px rgba(0,0,0,0.05)' }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <User size={40}/>
                </div>
                <h3 className="serif" style={{ fontSize: '1.8rem', lineHeight: 1 }}>{property.owner.name}</h3>
                <p style={{ opacity: 0.5, fontSize: '14px' }}>{property.owner.type}</p>
              </div>

              <div style={{ display: 'grid', gap: '15px' }}>
                <a href={`tel:${property.owner.phone}`} className="btn-gold" style={{ width: '100%', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', textDecoration: 'none' }}>
                  <Phone size={20}/> {property.owner.phone}
                </a>
                <button className="btn-outline" style={{ width: '100%', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <MessageCircle size={20}/> WhatsApp
                </button>
              </div>
              
              <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(var(--primary-rgb), 0.05)', borderRadius: '20px', textAlign: 'center' }}>
                <p style={{ fontSize: '12px', opacity: 0.6, marginBottom: '5px' }}>{lang === 'tr' ? 'İlan ID' : 'Listing ID'}</p>
                <p style={{ fontWeight: '900', color: 'var(--primary)' }}>#BOSS-{(Math.random()*10000).toFixed(0)}</p>
              </div>
            </div>

            <div className="luxury-card" style={{ marginTop: '30px', padding: '0', height: '250px', background: '#f1f5f9', overflow: 'hidden', position: 'relative' }}>
               <Image src="https://media.wired.com/photos/59269e967034dc5f91bec0f1/master/pass/GoogleMap-660x440.jpg" alt="Map" fill style={{ objectFit: 'cover', opacity: 0.7 }} />
               <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ background: 'var(--primary)', color: '#fff', padding: '15px', borderRadius: '50%', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                   <MapPin size={30}/>
                 </div>
               </div>
               <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                 <button className="btn-gold" style={{ width: '100%', height: '50px', fontSize: '13px' }}>
                   {lang === 'tr' ? 'YOL TARİFİ AL' : 'GET DIRECTIONS'}
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="main-grid" style={{ marginTop: '100px' }}>
         <div style={{ gridColumn: '1 / -1', marginBottom: '40px' }}>
            <h2 className="serif" style={{ fontSize: '3rem' }}>{lang === 'tr' ? 'Benzer İlanlar' : 'Similar Listings'}</h2>
         </div>
         {t.realEstate.list.slice(0, 3).map((item, i) => (
           <motion.div key={i} className="luxury-card" style={{ gridColumn: 'span 4', padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '250px', position: 'relative' }}>
                 <Image src={item.images[0]} alt="Prop" fill style={{ objectFit: 'cover' }} />
                 <div className="vibrant-badge" style={{ position: 'absolute', top: '20px', right: '20px' }}>{item.price}</div>
              </div>
              <div style={{ padding: '30px' }}>
                 <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{item.name}</h3>
                 <p style={{ opacity: 0.5, fontSize: '14px', marginBottom: '20px' }}><MapPin size={14} inline/> {item.location}</p>
                 <button className="btn-outline" style={{ width: '100%' }}>{t.realEstate.viewDetails}</button>
              </div>
           </motion.div>
         ))}
      </section>
    </main>
  );
}
