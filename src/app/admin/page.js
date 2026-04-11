"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Trash2, Calendar, User, Phone, Car, LogOut, MapPin } from 'lucide-react';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
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
        ) : (
          <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            <div className="luxury-card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <MapPin style={{ color: 'var(--primary)' }} />
                <h3 className="serif" style={{ fontSize: '1.8rem' }}>Tour Prices</h3>
              </div>
              <div style={{ display: 'grid', gap: '15px' }}>
                {['pamukkale', 'rafting', 'mix-adventure', 'kekova', 'paragliding', 'jeep-safari', 'cappadocia', 'zipline', 'luxury-boat', 'quad-safari', 'sapadere-canyon', 'side-manavgat', 'fishing', 'city-tour'].map(slug => (
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
          </div>
        )}
      </div>
    </div>
  );
}
