/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'otopoint.com.tr' },
      { protocol: 'https', hostname: 'databank.fiatbayi.com.tr' },
      { protocol: 'https', hostname: '**.citroenorigins.fr' },
      { protocol: 'https', hostname: '**.alanyatekmar.com' },
      { protocol: 'https', hostname: '**.cardekho.com' },
      { protocol: 'https', hostname: '**.otokoc.com.tr' },
      { protocol: 'https', hostname: '**.tripadvisor.com' },
      { protocol: 'https', hostname: '**.getyourguide.com' },
      { protocol: 'https', hostname: '**.wikipedia.org' },
      { protocol: 'https', hostname: '**.touralanya.com' },
      { protocol: 'https', hostname: '**.agentis.com.tr' },
      { protocol: 'https', hostname: '**.dsmcdn.com' },
      { protocol: 'https', hostname: '**.excursionmania.com' },
      { protocol: 'https', hostname: '**.tatilsepeti.com' },
      { protocol: 'https', hostname: '**.trav3l.net' },
      { protocol: 'https', hostname: '**.vigotours.com' },
      { protocol: 'https', hostname: '**.ngazete.com' },
      { protocol: 'https', hostname: '**.etstur.com' },
      { protocol: 'https', hostname: '**.tatilbudur.com' },
      { protocol: 'https', hostname: '**.wixstatic.com' },
      { protocol: 'https', hostname: '**.biraztatil.com' },
      { protocol: 'https', hostname: '**.excursionside.com' },
      { protocol: 'https', hostname: '**.goreme.com' },
      { protocol: 'https', hostname: '**.kemertour.com' },
      { protocol: 'https', hostname: '**.midtown-hotel.com' },
      { protocol: 'https', hostname: '**.yildizviptransfer.com' },
      { protocol: 'https', hostname: '**.turkishbaths.org' },
      { protocol: 'https', hostname: '**.cnn.com' },
      { protocol: 'https', hostname: 'i.imgur.com' },
      { protocol: 'https', hostname: 'alanyadailytours.com' },
      { protocol: 'https', hostname: 'duzcemelenrafting.com.tr' },
      { protocol: 'https', hostname: 'greenmall.com.tr' }
    ].map(pattern => ({ ...pattern, port: '', pathname: '/**' }))
  },
};

export default nextConfig;
