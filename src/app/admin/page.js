"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Trash2, Calendar, User, Phone, Car, LogOut, MapPin, Home, CheckCircle2, List, Image as ImageIcon, Plus } from 'lucide-react';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [realEstate, setRealEstate] = useState([]);
  const [newProperty, setNewProperty] = useState({
    name: '', type: 'For Sale', propertyType: 'Villa', price: '', area: '', rooms: '1+1', 
    age: '', floor: '', heating: '', furnished: 'No', location: '', desc: '', images: [],
    features: { interior: [], exterior: [], location: [] },
    owner: { name: '', phone: '', type: 'Agency' }
  });

  const featureOptions = {
    interior: ['Balcony', 'Elevator', 'En-suite Bathroom', 'Air Conditioning', 'Built-in Kitchen', 'Fiber Internet'],
    exterior: ['Otopark', 'Security', 'In Site', 'Pool', 'Gym', 'Kids Park'],
    location: ['Near Metro', 'Near Sea', 'Near Hospital', 'Near School']
  };

  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('reservations');
  const [prices, setPrices] = useState([]);
  const [editingPrice, setEditingPrice] = useState(null);
  const [newPriceValue, setNewPriceValue] = useState('');

  // 1. Session check on mount
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };
    checkUser();
    fetchReservations();
    fetchPrices();
    fetchRealEstate();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert("Giriş başarısız: " + error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setReservations([]);
  };

  const fetchReservations = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) setError(error.message);
    else setReservations(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!confirm("Bu rezervasyonu silmek istediğinize emin misiniz?")) return;
    
    const { error } = await supabase
      .from('reservations')
      .delete()
      .eq('id', id);
    
    if (error) alert("Silme hatası: " + error.message);
    else fetchReservations();
  };

  
  
  const handleFeatureToggle = (category, feature) => {
    setNewProperty(prev => {
      const current = prev.features[category];
      const updated = current.includes(feature) ? current.filter(x => x !== feature) : [...current, feature];
      return { ...prev, features: { ...prev.features, [category]: updated } };
    });
  };

  
  

  const handleSaveProperty = async () => {
    if (!newProperty.name || !newProperty.price) {
      alert('Lütfen en azından başlık ve fiyat girin.');
      return;
    }
    setLoading(true);
    
    const slug = newProperty.name.toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const { data, error } = await supabase
      .from('real_estate')
      .insert([
        { 
          name: newProperty.name,
          slug: slug,
          type: newProperty.type,
          property_type: newProperty.propertyType,
          price: newProperty.price,
          area: newProperty.area,
          rooms: newProperty.rooms,
          age: newProperty.age,
          floor: newProperty.floor,
          heating: newProperty.heating,
          furnished: newProperty.furnished,
          location: newProperty.location,
          description: newProperty.desc,
          images: newProperty.images,
          features: newProperty.features,
          owner: newProperty.owner
        }
      ]);

    if (error) {
      alert('Hata oluştu: ' + error.message);
    } else {
      alert('İlan başarıyla yayınlandı!');
      setIsWizardOpen(false);
      setWizardStep(1);
      fetchRealEstate();
    }
    setLoading(false);
  };

  const fetchRealEstate = async () => {
    const { data, error } = await supabase.from('real_estate').select('*').order('created_at', { ascending: false });
    if (!error) setRealEstate(data || []);
  };
const fetchPrices = async () => {
    const { data, error } = await supabase.from('prices').select('*');
    if (!error) setPrices(data);
  };

  const handleUpdatePrice = async (slug, type) => {
    if (!newPriceValue) return;
    setLoading(true);
    const { error } = await supabase
      .from('prices')
      .upsert({ id: slug, price: newPriceValue, type: type });
    
    if (error) alert("Güncelleme hatası: " + error.message);
    else {
      setEditingPrice(null);
      setNewPriceValue('');
      fetchPrices();
    fetchRealEstate();
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', padding: '20px' }}>
        <div className="bg-glow" />
        <div className="noise-overlay" />
        <div className="blob-1 floating-blob" />
        <div className="blob-2 floating-blob" />
        
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="luxury-card" style={{ padding: '60px', maxWidth: '450px', width: '100%', textAlign: 'center', boxShadow: '0 50px 100px rgba(var(--primary-rgb), 0.15)' }}>
          <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>Admin</h2>
          <p style={{ opacity: 0.5, marginBottom: '40px', fontSize: '14px' }}>Boss Tour Management Portal</p>
          <form onSubmit={handleLogin} style={{ display: 'grid', gap: '20px' }}>
            <input 
              type="email" 
              className="luxury-input" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              className="luxury-input" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button disabled={loading} className="btn-gold" style={{ width: '100%', marginTop: '10px', height: '65px' }}>
              {loading ? <Loader2 className="animate-spin" style={{ margin: '0 auto' }} /> : 'Giriş Yap'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-main)', padding: '60px 0' }}>
      <div className="bg-glow" />
      <div className="noise-overlay" />
      
      <div className="main-grid">
        <header style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <span className="section-label" style={{ marginBottom: '10px' }}>Dashboard</span>
            <h1 className="serif" style={{ fontSize: '3.5rem', lineHeight: 1 }}>Control Panel</h1>
            <p style={{ opacity: 0.5, marginTop: '10px' }}>Logged in as <span style={{ fontWeight: '700' }}>{user.email}</span></p>
          </div>
          <button onClick={handleLogout} className="btn-outline" style={{ padding: '12px 25px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LogOut size={16} /> Logout
          </button>
        </header>

        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '15px', marginBottom: '50px' }}>
          <button 
            onClick={() => setActiveTab('reservations')}
            className={activeTab === 'reservations' ? 'btn-gold' : 'btn-outline'}
            style={{ flex: 1, padding: '20px', fontSize: '14px' }}
          >
            Reservations
          </button>
          <button 
            onClick={() => setActiveTab('prices')}
            className={activeTab === 'prices' ? 'btn-gold' : 'btn-outline'}
            style={{ flex: 1, padding: '20px', fontSize: '14px' }}
          >
            Price Management
          </button>
          <button 
            onClick={() => setActiveTab('properties')}
            className={activeTab === 'properties' ? 'btn-gold' : 'btn-outline'}
            style={{ flex: 1, padding: '20px', fontSize: '14px' }}
          >
            Properties
          </button>
        </div>

        {loading ? (
          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', padding: '100px' }}>
            <Loader2 className="animate-spin" size={40} style={{ color: 'var(--primary)' }} />
          </div>
        ) : activeTab === 'reservations' ? (
          <div style={{ gridColumn: '1 / -1', overflowX: 'auto' }}>
            <div className="luxury-card" style={{ padding: '0', borderRadius: '40px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ textAlign: 'left', background: 'rgba(0,0,0,0.02)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <th style={{ padding: '25px 30px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.4 }}>ID</th>
                    <th style={{ padding: '25px 0', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.4 }}>Müşteri</th>
                    <th style={{ padding: '25px 0', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.4 }}>Hizmet</th>
                    <th style={{ padding: '25px 0', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.4 }}>Tarih</th>
                    <th style={{ textAlign: 'right', padding: '25px 30px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.4 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((res) => (
                    <motion.tr key={res.id} whileHover={{ background: 'rgba(var(--primary-rgb), 0.02)' }} style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                      <td style={{ padding: '25px 30px', fontWeight: '800', color: 'var(--primary)' }}>#{String(res.id).slice(0,6)}</td>
                      <td style={{ padding: '25px 0' }}>
                        <div style={{ fontWeight: '700' }}>{res.customer_name}</div>
                        <div style={{ fontSize: '12px', opacity: 0.5 }}>{res.customer_phone}</div>
                      </td>
                      <td style={{ padding: '25px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <Car size={14} style={{ color: 'var(--primary)' }} />
                          <span style={{ fontWeight: '600' }}>{res.car_name}</span>
                        </div>
                      </td>
                      <td style={{ padding: '25px 0', fontSize: '13px' }}>{res.start_date}</td>
                      <td style={{ textAlign: 'right', padding: '25px 30px' }}>
                        <button onClick={() => handleDelete(res.id)} style={{ padding: '12px', background: 'rgba(255,0,0,0.05)', color: '#ff4444', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              {reservations.length === 0 && <p style={{ textAlign: 'center', padding: '80px', opacity: 0.3 }}>Henüz kayıtlı rezervasyon yok.</p>}
            </div>
          </div>
        ) : activeTab === 'properties' ? (
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h1 className="serif" style={{ fontSize: '3rem' }}>Property Listings</h1>
              <button 
                onClick={() => setIsWizardOpen(true)} 
                className="btn-gold" 
                style={{ padding: '15px 30px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Plus size={20}/> New Listing
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
              {realEstate.map(prop => (
                <div key={prop.id} className="luxury-card" style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ height: '200px', position: 'relative' }}>
                    <Image src={prop.images?.[0] || 'https://via.placeholder.com/400x300'} alt={prop.name} fill style={{ objectFit: 'cover' }} />
                    <div className="vibrant-badge" style={{ position: 'absolute', top: '15px', right: '15px' }}>{prop.price}</div>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <h3 className="serif" style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{prop.name}</h3>
                    <p style={{ opacity: 0.5, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={14}/> {prop.location}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                      <button className="btn-outline" style={{ padding: '10px 20px', fontSize: '12px' }}>Edit</button>
                      <button className="btn-outline" style={{ padding: '10px 20px', fontSize: '12px', color: '#ff4444' }}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
              {realEstate.length === 0 && (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px', background: 'rgba(0,0,0,0.02)', borderRadius: '40px' }}>
                   <Home size={60} style={{ margin: '0 auto 20px', opacity: 0.1 }} />
                   <p style={{ opacity: 0.3 }}>No listings yet. Start by adding your first property.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            <div className="luxury-card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <MapPin style={{ color: 'var(--primary)' }} />
                <h3 className="serif" style={{ fontSize: '1.8rem' }}>Tour Prices</h3>
              </div>
              <div style={{ display: 'grid', gap: '15px' }}>
                {['pamukkale', 'rafting', 'mix-adventure', 'kekova', 'paragliding', 'jeep-safari', 'night-jeep-safari', 'land-of-legends', 'diving', 'cappadocia', 'zipline', 'luxury-boat', 'quad-safari', 'sapadere-canyon', 'side-manavgat', 'fishing', 'city-tour'].map(slug => (
                  <div key={slug} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: 'rgba(0,0,0,0.02)', borderRadius: '20px' }}>
                    <span style={{ textTransform: 'capitalize', fontWeight: '600' }}>{slug.replace(/-/g, ' ')}</span>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '1.2rem' }}>
                        {prices.find(p => p.id === slug)?.price || '-'}
                      </span>
                      {editingPrice === slug ? (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input 
                            className="luxury-input" 
                            style={{ width: '90px', padding: '8px 15px', background: '#fff' }} 
                            placeholder="Price" 
                            value={newPriceValue}
                            onChange={(e) => setNewPriceValue(e.target.value)}
                          />
                          <button onClick={() => handleUpdatePrice(slug, 'tour')} className="btn-gold" style={{ padding: '10px 15px', fontSize: '10px' }}>Save</button>
                        </div>
                      ) : (
                        <button onClick={() => { setEditingPrice(slug); setNewPriceValue(prices.find(p => p.id === slug)?.price || ''); }} style={{ background: 'none', border: 'none', color: 'var(--secondary)', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}>Edit</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="luxury-card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <Car style={{ color: 'var(--secondary)' }} />
                <h3 className="serif" style={{ fontSize: '1.8rem' }}>Vehicle Prices</h3>
              </div>
              <div style={{ display: 'grid', gap: '15px' }}>
                {['fiat-egea', 'renault-clio', 'fiat-egea-cross', 'citroen-c3', 'klassik-suzuki-jeep', 'hyundai-i20', 'ford-custom'].map(slug => (
                  <div key={slug} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: 'rgba(0,0,0,0.02)', borderRadius: '20px' }}>
                    <span style={{ textTransform: 'capitalize', fontWeight: '600' }}>{slug.replace(/-/g, ' ')}</span>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontWeight: '800', color: 'var(--secondary)', fontSize: '1.2rem' }}>
                        {prices.find(p => p.id === slug)?.price || '-'}
                      </span>
                      {editingPrice === slug ? (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input 
                            className="luxury-input" 
                            style={{ width: '90px', padding: '8px 15px', background: '#fff' }} 
                            placeholder="Price" 
                            value={newPriceValue}
                            onChange={(e) => setNewPriceValue(e.target.value)}
                          />
                          <button onClick={() => handleUpdatePrice(slug, 'car')} className="btn-gold" style={{ padding: '10px 15px', fontSize: '10px' }}>Save</button>
                        </div>
                      ) : (
                        <button onClick={() => { setEditingPrice(slug); setNewPriceValue(prices.find(p => p.id === slug)?.price || ''); }} style={{ background: 'none', border: 'none', color: 'var(--secondary)', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}>Edit</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="luxury-card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <Car style={{ color: 'var(--primary)' }} />
                <h3 className="serif" style={{ fontSize: '1.8rem' }}>Transfer Prices</h3>
              </div>
              <div style={{ display: 'grid', gap: '15px' }}>
                {['mercedes-vito-vip', 'mercedes-vito-maybach-edition'].map(slug => (
                  <div key={slug} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: 'rgba(0,0,0,0.02)', borderRadius: '20px' }}>
                    <span style={{ textTransform: 'capitalize', fontWeight: '600' }}>{slug.replace(/-/g, ' ')}</span>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '1.2rem' }}>
                        {prices.find(p => p.id === slug)?.price || '-'}
                      </span>
                      {editingPrice === slug ? (
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input 
                            className="luxury-input" 
                            style={{ width: '90px', padding: '8px 15px', background: '#fff' }} 
                            placeholder="Price" 
                            value={newPriceValue}
                            onChange={(e) => setNewPriceValue(e.target.value)}
                          />
                          <button onClick={() => handleUpdatePrice(slug, 'transfer')} className="btn-gold" style={{ padding: '10px 15px', fontSize: '10px' }}>Save</button>
                        </div>
                      ) : (
                        <button onClick={() => { setEditingPrice(slug); setNewPriceValue(prices.find(p => p.id === slug)?.price || ''); }} style={{ background: 'none', border: 'none', color: 'var(--secondary)', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}>Edit</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isWizardOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="modal-overlay" 
            style={{ 
              zIndex: 10000, 
              background: 'rgba(15, 23, 42, 0.8)', 
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }} 
              animate={{ scale: 1, y: 0, opacity: 1 }} 
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="luxury-card" 
              style={{ 
                maxWidth: '900px', 
                width: '100%', 
                padding: '0', 
                overflow: 'hidden', 
                background: '#fff',
                borderRadius: '40px',
                boxShadow: '0 50px 100px rgba(0,0,0,0.3)',
                position: 'relative'
              }}
            >
              {/* Progress Bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: '#f1f5f9', zIndex: 10 }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(wizardStep / 4) * 100}%` }}
                  style={{ height: '100%', background: 'var(--primary)', boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.5)' }}
                />
              </div>

              <div style={{ background: 'var(--bg-dark)', color: 'var(--text-main)', padding: '60px 50px 40px', position: 'relative', overflow: 'hidden' }}>
                <div className="bg-glow" style={{ opacity: 0.3 }} />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span className="section-label" style={{ marginBottom: '10px' }}>ADIM {wizardStep} / 4</span>
                    <h2 className="serif" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
                      {wizardStep === 1 && 'Temel Bilgiler'}
                      {wizardStep === 2 && 'Konum & Detaylar'}
                      {wizardStep === 3 && 'Donanım & Özellikler'}
                      {wizardStep === 4 && 'Medya & Açıklama'}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setIsWizardOpen(false)} 
                    style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div style={{ padding: '50px', maxHeight: '60vh', overflowY: 'auto', background: '#fff' }}>
                <AnimatePresence mode="wait">
                  {wizardStep === 1 && (
                    <motion.div key="step1" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                        <div style={{ gridColumn: 'span 2' }}>
                          <label className="input-label">İLAN BAŞLIĞI</label>
                          <input className="luxury-input" placeholder="Örn: Kaş'ta Deniz Manzaralı Müstakil Villa" value={newProperty.name} onChange={e => setNewProperty({...newProperty, name: e.target.value})} />
                        </div>
                        <div>
                          <label className="input-label">SATIŞ TİPİ</label>
                          <select className="luxury-input" value={newProperty.type} onChange={e => setNewProperty({...newProperty, type: e.target.value})}>
                            <option>Satılık</option>
                            <option>Kiralık</option>
                            <option>Günlük Kiralık</option>
                          </select>
                        </div>
                        <div>
                          <label className="input-label">MÜLK TÜRÜ</label>
                          <select className="luxury-input" value={newProperty.propertyType} onChange={e => setNewProperty({...newProperty, propertyType: e.target.value})}>
                            <option>Daire</option>
                            <option>Villa</option>
                            <option>Arsa</option>
                            <option>Ofis</option>
                            <option>Müstakil Ev</option>
                          </select>
                        </div>
                        <div>
                          <label className="input-label">FİYAT (EUR)</label>
                          <input className="luxury-input" placeholder="850.000" value={newProperty.price} onChange={e => setNewProperty({...newProperty, price: e.target.value})} />
                        </div>
                        <div>
                          <label className="input-label">ALAN (m²)</label>
                          <input className="luxury-input" placeholder="350" value={newProperty.area} onChange={e => setNewProperty({...newProperty, area: e.target.value})} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {wizardStep === 2 && (
                    <motion.div key="step2" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                        <div style={{ gridColumn: 'span 2' }}>
                          <label className="input-label">LOKASYON (İlçe, Mahalle)</label>
                          <input className="luxury-input" placeholder="Kaş, Antalya" value={newProperty.location} onChange={e => setNewProperty({...newProperty, location: e.target.value})} />
                        </div>
                        <div>
                          <label className="input-label">ODA SAYISI</label>
                          <input className="luxury-input" placeholder="4+1" value={newProperty.rooms} onChange={e => setNewProperty({...newProperty, rooms: e.target.value})} />
                        </div>
                        <div>
                          <label className="input-label">BİNA YAŞI</label>
                          <input className="luxury-input" placeholder="0 (Yeni)" value={newProperty.age} onChange={e => setNewProperty({...newProperty, age: e.target.value})} />
                        </div>
                        <div>
                          <label className="input-label">KAT BİLGİSİ</label>
                          <input className="luxury-input" placeholder="3 Katlı" value={newProperty.floor} onChange={e => setNewProperty({...newProperty, floor: e.target.value})} />
                        </div>
                        <div>
                          <label className="input-label">EŞYA DURUMU</label>
                          <select className="luxury-input" value={newProperty.furnished} onChange={e => setNewProperty({...newProperty, furnished: e.target.value})}>
                            <option>Evet</option>
                            <option>Hayır</option>
                            <option>Kısmi Eşyalı</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {wizardStep === 3 && (
                    <motion.div key="step3" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }}>
                      <div style={{ marginBottom: '40px' }}>
                        <label className="input-label" style={{ marginBottom: '20px' }}>İÇ ÖZELLİKLER</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                          {featureOptions.interior.map(f => (
                            <button 
                              key={f} 
                              onClick={() => handleFeatureToggle('interior', f)} 
                              style={{ 
                                padding: '12px 24px', borderRadius: '15px', border: '1px solid #eee', 
                                background: newProperty.features.interior.includes(f) ? 'var(--primary)' : '#fff', 
                                color: newProperty.features.interior.includes(f) ? '#fff' : '#000', 
                                cursor: 'pointer', fontSize: '14px', fontWeight: '600', transition: 'all 0.3s'
                              }}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="input-label" style={{ marginBottom: '20px' }}>DIŞ ÖZELLİKLER</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                          {featureOptions.exterior.map(f => (
                            <button 
                              key={f} 
                              onClick={() => handleFeatureToggle('exterior', f)} 
                              style={{ 
                                padding: '12px 24px', borderRadius: '15px', border: '1px solid #eee', 
                                background: newProperty.features.exterior.includes(f) ? 'var(--secondary)' : '#fff', 
                                color: newProperty.features.exterior.includes(f) ? '#fff' : '#000', 
                                cursor: 'pointer', fontSize: '14px', fontWeight: '600', transition: 'all 0.3s'
                              }}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  
                  {wizardStep === 4 && (
                    <motion.div key="step4" initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -30, opacity: 0 }}>
                      <div style={{ display: 'grid', gap: '30px' }}>
                        <div>
                          <label className="input-label">FOTOĞRAF LİNKLERİ (Virgülle ayırarak)</label>
                          <textarea 
                            className="luxury-input" 
                            rows={4} 
                            placeholder="https://resim1.jpg, https://resim2.jpg" 
                            value={newProperty.images.join(', ')}
                            onChange={e => setNewProperty({...newProperty, images: e.target.value.split(',').map(s => s.trim())})} 
                            style={{ borderRadius: '20px' }} 
                          />
                          <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '10px' }}>Not: Her resim linki arasına virgül koyun.</p>
                        </div>
                        <div>
                          <label className="input-label">DETAYLI AÇIKLAMA</label>
                          <textarea 
                            className="luxury-input" 
                            rows={6} 
                            placeholder="Mülkün öne çıkan özelliklerini buraya yazın..." 
                            value={newProperty.desc} 
                            onChange={e => setNewProperty({...newProperty, desc: e.target.value})} 
                            style={{ borderRadius: '20px' }} 
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div style={{ padding: '40px 50px', borderTop: '1px solid #f1f5f9', background: '#fafafa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button 
                  onClick={() => setWizardStep(prev => Math.max(1, prev - 1))} 
                  disabled={wizardStep === 1 || loading} 
                  className="btn-outline" 
                  style={{ padding: '15px 40px', opacity: wizardStep === 1 ? 0.3 : 1 }}
                >
                  Geri
                </button>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {wizardStep < 4 ? (
                    <button onClick={() => setWizardStep(prev => prev + 1)} className="btn-gold" style={{ padding: '15px 50px' }}>Devam Et</button>
                  ) : (
                    <button onClick={handleSaveProperty} disabled={loading} className="btn-gold" style={{ padding: '15px 60px', background: 'var(--secondary)' }}>
                      {loading ? <Loader2 className="animate-spin" /> : 'İlanı Yayınla'}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
