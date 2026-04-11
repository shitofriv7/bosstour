"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Trash2, Calendar, User, Phone, Car, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 1. Session check on mount
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) fetchReservations();
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchReservations();
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

  if (!user) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#020408' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="luxury-card" style={{ padding: '50px', maxWidth: '400px', width: '90%', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '30px', color: 'var(--primary)' }}>Admin Girişi</h2>
          <form onSubmit={handleLogin} style={{ display: 'grid', gap: '15px' }}>
            <input 
              type="email" 
              className="luxury-input" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ textAlign: 'center' }}
            />
            <input 
              type="password" 
              className="luxury-input" 
              placeholder="Şifre" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ textAlign: 'center', marginBottom: '10px' }}
            />
            <button disabled={loading} className="btn-gold" style={{ width: '100%' }}>
              {loading ? <Loader2 className="animate-spin" /> : 'Giriş Yap'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#020408', color: '#fff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <div>
            <h1 className="serif" style={{ fontSize: '2.5rem' }}>Rezervasyonlar</h1>
            <p style={{ opacity: 0.5 }}>Hoş geldiniz, {user.email}</p>
          </div>
          <button onClick={handleLogout} className="glass" style={{ padding: '10px 20px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', border: 'none', color:'#fff', cursor:'pointer' }}>
            <LogOut size={18} /> Çıkış
          </button>
        </header>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
            <Loader2 className="animate-spin" size={40} style={{ color: 'var(--primary)' }} />
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 15px' }}>
              <thead>
                <tr style={{ textAlign: 'left', opacity: 0.4, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  <th style={{ padding: '0 20px' }}>ID</th>
                  <th>Müşteri</th>
                  <th>Ürün / Araç</th>
                  <th>Tarih Aralığı</th>
                  <th>İletişim</th>
                  <th style={{ textAlign: 'right', padding: '0 20px' }}>İşlem</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((res) => (
                  <motion.tr 
                    key={res.id} 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="glass"
                    style={{ borderRadius: '15px' }}
                  >
                    <td style={{ padding: '25px 20px', fontWeight: '800', color: 'var(--primary)' }}>#{res.id}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <User size={16} opacity={0.5} />
                        <span style={{ fontWeight: '600' }}>{res.customer_name}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Car size={16} opacity={0.5} />
                        <span>{res.car_name}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Calendar size={16} opacity={0.5} />
                        <span style={{ fontSize: '13px' }}>{res.start_date} / {res.end_date}</span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Phone size={16} opacity={0.5} />
                        <span>{res.customer_phone}</span>
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', padding: '0 20px' }}>
                      <button 
                        onClick={() => handleDelete(res.id)}
                        style={{ background: 'rgba(255,68,68,0.1)', color: '#ff4444', border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}
                        className="interactive"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {reservations.length === 0 && <p style={{ textAlign: 'center', padding: '50px', opacity: 0.3 }}>Henüz kayıtlı rezervasyon yok.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
