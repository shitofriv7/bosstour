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
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN1_TwSefKLXcrdC4qy5_j_HDyfDj12pv0g&s",
          longDesc: "The perfect balance of economy and space. Ideal for long drives through the scenic Taurus mountains."
        },
        { 
          name: "Renault Clio", 
          fuel: "Petrol", 
          gear: "Auto", 
          passenger: 5, 
          price: "€40", 
          image: "https://otopoint.com.tr/wp-content/uploads/2022/10/clio2.jpg",
          longDesc: "Compact, stylish, and incredibly easy to park in Antalya's narrow Old Town streets."
        },
        { 
          name: "Egea Cross", 
          fuel: "Diesel", 
          gear: "Auto", 
          passenger: 5, 
          price: "€55", 
          image: "https://databank.fiatbayi.com.tr/images/modeller/egea-cross/egea-cross-paket.jpg",
          longDesc: "Tough crossover spirit. High ground clearance makes it perfect for reaching hidden beaches."
        },
        { 
          name: "Citroen C3", 
          fuel: "Petrol", 
          gear: "Auto", 
          passenger: 5, 
          price: "€45", 
          image: "https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png",
          longDesc: "Distinctive design and unmatched comfort. The perfect stress-free city car."
        },
        { 
          name: "Classic Suzuki Jeep", 
          fuel: "Petrol", 
          gear: "Manual", 
          passenger: 4, 
          price: "€70", 
          image: "https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg",
          longDesc: "Authentic adventure spirit. Open-top classic jeep for off-road tracks."
        },
        { 
          name: "Hyundai i20", 
          fuel: "Petrol", 
          gear: "Auto", 
          passenger: 5, 
          price: "€45", 
          image: "https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420",
          longDesc: "Modern, dynamic and remarkably spacious for its class. Ideal for urban exploring."
        },
        { 
          name: "Ford Custom", 
          fuel: "Diesel", 
          gear: "Manual", 
          passenger: 9, 
          price: "€85", 
          image: "https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp",
          longDesc: "The ultimate group mover. Spacious, powerful and comfortable for large families."
        }
      ]
    },
    tours: {
      title: "Popular Adventures",
      subtitle: "Unforgettable tours to complete your holiday.",
      viewTour: "Learn More",
      list: [
        { slug: "pamukkale", name: "Pamukkale", price: "€45", duration: "Full Day", image: "https://explorekusadasi.com/wp-content/uploads/2022/07/pamukkale-tour-kusadasi-1200x900.jpg", desc: "Witness the 'Cotton Castle' - stunning white travertine terraces and the ancient city of Hierapolis." },
        { slug: "rafting", name: "Rafting Adventure", price: "€35", duration: "6 Hours", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Fun_Rafting_Elo_River_Magelang.jpg", desc: "An adrenaline-filled journey down the wild Koprucay river. Fun for groups and families." },
        { slug: "mix-adventure", name: "Mix Adventure Tour", price: "€55", duration: "Full Day", image: "https://www.touralanya.com/TurResimleri/181925adventurepackagetourfromalanya.jpeg", desc: "The ultimate combo: Rafting, Zipline, and Canyon tour all in one exciting day." },
        { slug: "kekova", name: "Kekova Demre Myra", price: "€50", duration: "Full Day", image: "https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg", desc: "Discover the sunken city, ancient Lycian tombs, and the church of Saint Nicholas." },
        { slug: "paragliding", name: "Paragliding", price: "€75", duration: "3 Hours", image: "https://cloudbasetravel.com/wp-content/uploads/2021/05/G0026043-scaled.jpg", desc: "Fly like a bird over the turquoise coast. Experience breathtaking views from above." },
        { slug: "jeep-safari", name: "Alanya Jeep Safari", price: "€40", duration: "Full Day", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/51/8b.jpg", desc: "Off-road adventure through the Taurus mountains with panoramic Alanya views." },
        { slug: "cappadocia", name: "Cappadocia Trip", price: "€120", duration: "2 Days", image: "https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-turu-1-gece-1.webp", desc: "A magical journey to the land of fairy chimneys and early morning hot air balloons." },
        { slug: "zipline", name: "Zipline Experience", price: "€25", duration: "2 Hours", image: "https://canyonzipline.com/wp-content/uploads/2025/12/Tazi-Kanyonu-Ziplineeee.webp", desc: "Feel the speed as you slide through the green canyons on a high-flying cable." },
        { slug: "luxury-boat", name: "Luxury Boat Tour", price: "€40", duration: "6 Hours", image: "https://www.bogazturu.com/uploads/resim/47-1/bogaz-cocugu-tekne-kiralama.jpg", desc: "Sun, sea, and relaxation. Enjoy a day on a yacht with swimming stops and lunch." },
        { slug: "quad-safari", name: "Quad Safari", price: "€40", duration: "3 Hours", image: "https://tr.antalyaquadbiking.com/wp-content/uploads/2018/07/Antalya-ATV-Turu-4.jpg", desc: "Get muddy and have fun! Drive your own ATV through dusty forest tracks." },
        { slug: "sapadere-canyon", name: "Sapadere Canyon Safari", price: "€45", duration: "Full Day", image: "https://www.alanya.bel.tr/Photos/News/Big/599082432421544896.JPG", desc: "Explore the hidden waterfalls and cold mountain waters of Sapadere Canyon." },
        { slug: "side-manavgat", name: "Side Aspendos Manavgat", price: "€45", duration: "Full Day", image: "https://bookfromlocals.com/wp-content/uploads/2022/03/Manavgat-Aspendos-Side-Tour-From-Alanya-1.jpg", desc: "A Perfect mix of archaeology and nature. Visit the antique theater and waterfalls." },
        { slug: "fishing", name: "Fishing Tour", price: "€40", duration: "5 Hours", image: "https://adrasanbalik.com/wp-content/uploads/2013/03/TEKNEDE-OLTA-KULLANIMI-3.jpg", desc: "Enjoy a peaceful day at sea. Try your luck at catching Mediterranean fish." },
        { slug: "city-tour", name: "Alanya City Tour", price: "€30", duration: "4 Hours", image: "https://tursaytravel.com/wp-content/uploads/2026/02/Alanya-City-Tour-from-Side-Tursay-Travel-3-1000x575.webp", desc: "Explore the historic Alanya castle, the Red Tower, and the Damlatas cave." }
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
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN1_TwSefKLXcrdC4qy5_j_HDyfDj12pv0g&s",
          longDesc: "Ekonomi ve geniş iç hacmin mükemmel dengesi. Toroslar'da uzun sürüşler için ideal."
        },
        { 
          name: "Renault Clio", 
          fuel: "Benzin", 
          gear: "Otomatik", 
          passenger: 5, 
          price: "€40", 
          image: "https://otopoint.com.tr/wp-content/uploads/2022/10/clio2.jpg",
          longDesc: "Kompakt, şık ve Antalya'nın dar sokaklarında park etmesi inanılmaz kolay."
        },
        { 
          name: "Fiat Egea Cross", 
          fuel: "Dizel", 
          gear: "Otomatik", 
          passenger: 5, 
          price: "€55", 
          image: "https://databank.fiatbayi.com.tr/images/modeller/egea-cross/egea-cross-paket.jpg",
          longDesc: "Güçlü crossover ruhu. Gizli plajlara ve dağ yollarına ulaşmak için mükemmel."
        },
        { 
          name: "Citroen C3", 
          fuel: "Benzin", 
          gear: "Otomatik", 
          passenger: 5, 
          price: "€45", 
          image: "https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png",
          longDesc: "Kendine has tasarımı ve eşsiz konforu. Şehir içinde stressiz sürüş için ideal."
        },
        { 
          name: "Klasik Suzuki Jeep", 
          fuel: "Benzin", 
          gear: "Manuel", 
          passenger: 4, 
          price: "€70", 
          image: "https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg",
          longDesc: "Gerçek macera ruhu. Doğayı her an hissedebileceğiniz klasik üstü açık jeep."
        },
        { 
          name: "Hyundai i20", 
          fuel: "Benzin", 
          gear: "Otomatik", 
          passenger: 5, 
          price: "€45", 
          image: "https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420",
          longDesc: "Modern, dinamik ve oldukça geniş. Şehir içi keşifler için mükemmel."
        },
        { 
          name: "Ford Custom", 
          fuel: "Dizel", 
          gear: "Manuel", 
          passenger: 9, 
          price: "€85", 
          image: "https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp",
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
      list: [
        { slug: "pamukkale", name: "Pamukkale Turu", price: "€45", duration: "Tam Gün", image: "https://explorekusadasi.com/wp-content/uploads/2022/07/pamukkale-tour-kusadasi-1200x900.jpg", desc: "Pamuk kaleler - bembeyaz travertenler ve antik Hierapolis kentini keşfedin." },
        { slug: "rafting", name: "Rafting Macerası", price: "€35", duration: "6 Saat", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Fun_Rafting_Elo_River_Magelang.jpg", desc: "Köprüçay'ın azgın sularında adrenalin dolu bir yolculuk. Gruplar için harika eğlence." },
        { slug: "mix-adventure", name: "Mix Macera Turu", price: "€55", duration: "Tam Gün", image: "https://www.touralanya.com/TurResimleri/181925adventurepackagetourfromalanya.jpeg", desc: "Mükemmel kombinasyon: Rafting, Zipline ve Kanyon turu tek bir günde." },
        { slug: "kekova", name: "Kekova Demre Myra", price: "€50", duration: "Tam Gün", image: "https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg", desc: "Batık şehir, antik Likya mezarları ve Aziz Nikolaos kilisesini ziyaret edin." },
        { slug: "paragliding", name: "Yamaç Paraşütü", price: "€75", duration: "3 Saat", image: "https://cloudbasetravel.com/wp-content/uploads/2021/05/G0026043-scaled.jpg", desc: "Gökyüzünde özgürlüğü hissedin. Turkuaz kıyıların eşsiz manzarasını kuş bakışı izleyin." },
        { slug: "jeep-safari", name: "Alanya Jeep Safari", price: "€40", duration: "Tam Gün", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/51/8b.jpg", desc: "Toros dağlarında arazi sürüşü ve panoramik Alanya manzarası eşliğinde macera." },
        { slug: "cappadocia", name: "Kapadokya Gezisi", price: "€120", duration: "2 Gün", image: "https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-turu-1-gece-1.webp", desc: "Peri bacaları diyarına sihirli bir yolculuk ve sabahın ilk ışıklarında balon keyfi." },
        { slug: "zipline", name: "Zipline Eğlencesi", price: "€25", duration: "2 Saat", image: "https://canyonzipline.com/wp-content/uploads/2025/12/Tazi-Kanyonu-Ziplineeee.webp", desc: "Yüksekten hızla kayarken kanyonların yeşilliğini ve rüzgarı hissedin." },
        { slug: "luxury-boat", name: "Lüks Tekne Turu", price: "€40", duration: "6 Saat", image: "https://www.bogazturu.com/uploads/resim/47-1/bogaz-cocugu-tekne-kiralama.jpg", desc: "Güneş, deniz ve rahatlama. Yat turunda yüzme molaları ve lezzetli yemekler." },
        { slug: "quad-safari", name: "Atv Quad Safari", price: "€40", duration: "3 Saat", image: "https://tr.antalyaquadbiking.com/wp-content/uploads/2018/07/Antalya-ATV-Turu-4.jpg", desc: "Eğlenceye ve çamura hazır olun! Orman yollarında kendi ATV'nizi sürün." },
        { slug: "sapadere-canyon", name: "Sapadere Kanyon Safari", price: "€45", duration: "Tam Gün", image: "https://www.alanya.bel.tr/Photos/News/Big/599082432421544896.JPG", desc: "Sapadere Kanyonu'nun gizli şelalelerini ve buz gibi dağ sularını keşfedin." },
        { slug: "side-manavgat", name: "Side Aspendos Manavgat", price: "€45", duration: "Tam Gün", image: "https://bookfromlocals.com/wp-content/uploads/2022/03/Manavgat-Aspendos-Side-Tour-From-Alanya-1.jpg", desc: "Arkeoloji ve doğanın mükemmel uyumu. Antik tiyatro ve Manavgat şelalesi." },
        { slug: "fishing", name: "Balık Turu", price: "€40", duration: "5 Saat", image: "https://adrasanbalik.com/wp-content/uploads/2013/03/TEKNEDE-OLTA-KULLANIMI-3.jpg", desc: "Denizde huzurlu bir gün. Akdeniz balıklarını yakalamak için şansınızı deneyin." },
        { slug: "city-tour", name: "Alanya Şehir Turu", price: "€30", duration: "4 Saat", image: "https://tursaytravel.com/wp-content/uploads/2026/02/Alanya-City-Tour-from-Side-Tursay-Travel-3-1000x575.webp", desc: "Alanya kalesi, Kızıl Kule ve Damlataş mağarasını uzman rehberlerle keşfedin." }
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
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN1_TwSefKLXcrdC4qy5_j_HDyfDj12pv0g&s",
          longDesc: "Die perfekte Balance zwischen Wirtschaftlichkeit und Platz. Ideal für lange Fahrten."
        },
        { 
          name: "Renault Clio", 
          fuel: "Benzin", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€40", 
          image: "https://otopoint.com.tr/wp-content/uploads/2022/10/clio2.jpg",
          longDesc: "Kompakt, stilvoll und einfach in den engen Gassen von Antalya zu parken."
        },
        { 
          name: "Fiat Egea Cross", 
          fuel: "Diesel", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€55", 
          image: "https://databank.fiatbayi.com.tr/images/modeller/egea-cross/egea-cross-paket.jpg",
          longDesc: "Robuster Crossover-Geist. Perfekt für versteckte Strände und Bergpfade."
        },
        { 
          name: "Citroen C3", 
          fuel: "Benzin", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€45", 
          image: "https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png",
          longDesc: "Markantes Design und unübertroffener Komfort. Das perfekte Stadtauto."
        },
        { 
          name: "Klassik Suzuki Jeep", 
          fuel: "Benzin", 
          gear: "Manuell", 
          passenger: 4, 
          price: "€70", 
          image: "https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg",
          longDesc: "Authentischer Abenteuergeist. Klassischer Open-Top-Jeep für Entdecker."
        },
        { 
          name: "Hyundai i20", 
          fuel: "Benzin", 
          gear: "Automatik", 
          passenger: 5, 
          price: "€45", 
          image: "https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420",
          longDesc: "Modern, dynamic und überraschend geräumig. Ideal für Stadtbesichtigungen."
        },
        { 
          name: "Ford Custom", 
          fuel: "Diesel", 
          gear: "Manuell", 
          passenger: 9, 
          price: "€85", 
          image: "https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp",
          longDesc: "Der ultimative Gruppen transporter. Geräumig und komfortabel für große Familien."
        }
      ]
    },
    tours: {
      title: "Antalya Entdecken",
      subtitle: "Unvergessliche Touren für Ihren Urlaub.",
      viewTour: "Mehr Erfahren",
      list: [
        { slug: "pamukkale", name: "Pamukkale", price: "€45", duration: "Ganztägig", image: "https://explorekusadasi.com/wp-content/uploads/2022/07/pamukkale-tour-kusadasi-1200x900.jpg", desc: "Besuchen Sie das 'Baumwollschloss' - die berühmten Kalksteinterrassen und die Ruinen von Hierapolis." },
        { slug: "rafting", name: "Rafting Abenteuer", price: "€35", duration: "6 Stunden", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Fun_Rafting_Elo_River_Magelang.jpg", desc: "Eine actiongeladene Fahrt auf dem Fluss Koprucay. Großer Spaß für Gruppen und Familien." },
        { slug: "mix-adventure", name: "Mix Abenteuer Tour", price: "€55", duration: "Ganztägig", image: "https://www.touralanya.com/TurResimleri/181925adventurepackagetourfromalanya.jpeg", desc: "Die ultimate Kombination: Rafting, Zipline und Canyoning an einem aufregenden Tag." },
        { slug: "kekova", name: "Kekova Demre Myra", price: "€50", duration: "Ganztägig", image: "https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg", desc: "Entdecken Sie die versunkene Stadt, lykische Felsengräber und die St.-Nikolaus-Kirche." },
        { slug: "paragliding", name: "Paragliding", price: "€75", duration: "3 Stunden", image: "https://cloudbasetravel.com/wp-content/uploads/2021/05/G0026043-scaled.jpg", desc: "Fliegen Sie wie ein Vogel über die türkisfarbene Küste mit atemberaubenden Ausblicken." },
        { slug: "jeep-safari", name: "Alanya Jeep Safari", price: "€40", duration: "Ganztägig", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/51/8b.jpg", desc: "Offroad-Abenteuer durch das Taurusgebirge mit Panoramablick auf Alanya." },
        { slug: "cappadocia", name: "Kappadokien Reise", price: "€120", duration: "2 Tage", image: "https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-turu-1-gece-1.webp", desc: "Eine magische Reise in das Land der Feenkamine und der Heißluftballons." },
        { slug: "zipline", name: "Zipline Erlebnis", price: "€25", duration: "2 Stunden", image: "https://canyonzipline.com/wp-content/uploads/2025/12/Tazi-Kanyonu-Ziplineeee.webp", desc: "Spüren Sie die Geschwindigkeit beim Gleiten durch die grünen Schluchten am Seil." },
        { slug: "luxury-boat", name: "Luxus-Bootstour", price: "€40", duration: "6 Stunden", image: "https://www.bogazturu.com/uploads/resim/47-1/bogaz-cocugu-tekne-kiralama.jpg", desc: "Sonne, Meer und Entspannung. Genießen Sie einen Tag auf einer Yacht mit Badestopps." },
        { slug: "quad-safari", name: "Quad Safari", price: "€40", duration: "3 Stunden", image: "https://tr.antalyaquadbiking.com/wp-content/uploads/2018/07/Antalya-ATV-Turu-4.jpg", desc: "Machen Sie sich schmutzig und haben Sie Spaß! Fahren Sie Ihr eigenes Quad durch den Wald." },
        { slug: "sapadere-canyon", name: "Sapadere Schlucht Safari", price: "€45", duration: "Ganztägig", image: "https://www.alanya.bel.tr/Photos/News/Big/599082432421544896.JPG", desc: "Erkunden Sie die versteckten Wasserfälle und das eiskalte Bergwasser der Sapadere-Schlucht." },
        { slug: "side-manavgat", name: "Side Aspendos Manavgat", price: "€45", duration: "Ganztägig", image: "https://bookfromlocals.com/wp-content/uploads/2022/03/Manavgat-Aspendos-Side-Tour-From-Alanya-1.jpg", desc: "Besuchen Sie das antike Theater von Aspendos und die Manavgat-Wasserfälle." },
        { slug: "fishing", name: "Angeltour", price: "€40", duration: "5 Stunden", image: "https://adrasanbalik.com/wp-content/uploads/2013/03/TEKNEDE-OLTA-KULLANIMI-3.jpg", desc: "Genießen Sie einen friedlichen Tag auf See und versuchen Sie Ihr Glück beim Angeln." },
        { slug: "city-tour", name: "Alanya Stadttour", price: "€30", duration: "4 Stunden", image: "https://tursaytravel.com/wp-content/uploads/2026/02/Alanya-City-Tour-from-Side-Tursay-Travel-3-1000x575.webp", desc: "Erkunden Sie die Burg von Alanya, den Roten Turm und die Damlatas-Höhle." }
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
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbN1_TwSefKLXcrdC4qy5_j_HDyfDj12pv0g&s",
          longDesc: "Идеальный баланс экономии и пространства. Подходит для длительных поездок."
        },
        { 
          name: "Renault Clio", 
          fuel: "Бензин", 
          gear: "Автомат", 
          passenger: 5, 
          price: "€40", 
          image: "https://otopoint.com.tr/wp-content/uploads/2022/10/clio2.jpg",
          longDesc: "Компактный, стильный и очень удобный для парковки."
        },
        { 
          name: "Fiat Egea Cross", 
          fuel: "Дизель", 
          gear: "Автомат", 
          passenger: 5, 
          price: "€55", 
          image: "https://databank.fiatbayi.com.tr/images/modeller/egea-cross/egea-cross-paket.jpg",
          longDesc: "Дух кроссовера. Идеально для скрытых пляжей и горных троп."
        },
        { 
          name: "Citroen C3", 
          fuel: "Бензин", 
          gear: "Автомат", 
          passenger: 5, 
          price: "€45", 
          image: "https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png",
          longDesc: "Самобытный дизайн и непревзойденный комфорт. Идеальный городской автомобиль."
        },
        { 
          name: "Классический Suzuki Jeep", 
          fuel: "Бензин", 
          gear: "Механика", 
          passenger: 4, 
          price: "€70", 
          image: "https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg",
          longDesc: "Подлинный дух приключений. Классический джип с открытым верхом."
        },
        { 
          name: "Hyundai i20", 
          fuel: "Бензин", 
          gear: "Автомат", 
          passenger: 5, 
          price: "€45", 
          image: "https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420",
          longDesc: "Современный, динамичный и просторный. Идеально для изучения города."
        },
        { 
          name: "Ford Custom", 
          fuel: "Дизель", 
          gear: "Механика", 
          passenger: 9, 
          price: "€85", 
          image: "https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp",
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
      list: [
        { slug: "pamukkale", name: "Памуккале", price: "€45", duration: "Весь день", image: "https://explorekusadasi.com/wp-content/uploads/2022/07/pamukkale-tour-kusadasi-1200x900.jpg", desc: "Посетите «Хлопковый замок» — белоснежные травертины и древний город Иераполис." },
        { slug: "rafting", name: "Рафтинг", price: "€35", duration: "6 часов", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Fun_Rafting_Elo_River_Magelang.jpg", desc: "Сплав по горной реке Кёпрючай. Активный отдых для всей семьи." },
        { slug: "mix-adventure", name: "Микс тур", price: "€55", duration: "Весь день", image: "https://www.touralanya.com/TurResimleri/181925adventurepackagetourfromalanya.jpeg", desc: "Лучшее комбо: Рафтинг, Зиплайн и Каньон в один насыщенный день." },
        { slug: "kekova", name: "Демре Мира Кекова", price: "€50", duration: "Весь день", image: "https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg", desc: "Затонувший город, ликийские гробницы и церковь Святого Николая." },
        { slug: "paragliding", name: "Параглайдинг", price: "€75", duration: "3 часа", image: "https://cloudbasetravel.com/wp-content/uploads/2021/05/G0026043-scaled.jpg", desc: "Полет над бирюзовым побережьем с невероятными видами с высоты птичьего полота." },
        { slug: "jeep-safari", name: "Аланья Джип-сафари", price: "€40", duration: "Весь день", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/51/8b.jpg", desc: "Приключение по горам Тавр с панорамными видами на Аланью." },
        { slug: "cappadocia", name: "Каппадокия", price: "€120", duration: "2 дня", image: "https://kapadokyaturlari.com.tr/uploads/2021/12/kapadokya-turu-1-gece-1.webp", desc: "Магическое путешествие в страну сказочных дымоходов и воздушных шаров." },
        { slug: "zipline", name: "Зиплайн", price: "€25", duration: "2 часа", image: "https://canyonzipline.com/wp-content/uploads/2025/12/Tazi-Kanyonu-Ziplineeee.webp", desc: "Почувствуйте скорость и адреналин, пролетая над зелеными каньонами." },
        { slug: "luxury-boat", name: "Яхта-тур", price: "€40", duration: "6 часов", image: "https://www.bogazturu.com/uploads/resim/47-1/bogaz-cocugu-tekne-kiralama.jpg", desc: "Солнце, море и релакс. Прогулка на яхте с купанием в бухтах и обедом." },
        { slug: "quad-safari", name: "Квадро-сафари", price: "€40", duration: "3 часа", image: "https://tr.antalyaquadbiking.com/wp-content/uploads/2018/07/Antalya-ATV-Turu-4.jpg", desc: "Драйв по бездорожью! Сафари на квадроциклах по лесным тропам." },
        { slug: "sapadere-canyon", name: "Сападере Джип-сафари", price: "€45", duration: "Весь день", image: "https://www.alanya.bel.tr/Photos/News/Big/599082432421544896.JPG", desc: "Изучите каньон Сападере с его водопадами и ледяной горной водой." },
        { slug: "side-manavgat", name: "Сиде Аспендос Манавгат", price: "€45", duration: "Весь день", image: "https://bookfromlocals.com/wp-content/uploads/2022/03/Manavgat-Aspendos-Side-Tour-From-Alanya-1.jpg", desc: "Идеальный микс истории и природы. Античный театр и водопады." },
        { slug: "fishing", name: "Рыбалка", price: "€40", duration: "5 часов", image: "https://adrasanbalik.com/wp-content/uploads/2013/03/TEKNEDE-OLTA-KULLANIMI-3.jpg", desc: "Спокойный день в море. Попробуйте поймать средиземноморскую рыбу." },
        { slug: "city-tour", name: "Экскурсия по Алании", price: "€30", duration: "4 часа", image: "https://tursaytravel.com/wp-content/uploads/2026/02/Alanya-City-Tour-from-Side-Tursay-Travel-3-1000x575.webp", desc: "Крепость Аланьи, Красная башня и пещера Дамлаташ с гидом." }
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
