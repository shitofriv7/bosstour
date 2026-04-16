"use client";

import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer({ lang }) {
  return (
    <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', background: '#ffffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', opacity: 0.6 }}>
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
