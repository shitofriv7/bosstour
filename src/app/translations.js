export const translations = {
  en: {
    nav: { home: "Home", services: "Adventures", fleet: "Our Fleet", contact: "Contact" },
    hero: { 
      title: "Adventure Awaits in Antalya", 
      subtitle: "Explore the turquoise coast with Boss Tour. Rent a car or join our unique tours.",
      cta: "Rent a Car",
      cta2: "View Adventures"
    },
    fleet: {
      title: "Our Premium Fleet",
      subtitle: "Modern, safe, and comfortable vehicles for every journey.",
      viewAll: "View All Fleet",
      viewDetails: "View Details",
      list: [
        { 
          name: "Fiat Egea", 
          fuel: "Diesel", 
          gear: "Manual", 
          passenger: 5, 
          price: "€45", 
          images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN1_TwSefKLXcrdC4qy5_j_HDyfDj12pv0g&s"],
          longDesc: "The perfect balance of economy and space. Ideal for long drives through the scenic Taurus mountains."
        },
        { 
          name: "Renault Clio", 
          fuel: "Petrol", 
          gear: "Auto", 
          passenger: 5, 
          price: "€40", 
          images: ["https://otopoint.com.tr/wp-content/uploads/2022/10/clio2.jpg"],
          longDesc: "Compact, stylish, and incredibly easy to park in Antalya's narrow Old Town streets."
        },
        { 
          name: "Egea Cross", 
          fuel: "Diesel", 
          gear: "Auto", 
          passenger: 5, 
          price: "€55", 
          images: ["https://databank.fiatbayi.com.tr/images/modeller/egea-cross/egea-cross-paket.jpg"],
          longDesc: "Tough crossover spirit. High ground clearance makes it perfect for reaching hidden beaches."
        },
        { 
          name: "Citroen C3", 
          fuel: "Petrol", 
          gear: "Auto", 
          passenger: 5, 
          price: "€45", 
          images: ["https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png"],
          longDesc: "Distinctive design and unmatched comfort. The perfect stress-free city car."
        },
        { 
          name: "Classic Suzuki Jeep", 
          fuel: "Petrol", 
          gear: "Manual", 
          passenger: 4, 
          price: "€70", 
          images: ["https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg"],
          longDesc: "Authentic adventure spirit. Open-top classic jeep for off-road tracks."
        },
        { 
          name: "Hyundai i20", 
          fuel: "Benzin", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€45", 
          images: ["https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420"],
          longDesc: "Modern, dynamisch und bemerkenswert geräumig für seine Klasse. Ideal für Stadterkundungen."
        },
        { 
          name: "Ford Custom", 
          fuel: "Diesel", 
          gear: "Manuell", 
          passenger: 9, 
          price: "€85", 
          images: ["https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp"],
          longDesc: "Der ultimative Gruppenwagen. Geräumig, kraftvoll und komfortabel für große Familien."
        }
      ]
    },
    tours: {
      title: "Beliebte Abenteuer",
      subtitle: "Unvergessliche Touren für Ihren Urlaub.",
      viewTour: "Mehr Erfahren",
      highlightsLabel: "Highlights",
      includedLabel: "Inbegribben",
      list: [
        { 
          slug: "pamukkale", 
          name: "Pamukkale", 
          price: "€45", 
          duration: "Full Day", 
          images: ["https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8044e777d28aeed5/680bdb7cc39b0f1c36cbd423/BCC-2025-EXPLORER-PAMUKKALE-VISIT_PAMUKKALE_HOT_SPRINGS-HEADER-DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=1920&height=1080", "https://cdn.bfldr.com/UTM69Z3S/at/6sb9xpv5x7zv9ktfp4pkf2s/6002658125_e98c55479b_o-LOWRES.jpg?disable=upscale&auto=webp&quality=60&format=pjpg&crop=1920%3A1080%2Csmart&width=1920&height=1080", "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8044e777d28aeed5/680bdb7cc39b0f1c36cbd423/BCC-2025-EXPLORER-PAMUKKALE-VISIT_PAMUKKALE_HOT_SPRINGS-HEADER-DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=1920&height=1080"], 
          desc: "Witness the 'Cotton Castle' - stunning white travertine terraces and the ancient city of Hierapolis.",
          longDesc: "Pamukkale, meaning 'cotton castle' in Turkish, is a natural site in Denizli Province in southwestern Turkey. The area is famous for a carbonate mineral left by the flowing thermal spring water. It is located in Turkey's Inner Aegean region, in the River Menderes valley, which has a temperate climate for most of the year. The ancient Greco-Roman city of Hierapolis was built on top of the travertine formation which is in total about 2,700 metres (8,860 ft) long, 600 m (1,970 ft) wide and 160 m (525 ft) high.",
          highlights: ["Travertine Terraces", "Hierapolis Ancient City", "Antique Pool of Cleopatra", "Necropolis of Hierapolis"],
          included: ["Hotel Pickup & Drop-off", "Professional Guide", "Lunch", "Entrance Fees"]
        },
        { 
          slug: "rafting", 
          name: "Rafting Adventure", 
          price: "€35", 
          duration: "6 Hours", 
          images: ["https://upload.wikimedia.org/wikipedia/commons/a/a9/Fun_Rafting_Elo_River_Magelang.jpg", "https://www.toursce.com/wp-content/uploads/rafting-antalya.jpg", "https://www.koprulucanyon.com/images/rafting-antalya-koprulu-kanyon.jpg"], 
          desc: "An adrenaline-filled journey down the wild Koprucay river. Fun for groups and families.",
          longDesc: "Experience the thrill of white water rafting in the heart of the Taurus Mountains. We head to the Köprülü Canyon National Park, home to the most popular white-water rafting river in Turkey. The 14-kilometer course is suitable for beginners and seasoned rafters alike, offering a mix of excitement and stunning natural beauty.",
          highlights: ["14km Rafting Route", "Köprülü Canyon Views", "Traditional Lunch by the River", "Professional Rafting Team"],
          included: ["Equipment (Helmet, Life Jacket)", "Professional Instruction", "Lunch", "Insurance"]
        },
        { 
          slug: "mix-adventure", 
          name: "Mix Adventure Tour", 
          price: "€55", 
          duration: "Full Day", 
          images: ["https://www.touralanya.com/TurResimleri/181925adventurepackagetourfromalanya.jpeg"], 
          desc: "The ultimate combo: Rafting, Zipline, and Canyon tour all in one exciting day.",
          longDesc: "Why choose one when you can have it all? Our Mix Adventure tour combines the best of Köprülü Canyon into one action-packed day. You will start with a canyon walk, then fly across the river on a zipline, and finalize the day with a thrilling rafting session. It's the perfect day for thrill-seekers.",
          highlights: ["3-in-1 Adventure", "Exciting Zipline", "Canyon Walk & Swimming", "Action-packed Rafting"],
          included: ["All Gear & Equipment", "Experienced Guides", "BBQ Lunch", "Pickup Service"]
        },
        { 
          slug: "kekova", 
          name: "Kekova Demre Myra", 
          price: "€50", 
          duration: "Full Day", 
          images: ["https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg"], 
          desc: "Discover the sunken city, ancient Lycian tombs, and the church of Saint Nicholas.",
          longDesc: "Take a journey through history and crystal clear waters. Visit the ancient city of Myra with its impressive rock-cut tombs, then head to the Church of Saint Nicholas (Santa Claus). The highlight is a boat trip to Kekova Island, where you can see the ruins of the Sunken City through the clear water.",
          highlights: ["Sunken City of Kekova", "Rock Tombs of Myra", "St. Nicholas Church", "Swimming in Turquoise Bays"],
          included: ["Guided Tour of Sites", "Boat Trip", "Lunch", "Air-conditioned Transport"]
        },
        { 
          slug: "paragliding", 
          name: "Paragliding", 
          price: "€75", 
          duration: "3 Hours", 
          images: ["https://cloudbasetravel.com/wp-content/uploads/2021/05/G0026043-scaled.jpg"], 
          desc: "Fly like a bird over the turquoise coast. Experience breathtaking views from above.",
          longDesc: "Soar high above the Mediterranean coast. Launch from a 700-meter peak and descend slowly over the spectacular beaches and mountains. No experience is required as you'll be flying in tandem with a professional pilot who handles everything while you enjoy the view.",
          highlights: ["Tandem Flight with Pro Pilot", "Bird's-eye Views", "Beach Landing", "Action Camera Recording"],
          included: ["Professional Pilot", "All Safety Equipment", "Insurance", "Photos & Videos (Optional)"]
        },
        { 
          slug: "jeep-safari", 
          name: "Alanya Jeep Safari", 
          price: "€40", 
          duration: "Full Day", 
          images: ["https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/51/8b.jpg", "https://www.toursce.com/wp-content/uploads/jeep-safari-alanya.jpg"], 
          desc: "Off-road adventure through the Taurus mountains with panoramic Alanya views.",
          longDesc: "Get off the beaten path and explore the rugged terrain of the Taurus Mountains. Our open-top jeeps take you through traditional villages, fruit orchards, and mountain streams. Prepare for a fun-filled day with water fights between jeeps and amazing panoramic spots overlooking Alanya.",
          highlights: ["Off-road Tracks", "Mountain Village Life", "Fruit Garden Visits", "Water Fights"],
          included: ["Open-top Jeep", "Traditional Village Lunch", "Driver/Guide", "Pickup Service"]
        },
        { 
          slug: "cappadocia", 
          name: "Cappadocia Trip", 
          price: "€120", 
          duration: "2 Days", 
          images: ["https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-turu-1-gece-1.webp", "https://www.fodors.com/wp-content/uploads/2019/12/HERO_Cappadocia_Turkey_shutterstock_637025110.jpg", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/pzh8z9z9v9z9v9z9v9z9/CappadociaHotAirBalloonFlight.jpg"], 
          desc: "A magical journey to the land of fairy chimneys and early morning hot air balloons.",
          longDesc: "Discover the surreal landscape of Cappadocia in this two-day tour. Marvel at the unique rock formations known as 'fairy chimneys', explore underground cities used by early Christians, and visit the Goreme Open Air Museum. Staying overnight allows you to witness the magical sunrise hot air balloons.",
          highlights: ["Fairy Chimneys", "Underground City", "Goreme Open Air Museum", "Sunrise Balloon Watch"],
          included: ["Hotel Accommodation", "Transport", "Guide", "Breakfast & Dinners"]
        },
        { 
          slug: "zipline", 
          name: "Zipline Experience", 
          price: "€25", 
          duration: "2 Hours", 
          images: ["https://canyonzipline.com/wp-content/uploads/2025/12/Tazi-Kanyonu-Ziplineeee.webp"], 
          desc: "Feel the speed as you slide through the green canyons on a high-flying cable.",
          longDesc: "Experience the adrenaline rush of sliding through the sky on one of the longest ziplines in the region. Suspended high above the canyon floor, you'll get a unique perspective of the landscape while reaching thrilling speeds. Safely harnessed, you just need to enjoy the ride.",
          highlights: ["Longest Zipline in Region", "Canyon Views", "Exhilarating Speed", "Safety Guaranteed"],
          included: ["Professional Equipment", "Instruction", "Multiple Slides", "Insurance"]
        },
        { 
          slug: "luxury-boat", 
          name: "Luxury Boat Tour", 
          price: "€40", 
          duration: "6 Hours", 
          images: ["https://www.bogazturu.com/uploads/resim/47-1/bogaz-cocugu-tekne-kiralama.jpg"], 
          desc: "Sun, sea, and relaxation. Enjoy a day on a yacht with swimming stops and lunch.",
          longDesc: "Sail away on a luxury yacht along the stunning coastline. This tour offers the perfect mix of relaxation and fun. We stop at several picturesque bays where you can swim in crystal clear waters. A delicious lunch is prepared on board while you soak up the Mediterranean sun.",
          highlights: ["Premium Yacht", "Crystal Clear Bays", "Snorkeling Opportunities", "Onboard Music & Fun"],
          included: ["Boat Cruise", "BBQ Lunch", "Soft Drinks", "Swimming Equipment"]
        },
        { 
          slug: "quad-safari", 
          name: "Quad Safari", 
          price: "€40", 
          duration: "3 Hours", 
          images: ["https://tr.antalyaquadbiking.com/wp-content/uploads/2018/07/Antalya-ATV-Turu-4.jpg"], 
          desc: "Get muddy and have fun! Drive your own ATV through dusty forest tracks.",
          longDesc: "Unleash your adventurous side as you drive a powerful ATV (quad bike) through the forest and rugged mountain paths. No driving license is required. After a safety briefing and a practice drive, you'll follow our lead guide through dusty tracks and sometimes muddy streams.",
          highlights: ["Drive your Own Quad", "Forest & Mountain Paths", "Rugged Off-road Track", "Safety Briefing"],
          included: ["Quad Bike", "Helmet", "Professional Guide", "Fuel"]
        },
        { 
          slug: "sapadere-canyon", 
          name: "Sapadere Canyon Safari", 
          price: "45€", 
          duration: "Full Day", 
          images: ["https://www.alanya.bel.tr/Photos/News/Big/599082432421544896.JPG", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/p5l2b4q5f5v5v5v5v5v5/SapadereCanyonTourfromAlanya.jpg"], 
          desc: "Explore the hidden waterfalls and cold mountain waters of Sapadere Canyon.",
          longDesc: "Journey into the heart of nature at Sapadere Canyon. Walk along the well-maintained wooden walkway that winds between towering cliffs. Discover several natural waterfalls and, if you're brave enough, take a dip in the ice-cold mountain waters in the natural pools.",
          highlights: ["Wooden Walkway", "Stunning Waterfalls", "Natural Swimming Pools", "Sapadere Village Visit"],
          included: ["Transport", "Entrance Fees", "Lunch", "Guided Walk"]
        },
        { 
          slug: "side-manavgat", 
          name: "Side Aspendos Manavgat", 
          price: "€45", 
          duration: "Full Day", 
          images: ["https://bookfromlocals.com/wp-content/uploads/2022/03/Manavgat-Aspendos-Side-Tour-From-Alanya-1.jpg"], 
          desc: "A Perfect mix of archaeology and nature. Visit the antique theater and waterfalls.",
          longDesc: "Combine history and natural beauty in one day. Visit the magnificently preserved Roman theater of Aspendos, walk through the ancient streets of Side with its Apollo Temple, and find tranquility at the famous Manavgat Waterfalls. It is a diverse tour that captures the essence of the region.",
          highlights: ["Aspendos Roman Theater", "Apollo Temple in Side", "Manavgat Waterfall", "Ancient Harbor Walk"],
          included: ["All Entrance Fees", "Professional Tour Guide", "Lunch", "AC Transport"]
        },
        { 
          slug: "fishing", 
          name: "Fishing Tour", 
          price: "€40", 
          duration: "5 Hours", 
          images: ["https://adrasanbalik.com/wp-content/uploads/2013/03/TEKNEDE-OLTA-KULLANIMI-3.jpg"], 
          desc: "Enjoy a peaceful day at sea. Try your luck at catching Mediterranean fish.",
          longDesc: "Leave the crowds behind and spend a peaceful morning or afternoon on a traditional fishing boat. We go to the best fishing spots known to locals. All equipment is provided, and whether you're an expert or a beginner, the calm sea and the sea air make for a perfect day.",
          highlights: ["Local Fishing Spots", "Traditional Boat", "Equipment Provided", "Peaceful Sea Time"],
          included: ["Fishing Gear", "Bait", "Soft Drinks", "Captain's Service"]
        },
        { 
          slug: "city-tour", 
          name: "Alanya City Tour", 
          price: "€30", 
          duration: "4 Hours", 
          images: ["https://tursaytravel.com/wp-content/uploads/2026/02/Alanya-City-Tour-from-Side-Tursay-Travel-3-1000x575.webp"], 
          desc: "Explore the historic Alanya castle, the Red Tower, and the Damlatas cave.",
          longDesc: "Discover the best of Alanya in just half a day. Take a cable car up to the historic Alanya Castle for panoramic views of the Cleopatra Beach. Visit the medicinal Damlataş Cave and explore the Red Tower at the harbor. It's the perfect introduction to the city's highlights.",
          highlights: ["Alanya Castle Panorama", "Damlataş Cave Visit", "Red Tower", "Cleopatra Beach View"],
          included: ["Professional Guide", "Entry Fees", "Hotel Transport", "Water"]
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      connectTitle: "Quick Connect",
      contactDesc: "Get in Touch.",
      name: "Full Name",
      email: "Email",
      phone: "Phone Number",
      message: "Your Message",
      send: "Send Message",
      whatsapp: "Chat on WhatsApp"
    },
    modal: {
      pickup: "PICKUP",
      return: "RETURN",
      total: "ESTIMATED TOTAL",
      book: "BOOK",
      confirm: "CONFIRMED",
      confirmDesc: "We will contact you shortly."
    },
    stats: {
      clients: "Happy Clients",
      cars: "Modern Cars",
      support: "VIP Support",
      tours: "Antalya Tours",
      insights: "Traveler's Insights",
      supportTitle: "Support"
    },
    whyUs: {
      title: "The Boss Advantage",
      items: [
        { title: "24/7 Delivery", desc: "Airport or hotel. Your car arrives exactly when you do." },
        { title: "No Hidden Fees", desc: "What you see is what you pay. Transparent contracts every time." },
        { title: "Young Fleet", desc: "All our cars are under 2 years old and regularly maintained." }
      ]
    },
    testimonials: {
      title: "Happy Travelers",
      subtitle: "Join thousands of satisfied explorers.",
      list: [
        { name: "John D.", role: "Family Trip", text: "Fair prices and a very clean car. The Egea was perfect for us." },
        { name: "Sarah L.", role: "Solo Explorer", text: "The boat tour was the highlight of my trip. Stunning bays!" },
        { name: "Hans M.", role: "Repeat Guest", text: "Reliable service. I rent from Boss Tour every summer." }
      ]
    },
    faq: {
      title: "FAQ",
      list: [
        { q: "Is a deposit required?", a: "Yes, a small security deposit is taken at rental and returned immediately upon return." },
        { q: "Can I get the car at the airport?", a: "Absolutely. We provide meet-and-greet services at Antalya Airport (AYT) 24/7." }
      ]
    },
    guide: {
      title: "Explore Antalya",
      subtitle: "Top destinations reachable with Boss Tour.",
      list: [
        { name: "Kas & Kaputas", dist: "190 km", tags: ["Beach", "Views"] },
        { name: "Ancient Side", dist: "75 km", tags: ["History", "Sunset"] },
        { name: "The Land of Legends", dist: "30 km", tags: ["Family", "Fun"] }
      ]
    }
  },
  tr: {
    nav: { home: "Ana Sayfa", services: "Maceralar", fleet: "Filomuz", contact: "İletişim" },
    hero: { 
      title: "Antalya'da Macera Başlıyor", 
      subtitle: "Boss Tour ile turkuaz kıyıları keşfedin. İster araç kiralayın, ister turlarımıza katılın.",
      cta: "Araç Kirala",
      cta2: "Maceraları Gör"
    },
    fleet: {
      title: "Premium Filomuz",
      subtitle: "Her yolculuk için modern, güvenli ve konforlu araçlar.",
      viewAll: "Tüm Filoyu Görüntüle",
      viewDetails: "Detayları Gör",
      list: [
        { 
          name: "Fiat Egea", 
          fuel: "Dizel", 
          gear: "Manuel", 
          passenger: 5, 
          price: "€45", 
          images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN1_TwSefKLXcrdC4qy5_j_HDyfDj12pv0g&s"],
          longDesc: "Ekonomi ve geniş iç hacmin mükemmel dengesi. Toroslar'da uzun sürüşler için ideal."
        },
        { 
          name: "Renault Clio", 
          fuel: "Benzin", 
          gear: "Otomatik", 
          passenger: 5, 
          price: "€40", 
          images: ["https://otopoint.com.tr/wp-content/uploads/2022/10/clio2.jpg"],
          longDesc: "Kompakt, şık ve Antalya'nın dar sokaklarında park etmesi inanılmaz kolay."
        },
        { 
          name: "Fiat Egea Cross", 
          fuel: "Dizel", 
          gear: "Otomatik", 
          passenger: 5, 
          price: "€55", 
          images: ["https://databank.fiatbayi.com.tr/images/modeller/egea-cross/egea-cross-paket.jpg"],
          longDesc: "Güçlü crossover ruhu. Gizli plajlara ve dağ yollarına ulaşmak için mükemmel."
        },
        { 
          name: "Citroen C3", 
          fuel: "Benzin", 
          gear: "Otomatik", 
          passenger: 5, 
          price: "€45", 
          images: ["https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png"],
          longDesc: "Kendine has tasarımı ve eşsiz konforu. Şehir içinde stressiz sürüş için ideal."
        },
        { 
          name: "Klasik Suzuki Jeep", 
          fuel: "Benzin", 
          gear: "Manuel", 
          passenger: 4, 
          price: "€70", 
          images: ["https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg"],
          longDesc: "Gerçek macera ruhu. Doğayı her an hissedebileceğiniz klasik üstü açık jeep."
        },
        { 
          name: "Hyundai i20", 
          fuel: "Benzin", 
          gear: "Otomatik", 
          passenger: 5, 
          price: "€45", 
          images: ["https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420"],
          longDesc: "Modern, dinamik ve oldukça geniş. Şehir içi keşifler için mükemmel."
        },
        { 
          name: "Ford Custom", 
          fuel: "Dizel", 
          gear: "Manuel", 
          passenger: 9, 
          price: "€85", 
          images: ["https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp"],
          longDesc: "Geniş aileler için en iyi çözüm. Ferah, güçlü ve konforlu."
        }
      ]
    },
    whyUs: {
      title: "Neden Boss?",
      items: [
        { title: "7/24 Teslimat", desc: "Havaalanı veya otel. Aracınız tam vaktinde kapınızda." },
        { title: "Gizli Ücret Yok", desc: "Ne görüyorsanız onu ödersiniz. Şeffaf sözleşmeler." },
        { title: "Yeni Araç Parkı", desc: "Tüm araçlarımız 2 yaşından küçük ve düzenli bakımlıdır." }
      ]
    },
    tours: {
      title: "Popüler Maceralar",
      subtitle: "Tatilinizi unutulmaz kılacak benzersiz tur seçenekleri.",
      viewTour: "Detayları Gör",
      highlightsLabel: "Öne Çıkanlar",
      includedLabel: "Fiyata Dahil Olanlar",
      list: [
        { 
          slug: "pamukkale", 
          name: "Pamukkale Turu", 
          price: "€45", 
          duration: "Tam Gün", 
          images: ["https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8044e777d28aeed5/680bdb7cc39b0f1c36cbd423/BCC-2025-EXPLORER-PAMUKKALE-VISIT_PAMUKKALE_HOT_SPRINGS-HEADER-DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=1920&height=1080", "https://cdn.bfldr.com/UTM69Z3S/at/6sb9xpv5x7zv9ktfp4pkf2s/6002658125_e98c55479b_o-LOWRES.jpg?disable=upscale&auto=webp&quality=60&format=pjpg&crop=1920%3A1080%2Csmart&width=1920&height=1080", "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8044e777d28aeed5/680bdb7cc39b0f1c36cbd423/BCC-2025-EXPLORER-PAMUKKALE-VISIT_PAMUKKALE_HOT_SPRINGS-HEADER-DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=1920&height=1080"], 
          desc: "Pamuk kaleler - bembeyaz travertenler ve antik Hierapolis kentini keşfedin.",
          longDesc: "Dünyanın sekizinci harikası olarak kabul edilen Pamukkale, bembeyaz travertenleri ve binlerce yıllık antik havuzlarıyla büyüleyici bir deneyim sunuyor. Hierapolis Antik Kenti'nin kalıntıları arasında dolaşırken Roma döneminin ihtişamına tanıklık edecek, Kleopatra Havuzu'nda antik sütunlar arasında yüzme şansı bulacaksınız.",
          highlights: ["Bembeyaz Travertenler", "Hierapolis Antik Kenti", "Kleopatra Antik Havuzu", "Antik Tiyatro ve Nekropol"],
          included: ["Otelden Alma ve Bırakma", "Profesyonel Rehber", "Öğle Yemeği", "Seyehat Sigortası"]
        },
        { 
          slug: "rafting", 
          name: "Rafting Macerası", 
          price: "€35", 
          duration: "6 Saat", 
          images: ["https://upload.wikimedia.org/wikipedia/commons/a/a9/Fun_Rafting_Elo_River_Magelang.jpg", "https://www.toursce.com/wp-content/uploads/rafting-antalya.jpg", "https://www.koprulucanyon.com/images/rafting-antalya-koprulu-kanyon.jpg"], 
          desc: "Köprüçay'ın azgın sularında adrenalin dolu bir yolculuk. Gruplar için harika eğlence.",
          longDesc: "Toros Dağları'nın kalbinde, Köprüçay Nehri'nin serin sularında adrenalin dolu bir güne hazır olun! Köprülü Kanyon Milli Parkı içerisindeki 14 kilometrelik parkur, hem yeni başlayanlar hem de deneyimli sporcular için heyecan dolu anlar sunuyor. Doğanın kucağında ekip ruhunu hissedeceksiniz.",
          highlights: ["14 KM'lik Akarsu Parkuru", "Köprülü Kanyon Manzaraları", "Nehir Kenarında Yemek", "Profesyonel Eğitmenler"],
          included: ["Kask ve Can Yeleği", "Rafting Botu ve Ekipman", "Öğle Yemeği", "Seyehat Sigortası"]
        },
        { 
          slug: "mix-adventure", 
          name: "Mix Macera Turu", 
          price: "€55", 
          duration: "Tam Gün", 
          images: ["https://www.touralanya.com/TurResimleri/181925adventurepackagetourfromalanya.jpeg"], 
          desc: "Mükemmel kombinasyon: Rafting, Zipline ve Kanyon turu tek bir günde.",
          longDesc: "Tek bir aktiviteyle yetinmek istemeyen maceraperestler için özel olarak tasarlandı. Günü kanyon yürüyüşü ile başlayıp, çelik halatlar üzerinde zipline ile nehrin üzerinden uçarak devam edecek ve finali coşkulu bir rafting turu ile yapacaksınız. Adrenalin dolu 3 aktivite bir arada!",
          highlights: ["3 Aktivite Bir Arada", "Heyecan Verici Zipline", "Kanyon Yürüyüşü ve Yüzme", "Rafting Macerası"],
          included: ["Tüm Aktivite Ekipmanları", "Uzman Rehberler", "Barbekü Öğle Yemeği", "Ulaşım Hizmeti"]
        },
        { 
          slug: "kekova", 
          name: "Kekova Demre Myra", 
          price: "€50", 
          duration: "Tam Gün", 
          images: ["https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg"], 
          desc: "Batık şehir, antik Likya mezarları ve Aziz Nikolaos kilisesini ziyaret edin.",
          longDesc: "Tarih ve denizin buluştuğu bu turda, Noel Baba olarak bilinen Aziz Nikolaos'un kilisesini, Myra'nın devasa kaya mezarlarını ve Kekova'nın kristal sular altındaki Batık Şehri'ni göreceksiniz. Tekne turu sırasında turkuaz koylarda yüzme molaları verilecektir.",
          highlights: ["Kekova Batık Şehir", "Myra Kaya Mezarları", "Aziz Nikolaos (Noel Baba) Kilisesi", "Tekne Turu ve Yüzme Molaları"],
          included: ["Rehberli Antik Kent Turları", "Tekne Gezisi", "Öğle Yemeği", "Klimalı Otobüs ile Ulaşım"]
        },
        { 
          slug: "paragliding", 
          name: "Yamaç Paraşütü", 
          price: "€75", 
          duration: "3 Saat", 
          images: ["https://cloudbasetravel.com/wp-content/uploads/2021/05/G0026043-scaled.jpg"], 
          desc: "Gökyüzünde özgürlüğü hissedin. Turkuaz kıyıların eşsiz manzarasını kuş bakışı izleyin.",
          longDesc: "Akdeniz'in masmavi suları üzerinde bir kuş gibi süzülmeye ne dersiniz? Profesyonel pilot eşliğinde gerçekleştireceğiniz bu uçuşta hiçbir deneyim gerekmez. Torosların zirvesinden havalanıp Kleopatra Plajı'na iniş yaparken hayatınızın en heyecan verici ve huzurlu anlarını yaşayacaksınız.",
          highlights: ["Profesyonel Pilotla Tandem Uçuş", "Kuş Bakışı Antalya Manzarası", "Plaja Güvenli İniş", "Fotoğraf ve Video İmkanı"],
          included: ["Lisanslı Profesyonel Pilot", "Tüm Güvenlik Ekipmanları", "Sigorta", "Ulaşım"]
        },
        { 
          slug: "jeep-safari", 
          name: "Alanya Jeep Safari", 
          price: "€40", 
          duration: "Tam Gün", 
          images: ["https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/51/8b.jpg", "https://www.toursce.com/wp-content/uploads/jeep-safari-alanya.jpg"], 
          desc: "Toros dağlarında arazi sürüşü ve panoramik Alanya manzarası eşliğinde macera.",
          longDesc: "Asfalt yollardan uzaklaşın ve Toros Dağları'nın tozlu yollarında eğlenceli bir maceraya atılın. Üstü açık jeeplerle geleneksel köyleri ziyaret edecek, meyve bahçelerinde mola verecek ve jeepler arası su savaşlarıyla çocukluğunuza döneceksiniz. En yüksek zirvelerden Alanya manzarasını seyredin.",
          highlights: ["Arazi (Off-road) Sürüşleri", "Köy Hayatı ve Kültür Turu", "Meyve Bahçesi Ziyaretleri", "Eğlenceli Su Savaşları"],
          included: ["Üstü Açık Safari Jeepi", "Geleneksel Köy Yemeği", "Sürücü ve Rehber", "Otel Transferi"]
        },
        { 
          slug: "cappadocia", 
          name: "Kapadokya Gezisi", 
          price: "€120", 
          duration: "2 Gün", 
          images: ["https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-turu-1-gece-1.webp", "https://www.fodors.com/wp-content/uploads/2019/12/HERO_Cappadocia_Turkey_shutterstock_637025110.jpg", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/pzh8z9z9v9z9v9z9v9z9/CappadociaHotAirBalloonFlight.jpg"], 
          desc: "Peri bacaları diyarına sihirli bir yolculuk ve sabahın ilk ışıklarında balon keyfi.",
          longDesc: "Peri bacalarının, yer altı şehirlerinin ve devasa kanyonların mistik dünyasına davetlisiniz. İki günlük bu gezimizde Göreme Açık Hava Müzesi'ni, Hayal Vadisi'ni ve Ihlara Kanyonu'nu keşfedeceğiz. Gün doğumunda gökyüzünü süsleyen yüzlerce balonu izlemek unutulmaz bir anı olacak.",
          highlights: ["Peri Bacaları ve Kayalıklar", "Derinkuyu Yer Altı Şehri", "Göreme Açık Hava Müzesi", "Balon Seyri (Opsiyonel Uçuş)"],
          included: ["Otel Konaklaması", "Ulaşım", "Kokartlı Rehber", "Kahvaltı ve Akşam Yemeği"]
        },
        { 
          slug: "zipline", 
          name: "Zipline Eğlencesi", 
          price: "€25", 
          duration: "2 Saat", 
          images: ["https://canyonzipline.com/wp-content/uploads/2025/12/Tazi-Kanyonu-Ziplineeee.webp"], 
          desc: "Yüksekten hızla kayarken kanyonların yeşilliğini ve rüzgarı hissedin.",
          longDesc: "Kendinizi boşluğa bırakın ve yerçekimine meydan okuyun! Bölgenin en uzun zipline hattında, kanyonun üzerinden metrelerce yükseklikte hızla kayarken adrenalin seviyeniz zirve yapacak. Kuş bakışı nehir ve orman manzarası eşliğinde rüzgarın sesini dinleyin.",
          highlights: ["Bölgenin En Uzun Hattı", "Kanyon Üzerinde Geçiş", "Yüksek Hız ve Adrenalin", "Güvenli Bağlantı Sistemleri"],
          included: ["Profesyonel Ekipmanlar", "Güvenlik Brifingi", "Zipline Geçişleri", "Sigorta"]
        },
        { 
          slug: "luxury-boat", 
          name: "Lüks Tekne Turu", 
          price: "€40", 
          duration: "6 Saat", 
          images: ["https://www.bogazturu.com/uploads/resim/47-1/bogaz-cocugu-tekne-kiralama.jpg"], 
          desc: "Güneş, deniz ve rahatlama. Yat turunda yüzme molaları ve lezzetli yemekler.",
          longDesc: "Kalabalıktan uzak, lüks bir yatta denizin ve güneşin tadını çıkarın. Tertemiz koylarda vereceğimiz yüzme molalarında Akdeniz'in turkuaz sularına dalabilir, yatta hazırlanan taze öğle yemeğinin tadına bakabilirsiniz. Dinlenmek ve eğlenmek için en ideal seçenek.",
          highlights: ["Konforlu Lüks Yat", "Bakir Koylar ve Mağaralar", "Snorkel ile Dalış İmkanı", "Müzik ve Eğlence"],
          included: ["Tekne Gezisi", "Barbekü Öğle Yemeği", "Sınırsız Soft İçecek", "Yüzme Ekipmanları"]
        },
        { 
          slug: "quad-safari", 
          name: "Atv Quad Safari", 
          price: "€40", 
          duration: "3 Saat", 
          images: ["https://tr.antalyaquadbiking.com/wp-content/uploads/2018/07/Antalya-ATV-Turu-4.jpg"], 
          desc: "Eğlenceye ve çamura hazır olun! Orman yollarında kendi ATV'nizi sürün.",
          longDesc: "Dört tekerlekli macera sizi bekliyor! Kendi ATV'nizi kullanarak orman yollarında, çamurlu derelerde ve engelli parkurlarda sürüş yapacaksınız. Ehliyet gerektirmeyen bu aktivitede tek kural eğlenmek! Toz, toprak ve adrenalin garantili bir tur.",
          highlights: ["Kendi Aracını Sür", "Orman ve Dağ Parkurları", "Zorlu Engeller", "Profesyonel Öncü Ekip"],
          included: ["ATV Aracı", "Kask", "Rehberlik Hizmeti", "Yakıt"]
        },
        { 
          slug: "sapadere-canyon", 
          name: "Sapadere Kanyon Safari", 
          price: "€45", 
          duration: "Tam Gün", 
          images: ["https://www.alanya.bel.tr/Photos/News/Big/599082432421544896.JPG", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/p5l2b4q5f5v5v5v5v5v5/SapadereCanyonTourfromAlanya.jpg"], 
          desc: "Sapadere Kanyonu'nun gizli şelalelerini ve buz gibi dağ sularını keşfedin.",
          longDesc: "Doğanın kucağında huzur dolu bir gün geçirmek isteyenler için Sapadere Kanyonu biçilmiş kaftan. Dik kayalıklar arasına kurulmuş ahşap yürüyüş yolunda yürürken birçok irili ufaklı şelale görecek, kanyonun sonundaki dev şelalede serinleyeceksiniz. Köy hayatını ve yerel dokuyu hissedeceksiniz.",
          highlights: ["Ahşap Yürüyüş Yolu", "Muhteşem Şelaleler", "Doğal Yüzme Havuzları", "Sapadere Köyü Ziyareti"],
          included: ["Ulaşım", "Giriş Ücretleri", "Öğle Yemeği", "Rehberli Yürüyüş"]
        },
        { 
          slug: "side-manavgat", 
          name: "Side Aspendos Manavgat", 
          price: "€45", 
          duration: "Tam Gün", 
          images: ["https://bookfromlocals.com/wp-content/uploads/2022/03/Manavgat-Aspendos-Side-Tour-From-Alanya-1.jpg"], 
          desc: "Arkeoloji ve doğanın mükemmel uyumu. Antik tiyatro ve Manavgat şelalesi.",
          longDesc: "Tarihin tozlu sayfalarıyla doğanın eşsiz güzelliğini birleştiriyoruz. Dünyanın en iyi korunmuş antik tiyatrolarından biri olan Aspendos'u ziyaret edip ardından Side Antik Kenti'nde gezintiye çıkacağız. Günün finalinde ise Manavgat Şelalesi'nin dingin sesi eşliğinde ruhunuzu dinlendireceksiniz.",
          highlights: ["Aspendos Roma Tiyatrosu", "Side Apollon Tapınağı", "Manavgat Şelalesi", "Antik Liman Yürüyüşü"],
          included: ["Tüm Giriş Ücretleri", "Profesyonel Rehberlik", "Öğle Yemeği", "Konforlu Ulaşım"]
        },
        { 
          slug: "fishing", 
          name: "Balık Turu", 
          price: "€40", 
          duration: "5 Saat", 
          images: ["https://adrasanbalik.com/wp-content/uploads/2013/03/TEKNEDE-OLTA-KULLANIMI-3.jpg"], 
          desc: "Denizde huzurlu bir gün. Akdeniz balıklarını yakalamak için şansınızı deneyin.",
          longDesc: "Şehrin gürültüsünü geride bırakıp oltanızı denize atın. Geleneksel balıkçı teknesiyle Akdeniz'in en bereketli noktalarına gideceğiz. İster profesyonel olun ister acemi, denizin sakinliği ve taze hava size çok iyi gelecek. Tuttuğunuz balıkları belki de teknede yeme şansı bulursunuz!",
          highlights: ["Yerel Balık Noktaları", "Geleneksel Tekne", "Tüm Ekipmanlar Hazır", "Denizde Huzur"],
          included: ["Olta ve Takımlar", "Yemler", "Soft İçecekler", "Kaptan Hizmeti"]
        },
        { 
          slug: "city-tour", 
          name: "Alanya Şehir Turu", 
          price: "€30", 
          duration: "4 Saat", 
          images: ["https://tursaytravel.com/wp-content/uploads/2026/02/Alanya-City-Tour-from-Side-Tursay-Travel-3-1000x575.webp"], 
          desc: "Alanya kalesi, Kızıl Kule and Damlataş mağarasını uzman rehberlerle keşfedin.",
          longDesc: "Alanya'nın simgeleşmiş yerlerini yarım günde keşfedin. Teleferik ile Alanya Kalesi'ne çıkıp şehrin panoramik manzarasını izleyecek, astıma iyi gelen havasıyla meşhur Damlataş Mağarası'nı gezeceksiniz. Limandaki tarihi Kızıl Kule ise size şehrin denizci geçmişini anlatacak.",
          highlights: ["Alanya Kalesi Panoraması", "Damlataş Mağarası Zeareti", "Tarihi Kızıl Kule", "Kleopatra Plajı Seyri"],
          included: ["Profesyonel Rehber", "Giriş Ücretleri", "Otel Transferi", "İçecek"]
        }
      ]
    },
    contact: {
      title: "İletişime Geçin",
      connectTitle: "Hızlı Bağlantı",
      contactDesc: "Bize Ulaşın.",
      name: "Ad Soyad",
      email: "E-Posta",
      phone: "Telefon",
      message: "Mesajınız",
      send: "Gönder",
      whatsapp: "WhatsApp'tan Yazın"
    },
    modal: {
      pickup: "ALIŞ",
      return: "DÖNÜŞ",
      total: "TAHMİNİ TOPLAM",
      book: "REZERVASYON YAP",
      confirm: "ONAYLANDI",
      confirmDesc: "En kısa sürede sizinle iletişime geçeceğiz."
    },
    stats: {
      clients: "Mutlu Müşteri",
      cars: "Modern Araç",
      support: "VIP Destek",
      tours: "Antalya Turu",
      insights: "Gezgin Notları",
      supportTitle: "Destek"
    },
    testimonials: {
      title: "Müşteri Yorumları",
      subtitle: "Dünyanın her yerinden mutlu gezginler.",
      list: [
        { name: "John D.", role: "Aile Tatili", text: "Dürüst fiyatlar ve çok temiz araç. Egea bizim için mükemmeldi." },
        { name: "Sarah L.", role: "Gezgin", text: "Havaalanında bekletmeden aracı teslim ettiler. Güvenilir servis." },
        { name: "Mehmet K.", role: "İş Gezisi", text: "Turlar harikaydı, her şey planlandığı gibi gitti." }
      ]
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      list: [
        { q: "Depozito gerekli mi?", a: "Evet, araç tesliminde küçük bir depozito alınır ve teslimatta iade edilir." },
        { q: "Havaalanında araç alabilir miyim?", a: "Kesinlikle. Antalya Havalimanı (AYT) için 7/24 hizmetimiz vardır." }
      ]
    },
    guide: {
      title: "Antalya Rehberi",
      subtitle: "Boss Tour aracıyla gidebileceğiniz en iyi rotalar.",
      list: [
        { name: "Kaş & Kaputaş", dist: "190 km", tags: ["Plaj", "Manzara"] },
        { name: "Antik Side", dist: "75 km", tags: ["Tarih", "Gün Batımı"] },
        { name: "The Land of Legends", dist: "30 km", tags: ["Eğlence", "Aile"] }
      ]
    }
  },
  de: {
    nav: { home: "Startseite", services: "Abenteuer", fleet: "Unsere Flotte", contact: "Kontakt" },
    hero: { 
      title: "Abenteuer in Antalya", 
      subtitle: "Entdecken Sie die Küste mit Boss Tour. Mieten Sie ein Auto oder erleben Sie unsere Touren.",
      cta: "Auto Mieten",
      cta2: "Abenteuer Sehen"
    },
    fleet: {
      title: "Unsere Flotte",
      subtitle: "Modern, sicher und komfortabel für jede Reise.",
      viewAll: "Gesamte Flotte",
      viewDetails: "Details sehen",
      list: [
        { 
          name: "Fiat Egea", 
          fuel: "Diesel", 
          gear: "Manuell", 
          passenger: 5, 
          price: "€45", 
          images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN1_TwSefKLXcrdC4qy5_j_HDyfDj12pv0g&s"],
          longDesc: "Die perfekte Balance zwischen Wirtschaftlichkeit und Platz. Ideal für lange Fahrten."
        },
        { 
          name: "Renault Clio", 
          fuel: "Benzin", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€40", 
          images: ["https://otopoint.com.tr/wp-content/uploads/2022/10/clio2.jpg"],
          longDesc: "Kompakt, stilvoll und einfach in den engen Gassen von Antalya zu parken."
        },
        { 
          name: "Fiat Egea Cross", 
          fuel: "Diesel", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€55", 
          images: ["https://databank.fiatbayi.com.tr/images/modeller/egea-cross/egea-cross-paket.jpg"],
          longDesc: "Robuster Crossover-Geist. Perfekt für versteckte Strände und Bergpfade."
        },
        { 
          name: "Citroen C3", 
          fuel: "Benzin", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€45", 
          images: ["https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png"],
          longDesc: "Markantes Design und unübertroffener Komfort. Das perfekte Stadtauto."
        },
        { 
          name: "Klassik Suzuki Jeep", 
          fuel: "Benzin", 
          gear: "Manuell", 
          passenger: 4, 
          price: "€70", 
          images: ["https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg"],
          longDesc: "Authentischer Abenteuergeist. Klassischer Open-Top-Jeep für Entdecker."
        },
        { 
          name: "Hyundai i20", 
          fuel: "Benzin", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€45", 
          images: ["https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420"],
          longDesc: "Modern, dynamisch und bemerkenswert geräumig für seine Klasse. Ideal für Stadterkundungen."
        },
        { 
          name: "Ford Custom", 
          fuel: "Diesel", 
          gear: "Manuell", 
          passenger: 9, 
          price: "€85", 
          images: ["https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp"],
          longDesc: "Der ultimative Gruppenwagen. Geräumig, kraftvoll und komfortabel für große Familien."
        }
      ]
    },
    tours: {
      title: "Beliebte Abenteuer",
      subtitle: "Unvergessliche Touren für Ihren Urlaub.",
      viewTour: "Mehr Erfahren",
      highlightsLabel: "Highlights",
      includedLabel: "Inbegriffen",
      list: [
        { 
          slug: "pamukkale", 
          name: "Pamukkale", 
          price: "€45", 
          duration: "Ganztägig", 
          images: ["https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8044e777d28aeed5/680bdb7cc39b0f1c36cbd423/BCC-2025-EXPLORER-PAMUKKALE-VISIT_PAMUKKALE_HOT_SPRINGS-HEADER-DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=1920&height=1080", "https://cdn.bfldr.com/UTM69Z3S/at/6sb9xpv5x7zv9ktfp4pkf2s/6002658125_e98c55479b_o-LOWRES.jpg?disable=upscale&auto=webp&quality=60&format=pjpg&crop=1920%3A1080%2Csmart&width=1920&height=1080", "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8044e777d28aeed5/680bdb7cc39b0f1c36cbd423/BCC-2025-EXPLORER-PAMUKKALE-VISIT_PAMUKKALE_HOT_SPRINGS-HEADER-DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=1920&height=1080"], 
          desc: "Besuchen Sie das 'Baumwollschloss' - die berühmten Kalksteinterrassen und die Ruinen von Hierapolis.",
          longDesc: "Entdecken Sie eines der wertvollsten Naturwunder der Türkei. Pamukkale ist berühmt für seine weißen Travertinterrassen, die durch mineralreiches Thermalwasser entstanden sind. Über den Terrassen liegt die antike Stadt Hierapolis, wo Sie das prächtige Theater und das Cleopatra-Bad bewundern können.",
          highlights: ["Weiße Sinterterrassen", "Antike Stadt Hierapolis", "Kleopatra-Thermalbad", "Römisches Theater"],
          included: ["Transfer ab Hotel", "Professioneller Guide", "Mittagessen", "Eintrittsgelder"]
        },
        { 
          slug: "rafting", 
          name: "Rafting Abenteuer", 
          price: "€35", 
          duration: "6 Stunden", 
          images: ["https://upload.wikimedia.org/wikipedia/commons/a/a9/Fun_Rafting_Elo_River_Magelang.jpg", "https://www.toursce.com/wp-content/uploads/rafting-antalya.jpg", "https://www.koprulucanyon.com/images/rafting-antalya-koprulu-kanyon.jpg"], 
          desc: "Eine actiongeladene Fahrt auf dem Fluss Koprucay. Großer Spaß für Gruppen und Familien.",
          longDesc: "Erleben Sie den Nervenkitzel beim Wildwasser-Rafting im Köprülü-Kanyon-Nationalpark. Die 14 km lange Strecke bietet die perfekte Mischung aus Action und atemberaubender Natur. Ein Erlebnis, das Teamgeist weckt und für Abkühlung an heißen Sommertagen sorgt.",
          highlights: ["14km Rafting-Strecke", "Köprülü-Kanyon-Panorama", "Mittagessen am Fluss", "Erfahrene Guides"],
          included: ["Leihausrüstung (Helm, Weste)", "Sicherheitsunterweisung", "Mittagessen", "Versicherung"]
        },
        { 
          slug: "mix-adventure", 
          name: "Mix Abenteuer Tour", 
          price: "€55", 
          duration: "Ganztägig", 
          images: ["https://www.touralanya.com/TurResimleri/181925adventurepackagetourfromalanya.jpeg"], 
          desc: "Die ultimate Kombination: Rafting, Zipline und Canyoning an einem aufregenden Tag.",
          longDesc: "Warum nur eine Aktivität wählen, wenn man alles haben kann? Unsere Mix-Abenteuer-Tour kombiniert Canyoning, Ziplining über den Fluss und adrenalingeladenes Rafting in einem Paket. Perfekt für alle, die das Maximum an Action suchen.",
          highlights: ["3-in-1 Adrenalin-Paket", "Schnelle Zipline", "Canyoning-Wanderung", "Actionreiches Rafting"],
          included: ["Gesamte Ausrüstung", "Führung durch Profis", "BBQ-Mittagessen", "Hotel-Transfer"]
        },
        { 
          slug: "kekova", 
          name: "Kekova Demre Myra", 
          price: "€50", 
          duration: "Ganztägig", 
          images: ["https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg"], 
          desc: "Entdecken Sie die versunkene Stadt, lykische Felsengräber und die St.-Nikolaus-Kirche.",
          longDesc: "Eine kulturelle Zeitreise an die lykische Küste. Besuchen Sie die beeindruckenden Felsengräber von Myra und die historische Nikolauskirche. Während der Bootsfahrt nach Kekova sehen Sie die faszinierenden Ruinen der versunkenen Stadt direkt unter der Wasseroberfläche.",
          highlights: ["Versunkene Stadt Kekova", "Lykische Felsengräber", "St.-Nikolaus-Kirche", "Bootstour mit Badestopps"],
          included: ["Kulturelle Führung", "Ganztägige Bootsfahrt", "Mittagessen", "Klimatisierter Bus"]
        },
        { 
          slug: "paragliding", 
          name: "Paragliding", 
          price: "€75", 
          duration: "3 Stunden", 
          images: ["https://cloudbasetravel.com/wp-content/uploads/2021/05/G0026043-scaled.jpg"], 
          desc: "Fliegen Sie wie ein Vogel über die türkisfarbene Küste mit atemberaubenden Ausblicken.",
          longDesc: "Gleiten Sie lautlos über die traumhafte Mittelmeerküste. Zusammen mit einem erfahrenen Piloten starten Sie aus luftiger Höhe und landen sanft am berühmten Kleopatra-Strand. Genießen Sie eine unvergleichliche Panorama-Aussicht auf das Taurusgebirge und das Meer.",
          highlights: ["Tandemflug mit Profi", "Panorama-Aussicht", "Strandlandung", "Foto/Video (optional)"],
          included: ["Lizenzierter Pilot", "Sicherheitsausrüstung", "Versicherung", "Transfer"]
        },
        { 
          slug: "jeep-safari", 
          name: "Alanya Jeep Safari", 
          price: "€40", 
          duration: "Ganztägig", 
          images: ["https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/51/8b.jpg", "https://www.toursce.com/wp-content/uploads/jeep-safari-alanya.jpg"], 
          desc: "Offroad-Abenteuer durch das Taurusgebirge mit Panoramablick auf Alanya.",
          longDesc: "Verlassen Sie die asphaltierten Straßen und erkunden Sie das Hinterland von Alanya. Mit offenen Jeeps geht es durch Pinienwälder und traditionelle Dörfer. Erwarten Sie einen Tag voller Spaß, Wasserschlachten und spektakuläre Aussichten von den Bergen.",
          highlights: ["Offroad-Geländefahrten", "Traditionelles Dorfleben", "Panoramapunkte", "Wasserschlachten"],
          included: ["Safari-Jeep", "Dorf-Mittagessen", "Fahrer/Guide", "Abholung ab Hotel"]
        },
        { 
          slug: "cappadocia", 
          name: "Kappadokien Reise", 
          price: "€120", 
          duration: "2 Tage", 
          images: ["https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-turu-1-gece-1.webp", "https://www.fodors.com/wp-content/uploads/2019/12/HERO_Cappadocia_Turkey_shutterstock_637025110.jpg", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/pzh8z9z9v9z9v9z9v9z9/CappadociaHotAirBalloonFlight.jpg"], 
          desc: "Eine magische Reise in das Land der Feenkamine und der Heißluftballons.",
          longDesc: "Die surreale Mondlandschaft von Kappadokien wird Sie verzaubern. Auf dieser 2-Tage-Tour besichtigen wir das Freilichtmuseum Göreme, unterirdische Städte und beeindruckende Felsformationen. Der Anblick der hunderte Ballons bei Sonnenaufgang ist ein absolutes Highlight.",
          highlights: ["Feenkamine & Felsen", "Unterirdische Stadt", "Göreme Museum", "Ballon-Beobachtung"],
          included: ["Hotel-Übernachtung", "Fahrt & Guide", "Frühstück & Abendessen", "Eintrittspreise"]
        },
        { 
          slug: "zipline", 
          name: "Zipline Erlebnis", 
          price: "€25", 
          duration: "2 Stunden", 
          images: ["https://canyonzipline.com/wp-content/uploads/2025/12/Tazi-Kanyonu-Ziplineeee.webp"], 
          desc: "Spüren Sie die Geschwindigkeit beim Gleiten durch die grünen Schluchten am Seil.",
          longDesc: "Adrenalin pur! Gleiten Sie an einem stabilen Drahtseil über die tiefe Schlucht des Köprülü-Kanyons. Aus einer völlig neuen Perspektive erleben Sie den Fluss und die Wälder unter sich, während Sie rasante Geschwindigkeiten erreichen.",
          highlights: ["Längste Zipline Alanyas", "Schluchten-Panorama", "Geschwindigkeitsrausch", "Höchste Sicherheit"],
          included: ["Profi-Ausrüstung", "Sicherheitstraining", "Zipline-Flights", "Versicherung"]
        },
        { 
          slug: "luxury-boat", 
          name: "Luxus-Bootstour", 
          price: "€40", 
          duration: "6 Stunden", 
          images: ["https://www.bogazturu.com/uploads/resim/47-1/bogaz-cocugu-tekne-kiralama.jpg"], 
          desc: "Sonne, Meer und Entspannung. Genießen Sie einen Tag auf einer Yacht mit Badestopps.",
          longDesc: "Entfliehen Sie dem Alltag auf einer exklusiven Yacht. Genießen Sie das kristallklare Wasser des Mittelmeers bei zahlreichen Badestopps in versteckten Buchten. Ein frisch zubereitetes Mittagessen an Bord und Entspannung pur auf den Sonnendecks erwarten Sie.",
          highlights: ["Moderne Yacht", "Glasklare Buchten", "Schnorcheln & Baden", "Musik & BBQ an Bord"],
          included: ["Bootsfahrt", "BBQ-Lunch", "Softdrinks", "Schwimmhilfen"]
        },
        { 
          slug: "quad-safari", 
          name: "Quad Safari", 
          price: "€40", 
          duration: "3 Stunden", 
          images: ["https://tr.antalyaquadbiking.com/wp-content/uploads/2018/07/Antalya-ATV-Turu-4.jpg"], 
          desc: "Machen Sie sich schmutzig und haben Sie Spaß! Fahren Sie Ihr eigenes Quad durch den Wald.",
          longDesc: "Abenteuer auf vier Rädern! Fahren Sie Ihr eigenes ATV durch staubige Pfade, Flüsse und holprige Bergwege. Kein Führerschein erforderlich. Unter Anleitung unserer Guides erleben Sie eine abenteuerliche Tour durch die wunderschöne Natur Alanyas.",
          highlights: ["Selber Quad fahren", "Wälder & Bergwege", "Offroad-Spurt", "Profi-Begleitung"],
          included: ["ATV-Fahrzeug", "Helm", "Guide-Service", "Benzin"]
        },
        { 
          slug: "sapadere-canyon", 
          name: "Sapadere Schlucht Safari", 
          price: "€45", 
          duration: "Ganztägig", 
          images: ["https://www.alanya.bel.tr/Photos/News/Big/599082432421544896.JPG", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/p5l2b4q5f5v5v5v5v5v5/SapadereCanyonTourfromAlanya.jpg"], 
          desc: "Erkunden Sie die versteckten Wasserfälle und das eiskalte Bergwasser der Sapadere-Schlucht.",
          longDesc: "Ein tag in fast unberührter Natur. Die Sapadere-Schlucht beeindruckt mit hohen Felswänden und kristallklarem Bergwasser. Wandern Sie auf Holzstegen entlang der Wasserfälle und genießen Sie die kühle Brise im heißen Sommer.",
          highlights: ["Holzsteg-Wanderweg", "Smaragdgrüne Wasserfälle", "Natur-Pools zum Baden", "Besuch Dorf Sapadere"],
          included: ["Fahrt im Jeep/Bus", "Eintrittspreise", "Mittagessen", "Geführte Wanderung"]
        },
        { 
          slug: "side-manavgat", 
          name: "Side Aspendos Manavgat", 
          price: "€45", 
          duration: "Ganztägig", 
          images: ["https://bookfromlocals.com/wp-content/uploads/2022/03/Manavgat-Aspendos-Side-Tour-From-Alanya-1.jpg"], 
          desc: "Besuchen Sie das antike Theater von Aspendos und die Manavgat-Wasserfälle.",
          longDesc: "Kultur und Natur perfekt vereint. Bestaunen Sie das besterhaltene antike Theater der römischen Welt in Aspendos, spazieren Sie durch Side und besuchen Sie den berühmten Manavgat-Wasserfall für entspannende Momente.",
          highlights: ["Römisches Theater Aspendos", "Antikes Side & Apollon-Tempel", "Manavgat-Wasserfall", "Historischer Hafen"],
          included: ["Alle Eintrittsgelder", "Prof. Reiseleiter", "Mittagessen", "Komfortabler Transfer"]
        },
        { 
          slug: "fishing", 
          name: "Angeltour", 
          price: "€40", 
          duration: "5 Stunden", 
          images: ["https://adrasanbalik.com/wp-content/uploads/2013/03/TEKNEDE-OLTA-KULLANIMI-3.jpg"], 
          desc: "Genießen Sie einen friedlichen Tag auf See und versuchen Sie Ihr Glück beim Angeln.",
          longDesc: "Ein ruhiger Vormittag auf dem Meer. Mit einem kleinen Fischerboot fahren wir zu den besten Plätzen der Einheimischen. Genießen Sie die Ruhe, die frische Meeresluft und vielleicht beißen ja die Fische an!",
          highlights: ["Lokale Angelspots", "Traditionelles Boot", "Ausrüstung inklusive", "Ruhe auf dem Meer"],
          included: ["Angelruten & Köder", "Erfrischungsgetränke", "Kapitän/Guide", "Transfer"]
        },
        { 
          slug: "city-tour", 
          name: "Alanya Stadttour", 
          price: "€30", 
          duration: "4 Stunden", 
          images: ["https://tursaytravel.com/wp-content/uploads/2026/02/Alanya-City-Tour-from-Side-Tursay-Travel-3-1000x575.webp"], 
          desc: "Erkunden Sie die Burg von Alanya, den Roten Turm und die Damlatas-Höhle.",
          longDesc: "Alanyas Schönheiten kompakt erleben. Mit der Seilbahn geht es hoch zur Burg für den besten Blick auf den Kleopatra-Strand. Danach besichtigen wir die heilende Damlatas-Höhle und den historischen Roten Turm am Hafen.",
          highlights: ["Burg von Alanya (Panorama)", "Besuch Damlatas-Höhle", "Roter Turm am Hafen", "Kleopatra-Strand Blick"],
          included: ["Prof. Stadtführer", "Eintrittspreise", "Transfer", "Wasser"]
        }
      ]
    },
    contact: {
      title: "Kontakt",
      connectTitle: "Schnellverbindung",
      contactDesc: "Kontaktieren Sie uns.",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      send: "Senden",
      whatsapp: "Über WhatsApp schreiben"
    },
    modal: {
      pickup: "ABHOLUNG",
      return: "RÜCKGABE",
      total: "GESAMTSUMME (EST.)",
      book: "BUCHEN",
      confirm: "BESTÄTIGT",
      confirmDesc: "Wir werden Sie in Kürze kontaktieren."
    },
    stats: {
      clients: "Zufriedene Kunden",
      cars: "Moderne Autos",
      support: "VIP Support",
      tours: "Antalya Touren",
      insights: "Reisetipps",
      supportTitle: "Support"
    },
    whyUs: {
      title: "Der Boss Vorteil",
      items: [
        { title: "24/7 Lieferung", desc: "Flughafen oder Hotel. Ihr Auto kommt pünktlich." },
        { title: "Keine Gebühren", desc: "Was Sie sehen, zahlen Sie auch. Transparente Verträge." },
        { title: "Junge Flotte", desc: "Alle Autos unter 2 Jahren und regelmäßig gewartet." }
      ]
    },
    testimonials: {
      title: "Glückliche Reisende",
      subtitle: "Schließen Sie sich tausenden zufriedenen Entdeckern an.",
      list: [
        { name: "John D.", role: "Familienreise", text: "Faire Preise und ein sehr sauberes Auto. Der Egea war perfekt für uns." },
        { name: "Sarah L.", role: "Solo-Entdeckerin", text: "Die Bootstour war das Highlight meiner Reise. Atemberaubende Buchten!" },
        { name: "Hans M.", role: "Stammgast", text: "Zuverlässiger Service. Ich miete jeden Sommer bei Boss Tour." }
      ]
    },
    faq: {
      title: "FAQ",
      list: [
        { q: "Ist eine Kaution erforderlich?", a: "Ja, eine kleine Kaution wird bei der Anmietung hinterlegt und sofort bei der Rückgabe erstattet." },
        { q: "Flughafen-Pick-up?", a: "Ja, wir bieten Meet-and-Greet-Services am Flughafen Antalya (AYT) rund um die Uhr an." }
      ]
    },
    guide: {
      title: "Antalya Entdecken",
      subtitle: "Top-Ziele mit Boss Tour.",
      list: [
        { name: "Kas & Kaputas", dist: "190 km", tags: ["Strand", "Aussicht"] },
        { name: "Antikes Side", dist: "75 km", tags: ["Geschichte", "Sonnenuntergang"] },
        { name: "The Land of Legends", dist: "30 km", tags: ["Familie", "Spaß"] }
      ]
    }
  },
  ru: {
    nav: { home: "Главная", services: "Приключения", fleet: "Наш автопарк", contact: "Контакт" },
    hero: { 
      title: "Приключения ждут в Анталии", 
      subtitle: "Исследуйте побережье с Boss Tour. Арендуйте авто или присоединяйтесь к турам.",
      cta: "Аренда авто",
      cta2: "Все туры"
    },
    fleet: {
      title: "Наш Автопарк",
      subtitle: "Современные и безопасные авто для любой поездки.",
      viewAll: "Весь Автопарк",
      viewDetails: "Подробнее",
      list: [
        { 
          name: "Fiat Egea", 
          fuel: "Дизель", 
          gear: "Механика", 
          passenger: 5, 
          price: "€45", 
          images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN1_TwSefKLXcrdC4qy5_j_HDyfDj12pv0g&s"],
          longDesc: "Идеальный баланс экономии и пространства. Подходит для длительных поездок."
        },
        { 
          name: "Renault Clio", 
          fuel: "Бензин", 
          gear: "Автомат", 
          passenger: 5, 
          price: "€40", 
          images: ["https://otopoint.com.tr/wp-content/uploads/2022/10/clio2.jpg"],
          longDesc: "Компактный, стильный и очень удобный для парковки."
        },
        { 
          name: "Fiat Egea Cross", 
          fuel: "Дизель", 
          gear: "Автомат", 
          passenger: 5, 
          price: "€55", 
          images: ["https://databank.fiatbayi.com.tr/images/modeller/egea-cross/egea-cross-paket.jpg"],
          longDesc: "Дух кроссовера. Идеально для скрытых пляжей и горных троп."
        },
        { 
          name: "Citroen C3", 
          fuel: "Бензин", 
          gear: "Автомат", 
          passenger: 5, 
          price: "€45", 
          images: ["https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png"],
          longDesc: "Самобытный дизайн и непревзойденный комфорт. Идеальный городской автомобиль."
        },
        { 
          name: "Классический Suzuki Jeep", 
          fuel: "Бензин", 
          gear: "Механика", 
          passenger: 4, 
          price: "€70", 
          images: ["https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg"],
          longDesc: "Подлинный дух приключений. Классический джип с открытым верхом."
        },
        { 
          name: "Hyundai i20", 
          fuel: "Бензин", 
          gear: "Автомат", 
          passenger: 5, 
          price: "€45", 
          images: ["https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420"],
          longDesc: "Современный, динамичный и просторный. Идеально для изучения города."
        },
        { 
          name: "Ford Custom", 
          fuel: "Дизель", 
          gear: "Механика", 
          passenger: 9, 
          price: "€85", 
          images: ["https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp"],
          longDesc: "Лучший выбор для групп. Просторный и комфортный для больших семей."
        }
      ]
    },
    whyUs: {
      title: "Преимущества Boss",
      items: [
        { title: "Доставка 24/7", desc: "Аэропорт или отель. Ваша машина прибудет именно тогда, когда и вы." },
        { title: "Никаких скрытых комиссий", desc: "Никаких сюрпризов. Полная прозрачность в каждом контракте." },
        { title: "Молодой автопарк", desc: "Все наши автомобили не старше 2 лет и регулярно проходят обслуживание." }
      ]
    },
    tours: {
      title: "Популярные Приключения",
      subtitle: "Незабываемые туры для вашего отдыха.",
      viewTour: "Подробнее",
      highlightsLabel: "Главное",
      includedLabel: "Что включено",
      list: [
        { 
          slug: "pamukkale", 
          name: "Памуккале", 
          price: "€45", 
          duration: "Весь день", 
          images: ["https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8044e777d28aeed5/680bdb7cc39b0f1c36cbd423/BCC-2025-EXPLORER-PAMUKKALE-VISIT_PAMUKKALE_HOT_SPRINGS-HEADER-DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=1920&height=1080", "https://cdn.bfldr.com/UTM69Z3S/at/6sb9xpv5x7zv9ktfp4pkf2s/6002658125_e98c55479b_o-LOWRES.jpg?disable=upscale&auto=webp&quality=60&format=pjpg&crop=1920%3A1080%2Csmart&width=1920&height=1080", "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt8044e777d28aeed5/680bdb7cc39b0f1c36cbd423/BCC-2025-EXPLORER-PAMUKKALE-VISIT_PAMUKKALE_HOT_SPRINGS-HEADER-DESKTOP.jpg?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart&width=1920&height=1080"], 
          desc: "Посетите «Хлопковый замок» — белоснежные травертины и древний город Иераполис.",
          longDesc: "Памуккале, что в переводе с турецкого означает «хлопковый замок», — это уникальный природный объект с белоснежными каскадами термальных источников. Вы сможете прогуляться по травертинам, посетить античный город Иераполис и искупаться в знаменитом бассейне Клеопатры с минеральной водой.",
          highlights: ["Белоснежные травертины", "Античный город Иераполис", "Бассейн Клеопатры", "Древний театр"],
          included: ["Трансфер из отеля", "Русскоговорящий гид", "Обед", "Входные билеты"]
        },
        { 
          slug: "rafting", 
          name: "Рафтинг", 
          price: "€35", 
          duration: "6 часов", 
          images: ["https://upload.wikimedia.org/wikipedia/commons/a/a9/Fun_Rafting_Elo_River_Magelang.jpg", "https://www.toursce.com/wp-content/uploads/rafting-antalya.jpg", "https://www.koprulucanyon.com/images/rafting-antalya-koprulu-kanyon.jpg"], 
          desc: "Сплав по горной реке Кёпрючай. Активный отдых для всей семьи.",
          longDesc: "Испытайте прилив адреналина на сплаве по горной реке в национальном парке Кёпрюлю Каньон. Дистанция 14 км подходит как для новичков, так и для опытных любителей экстрима. Это отличный способ освежиться в жаркий день и насладиться природой Таврских гор.",
          highlights: ["Сплав 14 км по реке", "Виды каньона Кёпрюлю", "Обед на берегу реки", "Профессиональные инструкторы"],
          included: ["Снаряжение (шлем, жилет)", "Инструктаж", "Обед", "Страховка"]
        },
        { 
          slug: "mix-adventure", 
          name: "Микс тур", 
          price: "€55", 
          duration: "Весь день", 
          images: ["https://www.touralanya.com/TurResimleri/181925adventurepackagetourfromalanya.jpeg"], 
          desc: "Лучшее комбо: Рафтинг, Зиплайн и Каньон в один насыщенный день.",
          longDesc: "Зачем выбирать что-то одно? Наш Микс-тур объединяет каньонинг, полет на зиплайне над рекой и захватывающий рафтинг. Идеальный выбор для тех, кто хочет получить максимум впечатлений за один день.",
          highlights: ["3 приключения в 1 дне", "Скоростной зиплайн", "Прогулка по каньону", "Активный рафтинг"],
          included: ["Все необходимое снаряжение", "Опытные гиды", "Обед барбекю", "Трансфер"]
        },
        { 
          slug: "kekova", 
          name: "Демре Мира Кекова", 
          price: "€50", 
          duration: "Весь день", 
          images: ["https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg"], 
          desc: "Затонувший город, ликийские гробницы и церковь Святого Николая.",
          longDesc: "Путешествие в историю Ликийского царства. Посетите древние скальные гробницы в Мире и церковь Святого Николая Чудотворца. Гвоздь программы — прогулка на яхте к затонувшему городу Кекова, руины которого видны сквозь прозрачную воду.",
          highlights: ["Затонувший город Кекова", "Ликийские гробницы", "Церковь Св. Николая", "Прогулка на яхте"],
          included: ["Экскурсия с гидом", "Прогулка на яхте", "Обед", "Транспорт с кондиционером"]
        },
        { 
          slug: "paragliding", 
          name: "Параглайдинг", 
          price: "€75", 
          duration: "3 часа", 
          images: ["https://cloudbasetravel.com/wp-content/uploads/2021/05/G0026043-scaled.jpg"], 
          desc: "Полет над бирюзовым побережьем с невероятными видами с высоты птичьего полета.",
          longDesc: "Полет на параплане в тандеме с опытным инструктором — это незабываемые эмоции и лучший вид на Аланью. Вы взлетите с высоты 700 метров и плавно приземлитесь на пляж Клеопатры, наслаждаясь панорамой гор и моря.",
          highlights: ["Тандемный полет с профи", "Панорамные виды", "Приземление на пляж", "Фото и видео (опция)"],
          included: ["Лицензированный пилот", "Все снаряжение", "Страховка", "Трансфер"]
        },
        { 
          slug: "jeep-safari", 
          name: "Аланья Джип-сафари", 
          price: "€40", 
          duration: "Весь день", 
          images: ["https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/51/8b.jpg", "https://www.toursce.com/wp-content/uploads/jeep-safari-alanya.jpg"], 
          desc: "Приключение по горам Тавр с панорамными видами на Аланью.",
          longDesc: "Увлекательное путешествие на открытых джипах по горным тропам. Вы посетите традиционные турецкие деревни, фруктовые сады и насладитесь освежающими водяными битвами между джипами. Лучший способ увидеть нетуристическую Турцию.",
          highlights: ["Горное бездорожье", "Жизнь турецкой деревни", "Панорамные площадки", "Водяные битвы"],
          included: ["Джип с открытым верхом", "Традиционный обед", "Водитель-гид", "Трансфер"]
        },
        { 
          slug: "cappadocia", 
          name: "Каппадокия", 
          price: "€120", 
          duration: "2 дня", 
          images: ["https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-turu-1-gece-1.webp", "https://www.fodors.com/wp-content/uploads/2019/12/HERO_Cappadocia_Turkey_shutterstock_637025110.jpg", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/pzh8z9z9v9z9v9z9v9z9/CappadociaHotAirBalloonFlight.jpg"], 
          desc: "Магическое путешествие в страну сказочных дымоходов и воздушных шаров.",
          longDesc: "Двухдневный тур в самое сердце Турции. Каппадокия поразит вас своими «лунными» ландшафтами, подземными городами и долинами с причудливыми скалами. Рассвет с сотнями воздушных шаров — зрелище, которое стоит увидеть хотя бы раз в жизни.",
          highlights: ["Сказочные дымоходы", "Подземный город", "Музей под открытым небом", "Парад шаров"],
          included: ["Проживание в отеле", "Проезд и гид", "Завтрак и ужин", "Входные билеты"]
        },
        { 
          slug: "zipline", 
          name: "Зиплайн", 
          price: "€25", 
          duration: "2 часа", 
          images: ["https://canyonzipline.com/wp-content/uploads/2025/12/Tazi-Kanyonu-Ziplineeee.webp"], 
          desc: "Почувствуйте скорость и адреналин, пролетая над зелеными каньонами.",
          longDesc: "Почувствуйте свободу полета на одном из самых длинных зиплайнов региона. Вы промчитесь над глубоким каньоном и горной рекой, наслаждаясь скоростью и захватывающими дух видами природы с высоты.",
          highlights: ["Самый длинный зиплайн", "Виды на каньон", "Скорость и адреналин", "Полная безопасность"],
          included: ["Профессиональное снаряжение", "Инструктаж", "Полеты на зиплайне", "Страховка"]
        },
        { 
          slug: "luxury-boat", 
          name: "Яхта-тур", 
          price: "€40", 
          duration: "6 часов", 
          images: ["https://www.bogazturu.com/uploads/resim/47-1/bogaz-cocugu-tekne-kiralama.jpg"], 
          desc: "Солнце, море и релакс. Прогулка на яхте с купанием в бухтах и обедом.",
          longDesc: "Проведите день на комфортабельной яхте, любуясь побережьем Аланьи. Мы сделаем остановки в самых красивых бухтах и гротах, где вы сможете поплавать в кристально чистой воде. На борту вас ждет вкусный обед и музыка.",
          highlights: ["Премиальная яхта", "Чистейшие бухты", "Снорклинг и плавание", "Музыка и обед"],
          included: ["Морская прогулка", "Обед барбекю", "Безалкогольные напитки", "Жилеты"]
        },
        { 
          slug: "quad-safari", 
          name: "Квадро-сафари", 
          price: "€40", 
          duration: "3 часа", 
          images: ["https://tr.antalyaquadbiking.com/wp-content/uploads/2018/07/Antalya-ATV-Turu-4.jpg"], 
          desc: "Драйв по бездорожью! Сафари на квадроциклах по лесным тропам.",
          longDesc: "Управляйте мощным квадроциклом, преодолевая лесные тропы, грязь и водные преграды. Для управления не нужны права, только жажда приключений! Море эмоций и пыли гарантировано.",
          highlights: ["Управление квадроциклом", "Лесные и горные трассы", "Экстрим бездорожье", "Гид-сопровождение"],
          included: ["Квадроцикл", "Шлем", "Услуги гида", "Топливо"]
        },
        { 
          slug: "sapadere-canyon", 
          name: "Сападере Джип-сафари", 
          price: "€45", 
          duration: "Весь день", 
          images: ["https://www.alanya.bel.tr/Photos/News/Big/599082432421544896.JPG", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/activities/p5l2b4q5f5v5v5v5v5v5/SapadereCanyonTourfromAlanya.jpg"], 
          desc: "Изучите каньон Сападере с его водопадами и ледяной горной водой.",
          longDesc: "Каньон Сападере — это оазис прохлады среди жаркого лета. Прогуляйтесь по деревянным мосткам вдоль отвесных скал, увидьте каскады водопадов и осмельтесь окунуться в ледяную горную воду в природных бассейнах.",
          highlights: ["Деревянные мостки", "Красивые водопады", "Природные бассейны", "Деревня Сападере"],
          included: ["Транспорт", "Входные билеты", "Обед", "Пешая прогулка"]
        },
        { 
          slug: "side-manavgat", 
          name: "Сиде Аспендос Манавгат", 
          price: "€45", 
          duration: "Весь день", 
          images: ["https://bookfromlocals.com/wp-content/uploads/2022/03/Manavgat-Aspendos-Side-Tour-From-Alanya-1.jpg"], 
          desc: "Идеальный микс истории и природы. Античный театр и водопады.",
          longDesc: "Тур, объединяющий великую историю и природную красоту. Посетите великолепно сохранившийся римский театр в Аспендосе, прогуляйтесь по улочкам античного Сиде и отдохните у знаменитого водопада Манавгат.",
          highlights: ["Театр Аспендос", "Храм Аполлона в Сиде", "Водопад Манавгат", "Античная гавань"],
          included: ["Все входные билеты", "Русскоговорящий гид", "Обед", "Комфортный автобус"]
        },
        { 
          slug: "fishing", 
          name: "Рыбалка", 
          price: "€40", 
          duration: "5 часов", 
          images: ["https://adrasanbalik.com/wp-content/uploads/2013/03/TEKNEDE-OLTA-KULLANIMI-3.jpg"], 
          desc: "Спокойный день в море. Попробуйте поймать средиземноморскую рыбу.",
          longDesc: "Отправьтесь на утреннюю или вечернюю рыбалку на традиционной лодке. Опытный капитан отвезет вас в самые рыбные места. Все снаряжение предоставляется, а морской воздух и спокойствие моря сделают ваш день идеальным.",
          highlights: ["Рыбные места", "Традиционная лодка", "Все снасти включены", "Морской релакс"],
          included: ["Удочки и снасти", "Наживка", "Напитки", "Услуги капитана"]
        },
        { 
          slug: "city-tour", 
          name: "Экскурсия по Алании", 
          price: "€30", 
          duration: "4 часа", 
          images: ["https://tursaytravel.com/wp-content/uploads/2026/02/Alanya-City-Tour-from-Side-Tursay-Travel-3-1000x575.webp"], 
          desc: "Крепость Аланьи, Красная башня и пещера Дамлаташ с гидом.",
          longDesc: "Обзорная экскурсия по главным достопримечательностям Аланьи. Мы поднимемся на фуникулере к древней крепости, посетим лечебную пещеру Дамлаташ и увидим символ города — Красную башню.",
          highlights: ["Крепость Аланьи (виды)", "Пещера Дамлаташ", "Красная башня в порту", "Пляж Клеопатры"],
          included: ["Гид", "Входные билеты", "Трансфер", "Вода"]
        }
      ]
    },
    contact: {
      title: "Связаться с нами",
      connectTitle: "Быстрая связь",
      contactDesc: "Напишите нам.",
      name: "Полное имя",
      email: "Email",
      phone: "Номер телефона",
      message: "Ваше сообщение",
      send: "Отправить",
      whatsapp: "Написать в WhatsApp"
    },
    modal: {
      pickup: "ПОЛУЧЕНИЕ",
      return: "ВОЗВРАТ",
      total: "ИТОГО (ПРИМЕРНО)",
      book: "ЗАБРОНИРОВАТЬ",
      confirm: "ПОДТВЕРЖДЕНО",
      confirmDesc: "Мы свяжемся с вами в ближайшее время."
    },
    stats: {
      clients: "Счастливых клиентов",
      cars: "Современных авто",
      support: "VIP поддержка",
      tours: "Туров в Анталии",
      insights: "Советы туристам",
      supportTitle: "Поддержка"
    }
  }
};
