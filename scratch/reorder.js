const fs = require('fs');

let content = fs.readFileSync('src/app/translations.js', 'utf-8');

const order = [
  'alanya-all-in-one',
  'luxury-boat',
  'vip-luxury-yacht',
  'city-tour',
  'jeep-safari',
  'paragliding',
  'quad-safari',
  'sapadere-canyon',
  'night-jeep-safari',
  'diving',
  'fishing',
  'turkish-bath',
  'turkish-night',
  'horse-tour',
  'aquapark',
  'dolphin-show',
  'side-manavgat',
  'green-canyon',
  'rafting',
  'mix-adventure',
  'zipline',
  'land-of-legends',
  'antalya-aquarium',
  'kekova',
  'pamukkale',
  'lavanta-garden',
  'cappadocia',
  'istanbul-tour'
];

const newTours = {
  en: `        { 
          slug: "vip-luxury-yacht", 
          name: "VIP Luxury Yacht Tour", 
          price: "€250", 
          duration: "4 Hours", 
          images: ["https://media.istockphoto.com/id/1169992383/tr/foto%C4%9Fraf/yatta-gezen-insanlar%C4%B1n-portresi-i%C3%A7me-havuzunda.jpg?s=612x612&w=0&k=20&c=XpT5hZz940989Vp8q_7O85-Xn4k014mX4vP43_52mQ8=", "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop"], 
          desc: "A private luxury yacht experience with your family and friends in the clear waters of Alanya.", 
          longDesc: "Experience the ultimate luxury on the Mediterranean. Charter our VIP yacht for a private tour around the Alanya peninsula. You decide the route and the swimming spots. Our professional crew will serve you freshly prepared meals, snacks, and unlimited soft drinks. Whether you want to celebrate a special occasion, have a romantic sunset cruise, or just escape the crowds with your loved ones, our VIP Yacht Tour offers unparalleled privacy and comfort.",
          highlights: ["Private Yacht Charter", "Customizable Route", "Freshly Prepared Meals", "Sunset or Daytime Options", "VIP Service"], 
          included: ["Hotel Transfer", "Lunch/Dinner on Board", "Unlimited Soft Drinks", "Snorkeling Gear", "Captain and Crew"] 
        }`,
  tr: `        { 
          slug: "vip-luxury-yacht", 
          name: "VIP Lüks Tekne Turu", 
          price: "€250", 
          duration: "4 Saat", 
          images: ["https://media.istockphoto.com/id/1169992383/tr/foto%C4%9Fraf/yatta-gezen-insanlar%C4%B1n-portresi-i%C3%A7me-havuzunda.jpg?s=612x612&w=0&k=20&c=XpT5hZz940989Vp8q_7O85-Xn4k014mX4vP43_52mQ8=", "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop"], 
          desc: "Aileniz ve arkadaşlarınızla Alanya'nın berrak sularında özel bir lüks yat deneyimi.", 
          longDesc: "Akdeniz'de lüksün zirvesini yaşayın. Alanya yarımadası etrafında özel bir tur için VIP yatımızı kiralayın. Rotayı ve yüzme noktalarını siz belirleyin. Profesyonel ekibimiz size taze hazırlanmış yemekler, atıştırmalıklar ve sınırsız alkolsüz içecek sunacaktır. İster özel bir günü kutlamak, ister romantik bir gün batımı gezisi yapmak, isterseniz de sevdiklerinizle kalabalıktan kaçmak isteyin; VIP Lüks Tekne Turumuz size benzersiz bir mahremiyet ve konfor sunuyor.",
          highlights: ["Özel Yat Kiralama", "Kişiselleştirilebilir Rota", "Taze Hazırlanmış Yemekler", "Gün Batımı veya Gündüz Seçenekleri", "VIP Hizmet"], 
          included: ["Otel Transferi", "Teknede Öğle/Akşam Yemeği", "Sınırsız Alkolsüz İçecek", "Şnorkel Ekipmanları", "Kaptan ve Mürettebat"] 
        }`,
  de: `        { 
          slug: "vip-luxury-yacht", 
          name: "VIP Luxusyacht Tour", 
          price: "€250", 
          duration: "4 Stunden", 
          images: ["https://media.istockphoto.com/id/1169992383/tr/foto%C4%9Fraf/yatta-gezen-insanlar%C4%B1n-portresi-i%C3%A7me-havuzunda.jpg?s=612x612&w=0&k=20&c=XpT5hZz940989Vp8q_7O85-Xn4k014mX4vP43_52mQ8=", "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop"], 
          desc: "Ein privates Luxusyacht-Erlebnis mit Ihrer Familie und Freunden in den klaren Gewässern von Alanya.", 
          longDesc: "Erleben Sie ultimativen Luxus auf dem Mittelmeer. Chartern Sie unsere VIP-Yacht für eine private Tour um die Halbinsel Alanya. Sie bestimmen die Route und die Badeplätze. Unsere professionelle Crew serviert Ihnen frisch zubereitete Mahlzeiten, Snacks und unbegrenzt alkoholfreie Getränke. Ob Sie einen besonderen Anlass feiern, eine romantische Fahrt in den Sonnenuntergang machen oder einfach nur mit Ihren Lieben den Massen entfliehen möchten, unsere VIP-Yachttour bietet unvergleichliche Privatsphäre und Komfort.",
          highlights: ["Privater Yacht-Charter", "Anpassbare Route", "Frisch zubereitete Mahlzeiten", "Sonnenuntergang oder Tagsüber", "VIP-Service"], 
          included: ["Hoteltransfer", "Mittag-/Abendessen an Bord", "Unbegrenzte Erfrischungsgetränke", "Schnorchelausrüstung", "Kapitän und Crew"] 
        }`
};

function processLanguageBlock(content, lang) {
  const langStr = `${lang}: {`;
  const langStartIndex = content.indexOf(langStr);
  if (langStartIndex === -1) return content;
  
  const toursStr = 'tours: {';
  const listStr = 'list: [';
  
  const toursIndex = content.indexOf(toursStr, langStartIndex);
  const listIndex = content.indexOf(listStr, toursIndex);
  
  // Find the end of the list array
  let bracketCount = 1;
  let endIndex = -1;
  for (let i = listIndex + listStr.length; i < content.length; i++) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') bracketCount--;
    if (bracketCount === 0) {
      endIndex = i;
      break;
    }
  }
  
  const prefix = content.substring(0, listIndex + listStr.length);
  const listContent = content.substring(listIndex + listStr.length, endIndex);
  const suffix = content.substring(endIndex);
  
  // Split the list by "        },"
  const rawTours = listContent.split(/},\s*\{/);
  
  let parsedTours = rawTours.map((t, index) => {
    let str = t.trim();
    if (str.startsWith('{')) str = str.substring(1).trim();
    if (str.endsWith('}')) str = str.substring(0, str.length - 1).trim();
    
    str = '        { \n          ' + str + '\n        }';
    
    const slugMatch = str.match(/slug:\s*"([^"]+)"/);
    const slug = slugMatch ? slugMatch[1] : null;
    
    return { slug, str };
  }).filter(t => t.slug);

  parsedTours.push({ slug: 'vip-luxury-yacht', str: newTours[lang] });

  parsedTours.sort((a, b) => {
    let indexA = order.indexOf(a.slug);
    let indexB = order.indexOf(b.slug);
    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;
    return indexA - indexB;
  });

  const newListContent = '\n' + parsedTours.map(t => t.str).join(',\n') + '\n      ';
  return prefix + newListContent + suffix;
}

content = processLanguageBlock(content, 'en');
content = processLanguageBlock(content, 'tr');
content = processLanguageBlock(content, 'de');

fs.writeFileSync('src/app/translations.js', content, 'utf-8');
console.log('Successfully updated translations.js');
