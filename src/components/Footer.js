"use client";

import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer({ lang }) {
  return (
    <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ textAlign: 'left', maxWidth: '300px' }}>
            <p style={{ margin: 0, fontSize: '10px', opacity: 0.6, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{lang === 'tr' ? 'ADRES' : 'ADDRESS'}</p>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '500', lineHeight: '1.4' }}>Avsallar Mah. Söğüt Cad. Ünal Apartmanı No: 17A Alanya / ANTALYA</p>
          </div>

          <div style={{ textAlign: 'left' }}>
            <p style={{ margin: 0, fontSize: '10px', opacity: 0.6, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{lang === 'tr' ? 'İLETİŞİM' : 'CONTACT'}</p>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '700' }}>+90 542 414 25 86</p>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: '500', opacity: 0.8 }}>bosstourrentacar@gmail.com</p>
          </div>
          <div style={{ fontSize: '12px', opacity: 0.5, fontWeight: '700' }}>
            © {new Date().getFullYear()} BOSS TOUR. ALL RIGHTS RESERVED.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', opacity: 0.6 }}>
           <span style={{ opacity: 0.6 }}>{lang === 'tr' ? 'GELİŞTİRİCİ' : 'DEVELOPED BY'}</span>
           <a 
             href="https://github.com/shitofriv7" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{ 
               color: 'var(--primary)', 
               textDecoration: 'none', 
               display: 'flex', 
               alignItems: 'center', 
               gap: '8px',
               background: 'rgba(0,0,0,0.03)',
               padding: '8px 15px',
               borderRadius: '100px',
               transition: '0.3s'
             }}
             className="dev-link"
           >
             <FaGithub size={16} />
             SHITOfRIV7
           </a>
        </div>

        <div style={{ marginTop: '10px' }}>
          <a href="https://www.tursab.org.tr/tr/ddsv" target="_blank" rel="noopener">
            <img 
              src="https://pkwmoabdxnfuiecfuyfz.supabase.co/storage/v1/object/public/real-estate-images/tursab-dds-17331.png" 
              alt="TÜRSAB Dijital Doğrulama Sistemi" 
              style={{ width: '180px', height: 'auto', cursor: 'pointer' }}
            />
          </a>
        </div>
      </div>
      <style jsx>{`
        .dev-link:hover {
          background: var(--primary) !important;
          color: #fff !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}
