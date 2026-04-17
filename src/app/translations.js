export const translations = {
  en: {
    nav: { home: "Home", tours: "Tours", fleet: "Fleet", transfer: "Transfer", realEstate: "Real Estate", about: "About Us", services: "Experience" },
    hero: { title: "Adventure Awaits in Antalya", subtitle: "Explore the turquoise coast with Boss Tour. Premium tours and luxury cars.", cta: "Rent a Car", cta2: "View Adventures", explore: "Explore", cta3: "VIP Transfer" },
    fleet: { title: "Our Premium Fleet", subtitle: "Modern cars for every journey.", viewAll: "View All Fleet", viewDetails: "Explore Details", bookNow: "Reserve Now", cars: [
      { name: "Fiat Egea", price: "€45", images: ["https://s3.eu-central-1.amazonaws.com/static.obilet.com/RentACar/Vehicle/Images/fiat-egea-sedan.png"], features: ["Gasoline", "Manual", "5 Seats"] },
      { name: "Renault Clio", price: "€40", images: ["https://s3.eu-central-1.amazonaws.com/static.obilet.com/RentACar/Vehicle/Images/renault-clio-hatchback-5-kapi.png"], features: ["Petrol", "Auto", "5 Seats"] },
      { name: "Fiat Egea Cross", price: "€50", images: ["https://cdn2.enuygun.com/media/lib/500x300/uploads/image/egea-cross-54386.webp"], features: ["Diesel", "Manual", "5 Seats"] },
      { name: "Citroen C3", price: "€43", images: ["https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png"], features: ["Petrol", "Auto", "5 Seats"] },
      { name: "Suzuki Jeep (Retro)", price: "€70", images: ["https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg"], features: ["Gasoline", "Manual", "4 Seats"] },
      { name: "Hyundai i20", price: "€45", images: ["https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420"], features: ["Gasoline", "Auto", "5 Seats"] },
      { name: "Ford Custom", price: "€90", images: ["https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp"], features: ["Diesel", "Manual", "9 Seats"] },
      { name: "ATV CF Moto (4x4)", price: "€55", images: ["https://images5.1000ps.net/images_bikekat/2022/177-CFMOTO/9384-CForce_850_V2_EFI_4x4_XL_DLX/001-637777561929389735-cfmoto-cforce-850-v2-efi-4x4-xl-dlx.jpg?format=webp&quality=80&trim.threshold=80&trim.percentpadding=1&scale=both&width=1900&height=1156&bgcolor=rgba_39_42_44_0&mode=pad"], features: ["Gasoline", "Automatic", "4x4", "2 Seats"] },
      { name: "Electric 3-Wheel Bicycle", price: "€25", images: ["https://bikestore.becdn.net/assets/images/product/16/stmax-gf400-kirmizi-1_940531602.jpg"], features: ["100% Electric", "No License Needed", "2 Seats"] }
    ]},
    realEstate: { title: "Exclusive Properties", subtitle: "Find your dream home with Boss Tour.", list: [] },
    transfer: { 
      title: "VIP Transfers", 
      subtitle: "Comfortable journeys to your destination.", 
      list: [
        { 
          name: "Mercedes Vito VIP", 
          price: "€70", 
          images: ["/images/transfers/vito.png"], 
          desc: "Premium airport and intercity transfers with comfort.",
          capacity: "1-9 People",
          longDesc: "Experience the ultimate comfort with our standard VIP Mercedes Vito. Perfect for small groups or families, featuring leather seats and spacious interiors.",
          highlights: ["Premium Leather Seats", "Spacious Interior", "Climate Control", "Privacy Glass"],
          included: ["Professional Driver", "Luggage Assistance", "Free Wi-Fi", "Soft Drinks"]
        },
        { 
          name: "Mercedes Vito Maybach Edition", 
          price: "€120", 
          images: ["/images/transfers/maybach.png"], 
          desc: "The pinnacle of luxury travel. Presidential standard.",
          capacity: "1-5 People",
          longDesc: "Our Maybach Edition Vito redefined luxury. Featuring massage seats, ambient lighting, and high-end entertainment systems, it's designed for those who seek the best.",
          highlights: ["Starlight Ceiling", "Massage & Reclining Seats", "Premium Sound System", "Private Partition"],
          included: ["Cold Champagne/Drinks", "VIP Assistance", "Exclusive Concierge", "Ultra-fast Wi-Fi"]
        }
      ] 
    },
    tours: {
      title: "Popular Tours & Activities",
      subtitle: "The best of Antalya and beyond.",
      highlightsLabel: "Highlights",
      includedLabel: "Included",
      list: [
        { 
          slug: "pamukkale", 
          name: "Pamukkale & Salda Lake (The White Paradise)", 
          price: "€45", 
          duration: "13 Hours", 
          images: ["https://cdn.getyourguide.com/img/location/49d723a60f36e112.jpeg/99.jpg", "https://www.barcelo.com/guia-turismo/wp-content/uploads/pamukkale.jpg"], 
          desc: "White travertines, Hierapolis Ancient City and the 'Turkish Maldives' Salda Lake.", 
          longDesc: "Embark on an extraordinary journey to Pamukkale, often called the '8th Wonder of the World'. This UNESCO World Heritage site is famous for its breathtaking white travertine terraces, formed by thermal waters rich in calcium. You can walk barefoot on these natural wonders and feel the warm, healing waters. Our tour continues with the Exploration of Hierapolis, an ancient Roman spa city. You will witness the grand entrance gate, the massive ancient theater, and the largest Necropolis in Anatolia. For a truly unique experience, you can swim in the Cleopatra Antique Pool, where you'll glide over authentic Roman columns submerged in warm thermal water. The second half of our day is dedicated to Salda Lake. Known as the 'Turkish Maldives', it boasts crystal-clear turquoise waters and white magnesium sands. It's the perfect spot for unforgettable photography and a refreshing swim in one of the cleanest lakes in the world.",
          highlights: ["White Travertine Terraces", "Hierapolis Ancient City", "Salda Lake (Turkish Maldives)", "Cleopatra Antique Pool", "Ancient Roman Theater"], 
          included: ["Luxurious Hotel Pickup & Drop-off", "Certified Multilingual Guide", "Open Buffet Lunch", "Air-conditioned Transportation", "Entry to Salda Lake"] 
        },
        { 
          slug: "kekova", 
          name: "Kekova – Demre – Myra (Sunken City Expedition)", 
          price: "€50", 
          duration: "11 Hours", 
          images: ["https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PE7wwOiCWscwlqcEpg2A_pvpGnfmQROdLw&s", "https://gunluktur.net/wp-content/uploads/2021/12/tourbooking-turkey.jpeg"], 
          desc: "A journey through time to the sunken ruins and the legacy of St. Nicholas.", 
          longDesc: "Discover the hidden history of the Lycian coast on this comprehensive historical and coastal tour. We start our day in Demre, where we visit the Church of Saint Nicholas (the original Santa Claus), a sacred site featuring beautiful Byzantine frescoes and a holy atmosphere. Next, we head to the ancient city of Myra to marvel at the incredible Lycian rock tombs carved directly into the cliffs and the well-preserved Roman theater. The highlight of the day is our boat trip to the Sunken City of Kekova. Through the glass bottom or clear waters, you will see the underwater ruins of houses, stairs, and even a shipyard from a city destroyed by an earthquake 2,000 years ago. We will also have several swimming breaks in the secluded 'Aquarium Bay' and 'Esmeralda Bay', where the turquoise waters are perfect for snorkeling.",
          highlights: ["Glass-bottom Boat Trip", "Sunken City of Kekova", "Lycian Rock Tombs at Myra", "St. Nicholas Church", "Azure Swimming Bays"], 
          included: ["Hotel Transfer", "Boat Trip to Sunken City", "All Entrance Tickets", "Gourmet Lunch on Boat", "Insurance"] 
        },
        { 
          slug: "cappadocia", 
          name: "Cappadocia: The Fairytale Journey (2-Day Tour)", 
          price: "€120", 
          duration: "2 Days", 
          images: ["https://blog.obilet.com/wp-content/uploads/2018/10/kapadokya.jpg"], 
          desc: "Experience the magic of fairy chimneys, cave dwellings, and sunrise balloons.", 
          longDesc: "Step into a land that feels like it's from another planet. Our 2-day Cappadocia tour is designed for those who want to experience the true essence of this mystical region. On Day 1, we explore the Goreme Open Air Museum, a complex of medieval cave churches decorated with stunning frescoes. We'll visit Pasabag (Monks Valley) to see the most iconic three-headed fairy chimneys. In the afternoon, we dive deep into one of the massive underground cities, where early Christians hid from invaders. On Day 2, the day starts before dawn for the world-famous Hot Air Balloon flight (optional but highly recommended). Watching the sun rise over the unique landscape while hundreds of colorful balloons fill the sky is a soul-stirring experience. We'll also visit Uchisar Castle, the highest point in the region, providing panoramic views across the whole of Cappadocia. You'll stay in an authentic stone or cave hotel, ensuring the magic continues even while you sleep.",
          highlights: ["Goreme Open Air Museum", "Pasabag Fairy Chimneys", "Deep Underground City", "Uchisar Panoramic Castle", "Devrent Valley (Imagination Valley)"], 
          included: ["Luxury Boutique Hotel Stay", "Dinner & Buffet Breakfast", "Professional Regional Guide", "VIP Mini-van Transport", "Village Visits"] 
        },
        { 
          slug: "lavanta-garden", 
          name: "Lavender Dreams & Salda Magic", 
          price: "€40", 
          duration: "12 Hours", 
          images: ["https://burdur.com.tr/wp-content/uploads/2022/03/MKXT0132.jpg"], 
          desc: "Infinite purple fields of Kuyucak and the white sands of Salda Lake.", 
          longDesc: "Escape to a world of color and fragrance. During the summer months, the village of Kuyucak transforms into a sea of purple as the lavender fields come into full bloom. Our tour invites you to wander through these aromatic fields, learn about lavender oil production, and take some of the most beautiful photos of your lifetime. The local villagers provide a warm welcome with traditional lavender tea and handmade crafts. In the second half of the tour, we visit Salda Lake, widely considered one of the most beautiful natural spots in Turkey. Its high magnesium content creates white, clay-like sands and incredibly vibrant turquoise water. You can relax on the beach, swim in the therapeutic waters, and enjoy a picnic lunch in this serene, protected natural park. This tour is a perfect blend of sensory delight and natural relaxation.",
          highlights: ["Lavender Harvest Photo Op", "Kuyucak Village Experience", "Salda Lake Swimming", "Lavender Products Tasting", "Nature Walk"], 
          included: ["Full Transport", "English Speaking Guide", "Traditional Village Lunch", "Water & Treats", "All Park Fees"] 
        },
        { 
          slug: "side-manavgat", 
          name: "The Classical Trio: Side – Aspendos – Manavgat", 
          price: "€45", 
          duration: "9 Hours", 
          images: ["https://calista.com.tr/media/3jhj2jz0/aspendos006-1170x650.jpg?format=webp&quality=85", "https://www.gezire.com/wp-content/uploads/2025/10/Manavgat-Selalesi-764x500.jpg", "https://www.kulturportali.gov.tr/contents/images/SELEUK%20(4).JPG"], 
          desc: "The glory of Roman architecture and the freshness of the waterfall.", 
          longDesc: "Journey through the golden age of the Roman Empire on this day trip focused on art and history. Our first stop is Aspendos, home to the best-preserved Roman Theater in the world. Built in the 2nd century AD, its acoustics are still perfect today, often hosting international opera festivals. Next, we visit the ancient port city of Side. You'll walk through the colonnaded streets, see the ancient hospital, and stand where Marc Antony and Cleopatra allegedly met—at the Temple of Apollo, right by the sea. Finally, we provide a refreshing break at the Manavgat Waterfall. While not exceptionally high, its immense width and force create a stunning visual and a cool microclimate. You can enjoy a coffee by the rushing water and watch the river merge with the spirit of the Mediterranean. It's a day that balances historical awe with natural serenity.",
          highlights: ["Aspendos Roman Theater", "Apollo Temple in Side", "Manavgat Waterfall", "Side Ancient Harbor", "Historical Museum Entry"], 
          included: ["Round-trip Transfer", "Professional Historian Guide", "Restaurant Lunch by the River", "Entrance to Aspendos & Side"] 
        },
        { 
          slug: "city-tour", 
          name: "Alanya Panoramic City & Castle Tour", 
          price: "30", 
          duration: "4 Hours", 
          images: ["https://upload.wikimedia.org/wikipedia/commons/8/85/Alanyafromcastle.JPG", "https://cmsal.argeya.com/Content/CompanyFiles/SliderResimleri/Alanya-Buyuk-Hotel-Genel-269043.jpg"], 
          desc: "The best of Alanya: Castle, Cable Car, Caves and Sunset views.", 
          longDesc: "Discover why Alanya is the pearl of the Turkish Riviera in this condensed but comprehensive city tour. We begin with a ride on the Alanya Teleferik (Cable Car), climbing from the world-famous Cleopatra Beach to the heights of the Alanya Castle. From the castle's battlements, you will have a 360-degree view of the harbor, the lighthouse, and the Taurus Mountains. We'll explore the historic Inner Castle, the 13th-century shipyard, and the iconic Red Tower (Kızıl Kule). The tour also includes a visit to the Damlatas Cave, discovered by chance in 1948 and famous for its 'weeping stones' and air that is beneficial for respiratory health. We conclude the tour at the Alanya Terrace, the perfect spot for 'I Love Alanya' photos and a panoramic farewell to the city as the sun begins to set.",
          highlights: ["Teleferik Cable Car Ride", "Alanya Castle Exploration", "Damlatas Cave Visit", "Cleopatra Beach Panorama", "I Love Alanya Terrace"], 
          included: ["Door-to-door Transport", "Cable Car Tickets", "Professional Guide", "Cave Entry Fee"] 
        },
        { 
          slug: "mix-adventure", 
          name: "Ultimate Adventure Mix (3-in-1 Adrenaline)", 
          price: "€55", 
          duration: "8 Hours", 
          images: ["https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=1210,dpr=1/tour_img/640b4d905f5e4.png", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=755,dpr=1/tour_img/5b8b721278a099cfddd9975af2c8dd627c2259fd05374f4f7efa7ef96e0b5775.png"], 
          desc: "Rafting, Zipline, and Buggy/Quad Safari through the wild canyon.", 
          longDesc: "For the restless souls and adrenaline seekers, this tour is the ultimate package. We take you to the Koprulu Canyon National Park, the heart of outdoor sports in Turkey. Your day starts with a 14km White Water Rafting journey. We hit the rapids with experienced instructors, ensuring safety and extreme fun. Midway through the river, we stop for the Zipline—you'll soar high above the rushing waters, feeling like an eagle. After a delicious riverside lunch to recharge your energy, we switch gears for the Safari. You can choose between a Quad bike or a Buggy safari to navigate the muddy, dusty, and technical tracks of the pine forests surrounding the canyon. This is 8 hours of pure, unadulterated excitement in one of the most beautiful natural settings in the world.",
          highlights: ["14km Level 2 Rafting", "Canyon Zipline Flight", "Off-road Safari (Buggy/Quad)", "Riverside Cliff Jumping", "Tazi Canyon Photo Stop"], 
          included: ["Complete Safety Gear", "Professional Instructors", "Grilled Lunch Buffet", "All Transports", "Insurance"] 
        },
        { 
          slug: "rafting", 
          name: "Koprucay White Water Rafting", 
          price: "€35", 
          duration: "6 Hours", 
          images: ["https://cmsal.argeya.com/Content/CompanyFiles/YazilarYeniImg/alanya-rafting.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Buggy-Rafting-Zipline-Tour-Tursay-Travel-13.webp"], 
          desc: "Challenge the turquoise rapids of the ancient Koprulu Canyon.", 
          longDesc: "Grab your paddle and get ready for a splash! Rafting on the Koprucay River is one of the most popular activities for a reason. The river flows through a stunning national park, under ancient Roman bridges that give the canyon its name. Our tour starts with a detailed safety briefing and equipment fitting. Then, we board our 8-10 person boats (guided) or 2-person canoes for those feeling extra brave. The route is 14km long and features various rapids that will get your heart racing, interspersed with calm sections where you can jump into the ice-cold turquoise water for a swim. We also include 'body rafting' and fun animations by our guides. After conquering the river, a freshly cooked lunch awaits you at our riverside base camp.",
          highlights: ["14km Rafting Adventure", "Roman Bridge Sightseeing", "Body Rafting Sessions", "Ice Cold River Swimming", "Fun Guided Animations"], 
          included: ["Helmet & Life Jacket", "Rafting Boat & Paddle", "Expert Guide", "Riverside Lunch", "Hotel Transfer"] 
        },
        { 
          slug: "jeep-safari", 
          name: "Taurus Mountains Jeep Safari & Dim River", 
          price: "€40", 
          duration: "7 Hours", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/31c5b512-0b91-4762-8b51-4d8ef2c7e645_c35d5ee1-4e4d-4d53-92a0-57f22e041aec_.webp", "https://cdn.vigotours.com/23898/conversions/187-1770148388-698252242f4a3-gallery.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/5dc9d110c84b5.jpeg"], 
          desc: "Water fights, off-road peaks, and relaxing in the Dim River.", 
          longDesc: "This isn't just a tour; it's an all-day party on wheels! We hop into open-top 4x4 Land Rovers and climb into the majestic Taurus Mountains. The journey is filled with fun water fights between the jeeps, so prepare to get wet! We stop at panoramic viewpoints to see Alanya from above, visit a traditional village mosque to learn about local faith, and walk through fruit orchards where you can taste seasonal produce. The highlight of the day is our long stop at the Dim River. We have a private dock where you can eat lunch while sitting on tables placed directly in the water. You can jump from our diving boards into the river, relax on the water-beds, or even try your luck at the local fishing pond. It's a day of laughter, nature, and cultural discovery.",
          highlights: ["Multi-jeep Water Fights", "Taurus Mountain Off-roading", "Dim River Water Tables", "Village Mosque Visit", "Fruit Orchard Tasting"], 
          included: ["4x4 Jeep Transport", "On-water Lunch", "Enthusiastic Safari Guide", "Village Entry Fees"] 
        },
        { 
          slug: "sapadere-canyon", 
          name: "Sapadere Canyon: The Hidden Paradise", 
          price: "€45", 
          duration: "8 Hours", 
          images: ["https://www.kulturportali.gov.tr/contents/images/sapanderekanyonulogolu_20180914111051287.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Sapadere-Canyon-Tour-Tursay-Travel-13.webp"], 
          desc: "Wooden walkway through the gorge and freezing waterfalls.", 
          longDesc: "Escape the summer heat and step into the refreshing embrace of Sapadere Canyon. Located about 40km from Alanya, this narrow gorge was only opened to tourism in 2008 and remains a pristine natural gem. We walk along a 750-meter-long wooden suspension bridge that winds through the canyon, with high cliffs rising on both sides. Along the way, you'll encounter numerous waterfalls of all sizes. The bravest can take a dip in the natural pools—even in the peak of summer, the water temperature rarely exceeds 12 degrees Celsius! After the canyon, we visit the Sapadere Village, where you can see traditional village life and visit a silk weaving workshop. We also explore the 'Cüceler Cave' (Dwarf Cave), filled with stunning stalactites and stalagmites. Lunch is served in a local garden restaurant, featuring fresh trout or grilled chicken.",
          highlights: ["Suspension Bridge Walk", "Freezing Waterfall Swims", "Dwarf Cave Exploration", "Silk Weaving Demonstration", "Village Life Tour"], 
          included: ["Transport", "All Entry Fees", "Guided Tour", "Garden Restaurant Lunch"] 
        },
        { 
          slug: "quad-safari", 
          name: "Quad Safari Adventure", 
          price: "€40", 
          duration: "3 Hours", 
          images: ["https://cloudbasetravel.com/wp-content/uploads/2021/06/ATV-Safari-1.jpeg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Quad-Atv-Safari-Tour-Tursay-Travel-1.webp"], 
          desc: "Dust, mud, and excitement in the Taurus pine forests.", 
          longDesc: "Get ready for a dirty, dusty, and absolutely thrilling ride! Our Quad Safari takes you away from the city and deep into the rugged terrain of the Taurus Mountains. After a quick briefing and test drive, you'll take control of your own powerful ATV. We navigate through technical forest tracks, splash through muddy puddles, and race across rocky plains. The route is designed to challenge your driving skills while providing extreme fun. We stop at a scenic river for a quick break where you can wash off the dust. No driving license is required, and our experienced guides ensure a safe environment for both beginners and pro riders. It's the most exciting way to explore the wild side of Alanya.",
          highlights: ["Self-drive Quad Experience", "Off-road Forest Tracks", "Muddy Puddle Splashes", "River Refreshment Break", "High-speed Straights"], 
          included: ["Quad Bike & Fuel", "Safety Helmet", "Instructional Briefing", "Professional Guide", "Transfer"] 
        },
        { 
          slug: "zipline", 
          name: "Mountain Zipline Experience", 
          price: "€25", 
          duration: "2 Hours", 
          images: ["https://www.schweitzer.com/-/media/schweitzer/summer-activities/schweitzer-zipline-1920x1080.jpg?rev=9c2e8f672b1541d3b31d2b74f3db9b7f?h=1080&w=1920&hash=E7706D1B10547CE9104FCB35BC95DD16"], 
          desc: "High-speed flight over the canyon with panoramic views.", 
          longDesc: "Experience the ultimate freedom of flight. Our mountain zipline is one of the highest and longest in the region, offering a birds-eye view of the stunning Tazi Canyon and its surroundings. After being securely harnessed by our professional team, you'll step off the platform and accelerate to high speeds across the valley. It's an intense rush of adrenaline as the wind whistles past and the world falls away below you. Perfect for those who want a quick but powerful thrill during their holiday. We use the latest European safety equipment and double-line systems to ensure maximum security while you focus on the breathtaking views.",
          highlights: ["Long Distance Flight", "Panoramic Canyon Views", "High-speed Adrenaline", "Professional Safety Standards"], 
          included: ["Zipline Harness & Gear", "Safety Instruction", "Qualified Staff Support"] 
        },
        { 
          slug: "paragliding", 
          name: "Tandem Paragliding: Fly Over Alanya", 
          price: "€75", 
          duration: "2 Hours", 
          images: ["https://www.talyatur.com/images/tour/105418_b.jpg", "https://cdn.getyourguide.com/img/tour/e810d4a42de4ba2a359f6f25116205e419dba160cf49862c412bff4a32843011.jpg/99.jpg"], 
          desc: "Soar from a 700m peak and land on Cleopatra Beach.", 
          longDesc: "This is the most peaceful and spectacular way to see Alanya. We drive you to the 700-meter peak of the 'Yassı Tepe' mountain. Here, you'll meet your professional pilot who will handle all the technical parts of the flight. After a few running steps, you'll catch the thermal currents and lift into the sky. For about 20 to 30 minutes, you'll glide silently over the turquoise Mediterranean, the Alanya Castle, and the white sands of Cleopatra Beach. If the weather permits, your pilot can even perform some acrobatic maneuvers for an extra thrill. Your flight ends with a smooth landing directly on the sandy shores of Cleopatra Beach. It's a surreal and deeply moving experience that you will remember for the rest of your life.",
          highlights: ["700m High Altitude Start", "Cleopatra Beach Landing", "Castle Panoramic View", "Tandem Professional Pilot", "In-flight Photo/Video Ops"], 
          included: ["Hotel Transfer", "Flight Gear", "Experienced Pilot", "Flight Insurance", "Briefing"] 
        },
        { 
          slug: "luxury-boat", 
          name: "Pirate Boat Adventure & Foam Party", 
          price: "€40", 
          duration: "6 Hours", 
          images: ["https://www.dailytoursinalanya.com/Content/images/tours/32/alanya-pirate-boat-tour-6-hd.webp"], 
          desc: "Caves, swimming, BBQ lunch, and the best party on the sea.", 
          longDesc: "Join us for a classic Mediterranean day! Our pirate-themed boat sets sail from Alanya's historic harbor, passing by the Red Tower and the Old Shipyard. We cruise around the Alanya Castle peninsula, visiting the Pirates' Cave, the Lovers' Cave, and the Phosphorus Cave (famous for its glowing waters). Throughout the trip, we have several swimming breaks in crystal clear turquoise bays where you can snorkel or jump from the boat. Onboard, our animation team keeps the energy high with music, games, and a massive foam party on the return journey. A delicious BBQ lunch is cooked fresh on the boat and served with refreshing soft drinks. It's the perfect mix of relaxation, sightseeing, and excitement for families and groups alike.",
          highlights: ["Historic Harbor Cruise", "Sea Cave Exploration", "Foam Party Animation", "Multiple Swimming Stops", "BBQ Lunch Onboard"], 
          included: ["Boat Cruise", "BBQ Lunch", "Soft Drinks", "Animation Show", "Hotel Transfer"] 
        },
        { 
          slug: "fishing", 
          name: "Morning Deep Sea Fishing", 
          price: "€40", 
          duration: "6 Hours", 
          images: ["https://www.albashop.com.tr/Data/EditorFiles/En_Dog__ru_Bal__k_Av___Zaman___Nas__l_Belirlenir__3.jpg"], 
          desc: "A peaceful morning at sea with professional fishing gear.", 
          longDesc: "Escape the midday sun and the bustling crowds for a peaceful morning on the open sea. Our fishing boat is equipped with the latest electronic fish-finders and high-quality rods and reels. Whether you're a seasoned angler or a complete beginner, our experienced captain will guide you to the best fishing spots where you can catch sea bream, sea bass, and other Mediterranean species. As you wait for a bite, enjoy the silence of the sea and the stunning views of the coastline as the sun rises. We provide all the bait and equipment, as well as morning tea and snacks. If you catch a 'big one', you can even have it cooked on the boat for the freshest breakfast you'll ever have!",
          highlights: ["Sunrise Coastal Views", "Professional Fish-finder Tech", "High-quality Fishing Gear", "Experienced Sea Captain", "Bait & Snacks Included"], 
          included: ["Fishing Equipment", "Bait", "Soft Drinks & Tea", "Captain's Guidance", "Transport"] 
        },
        { 
          slug: "turkish-night", 
          name: "The Orient Express: Turkish Night Show", 
          price: "€45", 
          duration: "4 Hours", 
          images: ["https://www.touralanya.com/TurResimleri/003837alanyaturkishnight.jpeg", "https://www.goreme.com/image/cache/catalog/Urunler/activities/turkish-night/turkish-night-show-134-900x600.jpg"], 
          desc: "A spectacular feast of Turkish culture, dance, and cuisine.", 
          longDesc: "Immerse yourself in the rich traditions of the Ottoman Empire and modern Turkey. Our Turkish Night is a high-energy stage production featuring professional dancers in authentic costumes. You'll witness dizzying Whirling Dervishes, energetic folk dances from various regions of Turkey, and spectacular belly dance performances that will leave you breathless. The show is interactive, often inviting guests to join the fun on stage. Throughout the night, you'll be treated to a full traditional dinner, featuring 'meze' appetizers, grilled meats, and Turkish desserts. Unlimited local beverages are also included. It's an evening of music, fire, drums, and hospitality that perfectly captures the soul of Turkey.",
          highlights: ["Whirling Dervish Show", "Regional Folk Dances", "Professional Belly Dancing", "Interactive Stage Fun", "Traditional Feast Dinner"], 
          included: ["Full Course Dinner", "Unlimited Local Drinks", "All Shows & Animations", "Return Transfer"] 
        },
        { 
          slug: "turkish-bath", 
          name: "Ultimate Wellness: Traditional Hamam Package", 
          price: "€30", 
          duration: "3 Hours", 
          images: ["https://cdn.alanyatekmar.com/e6a4a96a-9fc4-442b-87df-a2fff0b99841.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Turkish-Bath-Hamam-Tour-Tursay-Travel-1.webp"], 
          desc: "Total rejuvenation with salt rooms, peeling and foam massage.", 
          longDesc: "Treat yourself to a thousand-year-old tradition of health and relaxation. Our Hamam experience begins in the 'Sıcaklık' (hot room) on a warm marble slab to open your pores. Next, a professional 'Tellak' (masseur) performs a full-body peeling using a 'Kese' (silk mitt) to remove all dead skin and toxins. This is followed by a heavenly Soap Foam Massage, where you'll be covered in huge cushions of organic soap bubbles. The package also includes access to the salt room, sauna, and steam room. Finally, after a short period of relaxation in the lounge with traditional tea, we conclude with a 20-minute full-body oil massage to lock in moisture and deeply relax your muscles. You'll leave feeling like a new person with glowing, soft skin—the perfect base for a long-lasting tan.",
          highlights: ["Authentic Marble Hamam", "Full Body Silk Peeling", "Cloud-like Foam Massage", "Therapeutic Oil Massage", "Sauna & Steam Access"], 
          included: ["Peeling (Kese)", "Soap Massage", "20-min Oil Massage", "Sauna & Salt Room", "Transfer"] 
        },
        { 
          slug: "aquapark", 
          name: "Water Park Adventure & Super Slides", 
          price: "€35", 
          duration: "Full Day", 
          images: ["https://www.aquafuncity.com/images/galeri/aqua1.jpg", "https://cdn.alanyatekmar.com/f48067f0-fc19-4515-8b5c-17b64703c6bf.jpg"], 
          desc: "A day of high-speed slides, wave pools, and family fun.", 
          longDesc: "Cool down and have an blast at the biggest water park in the region. Whether you want to face your fears on the 'Kamikaze' and 'Black Hole' slides, or simply float down the 'Lazy River', there's something for everyone. The park features over 20 different slides, a massive wave pool that simulates the ocean, and dedicated kids' zones with shallow water and safe animations. For those looking for extreme thrills, the 'Rafting Slide' and the 'Uphill' are must-tries. There are plenty of sun loungers and shaded areas to relax, as well as several restaurants and bars within the park. It's the ultimate family day out where kids can burn off energy and adults can find their inner child.",
          highlights: ["Adrenaline High Slides", "Giant Wave Pool", "Relaxing Lazy River", "Safe Kids Splash Zone", "Professional Lifeguards"], 
          included: ["All-day Entrance Ticket", "All Slides & Pools", "Sunbeds & Umbrellas", "Hotel Transfer"] 
        },
        { 
          slug: "dolphin-show", 
          name: "Dolphin & Sea Lion Spectacular", 
          price: "€30", 
          duration: "3 Hours", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/407fa665-6440-402c-bc91-0668a2ad1a1e_f2fd438e-2a26-48c0-ba4a-a6fb6c3652b1_.webp", "https://cmsal.argeya.com/Content/CompanyFiles/SliderResimleri/57b10374eb10bb1a58dd1a71.jpg"], 
          desc: "The ocean's most intelligent creatures in an amazing live show.", 
          longDesc: "Get ready to be amazed by the incredible intelligence and agility of dolphins and sea lions. Our park hosts one of the best-produced shows in the country. You'll watch dolphins perform synchronized dances, high jumps, and even 'paint' pictures on canvas. The sea lions will make you laugh with their funny antics and impressive balance. This educational and entertaining show is designed to highlight the importance of marine conservation while providing a fun experience for guests of all ages. After the show, there's a chance to meet the animals up close and take professional photos. It's a heartwarming and educational experience that highlights the special bond between humans and marine life.",
          highlights: ["Acrobatic Dolphin Show", "Funny Sea Lion Skits", "Marine Education Tips", "Photo Ops with Animals", "Family Friendly Timing"], 
          included: ["Entrance Ticket", "Seating in the Arena", "Hotel Transfer", "Guide Services"] 
        },
        { 
          slug: "horse-tour", 
          name: "Nature Coast & Forest Horse Safari", 
          price: "€40", 
          duration: "3 Hours", 
          images: ["https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Horse-Riding-Tour-Tursay-Travel-13.webp", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Horse-Riding-Tour-Tursay-Travel-1.webp", "https://sencaptour.com/wp-content/uploads/2023/06/Alanya-At-binme-turu-4.webp"], 
          desc: "Connect with nature on horseback through pine forests.", 
          longDesc: "Leave the noise of the city behind and find peace in the saddle. Our horse safari takes you through scenic forest trails and along mountain ridges with views of the sea. Our horses are extremely well-trained, gentle, and suitable for all ages and experience levels—even if you've never ridden before! Our instructors will give you a full briefing and stay with the group throughout the journey. You'll ride through pine-scented forests, cross small streams, and have a short break at a scenic viewpoint for photos. It's a therapeutic and grounding experience that allows you to connect with nature at a slower pace. The bond you form with your horse and the beauty of the surrounding mountains makes this a truly special tour.",
          highlights: ["Gentle & Trained Horses", "Scenic Mountain Trails", "Pine Forest Ride", "Professional Riding Guide", "Photo Opportunities"], 
          included: ["Assigned Horse", "Riding Equipment", "Qualified Guide", "Short Training", "Transfer"] 
        },
        { 
          slug: "night-jeep-safari", 
          name: "Night Jeep Safari & Sunset Party", 
          price: "€45", 
          duration: "5 Hours", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/31c5b512-0b91-4762-8b51-4d8ef2c7e645_c35d5ee1-4e4d-4d53-92a0-57f22e041aec_.webp", "https://cdn.vigotours.com/23898/conversions/187-1770148388-698252242f4a3-gallery.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/5dc9d110c84b5.jpeg"], 
          desc: "Experience the Taurus mountains under the stars with music and off-road fun.", 
          longDesc: "As the sun begins to set, the real adventure begins. Our Night Jeep Safari takes you into the Taurus Mountains for a different kind of thrill. We drive open-top 4x4 jeeps to panoramic viewpoints to watch the sunset over Alanya city and the Mediterranean Sea. The cool mountain air and the twinkling lights of the city below create a magical atmosphere. The tour includes a delicious dinner at a mountain restaurant, followed by an entertainment show with music and fire dancing. It's the perfect way to beat the daytime heat and experience the wild side of Alanya by night.",
          highlights: ["Taurus Mountains Sunset View", "Off-road Night Driving", "Mountain Restaurant Dinner", "Live Entertainment & Fire Show", "Starlit Panoramic Views"], 
          included: ["Hotel Pickup & Drop-off", "4x4 Jeep Transport", "Traditional Dinner", "Guide Services", "Entertainment Show"] 
        },
        { 
          slug: "land-of-legends", 
          name: "The Land of Legends Theme Park", 
          price: "€80", 
          duration: "Full Day", 
          images: ["https://www.alanya-tours.com/public/content/images/Tours/49/big/The-Land-of-Legends-Theme-Park-from-Alanya_175671848968b56599334b0.webp", "https://www.touralanya.com/TurResimleri/031813landoflegandstripsfromalanya.jpeg"], 
          desc: "Turkey's largest theme park with 40+ slides and amazing roller coasters.", 
          longDesc: "Step into a world of fantasy and adventure. The Land of Legends is not just a theme park; it's a massive entertainment complex featuring a huge water park (Kingdom of Sea) and a theme park (Adventure Park). Brave the 62-meter high Hyper Coaster, experience the 525-meter long Typhoon Coaster, or relax in the wave pool. The park also hosts incredible dolphin and white whale shows. In the evening, the 'Château' area transforms with a spectacular boat parade and musical light show. It's a world-class experience that combines adrenaline, water fun, and magical storytelling for the whole family.",
          highlights: ["Hyper Coaster (62m High)", "Huge Water Park Area", "Dolphin & Sea Lion Shows", "5th Dimension Cinema", "Legendary Boat Parade"], 
          included: ["All-day Entrance Ticket", "Access to Water Park", "Adrenaline Rides", "Dolphin/Show Access", "Return Transfer"] 
        },
        { 
          slug: "diving", 
          name: "Mediterranean Scuba Diving Discovery", 
          price: "€45", 
          duration: "6 Hours", 
          images: ["https://www.biraztatil.com/uploads/project_image/webp/alanya-tuplu-dalis-67459101413ee-276.webp", "https://alanyaextreme.com/wp-content/uploads/2025/01/tuplu-dalis-alanya.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Diving-Tour-Tursay-Travel-13.webp"], 
          desc: "Explore the underwater world of Alanya with professional instructors.", 
          longDesc: "Discover the hidden treasures of the Mediterranean Sea. Whether you are a beginner or an experienced diver, Alanya offers crystal clear waters and diverse marine life. Our tour starts with a detailed briefing on equipment and diving techniques by PADI/CMAS certified instructors. We head out by boat to two different diving spots, including underwater caves and reefs. You'll swim alongside colorful fish, octopuses, and maybe even sea turtles. For beginners, the first dive is a shallow discovery dive to get comfortable with the gear. Lunch is served on the boat between dives. It's an unforgettable experience in the silence of the deep blue.",
          highlights: ["Two Distinct Dive Spots", "Underwater Cave System", "Professional PADI/CMAS Guides", "Complete Modern Equipment", "Boat Cruise & Lunch"], 
          included: ["All Professional Gear", "Two Guided Dives", "Lunch on Boat", "Insurance", "Hotel Transfer"] 
        }
      ]
    },
    contact: { title: "Get in Touch", connectTitle: "Connect", contactDesc: "Contact us.", name: "Full Name", email: "Email", phone: "Phone", message: "Message", send: "Send", whatsapp: "WhatsApp" },
    testimonials: { title: "Client Stories", list: [
      { name: "John Doe", text: "Amazing experience with Pamukkale tour!", role: "Traveler" },
      { name: "Jane Smith", text: "Luxury cars and professional service.", role: "CEO" },
      { name: "Max Mustermann", text: "Best car rental in Antalya.", role: "Business" }
    ]},
    whyUs: { title: "Why Choose Boss Tour?", items: [
      { title: "Premium Fleet", desc: "Top-tier vehicles for your comfort." },
      { title: "Expert Guides", desc: "Local knowledge for the best tours." },
      { title: "24/7 Support", desc: "We are always here for you." }
    ]},
    modal: { book: "Book Now", confirm: "Confirmed", confirmDesc: "Your request has been received.", name: "Name", hotel: "Hotel", roomNo: "Room No" }
  },
  tr: {
    nav: { home: "Anasayfa", tours: "Turlar", fleet: "Araç Filosu", transfer: "Transfer", realEstate: "Emlak", about: "Hakkımızda", services: "Deneyim" },
    hero: { title: "Antalya'da Macera Sizi Bekliyor", subtitle: "Boss Tour ile turkuaz kıyıları keşfedin. Premium turlar ve lüks araçlar.", cta: "Araç Kirala", cta2: "Maceraları Gör", explore: "KEŞFET", cta3: "VIP Transfer" },
    fleet: { title: "Premium Filomuz", subtitle: "Her yolculuk için modern araçlar.", viewAll: "Tüm Filoyu Gör", viewDetails: "Detayları İncele", bookNow: "Hemen Rezerve Et", cars: [
      { name: "Fiat Egea", price: "45€", images: ["https://s3.eu-central-1.amazonaws.com/static.obilet.com/RentACar/Vehicle/Images/fiat-egea-sedan.png"], features: ["Benzin", "Manuel", "5 Koltuk"] },
      { name: "Renault Clio", price: "40€", images: ["https://s3.eu-central-1.amazonaws.com/static.obilet.com/RentACar/Vehicle/Images/renault-clio-hatchback-5-kapi.png"], features: ["Benzin", "Otomatik", "5 Koltuk"] },
      { name: "Fiat Egea Cross", price: "50€", images: ["https://cdn2.enuygun.com/media/lib/500x300/uploads/image/egea-cross-54386.webp"], features: ["Dizel", "Manuel", "5 Koltuk"] },
      { name: "Citroen C3", price: "43€", images: ["https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png"], features: ["Benzin", "Otomatik", "5 Koltuk"] },
      { name: "Suzuki Jeep (Retro)", price: "70€", images: ["https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg"], features: ["Benzin", "Manuel", "4 Koltuk"] },
      { name: "Hyundai i20", price: "45€", images: ["https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420"], features: ["Benzin", "Otomatik", "5 Koltuk"] },
      { name: "Ford Custom", price: "90€", images: ["https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp"], features: ["Dizel", "Manuel", "9 Koltuk"] },
      { name: "ATV CF Moto (4x4)", price: "55€", images: ["https://images5.1000ps.net/images_bikekat/2022/177-CFMOTO/9384-CForce_850_V2_EFI_4x4_XL_DLX/001-637777561929389735-cfmoto-cforce-850-v2-efi-4x4-xl-dlx.jpg?format=webp&quality=80&trim.threshold=80&trim.percentpadding=1&scale=both&width=1900&height=1156&bgcolor=rgba_39_42_44_0&mode=pad"], features: ["Benzin", "Otomatik", "4x4", "2 Koltuk"] },
      { name: "Elektrikli 3 Tekerli Bisiklet", price: "25€", images: ["https://bikestore.becdn.net/assets/images/product/16/stmax-gf400-kirmizi-1_940531602.jpg"], features: ["%100 Elektrikli", "Ehliyet Gerektirmez", "2 Koltuk"] }
    ]},
    realEstate: { title: "Özel Emlaklar", subtitle: "Boss Tour ile hayalinizdeki evi bulun.", list: [] },
    transfer: { 
      title: "VIP Transfer", 
      subtitle: "Hedefinize konforlu yolculuklar.", 
      list: [
        { 
          name: "Mercedes Vito VIP", 
          price: "70€", 
          images: ["/images/transfers/vito.png"], 
          desc: "Konforlu havalimanı ve şehirler arası transferler.",
          capacity: "1-9 Kişi",
          longDesc: "Standart VIP Mercedes Vito'muz ile üst düzey konforu yaşayın. Geniş deri koltukları ve ferah iç hacmiyle küçük gruplar ve aileler için idealdir.",
          highlights: ["Premium Deri Koltuklar", "Geniş İç Mekan", "İklim Kontrolü", "Karartılmış Camlar"],
          included: ["Profesyonel Şoför", "Bagaj Yardımı", "Ücretsiz Wi-Fi", "Soft İçecekler"]
        },
        { 
          name: "Mercedes Vito Maybach Edition", 
          price: "120€", 
          images: ["/images/transfers/maybach.png"], 
          desc: "Lüks seyahatin zirvesi. Başkanlık standardı.",
          capacity: "1-5 Kişi",
          longDesc: "Maybach Edition Vito'muz lüksü yeniden tanımlıyor. Masajlı koltuklar, ambiyans aydınlatma ve üst düzey eğlence sistemleri ile en iyisini arayanlar için tasarlandı.",
          highlights: ["Yıldız Tavan", "Masajlı & Yatan Koltuklar", "Premium Ses Sistemi", "Özel Bölme"],
          included: ["Soğuk Şampanya/İçecekler", "VIP Karşılama", "Özel Asistanlık", "Ultra Hızlı Wi-Fi"]
        }
      ] 
    },
    tours: {
      title: "Popüler Turlar & Aktiviteler",
      subtitle: "Antalya'nın en seçkin deneyimleri.",
      highlightsLabel: "Öne Çıkanlar",
      includedLabel: "Dahil Olanlar",
      list: [
        { 
          slug: "pamukkale", 
          name: "Pamukkale & Salda Gölü (Beyaz Cennet)", 
          price: "€45", 
          duration: "13 Saat", 
          images: ["https://cdn.getyourguide.com/img/location/49d723a60f36e112.jpeg/99.jpg", "https://www.barcelo.com/guia-turismo/wp-content/uploads/pamukkale.jpg"], 
          desc: "Bembeyaz travertenler, Hierapolis Antik Kenti ve Türkiye'nin Maldivleri Salda Gölü.", 
          longDesc: "Dünyanın 8. harikası olarak kabul edilen Pamukkale'ye unutulmaz bir yolculuğa çıkın. UNESCO Dünya Mirası listesinde yer alan bu bölge, kalsiyum zengini termal suların oluşturduğu bembeyaz traverten teraslarıyla ünlüdür. Bu doğa harikası üzerinde çıplak ayakla yürüyebilir ve şifalı suların sıcaklığını hissedebilirsiniz. Turumuz, antik Roma döneminin en önemli termal merkezi olan Hierapolis Antik Kenti ile devam ediyor. Burada devasa antik tiyatroyu, Anadolu'nun en büyük Nekropolü'nü ve tarihi kapıları göreceksiniz. Gerçekten eşsiz bir deneyim için, içinde binlerce yıllık Roma sütunlarının bulunduğu Kleopatra Antik Havuzu'nda yüzebilirsiniz. Günün ikinci yarısında ise kristal berraklığında turkuaz suyu ve beyaz magnezyum kumlarıyla 'Türkiye'nin Maldivleri' olarak bilinen Salda Gölü'nü ziyaret ediyoruz. Burası, dünyanın en temiz göllerinden birinde yüzmek ve hayatınızın en güzel fotoğraflarını çekmek için kusursuz bir noktadır.",
          highlights: ["Beyaz Traverten Teraslar", "Hierapolis Antik Kenti", "Salda Gölü (Türkiye'nin Maldivleri)", "Kleopatra Antik Havuzu", "Antik Roma Tiyatrosu"], 
          included: ["Lüks Otel Transferi", "Profesyonel Rehberlik", "Açık Büfe Öğle Yemeği", "Klimalı Ulaşım", "Salda Gölü Giriş Ücreti"] 
        },
        { 
          slug: "kekova", 
          name: "Kekova – Demre – Myra (Batık Şehir Seferi)", 
          price: "€50", 
          duration: "11 Saat", 
          images: ["https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PE7wwOiCWscwlqcEpg2A_pvpGnfmQROdLw&s", "https://gunluktur.net/wp-content/uploads/2021/12/tourbooking-turkey.jpeg"], 
          desc: "Batık harabelere ve Noel Baba'nın mirasına tarihsel bir yolculuk.", 
          longDesc: "Likya kıyılarının gizli tarihini keşfedeceğimiz bu tur, hem deniz hem de kültür meraklıları için hazırlanmıştır. Güne Demre'de, dünyanın tanıdığı adıyla Noel Baba'nın (Aziz Nikolaos) yaşadığı ve mucizelerini gerçekleştirdiği kiliseyi ziyaret ederek başlıyoruz. Kilisedeki Bizans dönemi freskleri sizi büyüleyecek. Ardından, devasa kaya mezarlarıyla ünlü Myra Antik Kenti'ne geçiyoruz. Dağlara oyulmuş bu yapılar, antik mühendisliğin zirvesini temsil ediyor. Günün zirve noktası ise Kekova Batık Şehir tekne turumuzdur. Teknenin cam tabanından veya berrak sudan, 2000 yıl önce depremle sular altında kalan evleri, merdivenleri ve antik tersaneyi göreceksiniz. Tur boyunca Akvaryum Koyu ve Esmeralda Koyu gibi bakir noktalarda yüzme molaları verecek, turkuaz suların tadını çıkaracaksınız.",
          highlights: ["Cam Tabanlı Tekne Turu", "Kekova Batık Şehir", "Myra Kaya Mezarları", "Noel Baba Kilisesi", "Mavi Bayraklı Yüzme Koyları"], 
          included: ["Otel Transferi", "Özel Tekne Turu", "Tüm Giriş Biletleri", "Teknede Açık Büfe Yemek", "Seyahat Sigortası"] 
        },
        { 
          slug: "cappadocia", 
          name: "Kapadokya: Bir Masal Yolculuğu (2 Günlük)", 
          price: "€120", 
          duration: "2 Gün", 
          images: ["https://blog.obilet.com/wp-content/uploads/2018/10/kapadokya.jpg"], 
          desc: "Peri bacaları, yeraltı şehirleri ve gün doğumu balonlarının büyüsünü yaşayın.", 
          longDesc: "Kendinizi başka bir gezegendeymiş gibi hissettiren topraklara adım atın. 2 günlük Kapadokya turumuz, bu mistik bölgenin ruhunu tam anlamıyla yaşamanız için tasarlandı. 1. Gün, büyüleyici fresklerle süslenmiş orta çağ kaya kiliselerinin bulunduğu Göreme Açık Hava Müzesi'ni keşfediyoruz. Paşabağ (Keşişler Vadisi) bölgesinde en ikonik üç başlı peri bacalarını görecek, öğleden sonra ise ilk Hristiyanların saklanmak için inşa ettiği devasa yer altı şehirlerinden birine ineceğiz. 2. Günümüz, güneş doğmadan önce dünyaca ünlü Sıcak Hava Balonu uçuşuyla (opsiyonel) başlıyor. Yüzlerce renkli balonun arasından güneşin doğuşunu izlemek, ruhunuzu dinlendiren bir deneyim olacak. Ayrıca bölgenin en yüksek noktası olan Uçhisar Kalesi'ni ziyaret ederek Kapadokya'yı panoramik olarak göreceğiz. Geceyi otantik bir kaya veya taş otelde geçirerek masalsı atmosferi sonuna kadar hissedeceksiniz.",
          highlights: ["Göreme Açık Hava Müzesi", "Paşabağ Peri Bacaları", "Derin Yer Altı Şehri", "Uçhisar Panoramik Kalesi", "Devrent (Hayal) Vadisi"], 
          included: ["Lüks Butik Otel Konaklaması", "Akşam Yemeği & Açık Büfe Kahvaltı", "Alanında Uzman Rehber", "VIP VIP Ulaşım", "Köy Ziyaretleri"] 
        },
        { 
          slug: "lavanta-garden", 
          name: "Lavanta Rüyaları & Salda Büyüsü", 
          price: "€40", 
          duration: "12 Saat", 
          images: ["https://burdur.com.tr/wp-content/uploads/2022/03/MKXT0132.jpg"], 
          desc: "Kuyucak'ın sonsuz mor tarlaları ve Salda Gölü'nün beyaz kumları.", 
          longDesc: "Renk ve koku dolu bir dünyaya kaçmaya ne dersiniz? Yaz aylarında Kuyucak köyü, lavantaların tam açmasıyla birlikte mor bir denize dönüşür. Turumuzda bu aromatik tarlalarda yürüyebilir, lavanta yağı üretimini öğrenebilir ve hayatınızın en güzel fotoğraflarını çekebilirsiniz. Köylülerin kendi elleriyle hazırladığı lavanta çayı ve hediyelik eşyalar sizi bekliyor. Turun ikinci yarısında ise Türkiye'nin en güzel doğal alanlarından biri olan Salda Gölü'nü ziyaret ediyoruz. Yüksek magnezyum içeriği sayesinde oluşan beyaz kumları ve canlı turkuaz suyuyla bu göl, görsel bir şölen sunuyor. Sahilde dinlenebilir, şifalı sularda yüzebilir ve bu koruma altındaki doğa parkında huzur bulabilirsiniz. Bu tur, duyularınıza hitap eden ve ruhunuzu dinlendiren mükemmel bir doğa kaçamağıdır.",
          highlights: ["Lavanta Hasatı Fotoğraf Çekimi", "Kuyucak Köy Deneyimi", "Salda Gölü Yüzme Keyfi", "Lavanta Ürünleri Tadımı", "Doğa Yürüyüşü"], 
          included: ["Tam Transfer Hizmeti", "Profesyonel Rehberlik", "Geleneksel Köy Yemeği", "İkramlar & Su", "Park Giriş Ücretleri"] 
        },
        { 
          slug: "side-manavgat", 
          name: "Antik Üçleme: Side – Aspendos – Manavgat", 
          price: "€45", 
          duration: "9 Saat", 
          images: ["https://calista.com.tr/media/3jhj2jz0/aspendos006-1170x650.jpg?format=webp&quality=85", "https://www.gezire.com/wp-content/uploads/2025/10/Manavgat-Selalesi-764x500.jpg", "https://www.kulturportali.gov.tr/contents/images/SELEUK%20(4).JPG"], 
          desc: "Roma mimarisinin görkemi ve şelalenin ferahlığı bir arada.", 
          longDesc: "Roma İmparatorluğu'nun altın çağına doğru sanat ve tarih odaklı bir yolculuk. İlk durağımız, dünyanın en iyi korunmuş Roma Tiyatrosu olan Aspendos. MS 2. yüzyılda inşa edilen bu tiyatronun akustiği bugün hala kusursuzdur ve hala uluslararası festivallere ev sahipliği yapmaktadır. Ardından, antik liman kenti Side'ye geçiyoruz. Sütunlu caddelerde yürüyecek, antik hastaneyi görecek ve Antonius ile Kleopatra'nın buluştuğu iddia edilen deniz kenarındaki Apollon Tapınağı'nda tarihe tanıklık edeceksiniz. Son olarak, Manavgat Şelalesi'nde ferahlatıcı bir mola veriyoruz. Şelale çok yüksek olmasa da genişliği ve debisiyle muazzam bir görsel sunar. Suyun kenarında kahvenizi yudumlayabilir ve Akdeniz rüzgarının tadını çıkarabilirsiniz. Bu tur, tarihi hayranlık ile doğal huzuru mükemmel dengeler.",
          highlights: ["Aspendos Roma Tiyatrosu", "Side Apollon Tapınağı", "Manavgat Şelalesi", "Side Antik Limanı", "Antik Tiyatro Girişi"], 
          included: ["Gidiş-Dönüş Transfer", "Tarihçi Uzman Rehber", "Nehir Kenarında Özel Yemek", "Aspendos & Side Giriş Ücretleri"] 
        },
        { 
          slug: "city-tour", 
          name: "Alanya Panoramik Şehir & Kale Turu", 
          price: "30", 
          duration: "4 Saat", 
          images: ["https://upload.wikimedia.org/wikipedia/commons/8/85/Alanyafromcastle.JPG", "https://cmsal.argeya.com/Content/CompanyFiles/SliderResimleri/Alanya-Buyuk-Hotel-Genel-269043.jpg"], 
          desc: "Alanya'nın En İyileri: Kale, Teleferik, Mağara ve Gün Batımı.", 
          longDesc: "Alanya'nın neden Türk Rivierası'nın incisi olduğunu bu kapsamlı şehir turuyla keşfedin. Turumuza dünyaca ünlü Kleopatra Plajı'ndan Alanya Kalesi'nin zirvesine çıkan Teleferik yolculuğuyla başlıyoruz. Kalenin burçlarından limanı, feneri ve Toros Dağları'nı 360 derecelik bir açıyla göreceksiniz. 13. yüzyıldan kalma tarihi tersaneyi, İç Kale'yi ve şehrin simgesi Kızıl Kule'yi profesyonel anlatımlarla gezeceğiz. Ayrıca, 1948 yılında tesadüfen bulunan ve astım hastaları için şifalı havasıyla bilinen Damlataş Mağarası'nı ziyaret ediyoruz. Turumuzu, şehrin en popüler noktalarından biri olan 'I Love Alanya' terasında sonlandırıyoruz. Burası, güneş batarken tüm şehri ayaklarınızın altında hissedeceğiniz en güzel panoramik noktadır.",
          highlights: ["Teleferik ile Kale Keyfi", "Alanya Kalesi Keşfi", "Damlataş Mağarası Ziyareti", "Kleopatra Plajı Panoraması", "Seyir Terası Fotoğraf Molası"], 
          included: ["Adresten Alış-Bırakış", "Teleferik Biletleri", "Profesyonel Rehber", "Mağara Giriş Ücreti"] 
        },
        { 
          slug: "mix-adventure", 
          name: "Efsane Mix Macera (3'ü 1 Arada Adrenalin)", 
          price: "€55", 
          duration: "8 Saat", 
          images: ["https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=1210,dpr=1/tour_img/640b4d905f5e4.png", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=755,dpr=1/tour_img/5b8b721278a099cfddd9975af2c8dd627c2259fd05374f4f7efa7ef96e0b5775.png"], 
          desc: "Vahşi kanyonda Rafting, Zipline ve Atv/Buggy Safari.", 
          longDesc: "Yerinde duramayanlar ve macera tutkunları için bu tur en üst noktadır! Sizi Türkiye'nin doğa sporları kalbi olan Köprülü Kanyon Milli Parkı'na götürüyoruz. Gününüz 14 kilometrelik heyecan dolu bir Rafting yolculuğuyla başlıyor. Profesyonel eğitmenlerimizle dalgalara karşı koyacak, eğlencenin doruğuna çıkacaksınız. Nehrin ortasında dev bir heyecan molası veriyoruz: Zipline! Nehrin üzerinden kuş gibi süzülürken adrenalin tavan yapacak. Nehir kenarında alacağımız enerjik öğle yemeğinin ardından safariye geçiyoruz. Çam ormanları arasındaki çamurlu ve engebeli parkurlarda ister ATV ister Buggy ile tozu dumana katacaksınız. Bu tur, bir güne sığdırılabilecek en yüksek dozda eğlence ve adrenalini vaat ediyor.",
          highlights: ["14km Rafting Parkuru", "Kanyon Üzerinde Zipline", "Off-road Safari (Buggy/ATV)", "Nehre Atlama Molaları", "Tazı Kanyonu Fotoğraf Durağı"], 
          included: ["Tam Güvenlik Ekipmanları", "Profesyonel Eğitmenler", "Izgara Öğle Yemeği", "Tüm Transferler", "Ferdi Kaza Sigortası"] 
        },
        { 
          slug: "rafting", 
          name: "Köprüçay Rafting Macerası", 
          price: "€35", 
          duration: "6 Saat", 
          images: ["https://cmsal.argeya.com/Content/CompanyFiles/YazilarYeniImg/alanya-rafting.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Buggy-Rafting-Zipline-Tour-Tursay-Travel-13.webp"], 
          desc: "Antik Köprülü Kanyon'un turkuaz sularında maceraya atılın.", 
          longDesc: "Kürekleri elinize alın ve ıslanmaya hazır olun! Köprüçay Nehri üzerinde rafting yapmak, Antalya'nın en popüler aktivitesidir ve bunun iyi bir sebebi var. Nehir, kanyona ismini veren antik Roma köprülerinin altından, muhteşem bir milli parkın kalbinden geçer. Turumuz, detaylı bir güvenlik eğitimi ve ekipman teslimiyle başlar. Ardından 8-10 kişilik botlarımıza veya ekstra macera isteyenler için 2 kişilik kanolarımıza biniyoruz. Parkurumuz 14 km uzunluğundadır ve kalbinizi hızlandıracak akıntılarla doludur. Akıntılar arasında nehrin buz gibi ama tertemiz sularına atlayıp yüzme şansınız olacak. Ayrıca rehberlerimizin yapacağı 'body rafting' ve eğlenceli animasyonlarla gününüz unutulmaz bir şölene dönüşecek. Tur sonunda nehir kenarındaki tesisimizde sizi taze hazırlanmış sıcak bir yemek bekliyor olacak.",
          highlights: ["14km Profesyonel Rafting", "Antik Roma Köprüsü Turu", "Body Rafting Seansları", "Buz Gibi Nehirde Yüzme", "Eğlenceli Grup Oyunları"], 
          included: ["Kask & Can Yeleği", "Bot & Kürek", "Uzman Bot Kaptanı", "Nehir Kenarı Yemek", "Otel Transferi"] 
        },
        { 
          slug: "jeep-safari", 
          name: "Toros Dağları Jeep Safari & Dim Çayı", 
          price: "€40", 
          duration: "7 Saat", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/31c5b512-0b91-4762-8b51-4d8ef2c7e645_c35d5ee1-4e4d-4d53-92a0-57f22e041aec_.webp", "https://cdn.vigotours.com/23898/conversions/187-1770148388-698252242f4a3-gallery.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/5dc9d110c84b5.jpeg"], 
          desc: "Su savaşları, dağ zirveleri ve Dim Çayı'nda dinlenme.", 
          longDesc: "Bu sadece bir tur değil; tekerlekler üzerindeki koca bir parti! Üstü açık 4x4 Land Rover ciplerimize atlayıp görkemli Toros Dağları'na tırmanıyoruz. Yolculuk boyunca cipler arasında bitmek bilmeyen su savaşları olduğu için ıslanmaya hazırlıklı olun! Alanya'yı en tepeden göreceğimiz panoramik noktalarda mola veriyoruz. Geleneksel bir köy camisini ziyaret edip yerel kültürü öğreniyor, meyve bahçelerinde meyve tadımı yapıyoruz. Günün en keyifli kısmı ise Dim Çayı durağımızdır. Nehrin içine kurulmuş masalarda yemeğinizi yerken, buz gibi suya ayaklarınızı sokabilirsiniz. Atlama platformlarımızdan nehre atlayabilir, su yataklarında dinlenebilir veya tesisimizdeki balık tutma havuzunda şansınızı deneyebilirsiniz. Kahkaha, doğa ve kültürel keşiflerin iç içe olduğu bir gün sizi bekliyor.",
          highlights: ["Cipler Arası Su Savaşları", "Toroslar Off-road Parkuru", "Çay İçindeki Yemek Masaları", "Geleneksel Köy Ziyareti", "Meyve Bahçesi Tadımı"], 
          included: ["4x4 Jip Konforu", "Nehirde Öğle Yemeği", "Eğlenceli Safari Rehberi", "Köy Evi Girişleri"] 
        },
        { 
          slug: "sapadere-canyon", 
          name: "Sapadere Kanyonu: Saklı Cennet", 
          price: "€45", 
          duration: "8 Saat", 
          images: ["https://www.kulturportali.gov.tr/contents/images/sapanderekanyonulogolu_20180914111051287.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Sapadere-Canyon-Tour-Tursay-Travel-13.webp"], 
          desc: "Kanyon içindeki ahşap yol ve dondurucu şelaleler.", 
          longDesc: "Yaz sıcağından kaçıp Sapadere Kanyonu'nun ferahlatıcı kollarına kendinizi bırakın. Alanya'dan 40km uzaklıkta bulunan bu dev yarık, ancak 2008 yılında turizme açılmış ve bakir kalmayı başarmış doğal bir cevherdir. Kanyon boyunca uzanan 750 metrelik ahşap asma yol üzerinde yürüyecek, her iki yanınızda yükselen devasa kayalıkların görkemine tanık olacaksınız. Yol boyunca irili ufaklı onlarca şelale size eşlik edecek. En cesurlar, doğal havuzlara girip yüzebilir; yazın en sıcak gününde bile su sıcaklığı nadiren 12 dereceyi aşar! Kanyondan sonra, geleneksel yaşamın devam ettiği Sapadere Köyü'nü ve ipek dokuma atölyesini ziyaret edeceğiz. Ayrıca muhteşem sarkıt ve dikitlerle dolu olan 'Cüceler Mağarası'nı da keşfedeceğiz. Öğle yemeğimiz, taze alabalık veya ızgara tavuk seçeneğiyle köyün bahçeleri arasında servis ediliyor.",
          highlights: ["Asma Yol Yürüyüşü", "Dondurucu Şelale Yüzmesi", "Cüceler Mağarası Keşfi", "İpek Dokuma Gösterisi", "Geleneksel Köy Turu"], 
          included: ["Transfer Hizmeti", "Tüm Giriş Ücretleri", "Rehberlik Hizmeti", "Bahçe Restoranında Yemek"] 
        },
        { 
          slug: "quad-safari", 
          name: "ATV Safari Macerası", 
          price: "€40", 
          duration: "3 Saat", 
          images: ["https://cloudbasetravel.com/wp-content/uploads/2021/06/ATV-Safari-1.jpeg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Quad-Atv-Safari-Tour-Tursay-Travel-1.webp"], 
          desc: "Toros ormanlarında toz, çamur ve heyecan dolu bir sürüş.", 
          longDesc: "Şehrin gürültüsünden uzaklaşın ve Toros Dağları'nın engebeli arazisinde kendi motorunuzun kontrolünü elinize alın! ATV Safari turumuz, size adrenalini ve doğayı aynı anda sunuyor. Profesyonel rehberlerimiz eşliğinde çam ormanları içindeki teknik parkurlardan geçecek, tozlu yolları ve çamurlu su birikintilerini aşacaksınız. Sürüş ehliyeti gerektirmeyen bu turda, kısa bir eğitimden sonra herkes kendi aracını kullanabilir. Yol boyunca nehir kenarında vereceğimiz molada tozunuzu atabilir ve buz gibi suda serinleyebilirsiniz. Bu tur, Alanya'nın vahşi doğasını keşfetmenin en heyecan verici yoludur.",
          highlights: ["Kendi Aracını Kullanma Deneyimi", "Orman İçi Teknik Parkurlar", "Çamurlu Su Geçişleri", "Nehir Kenarı Dinlenme Molası", "Yüksek Hızlı Düzlükler"], 
          included: ["ATV Motor & Yakıt", "Güvenlik Kaskı", "Kullanım Eğitimi", "Uzman Rehberlik", "Transfer"] 
        },
        { 
          slug: "zipline", 
          name: "Dev Zipline Heyecanı", 
          price: "€25", 
          duration: "2 Saat", 
          images: ["https://www.schweitzer.com/-/media/schweitzer/summer-activities/schweitzer-zipline-1920x1080.jpg?rev=9c2e8f672b1541d3b31d2b74f3db9b7f?h=1080&w=1920&hash=E7706D1B10547CE9104FCB35BC95DD16"], 
          desc: "Kanyon üzerinde kuşlar gibi süzülün.", 
          longDesc: "Yer çekimine meydan okuyun ve özgürlüğün tadını çıkarın! Bölgenin en yüksek ve en uzun zipline hattında, Tazı Kanyonu'nun muhteşem manzarası üzerinde kuş gibi süzüleceksiniz. Profesyonel ekibimiz tarafından tüm güvenlik ekipmanlarınız titizlikle kuşatıldıktan sonra, kendinizi boşluğa bırakacak ve yüksek hızla kanyonun diğer ucuna uçacaksınız. Bu kısa ama yoğun adrenalin deneyimi, tatilinize unutulmaz bir anı katacak. En yüksek güvenlik standartlarına sahip çift hat sistemimiz sayesinde, siz sadece manzaranın ve hızın tadını çıkarın.",
          highlights: ["Uzun Mesafe Uçuş Hattı", "Kanyon Panoraması", "Yüksek Hızlı Adrenalin", "Uluslararası Güvenlik Standartları"], 
          included: ["Zipline Ekipmanı", "Güvenlik Eğitimi", "Uzman Personel Desteği"] 
        },
        { 
          slug: "paragliding", 
          name: "Yamaç Paraşütü: Alanya Üzerinde Uçuş", 
          price: "€75", 
          duration: "2 Saat", 
          images: ["https://www.talyatur.com/images/tour/105418_b.jpg", "https://cdn.getyourguide.com/img/tour/e810d4a42de4ba2a359f6f25116205e419dba160cf49862c412bff4a32843011.jpg/99.jpg"], 
          desc: "700 metreden Kleopatra Plajı'na unutulmaz bir süzülüş.", 
          longDesc: "Alanya'yı görmenin en huzurlu ve en büyüleyici yolu budur. Sizi 700 metre yükseklikteki 'Yassı Tepe' zirvesine çıkarıyoruz. Burada, uçuşun tüm teknik detaylarını yönetecek profesyonel pilotunuzla tanışacaksınız. Birkaç adım koştuktan sonra rüzgarın gücüyle havalanacak ve gökyüzüyle buluşacaksınız. Yaklaşık 20-30 dakika boyunca turkuaz Akdeniz'in, görkemli Alanya Kalesi'nin ve bembeyaz Kleopatra Plajı'nın üzerinde sessizce süzüleceksiniz. Eğer isterseniz, pilotunuz adrenalin seviyesini artırmak için akrobatik hareketler de yapabilir. Uçuşunuz, Kleopatra Plajı'nın yumuşak kumlarına yapacağınız konforlu bir inişle son bulacak. Bu deneyim, hayatınız boyunca anlatacağınız eşsiz bir masal gibi kalacak.",
          highlights: ["700 Metre Rakımdan Kalkış", "Kleopatra Plajı'na İniş", "Kale ve Deniz Panoraması", "Tandem Profesyonel Pilot", "Uçuş Esnasında Fotoğraf/Video İmkanı"], 
          included: ["Otel Transferi", "Uçuş Ekipmanları", "Deneyimli Pilot", "Uçuş Sigortası", "Brifing"] 
        },
        { 
          slug: "luxury-boat", 
          name: "Korsan Teknesi Turu & Köpük Partisi", 
          price: "€40", 
          duration: "6 Saat", 
          images: ["https://www.dailytoursinalanya.com/Content/images/tours/32/alanya-pirate-boat-tour-6-hd.webp"], 
          desc: "Mağaralar, yüzme molaları ve teknede büyük parti.", 
          longDesc: "Akdeniz'in tadını çıkarmak için klasik bir gün sizi bekliyor! Korsan temalı teknemiz Alanya'nın tarihi limanından demir alarak Kızıl Kule ve Tersane boyunca süzülür. Alanya Kalesi yarımadasını çevreleyen tura çıkarak Korsanlar Mağarası, Aşıklar Mağarası ve suyun parladığı Fosforlu Mağarayı ziyaret ediyoruz. Tur boyunca, turkuaz renkli kristal koyların tadını çıkarmanız için birçok yüzme molası veriyoruz. Teknede animasyon ekibimiz müzik, oyunlar ve dönüş yolunda dev bir köpük partisiyle eğlenceyi zirvede tutacak. Teknede taze pişirilen lezzetli bir öğle yemeği ve sınırsız alkolsüz içecekler fiyata dahildir. Hem aileler hem de arkadaş grupları için mükemmel bir eğlence sunuyoruz.",
          highlights: ["Tarihi Liman Turu", "Deniz Mağaraları Keşfi", "Köpük Partisi ve Animasyon", "Eşsiz Yüzme Durakları", "Teknede Barbekü Keyfi"], 
          included: ["Tekne Turu", "Barbekü Öğle Yemeği", "Alkolsüz İçecekler", "Animasyon Gösterileri", "Otel Transferi"] 
        },
        { 
          slug: "fishing", 
          name: "Sabahın Erken Saatlerinde Deniz Balıkçılığı", 
          price: "€40", 
          duration: "6 Saat", 
          images: ["https://www.albashop.com.tr/Data/EditorFiles/En_Dog__ru_Bal__k_Av___Zaman___Nas__l_Belirlenir__3.jpg"], 
          desc: "Profesyonel ekipmanlarla huzurlu bir deniz sabahı.", 
          longDesc: "Gün ortası sıcağından ve kalabalıktan kaçıp, denizin en huzurlu anında açılmaya ne dersiniz? Balıkçı teknemiz en modern balık bulucu tarayıcılar ve yüksek kaliteli olta takımlarıyla donatılmıştır. İster usta bir balıkçı olun ister ilk kez olta tutacak olun, deneyimli kaptanımız sizi Çupra, Levrek ve diğer Akdeniz balıklarının en bol olduğu noktalara götürecek. Oltanızı denize sallayıp balığın gelmesini beklerken, güneşin doğuşunu ve kıyı şeridinin muhteşem manzarasını izleyebilirsiniz. Teknede sabah çayınız ve ikramlarınız sizi bekliyor olacak. Tuttuğunuz balıkları isterseniz teknede pişirip hayatınızın en taze kahvaltısını yapabilirsiniz!",
          highlights: ["Gün Doğumu Kıyı Manzarası", "Modern Balık Bulucu Teknolojisi", "Kaliteli Olta ve Ekipmanlar", "Deneyimli Deniz Kaptanı", "İkramlar ve Çay"], 
          included: ["Balıkçılık Malzemeleri", "Yemler", "İçecekler & Çay", "Kaptan Rehberliği", "Ulaşım"] 
        },
        { 
          slug: "turkish-night", 
          name: "Orient Ekspres: Türk Gecesi Gösterisi", 
          price: "€45", 
          duration: "4 Saat", 
          images: ["https://www.touralanya.com/TurResimleri/003837alanyaturkishnight.jpeg", "https://www.goreme.com/image/cache/catalog/Urunler/activities/turkish-night/turkish-night-show-134-900x600.jpg"], 
          desc: "Türk kültürü, dansı ve mutfağının muhteşem şöleni.", 
          longDesc: "Osmanlı'nın görkemli geleneklerinden modern Türkiye'nin enerjisine uzanan bir geceye davetlisiniz. Türk Gecesi programımız, profesyonel dansçıların otantik kostümlerle sergilediği yüksek enerjili bir gösteridir. Mevlana'nın semazenlerinden, Türkiye'nin her bölgesinden geleneksel halk oyunlarına ve nefes kesen oryantal şovlara kadar geniş bir program sizi bekliyor. Gösteri interaktiftir; genellikle konuklar sahneye davet edilerek eğlenceye dahil edilir. Gece boyunca geleneksel mezeler, ızgara çeşitleri ve Türk tatlılarından oluşan zengin bir akşam yemeği menüsü size eşlik edecek. Sınırsız yerli içecek ikramımızla, Türkiye'nin ruhunu tam anlamıyla hissedeceğiniz bir atmosfer sunuyoruz.",
          highlights: ["Semazen Gösterisi", "Yöresel Halk Dansları", "Profesyonel Oryantal Şov", "İnteraktif Sahne Eğlenceleri", "Geleneksel Sofra Ziyafeti"], 
          included: ["Tam Menü Akşam Yemeği", "Sınırsız Yerli İçecek", "Tüm Gösteri ve Şovlar", "Dönüş Transferi"] 
        },
        { 
          slug: "turkish-bath", 
          name: "Geleneksel Türk Hamamı: Saf Huzur", 
          price: "€30", 
          duration: "3 Saat", 
          images: ["https://cdn.alanyatekmar.com/e6a4a96a-9fc4-442b-87df-a2fff0b99841.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Turkish-Bath-Hamam-Tour-Tursay-Travel-1.webp"], 
          desc: "Kese, köpük ve yağ masajıyla yenilenme zamanı.", 
          longDesc: "Kendinizi bin yıllık bir sağlık ve rahatlama geleneğine bırakın. Hamam deneyimimiz, göbek taşının sıcaklığında gözeneklerinizin açılmasıyla başlar. Ardından profesyonel bir tellak tarafından vücudunuza yapılan ipek kese işlemiyle tüm ölü derilerinizden ve toksinlerinizden arınırsınız. Bunu, devasa sabun köpüğü bulutları içinde yapılan cennetvari bir köpük masajı izler. Paketimiz ayrıca tuz odası, sauna ve buhar odası erişimini de kapsar. Son olarak, dinlenme salonunda içeceğiniz Türk çayından sonra, uzman masörlerimiz tarafından yapılan 20 dakikalık tam vücut yağ masajı ile turu sonlandırıyoruz. Hamamdan çıktığınızda kendinizi kuş gibi hafif hissedecek ve cildinizin ne kadar pürüzsüzleştiğine inanamayacaksınız.",
          highlights: ["Otantik Mermer Hamam Ortamı", "Tam Vücut İpek Kese Uygulaması", "Pamuk Gibi Köpük Masajı", "Dinlendirici Yağ Masajı", "Sauna & Tuz Odası Erişimi"], 
          included: ["Kese & Peeling", "Köpük Masajı", "20 Dakika Yağ Masajı", "Sauna & Tuz Odası", "Transfer"] 
        },
        { 
          slug: "aquapark", 
          name: "Aquapark Macerası & Dev Kaydıraklar", 
          price: "€35", 
          duration: "Tüm Gün", 
          images: ["https://www.aquafuncity.com/images/galeri/aqua1.jpg", "https://cdn.alanyatekmar.com/f48067f0-fc19-4515-8b5c-17b64703c6bf.jpg"], 
          desc: "Hangi yaşta olursanız olun adrenalin dolu su eğlencesi.", 
          longDesc: "Bölgenin en büyük su parklarından birinde ferahlayın ve eğlencenin tadına varın! İster 'Kamikaze' veya 'Black Hole' gibi devasa kaydıraklarda korkularınızla yüzleşin, isterseniz 'Lazy River' (Tembel Nehir) üzerinde sakince süzülün. Parkta 20'den fazla farklı kaydırak, okyanusu aratmayan dev dalga havuzu ve çocuklar için özel olarak tasarlanmış güvenli alanlar bulunmaktadır. Ekstrem heyecan arayanlar için 'Rafting Slide' mutlaka denenmesi gereken bir noktadır. Gün boyunca güneşlenebileceğiniz geniş alanlar, park içindeki restoranlar ve barlar sayesinde konforlu bir gün geçirebilirsiniz. Çocukların enerjilerini atabileceği, yetişkinlerin ise içindeki çocuğu bulabileceği mükemmel bir aile aktivitesidir.",
          highlights: ["Adrenalin Dolu Dev Kaydıraklar", "Devesa Dalga Havuzu", "Dinlendirici Tembel Nehir", "Güvenli Çocuk Splash Alanı", "Profesyonel Cankurtaran Hizmeti"], 
          included: ["Tüm Günlük Giriş Bileti", "Tüm Kaydırak & Havuzlar", "Şezlong & Şemsiye", "Otel Transferi"] 
        },
        { 
          slug: "dolphin-show", 
          name: "Yunus & Fok Balığı Gösterisi", 
          price: "€30", 
          duration: "3 Saat", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/407fa665-6440-402c-bc91-0668a2ad1a1e_f2fd438e-2a26-48c0-ba4a-a6fb6c3652b1_.webp", "https://cmsal.argeya.com/Content/CompanyFiles/SliderResimleri/57b10374eb10bb1a58dd1a71.jpg"], 
          desc: "Okyanusun en zeki canlılarından büyüleyici şovlar.", 
          longDesc: "Yunusların ve fok balıklarının inanılmaz zekasına ve çevikliğine hayran kalmaya hazır olun. Parkımız, Türkiye'nin en iyi prodüksiyonlu yunus gösterilerine ev sahipliği yapmaktadır. Yunusların senkronize danslarını, metrelerce yükseğe zıplayışlarını ve hatta tuval üzerine yaptıkları 'resimleri' şaşkınlıkla izleyeceksiniz. Fok balıkları ise komik tavırları ve denge yetenekleriyle sizi güldürecek. Bu eğitici ve eğlenceli şov, sadece bir eğlence değil, tan zamanda deniz yaşamını korumanın önemini de vurgulayan bir deneyimdir. Gösteri sonrasında bu dost canlısı hayvanlarla yakından tanışma ve fotoğraf çekilme imkanınız olacaktır. Çocuklar için ömür boyu unutulmayacak duygusal bir deneyimdir.",
          highlights: ["Akrobatik Yunus Şovu", "Komik Fok Balığı Skeçleri", "Deniz Yaşamı Bilgilendirmeleri", "Canlılarla Fotoğraf İmkanı", "Aile Dostu Zamanlama"], 
          included: ["Giriş Bileti", "Arena İçinde Oturma Düzeni", "Otel Transferi", "Rehberlik Hizmeti"] 
        },
        { 
          slug: "horse-tour", 
          name: "Doğa ve Sahil At Safarisi", 
          price: "€40", 
          duration: "3 Saat", 
          images: ["https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Horse-Riding-Tour-Tursay-Travel-13.webp", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Horse-Riding-Tour-Tursay-Travel-1.webp", "https://sencaptour.com/wp-content/uploads/2023/06/Alanya-At-binme-turu-4.webp"], 
          desc: "Toros ormanlarında at sırtında huzurlu bir yolculuk.", 
          longDesc: "Şehrin gürültüsünü arkanızda bırakın ve at sırtında gerçek huzuru bulun. At safari turumuz sizi eşsiz orman yollarından, deniz manzaralı dağ patikalarına götürür. Atlarımız son derece eğitimli, uysal ve her yaş grubuna uygundur. Daha önce hiç ata binmediyseniz bile, eğitmenlerimizin kısa brifingi ve yol boyunca size eşlik etmesi sayesinde güvenli bir sürüş yapacaksınız. Çam kokulu ormanların içinden geçecek, küçük dereleri aşacak ve fotoğraf çekimi için manzaralı bir noktada kısa bir mola vereceksiniz. Bu, doğayla daha yavaş bir tempoda bağlantı kurmanızı sağlayan terapötik bir deneyimdir.",
          highlights: ["Uysal ve Eğitimli Atlar", "Manzaralı Dağ Patikaları", "Çam Ormanı Sürüşü", "Profesyonel Binicilik Rehberi", "Fotoğraf Molaları"], 
          included: ["Size Özel At", "Binicilik Ekipmanı", "Uzman Rehber", "Kısa Eğitim", "Transfer"] 
        },
        { 
          slug: "night-jeep-safari", 
          name: "Toros Dağları Gün Batımı & Gece Safari", 
          price: "€45", 
          duration: "5 Saat", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/31c5b512-0b91-4762-8b51-4d8ef2c7e645_c35d5ee1-4e4d-4d53-92a0-57f22e041aec_.webp", "https://cdn.vigotours.com/23898/conversions/187-1770148388-698252242f4a3-gallery.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/5dc9d110c84b5.jpeg"], 
          desc: "Yıldızlar altında Toros Dağları'nı müzik ve off-road eğlencesiyle keşfedin.", 
          longDesc: "Güneş batmaya başladığında asıl macera başlar. Gece Jip Safarimiz sizi farklı bir heyecan için Toros Dağları'na götürür. Üstü açık 4x4 jiplerle Alanya şehri ve Akdeniz üzerinden gün batımını izlemek için panoramik seyir noktalarına sürüyoruz. Serin dağ havası ve aşağıda şehrin parıldayan ışıkları büyülü bir atmosfer yaratır. Tur, dağ restoranında lezzetli bir akşam yemeğini ve ardından müzik ve ateş dansı gösterisini içerir. Gündüz sıcağından kurtulup Alanya'nın vahşi yüzünü gece deneyimlemek için mükemmel bir yoldur.",
          highlights: ["Toros Dağları Gün Batımı Manzarası", "Gece Off-road Sürüşü", "Dağ Restoranında Akşam Yemeği", "Canlı Eğlence & Ateş Şovu", "Yıldızlı Panoramik Görünüm"], 
          included: ["Otelden Alma ve Bırakma", "4x4 Jip Ulaşımı", "Geleneksel Akşam Yemeği", "Rehberlik Hizmetleri", "Eğlence Şovu"] 
        },
        { 
          slug: "land-of-legends", 
          name: "The Land of Legends Tema Park", 
          price: "€80", 
          duration: "Tüm Gün", 
          images: ["https://www.alanya-tours.com/public/content/images/Tours/49/big/The-Land-of-Legends-Theme-Park-from-Alanya_175671848968b56599334b0.webp", "https://www.touralanya.com/TurResimleri/031813landoflegandstripsfromalanya.jpeg"], 
          desc: "40'tan fazla kaydırak ve inanılmaz hız trenleri ile Türkiye'nin en büyük tema parkı.", 
          longDesc: "Fantezi ve macera dünyasına adım atın. The Land of Legends sadece bir tema parkı değil; devasa bir su parkı (Kingdom of Sea) ve bir tema parkı (Adventure Park) içeren dev bir eğlence kompleksidir. 62 metre yüksekliğindeki Hyper Coaster'a meydan okuyun, 525 metre uzunluğundaki Typhoon Coaster'ı deneyimleyin veya dalga havuzunda rahatlayın. Park ayrıca inanılmaz yunus ve beyaz balina gösterilerine ev sahipliği yapar. Akşamları 'Château' alanı muhteşem bir tekne geçit töreni ve müzikli ışık şovuyla dönüşür. Tüm aile için adrenalin, su eğlencesi ve büyülü hikaye anlatımını birleştiren dünya standartlarında bir deneyimdir.",
          highlights: ["Hyper Coaster (62m Yükseklik)", "Devasa Su Parkı Alanı", "Yunus & Fok Gösterileri", "5. Boyut Sinema", "Efsanevi Tekne Geçit Töreni"], 
          included: ["Tüm Günlük Giriş Bileti", "Su Parkına Erişim", "Adrenalin Üniteleri", "Yunus Şovu Erişimi", "Dönüş Transferi"] 
        },
        { 
          slug: "diving", 
          name: "Akdeniz Tüplü Dalış Keşfi (Scuba Diving)", 
          price: "€45", 
          duration: "6 Saat", 
          images: ["https://www.biraztatil.com/uploads/project_image/webp/alanya-tuplu-dalis-67459101413ee-276.webp", "https://alanyaextreme.com/wp-content/uploads/2025/01/tuplu-dalis-alanya.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Diving-Tour-Tursay-Travel-13.webp"], 
          desc: "Profesyonel eğitmenler eşliğinde Alanya'nın su altı dünyasını keşfedin.", 
          longDesc: "Akdeniz'in gizli hazinelerini keşfedin. İster yeni başlayan ister deneyimli bir dalgıç olun, Alanya kristal berraklığında sular ve çeşitli deniz yaşamı sunar. Turumuz, PADI/CMAS sertifikalı eğitmenler tarafından ekipman ve dalış teknikleri üzerine detaylı bir bilgilendirme ile başlar. Tekneyle su altı mağaraları ve resifleri içeren iki farklı dalış noktasına gidiyoruz. Renkli balıklar, ahtapotlar ve hatta deniz kaplumbağalarıyla birlikte yüzeceksiniz. Yeni başlayanlar için ilk dalış, ekipmana alışmak için sığ bir keşif dalışıdır. Öğle yemeği dalışlar arasında teknede servis edilir. Derin maviliğin sessizliğinde unutulmaz bir deneyimdir.",
          highlights: ["İki Farklı Dalış Noktası", "Su Altı Mağara Sistemi", "Profesyonel PADI/CMAS Rehberler", "Tam Modern Ekipman", "Tekne Turu ve Yemek"], 
          included: ["Tüm Profesyonel Ekipmanlar", "İki Rehberli Dalış", "Teknede Öğle Yemeği", "Sigorta", "Otel Transferi"] 
        }
      ]
    },
    contact: { title: "Bize Ulaşın", connectTitle: "İletişim", contactDesc: "Bize yazın.", name: "Ad Soyad", email: "E-posta", phone: "Telefon", message: "Mesaj", send: "Gönder", whatsapp: "WhatsApp" },
    testimonials: { title: "Müşteri Hikayeleri", list: [
      { name: "Ahmet Yılmaz", text: "Pamukkale turu ile harika bir deneyim!", role: "Gezgin" },
      { name: "Ayşe Kaya", text: "Lüks araçlar ve profesyonel hizmet.", role: "CEO" },
      { name: "Mehmet Demir", text: "Antalya'daki en iyi araç kiralama.", role: "İş İnsanı" }
    ]},
    whyUs: { title: "Neden Boss Tour?", items: [
      { title: "Premium Filo", desc: "Konforunuz için en üst düzey araçlar." },
      { title: "Uzman Rehberler", desc: "En iyi turlar için yerel bilgi." },
      { title: "7/24 Destek", desc: "Her zaman yanınızdayız." }
    ]},
    modal: { book: "Hemen Rezerve Et", confirm: "Onaylandı", confirmDesc: "Talebiniz alınmıştır.", name: "Ad Soyad", hotel: "Otel", roomNo: "Oda No" }
  },
  de: {
    nav: { home: "Startseite", tours: "Touren", fleet: "Fuhrpark", transfer: "Transfer", realEstate: "Immobilien", about: "Über Uns", services: "Erlebnis" },
    hero: { title: "Abenteuer in Antalya erwartet Sie", subtitle: "Entdecken Sie die türkisfarbene Küste mit Boss Tour. Premium Touren und Luxusfahrzeuge.", cta: "Auto mieten", cta2: "Touren ansehen", explore: "ENTDECKEN", cta3: "VIP Transfer" },
    fleet: { title: "Unsere Premium-Flotte", subtitle: "Moderne Fahrzeuge für jede Reise.", viewAll: "Gesamte Flotte", viewDetails: "Details ansehen", bookNow: "Jetzt buchen", cars: [
      { name: "Fiat Egea", price: "€45", images: ["https://s3.eu-central-1.amazonaws.com/static.obilet.com/RentACar/Vehicle/Images/fiat-egea-sedan.png"], features: ["Benzin", "Manuell", "5 Sitze"] },
      { name: "Renault Clio", price: "€40", images: ["https://s3.eu-central-1.amazonaws.com/static.obilet.com/RentACar/Vehicle/Images/renault-clio-hatchback-5-kapi.png"], features: ["Benzin", "Auto", "5 Sitze"] },
      { name: "Fiat Egea Cross", price: "€50", images: ["https://cdn2.enuygun.com/media/lib/500x300/uploads/image/egea-cross-54386.webp"], features: ["Diesel", "Manuell", "5 Sitze"] },
      { name: "Citroen C3", price: "€43", images: ["https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png"], features: ["Benzin", "Auto", "5 Sitze"] },
      { name: "Suzuki Jeep (Retro)", price: "€70", images: ["https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg"], features: ["Benzin", "Manuell", "4 Sitze"] },
      { name: "Hyundai i20", price: "€45", images: ["https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420"], features: ["Benzin", "Auto", "5 Sitze"] },
      { name: "Ford Custom", price: "€90", images: ["https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp"], features: ["Diesel", "Manuell", "9 Sitze"] },
      { name: "ATV CF Moto (4x4)", price: "€55", images: ["https://images5.1000ps.net/images_bikekat/2022/177-CFMOTO/9384-CForce_850_V2_EFI_4x4_XL_DLX/001-637777561929389735-cfmoto-cforce-850-v2-efi-4x4-xl-dlx.jpg?format=webp&quality=80&trim.threshold=80&trim.percentpadding=1&scale=both&width=1900&height=1156&bgcolor=rgba_39_42_44_0&mode=pad"], features: ["Benzin", "Automatik", "4x4", "2 Sitze"] },
      { name: "Elektrisches Dreirad", price: "€25", images: ["https://bikestore.becdn.net/assets/images/product/16/stmax-gf400-kirmizi-1_940531602.jpg"], features: ["100% Elektrisch", "Kein Führerschein", "2 Sitze"] }
    ]},
    realEstate: { title: "Exklusive Immobilien", subtitle: "Finden Sie Ihr Traumhaus mit Boss Tour.", list: [] },
    transfer: { 
      title: "VIP-Transfers", 
      subtitle: "Komfortable Reisen zu Ihrem Ziel.", 
      list: [
        { 
          name: "Mercedes Vito VIP", 
          price: "€70", 
          images: ["/images/transfers/vito.png"], 
          desc: "Premium Flughafen- und Überlandtransfers mit Komfort.",
          capacity: "1-9 Personen",
          longDesc: "Erleben Sie ultimativen Komfort mit unserem Standard-VIP-Mercedes Vito. Perfekt für kleine Gruppen oder Familien, mit Ledersitzen und geräumigem Interieur.",
          highlights: ["Premium-Ledersitze", "Geräumiger Innenraum", "Klimaanlage", "Sichtschutzglas"],
          included: ["Professioneller Fahrer", "Gepäckunterstützung", "Kostenloses Wi-Fi", "Erfrischungsgetränke"]
        },
        { 
          name: "Mercedes Vito Maybach Edition", 
          price: "€120", 
          images: ["/images/transfers/maybach.png"], 
          desc: "Der Inbegriff für luxuriöses Reisen. Präsidialer Standard.",
          capacity: "1-5 Personen",
          longDesc: "Unsere Maybach Edition Vito definiert Luxus neu. Mit Massagesitzen, Ambientebeleuchtung und High-End-Entertainment-Systemen ist er für diejenigen konzipiert, die das Beste suchen.",
          highlights: ["Sternenhimmel-Decke", "Massage- & Liegesitze", "Premium-Soundsystem", "Private Trennwand"],
          included: ["Kalter Champagner/Getränke", "VIP-Assistenz", "Exklusiver Concierge", "Ultraschnelles Wi-Fi"]
        }
      ] 
    },
    tours: {
      title: "Exklusive Touren & Aktivitäten",
      subtitle: "Die besten Erlebnisse in Antalya & Umgebung.",
      highlightsLabel: "Höhepunkte",
      includedLabel: "Inklusive Leistungen",
      list: [
        { 
          slug: "pamukkale", 
          name: "Pamukkale & Salda See (Weißes Paradies)", 
          price: "€45", 
          duration: "13 Stunden", 
          images: ["https://cdn.getyourguide.com/img/location/49d723a60f36e112.jpeg/99.jpg", "https://www.barcelo.com/guia-turismo/wp-content/uploads/pamukkale.jpg"], 
          desc: "Weiße Sinterterrassen, die antike Stadt Hierapolis und das türkische Malediven-Feeling am Salda See.", 
          longDesc: "Begleiten Sie uns auf eine unvergessliche Reise zum 8. Weltwunder: Pamukkale. Dieses UNESCO-Welterbe ist weltberühmt für seine schneeweißen Kalksinterterrassen, die über Jahrtausende durch kalkhaltiges Thermalwasser geformt wurden. Sie können barfuß über diese natürlichen Stufen wandern und das heilende Wasser spüren. Unsere Tour führt uns weiter zur antiken Stadt Hierapolis, dem bedeutendsten Thermalzentrum der römischen Zeit. Hier besichtigen Sie das gigantische antike Theater, die größte Nekropole Anatoliens und den berühmten Kleopatra-Pool, in dem Sie zwischen antiken Säulen schwimmen können. Am Nachmittag besuchen wir den Salda See, der mit seinem kristallklaren, türkisfarbenen Wasser und dem weißen Magnesiumsand als 'Malediven der Türkei' bekannt ist. Ein perfekter Ort für traumhafte Fotos und ein erfrischendes Bad in einem der saubersten Seen der Welt.",
          highlights: ["Weiße Kalkterrassen", "Antike Stadt Hierapolis", "Salda See (Türkische Malediven)", "Antiker Kleopatra-Pool", "Römisches Theater von Hierapolis"], 
          included: ["Luxus-Hoteltransfer", "Professionelle Reiseleitung", "Offenes Mittagsbuffet", "Klimatisierter Transport", "Eintritt Salda See"] 
        },
        { 
          slug: "kekova", 
          name: "Kekova – Demre – Myra (Versunkene Stadt Expedition)", 
          price: "€50", 
          duration: "11 Stunden", 
          images: ["https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PE7wwOiCWscwlqcEpg2A_pvpGnfmQROdLw&s", "https://gunluktur.net/wp-content/uploads/2021/12/tourbooking-turkey.jpeg"], 
          desc: "Eine historische Reise zu den versunkenen Ruinen und dem Erbe des Heiligen Nikolaus.", 
          longDesc: "Diese Tour wurde für Geschichts- und Naturliebhaber konzipiert, um die verborgenen Schätze der lykischen Küste zu entdecken. Wir starten in Demre mit dem Besuch der St.-Nikolaus-Kirche, in der der echte Weihnachtsmann lebte und wirkte. Die byzantinischen Fresken werden Sie beeindrucken. Weiter geht es zur antiken Stadt Myra, bekannt für ihre beeindruckenden lykischen Felsengräber, die direkt in die steilen Felswände gemeißelt wurden. Der absolute Höhepunkt ist die Bootsfahrt zur versunkenen Stadt Kekova. Durch den Glasboden des Bootes oder das klare Wasser können Sie die überfluteten Ruinen, Treppen und Mauern einer 2000 Jahre alten Zivilisation sehen. Während der Fahrt legen wir Badepausen in traumhaften Buchten wie der Aquarium-Bucht ein, um das azurblaue Wasser des Mittelmeers zu genießen.",
          highlights: ["Bootstour mit Glasboden", "Versunkene Stadt Kekova", "Lykische Felsengräber in Myra", "St.-Nikolaus-Gedächtniskirche", "Baden in türkisfarbenen Buchten"], 
          included: ["Transfer ab Hotel", "Exklusive Bootstour", "Alle Eintrittskarten", "Mittagsbuffet an Bord", "Reiseversicherung"] 
        },
        { 
          slug: "cappadocia", 
          name: "Kappadokien: Eine Märchenreise (2 Tage)", 
          price: "€120", 
          duration: "2 Tage", 
          images: ["https://blog.obilet.com/wp-content/uploads/2018/10/kapadokya.jpg"], 
          desc: "Erleben Sie die Magie der Feenkamine, unterirdischen Städte und Heißluftballons.", 
          longDesc: "Tauchen Sie ein in eine world, die wie von einem anderen Planeten wirkt. Unsere 2-tägige Kappadokien-Tour lässt Sie den Geist dieser mystischen Region hautnah spüren. Am 1. Tag erkunden wir das Freilichtmuseum von Göreme mit seinen beeindruckenden felsen Kirchen aus dem Mittelalter. Im Tal der Mönche (Pasabag) sehen Sie die ikonischen dreiköpfigen Feenkamine, und am Nachmittag steigen wir in eine der riesigen unterirdischen Städte hinab, die früher als Zufluchtsort dienten. Der 2. Tag beginnt auf Wunsch vor Sonnenaufgang mit einer der berühmtesten Aktivitäten weltweit: einer Heißluftballonfahrt (optional). Hunderte bunte Ballons am Morgenhimmel zu sehen, ist ein magischer Moment. Wir besuchen zudem die Burg von Uçhisar für einen Panoramablick über die gesamte Region. Sie übernachten in einem authentischen Höhlen- oder Stein-Hotel, um die Atmosphäre Kappadokiens voll auszuschöpfen.",
          highlights: ["Freilichtmuseum Göreme", "Feenkamine von Pasabag", "Beeindruckende Untergrundstadt", "Panoramafestung Uçhisar", "Devrent (Imagination) Valley"], 
          included: ["Übernachtung in Boutique-Hotel", "Abendessen & Frühstücksbuffet", "Fachkundiger Reiseleiter", "Komfortabler VIP-Transport", "Dorfbesichtigungen"] 
        },
        { 
          slug: "lavanta-garden", 
          name: "Lavendel-Träume & Salda-Magie", 
          price: "€40", 
          duration: "12 Stunden", 
          images: ["https://burdur.com.tr/wp-content/uploads/2022/03/MKXT0132.jpg"], 
          desc: "Die endlosen lila Felder von Kuyucak und der weiße Zauber des Salda Sees.", 
          longDesc: "Möchten Sie in eine Welt voller Farben und Düfte entfliehen? In den Sommermonaten verwandelt sich das Dorf Kuyucak in ein lila schimmerndes Meer aus Lavendel. Auf unserer Tour können Sie durch diese aromatischen Felder spazieren, etwas über die Gewinnung von Lavendelöl lernen und die besten Fotos Ihres Lebens machen. Die Dorfbewohner erwarten Sie mit hausgemachtem Lavendeltee und Souvenirs. Der zweite Teil der Tour führt zum Salda See, einem der schönsten Naturgebiete der Türkei. Dank seines hohen Magnesiumgehalts verfügt der See über strahlend weißen Sand und leuchtend türkisfarbenes Wasser. Entspannen Sie am Ufer, schwimmen Sie im heilenden Wasser und finden Sie Ruhe in diesem geschützten Naturpark. Diese Tour ist ein Balsam für die Sinne und perfekt für eine Auszeit in der Natur.",
          highlights: ["Lavendelfelder Fotoshooting", "Kuyucak Dorferlebnis", "Baden im Salda See", "Verkostung von Lavendelprodukten", "Naturspaziergang"], 
          included: ["Kompletter Transferservice", "Professionelle Reiseleitung", "Traditionelles Mittagessen", "Eintrittspreise für Naturparks"] 
        },
        { 
          slug: "side-manavgat", 
          name: "Antike Trilogie: Side – Aspendos – Manavgat", 
          price: "€45", 
          duration: "9 Saat", 
          images: ["https://calista.com.tr/media/3jhj2jz0/aspendos006-1170x650.jpg?format=webp&quality=85", "https://www.gezire.com/wp-content/uploads/2025/10/Manavgat-Selalesi-764x500.jpg", "https://www.kulturportali.gov.tr/contents/images/SELEUK%20(4).JPG"], 
          desc: "Die Pracht der römischen Architektur und die Frische der Wasserfälle.", 
          longDesc: "Begeben Sie sich auf eine Reise in das goldene Zeitalter des Römischen Reiches. Unser erster Halt ist das am besten erhaltene römische Theater der Welt: Aspendos. Das im 2. Jahrhundert n. Chr. erbaute Theater besitzt eine akustische Perfektion, die noch heute für internationale Festivals genutzt wird. Weiter geht es in die antike Hafenstadt Side. Schlendern Sie durch die von Säulen gesäumten Straßen und besichtigen Sie den Apollon-Tempel direkt am Meer, wo sich laut Legende Antonius und Kleopatra trafen. Zum Abschluss genießen wir eine erfrischende Pause am Manavgat Wasserfall. Er ist zwar nicht besonders hoch, bietet aber durch seine enorme Breite ein beeindruckendes Naturschauspiel. Genießen Sie Ihren Kaffee am Flussufer und lassen Sie die mediterrane Brise auf sich wirken. Diese Tour verbindet archäologische Wunder ideal mit natürlicher Erholung.",
          highlights: ["Römisches Theater Aspendos", "Apollon-Tempel in Side", "Manavgat Wasserfall", "Antike Hafenstadt Side", "Antikes Theater-Museum"], 
          included: ["Hin- und Rücktransfer", "Historiker als Reiseleiter", "Mittagessen am Fluss", "Eintrittsgelder Aspendos & Side"] 
        },
        { 
          slug: "city-tour", 
          name: "Alanya Panorama Stadt- & Burgtour", 
          price: "30", 
          duration: "4 Stunden", 
          images: ["https://upload.wikimedia.org/wikipedia/commons/8/85/Alanyafromcastle.JPG", "https://cmsal.argeya.com/Content/CompanyFiles/SliderResimleri/Alanya-Buyuk-Hotel-Genel-269043.jpg"], 
          desc: "Das Beste von Alanya: Burg, Seilbahn, Höhle und Sonnenuntergang.", 
          longDesc: "Entdecken Sie auf dieser umfassenden Stadttour, warum Alanya als Perle der türkischen Riviera gilt. Wir beginnen am weltberühmten Kleopatra-Strand mit einer Fahrt in der Seilbahn (Teleferik) hinauf zur Burg von Alanya. Von den Burgmauern genießen Sie einen 360-Grad-Blick auf den Hafen, den Leuchtturm und das Taurusgebirge. Wir besichtigen die historische Werft aus dem 13. Jahrhundert, den Roten Turm (Kizil Kule) und die Zitadelle. Ein weiterer Halt ist die Damlatas-Höhle, die 1948 durch Zufall entdeckt wurde und für ihre heilende Luft bei Asthmapatienten bekannt ist. Die Tour endet am 'I Love Alanya' Aussichtspunkt, von wo aus Sie den schönsten Sonnenuntergang über der Stadt erleben können.",
          highlights: ["Seilbahnfahrt zur Burg", "Burg von Alanya Erkundung", "Damlatas-Höhle Besichtigung", "Kleopatra-Strand Panorama", "Foto-Stopp an der Aussichtsterrasse"], 
          included: ["Abholung & Rücktransfer", "Seilbahntickets inklusive", "Professioneller Stadtführer", "Eintritt Damlatas-Höhle"] 
        },
        { 
          slug: "mix-adventure", 
          name: "Legendäre Mix-Abenteuer (3-in-1 Adrenalin)", 
          price: "€55", 
          duration: "8 Stunden", 
          images: ["https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=1210,dpr=1/tour_img/640b4d905f5e4.png", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=755,dpr=1/tour_img/5b8b721278a099cfddd9975af2c8dd627c2259fd05374f4f7efa7ef96e0b5775.png"], 
          desc: "Wildwasser-Rafting, Zipline und Atv/Buggy-Safari in einer Schlucht.", 
          longDesc: "Für alle, die Action lieben, ist diese Tour das Nonplusultra! Wir bringen Sie in den Köprülü-Kanyon-Nationalpark, das Herz des Abenteuersports in der Türkei. Ihr Tag beginnt mit einer 14 Kilometer langen, spannenden Rafting-Tour auf dem Köprücay Fluss. Unter Anleitung professioneller Instruktoren bezwingen Sie die Wellen. Mitten im Fluss machen wir eine Pause für den nächsten Kick: Zipline! Sie schweben wie ein Vogel über den Fluss. Nach einem stärkenden Mittagessen am Ufer wechseln wir zur Safari. Auf schlammigen und unebenen Wegen durch Pinienwälder geben Sie mit dem ATV oder Buggy ordentlich Gas. Diese Tour verspricht die maximale Dosis Spaß und Adrenalin an nur einem einzigen Tag.",
          highlights: ["14km Rafting-Strecke", "Zipline über den Canyon", "Off-road Safari (Buggy/ATV)", "Sprung ins kühle Nass", "Fotostopp am Tazi Canyon"], 
          included: ["Komplette Schutzausrüstung", "Professionelle Guides", "Gegrilltes Mittagessen", "Alle Transfers", "Unfallversicherung"] 
        },
        { 
          slug: "rafting", 
          name: "Köprüçay Rafting-Abenteuer", 
          price: "€35", 
          duration: "6 Stunden", 
          images: ["https://cmsal.argeya.com/Content/CompanyFiles/YazilarYeniImg/alanya-rafting.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Buggy-Rafting-Zipline-Tour-Tursay-Travel-13.webp"], 
          desc: "Stürzen Sie sich ins Abenteuer auf dem türkisfarbenen Wasser des Köprülü Canyons.", 
          longDesc: "Schnappen Sie sich ein Paddel und machen Sie sich bereit, nass zu werden! Rafting auf dem Köprücay-Fluss ist das beliebteste Abenteuer in der Region Antalya – und das aus gutem Grund. Der Fluss fließt unter antiken römischen Brücken hindurch, mitten durch das Herz eines wunderschönen Nationalparks. Die Tour beginnt mit einer ausführlichen Sicherheitseinweisung und der Ausgabe der Ausrüstung. Dann steigen wir in Boote für 8-10 Personen oder für die Mutigeren in 2er-Kanus. Die Strecke ist 14 km lang und bietet spannende Stromschnellen. Zwischendurch haben Sie die Möglichkeit, in das eiskalte, aber kristallklare Wasser zu springen. Unsere Guides sorgen mit Spielen und Animationen für zusätzliche Unterhaltung. Am Ende der Tour erwartet Sie ein frisch zubereitetes Mittagessen direkt am Fluss.",
          highlights: ["14km Professionelles Rafting", "Antike Römerbrücke Besichtigung", "Body-Rafting-Einheiten", "Baden im eiskalten Fluss", "Lustige Gruppenspiele"], 
          included: ["Helm & Schwimmweste", "Boot & Paddel", "Erfahrener Bootsführer", "Mittagessen am Fluss", "Hoteltransfer"] 
        },
        { 
          slug: "jeep-safari", 
          name: "Taurusgebirge Jeep-Safari & Dimfluss", 
          price: "€40", 
          duration: "7 Stunden", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/31c5b512-0b91-4762-8b51-4d8ef2c7e645_c35d5ee1-4e4d-4d53-92a0-57f22e041aec_.webp", "https://cdn.vigotours.com/23898/conversions/187-1770148388-698252242f4a3-gallery.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/5dc9d110c84b5.jpeg"], 
          desc: "Wasserschlachten, Berggipfel und Entspannung am Dimfluss.", 
          longDesc: "Das ist nicht nur eine Tour, sondern eine große Party auf Rädern! Wir steigen in offene 4x4 Land Rover Jeeps und fahren hinauf in das majestätische Taurusgebirge. Machen Sie sich bereit für actionreiche Wasserschlachten zwischen den Fahrzeugen! Wir halten an Panoramapunkten mit Blick auf ganz Alanya. Wir besuchen eine traditionelle Dorfmoschee, lernen die lokale Kultur kennen und probieren saisonale Früchte direkt in den Gärten. Der entspannteste Teil ist unser Aufenthalt am Dimfluss. Während Sie an Tischen direkt im kühlen Wasser sitzen, genießen Sie Ihr Mittagessen. Sie können von Sprungplattformen in den Fluss springen, sich auf Wasserbetten ausruhen oder in unserer Anlage angeln. Ein Tag voller Lachen, Natur und kultureller Entdeckungen erwartet Sie.",
          highlights: ["Wasserschlachten zwischen den Jeeps", "Off-road-Strecken im Taurus", "Essen an Tischen im Wasser", "Besuch in einem traditionellen Dorf", "Obstgarten-Verkostung"], 
          included: ["4x4 Jeep Komfort", "Mittagessen am Fluss", "Unterhaltsame Safari-Guides", "Eintritt in Dorfhäuser"] 
        },
        { 
          slug: "sapadere-canyon", 
          name: "Sapadere Schlucht: Das verborgene Paradies", 
          price: "€45", 
          duration: "8 Stunden", 
          images: ["https://www.kulturportali.gov.tr/contents/images/sapanderekanyonulogolu_20180914111051287.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Sapadere-Canyon-Tour-Tursay-Travel-13.webp"], 
          desc: "Ein Holzsteg durch die Schlucht und eiskalte Wasserfälle.", 
          longDesc: "Entfliehen Sie der Sommerhitze und lassen Sie sich von der erfrischenden Atmosphäre der Sapadere-Schlucht verzaubern. Nur 40 km von Alanya entfernt, wurde dieser Ort erst 2008 für den Tourismus erschlossen und hat sich seine unberührte Schönheit bewahrt. Auf einem 750 Meter langen Holzsteg wandern Sie durch die Schlucht und bestaunen die gewaltigen Felswände zu beiden Seiten. Zahlreiche kleine und große Wasserfälle begleiten Ihren Weg. Die Mutigsten unter Ihnen können in den natürlichen Becken schwimmen – selbst im Hochsommer steigt die Wassertemperatur selten über 12 Grad! Nach der Schlucht besuchen wir das Dorf Sapadere, wo noch immer traditionelle Seidenweberei betrieben wird. Außerdem erkunden wir die 'Zwergenhöhle' (Cüceler Mağarası) mit ihren beeindruckenden Stalaktiten und Stalagmiten.",
          highlights: ["Wanderung auf dem Holzsteg", "Schwimmen im Wasserfall", "Besuch der Zwergenhöhle", "Seidenweberei-Vorführung", "Traditionelle Dorftour"], 
          included: ["Transferservice", "Alle Eintrittsgelder", "Reiseleitung", "Mittagessen im Gartenrestaurant"] 
        },
        { 
          slug: "quad-safari", 
          name: "ATV-Safari-Abenteuer", 
          price: "€40", 
          duration: "3 Stunden", 
          images: ["https://cloudbasetravel.com/wp-content/uploads/2021/06/ATV-Safari-1.jpeg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Quad-Atv-Safari-Tour-Tursay-Travel-1.webp"], 
          desc: "Staub, Schlamm und pure Erheiterung in den Tauruswäldern.", 
          longDesc: "Verlassen Sie den Lärm der Stadt und übernehmen Sie die Kontrolle über Ihr eigenes Fahrzeug in den rauen Bergen des Taurusgebirges! Unsere ATV-Safari bietet Ihnen Adrenalin und Natur pur. Unter Anleitung unserer professionellen Guides durchfahren Sie technische Strecken durch Pinienwälder, meistern staubige Pisten und Schlammpfützen. Ein Führerschein ist nicht erforderlich; nach einer kurzen Einweisung kann jeder sein eigenes Quad steuern. Bei einer Pause am Fluss können Sie sich den Staub abwaschen und im kühlen Wasser erfrischen. Die aufregendste Art, die Wildnis von Alanya zu entdecken!",
          highlights: ["Fahrspaß mit dem eigenen Quad", "Technische Waldstrecken", "Schlammige Passagen", "Erholungspause am Fluss", "High-Speed-Etappen"], 
          included: ["ATV-Quad & Kraftstoff", "Schutzhelm", "Einweisung & Training", "Fachkundige Begleitung", "Transfer"] 
        },
        { 
          slug: "zipline", 
          name: "Riesen-Zipline-Nervenkitzel", 
          price: "€25", 
          duration: "2 Stunden", 
          images: ["https://www.schweitzer.com/-/media/schweitzer/summer-activities/schweitzer-zipline-1920x1080.jpg?rev=9c2e8f672b1541d3b31d2b74f3db9b7f?h=1080&w=1920&hash=E7706D1B10547CE9104FCB35BC95DD16"], 
          desc: "Gleiten Sie wie ein Vogel über den Canyon.", 
          longDesc: "Fordern Sie die Schwerkraft heraus und genießen Sie das Gefühl von Freiheit! Auf der höchsten und längsten Zipline-Anlage der Region gleiten Sie wie ein Adler über das atemberaubende Panorama des Tazi Canyons. Nachdem unser professionelles Team Sie sorgfältig mit Sicherheitsgurten ausgestattet hat, lassen Sie sich ins Leere fallen und fliegen mit hoher Geschwindigkeit ans andere Ende der Schlucht. Dieses kurze, aber intensive Adrenalin-Erlebnis wird zu einer unvergesslichen Erinnerung an Ihren Urlaub. Dank unseres Doppelseilsystems nach höchsten Sicherheitsstandards können Sie sich voll und ganz auf die Aussicht und den Speed konzentrieren.",
          highlights: ["Lange Flugstrecke", "Canyon-Panorama", "High-Speed-Adrenalin", "Internationale Sicherheitsstandards"], 
          included: ["Zipline-Ausrüstung", "Sicherheitseinweisung", "Betreuung durch Fachpersonal"] 
        },
        { 
          slug: "paragliding", 
          name: "Gleitschirmfliegen: Flug über Alanya", 
          price: "€75", 
          duration: "2 Stunden", 
          images: ["https://www.talyatur.com/images/tour/105418_b.jpg", "https://cdn.getyourguide.com/img/tour/e810d4a42de4ba2a359f6f25116205e419dba160cf49862c412bff4a32843011.jpg/99.jpg"], 
          desc: "Ein unvergesslicher Flug aus 700 Metern Höhe zum Kleopatra-Strand.", 
          longDesc: "Dies ist die friedlichste und faszinierendste Art, Alanya zu sehen. Wir bringen Sie zum Gipfel 'Yassi Tepe' auf 700 Metern Höhe. Dort lernen Sie Ihren Tandem-Piloten kennen, der alle technischen Details des Fluges übernimmt. Nach ein paar Schritten Anlauf heben Sie ab und treffen auf den Himmel. Etwa 20-30 Minuten lang gleiten Sie lautlos über das türkisfarbene Mittelmeer, die imposante Burg von Alanya und den weißen Kleopatra-Strand. Wenn Sie möchten, kann Ihr Pilot akrobatische Manöver einbauen, um den Adrenalinspiegel zu steigern. Ihr Flug endet mit einer sanften Landung auf dem feinen Sand des Kleopatra-Strandes. Ein Erlebnis wie aus dem Bilderbuch!",
          highlights: ["Start aus 700m Höhe", "Landung am Kleopatra-Strand", "Panorama von Burg und Meer", "Professioneller Tandem-Pilot", "Foto/Video-Option während des Fluges"], 
          included: ["Hoteltransfer", "Flugausrüstung", "Erfahrener Pilot", "Flugversicherung", "Briefing"] 
        },
        { 
          slug: "luxury-boat", 
          name: "Piraten-Bootstour & Schaumparty", 
          price: "€40", 
          duration: "6 Stunden", 
          images: ["https://www.dailytoursinalanya.com/Content/images/tours/32/alanya-pirate-boat-tour-6-hd.webp"], 
          desc: "Höhlen, Badestopps und eine große Bord-Party.", 
          longDesc: "Ein klassischer Tag auf dem Mittelmeer erwartet Sie! Unser Schiff im Piraten-Design sticht am historischen Hafen von Alanya in See und gleitet entlang des Roten Turms und der alten Werft. Wir umrunden die Halbinsel der Burg von Alanya und besuchen die Piratenhöhle, die Liebeshöhle und die Phosphorhöhle, in der das Wasser magisch leuchtet. Während der Tour legen wir zahlreiche Badestopps in kristallklaren Buchten ein. An Bord sorgt unser Animationsteam mit Musik, Spielen und einer riesigen Schaumparty auf dem Rückweg für beste Stimmung. Ein frisch zubereitetes Mittagessen vom Grill und unbegrenzt alkoholfreie Getränke sind im Preis enthalten. Perfekt für Familien und Gruppen!",
          highlights: ["Historische Hafenrundfahrt", "Erkundung der Meereshöhlen", "Schaumparty & Animation", "Traumhafte Badestopps", "BBQ-Genuss an Bord"], 
          included: ["Bootstour", "Grill-Mittagessen", "Alkoholfreie Getränke", "Animationsprogramm", "Hoteltransfer"] 
        },
        { 
          slug: "fishing", 
          name: "Morgendliches Hochseefischen", 
          price: "€40", 
          duration: "6 Stunden", 
          images: ["https://www.albashop.com.tr/Data/EditorFiles/En_Dog__ru_Bal__k_Av___Zaman___Nas__l_Belirlenir__3.jpg"], 
          desc: "Friedlicher Vormittag auf See mit Profi-Ausrüstung.", 
          longDesc: "Möchten Sie der Mittagshitze und dem Trubel entfliehen und die friedlichste Zeit auf dem Meer genießen? Unser Fischerboot ist mit modernsten Echoloten zum Aufspüren von Fischen und hochwertigen Ruten ausgestattet. Egal, ob Sie Profi oder Anfänger sind, unser erfahrener Kapitän bringt Sie zu den Stellen, an denen Doraden, Wolfsbarsche und andere Köstlichkeiten am zahlreichsten sind. Genießen Sie den Sonnenaufgang und den Blick auf die Küste, während Sie Ihre Angel auswerfen. An Bord erwarten Sie morgendlicher Tee und Erfrischungen. Ihren Fang können wir auf Wunsch direkt an Bord zubereiten – frischer geht es nicht!",
          highlights: ["Sonnenaufgang an der Küste", "Moderne Fischfinder-Technologie", "Hochwertige Angelruten", "Erfahrener Kapitän", "Erfrischungen & Tee"], 
          included: ["Angelausrüstung", "Köder", "Getränke & Tee", "Kapitän-Guiding", "Transport"] 
        },
        { 
          slug: "turkish-night", 
          name: "Orient-Express: Türkische Nacht Show", 
          price: "€45", 
          duration: "4 Stunden", 
          images: ["https://www.touralanya.com/TurResimleri/003837alanyaturkishnight.jpeg", "https://www.goreme.com/image/cache/catalog/Urunler/activities/turkish-night/turkish-night-show-134-900x600.jpg"], 
          desc: "Ein Fest der türkischen Kultur, Tänze und Küche.", 
          longDesc: "Wir laden Sie ein zu einer Nacht, die von den prächtigen Traditionen der Osmanen bis zur Energie der modernen Türkei reicht. Unsere Türkische Nacht ist eine energiegeladene Show mit professionellen Tänzern in authentischen Kostümen. Das Programm reicht von den wirbelnden Derwischen Mevlanas bis zu traditionellen Tänzen aus allen Regionen der Türkei und atemberaubenden Bauchtanzshows. Die Show ist interaktiv – oft werden Gäste eingeladen, auf der Bühne mitzumachen. Begleitet wird der Abend von einem reichhaltigen Menü mit traditionellen Mezes (Vorspeisen), Grillspezialitäten und türkischen Desserts. Mit unseren unbegrenzten lokalen Getränken bieten wir Ihnen eine Atmosphäre, in der Sie die Seele der Türkei voll spüren können.",
          highlights: ["Sufi-Derwisch-Tanz", "Regionale Folkloretänze", "Professionelle Bauchtanzshow", "Interaktive Bühnenshow", "Traditionelles Festmahl"], 
          included: ["Komplettes Abendessen", "Unbegrenzte lokale Getränke", "Alle Shows & Programme", "Rücktransfer"] 
        },
        { 
          slug: "turkish-bath", 
          name: "Traditionelles Hamam: Pure Entspannung", 
          price: "€30", 
          duration: "3 Stunden", 
          images: ["https://cdn.alanyatekmar.com/e6a4a96a-9fc4-442b-87df-a2fff0b99841.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Turkish-Bath-Hamam-Tour-Tursay-Travel-1.webp"], 
          desc: "Zeit für Erneuerung mit Peeling, Schaum und Ölmassage.", 
          longDesc: "Gönnen Sie sich eine jahrtausendealte Tradition für Gesundheit und Wohlbefinden. Ihr Hamam-Erlebnis beginnt in der Wärme des 'Göbek tasi' (Marmorstein), wo sich Ihre Poren öffnen. Aden folgt eine professionelle Peeling-Massage mit dem Seidenhandschuh (Kese). Es folgt eine himmlische Schaummassage inmitten riesiger Seifenblasenwolken. Unser Paket beinhaltet auch Zugang zur Salzgrotte, Sauna und zum Dampfbad. Zum Abschluss verwöhnen wir Sie im Ruheraum mit einem türkischen Tee, gefolgt von einer 20-minütigen Ganzkörper-Ölmassage durch unsere Experten. Wenn Sie das Hamam verlassen, werden Sie sich federleicht fühlen und von Ihrer samtweichen Haut begeistert sein.",
          highlights: ["Authentisches Marmor-Hamam", "Ganzkörper-Seidenpeeling", "Sanfte Schaummassage", "Entspannende Ölmassage", "Sauna & Salzgrotte inklusive"], 
          included: ["Peeling & Kese", "Schaummassage", "20 Min. Ölmassage", "Sauna & Salzgrotte", "Transfer"] 
        },
        { 
          slug: "aquapark", 
          name: "Wasserpark-Abenteuer & Riesenrutschen", 
          price: "€35", 
          duration: "Ganztägig", 
          images: ["https://www.aquafuncity.com/images/galeri/aqua1.jpg", "https://cdn.alanyatekmar.com/f48067f0-fc19-4515-8b5c-17b64703c6bf.jpg"], 
          desc: "Wasserspaß voller Adrenalin für jedes Alter.", 
          longDesc: "Erfrischen Sie sich und genießen Sie den ultimativen Spaß in einem der größten Wasserparks der Region! Fordern Sie sich auf riesigen Rutschen wie 'Kamikaze' oder 'Black Hole' heraus oder lassen Sie sich entspannt auf dem 'Lazy River' treiben. Der Park verfügt über mehr als 20 verschiedene Rutschen, ein riesiges Wellenbecken und sicher gestaltete Bereiche speziell für Kinder. Für Extrem-Fans ist die 'Rafting Slide' ein Muss. Großzügige Liegeflächen zum Sonnenbaden sowie Restaurants und Bars im Park sorgen für einen komfortablen Tag. Eine perfekte Familienaktivität, bei der Kinder ihre Energie auslassen und Erwachsene das Kind in sich wiederentdecken können.",
          highlights: ["Gigantische Adrenalin-Rutschen", "Großes Wellenbecken", "Lazy River zum Entspannen", "Sicherer Kinder-Splash-Bereich", "Professionelle Rettungsschwimmer"], 
          included: ["Ganztages-Eintrittsticket", "Alle Rutschen & Pools", "Sonnenliege & Schirm", "Hoteltransfer"] 
        },
        { 
          slug: "dolphin-show", 
          name: "Delfin & Seelöwen Show", 
          price: "€30", 
          duration: "3 Stunden", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/407fa665-6440-402c-bc91-0668a2ad1a1e_f2fd438e-2a26-48c0-ba4a-a6fb6c3652b1_.webp", "https://cmsal.argeya.com/Content/CompanyFiles/SliderResimleri/57b10374eb10bb1a58dd1a71.jpg"], 
          desc: "Faszinierende Shows mit den intelligentesten Bewohnern der Ozeane.", 
          longDesc: "Bereiten Sie sich darauf vor, von der unglaublichen Intelligenz und Agilität von Delfinen und Seelöwen beeindruckt zu werden. Unser Park beheimatet die am besten produzierten Delfin-Shows der Türkei. Bestaunen Sie ihre synchronen Tänze, Sprünge in meterhohe Höhen und sogar ihre 'Gemälde' auf Leinwand. Die Seelöwen werden Sie mit ihrem lustigen Verhalten und ihren Balanceakten zum Lachen bringen. Diese lehrreiche Show betont auch die Wichtigkeit des Schutzes der Meeresbewohner. Nach der Vorstellung haben Sie die Möglichkeit, diese freundlichen Tiere aus der Nähe kennenzulernen und Fotos zu machen. Ein emotionales Erlebnis für Kinder, das sie ihr Leben lang nicht vergessen werden.",
          highlights: ["Akrobatische Delfin-Show", "Lustige Seelöwen-Sketche", "Wissenswertes über Meereslebewesen", "Foto-Möglichkeit mit Tieren", "Familienfreundliche Zeiten"], 
          included: ["Eintrittskarte", "Sitzplatz in der Arena", "Hoteltransfer", "Reiseleitung"] 
        },
        { 
          slug: "horse-tour", 
          name: "Natur- und Strand-Pferdesafari", 
          price: "€40", 
          duration: "3 Stunden", 
          images: ["https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Horse-Riding-Tour-Tursay-Travel-13.webp", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Horse-Riding-Tour-Tursay-Travel-1.webp", "https://sencaptour.com/wp-content/uploads/2023/06/Alanya-At-binme-turu-4.webp"], 
          desc: "Ein friedlicher Ausritt auf dem Rücken der Pferde durch die Tauruswälder.", 
          longDesc: "Lassen Sie den Stadtlärm hinter sich und finden Sie auf dem Rücken der Pferde zu innerer Ruhe. Unsere Pferdesafari führt Sie über einzigartige Waldwege zu Bergpfaden mit Meerblick. Unsere Pferde sind bestens ausgebildet, sanftmütig und für alle Altersgruppen geeignet. Auch wenn Sie noch nie geritten sind, werden Sie nach einer kurzen Einweisung und unter Begleitung unserer Guides einen sicheren Ausritt genießen. Wir reiten durch pinien duftende Wälder, über kleine Bäche und machen an einem Hügel mit traumhafter Aussicht eine Fotopause. Das Reiten ist die ursprünglichste Art, sich mit der Natur zu verbinden. Die Bondung zu Ihrem Pferd und die Erhabenheit des Taurusgebirges machen diese Tour zu etwas ganz Besonderem.",
          highlights: ["Sanfte und geschulte Pferde", "Einzigartige Berg- und Waldwege", "Reiten durch Pinienwälder", "Professionelle Reitbegleitung", "Stopps für Naturfotografie"], 
          included: ["Ihrem Niveau angepasstes Pferd", "Reitausrüstung", "Fachkundige Führung", "Kurze Einweisung", "Transfer"] 
        },
        { 
          slug: "night-jeep-safari", 
          name: "Taurusgebirge Sonnenuntergang & Nacht-Safari", 
          price: "€45", 
          duration: "5 Stunden", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/31c5b512-0b91-4762-8b51-4d8ef2c7e645_c35d5ee1-4e4d-4d53-92a0-57f22e041aec_.webp", "https://cdn.vigotours.com/23898/conversions/187-1770148388-698252242f4a3-gallery.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/5dc9d110c84b5.jpeg"], 
          desc: "Erleben Sie das Taurusgebirge unter dem Sternenhimmel mit Musik und Offroad-Spaß.", 
          longDesc: "Wenn die Sonne untergeht, beginnt das wahre Abenteuer. Unsere Nacht-Jeep-Safari führt Sie in das Taurusgebirge für einen Nervenkitzel der besonderen Art. Wir fahren mit offenen 4x4-Jeeps zu Panoramapunkten, um den Sonnenuntergang über der Stadt Alanya und dem Mittelmeer zu beobachten. Die kühle Bergluft und die funkelnden Lichter der Stadt erzeugen eine magische Atmosphäre. Die Tour beinhaltet ein köstliches Abendessen in einem Bergrestaurant, gefolgt von einer Unterhaltungsshow mit Musik und Feuertanz. Der perfekte Weg, um der Tageshitze zu entkommen und die wilde Seite Alanyas bei Nacht zu erleben.",
          highlights: ["Taurusgebirge Sonnenuntergangsblick", "Offroad-Nachtfahrt", "Abendessen im Bergrestaurant", "Live-Unterhaltung & Feuershow", "Sternenklare Panoramaaussichten"], 
          included: ["Abholung & Rücktransfer", "4x4-Jeep-Transport", "Traditionelles Abendessen", "Reiseleitung", "Unterhaltungsshow"] 
        },
        { 
          slug: "land-of-legends", 
          name: "The Land of Legends Themenpark", 
          price: "€80", 
          duration: "Ganztägig", 
          images: ["https://www.alanya-tours.com/public/content/images/Tours/49/big/The-Land-of-Legends-Theme-Park-from-Alanya_175671848968b56599334b0.webp", "https://www.touralanya.com/TurResimleri/031813landoflegandstripsfromalanya.jpeg"], 
          desc: "Türkei's größter Themenpark mit 40+ Rutschen und erstaunlichen Achterbahnen.", 
          longDesc: "Treten Sie ein in eine Welt voller Fantasie und Abenteuer. The Land of Legends ist nicht nur ein Themenpark; es ist ein riesiger Unterhaltungskomplex mit einem großen Wasserpark (Kingdom of Sea) und einem Themenpark (Adventure Park). Trotzen Sie dem 62 Meter hohen Hyper Coaster, erleben Sie den 525 Meter langen Typhoon Coaster oder entspannen Sie im Wellenbecken. Der Park bietet außerdem unglaubliche Delfin- und Weißwal-Shows. Am Abend verwandelt sich der 'Château'-Bereich mit einer spektakulären Bootsparade und musikalischer Lichtshow. Ein Weltklasse-Erlebnis, das Adrenalin, Wasserspaß und magisches Geschichtenerzählen für die ganze Familie verbindet.",
          highlights: ["Hyper Coaster (62m hoch)", "Riesiger Wasserparkbereich", "Delfin- und Seelöwen-Shows", "5D-Kino", "Legendäre Bootsparade"], 
          included: ["Ganztages-Eintrittsticket", "Zugang zum Wasserpark", "Adrenalin-Fahrgeschäfte", "Delfin-Show-Zugang", "Rücktransfer"] 
        },
        { 
          slug: "diving", 
          name: "Mittelmeer Scuba Diving Entdeckung", 
          price: "€45", 
          duration: "6 Stunden", 
          images: ["https://www.biraztatil.com/uploads/project_image/webp/alanya-tuplu-dalis-67459101413ee-276.webp", "https://alanyaextreme.com/wp-content/uploads/2025/01/tuplu-dalis-alanya.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Diving-Tour-Tursay-Travel-13.webp"], 
          desc: "Erkunden Sie die Unterwasserwelt von Alanya mit professionellen Tauchlehrern.", 
          longDesc: "Entdecken Sie die verborgenen Schätze des Mittelmeers. Egal, ob Sie Anfänger oder erfahrener Taucher sind, Alanya bietet kristallklares Wasser und eine vielfältige Meereswelt. Unsere Tour beginnt mit einer ausführlichen Einweisung in Ausrüstung und Tauchtechniken durch PADI/CMAS-zertifizierte Tauchlehrer. Wir fahren mit dem Boot zu zwei verschiedenen Tauchplätzen, darunter Unterwasserhöhlen und Riffe. Sie schwimmen an farbenfrohen Fischen, Kraken und vielleicht sogar Meeresschildkröten vorbei. Für Anfänger ist der erste Tauchgang ein flacher Einführungstauchgang, um sich mit der Ausrüstung vertraut zu machen. Das Mittagessen wird zwischen den Tauchgängen auf dem Boot serviert. Ein unvergessliches Erlebnis in der Stille des tiefen Blaus.",
          highlights: ["Zwei verschiedene Tauchplätze", "Unterwasser-Höhlensystem", "Professionelle PADI/CMAS-Guides", "Komplette moderne Ausrüstung", "Bootsfahrt & Mittagessen"], 
          included: ["Komplette Profi-Ausrüstung", "Zwei geführte Tauchgänge", "Mittagessen an Bord", "Versicherung", "Hoteltransfer"] 
        }
      ]
    },
    contact: { title: "Kontaktiere uns", connectTitle: "Kontakt", contactDesc: "Schreiben Sie uns.", name: "Name", email: "E-Mail", phone: "Telefon", message: "Nachricht", send: "Senden", whatsapp: "WhatsApp" },
    testimonials: { title: "Kundengeschichten", list: [
      { name: "Müller", text: "Tolle Erfahrung mit der Pamukkale Tour!", role: "Reisender" },
      { name: "Schmidt", text: "Luxusautos und professioneller Service.", role: "CEO" },
      { name: "Max Mustermann", text: "Beste Autovermietung in Antalya.", role: "Geschäftsmann" }
    ]},
    whyUs: { title: "Warum Boss Tour?", items: [
      { title: "Premium-Flotte", desc: "Top-Fahrzeuge für Ihren Komfort." },
      { title: "Experten-Guides", desc: "Lokales Wissen für die besten Touren." },
      { title: "24/7 Support", desc: "Wir sind immer für Sie da." }
    ]},
    modal: { book: "Jetzt Buchen", confirm: "Bestätigt", confirmDesc: "Ihre Anfrage wurde empfangen.", name: "Name", hotel: "Hotel", roomNo: "Zimmer-Nr." }
  },
  ru: {
    nav: { home: "Главная", tours: "Туры", fleet: "Автопарк", transfer: "Трансфер", about: "О нас", services: "Опыт" },
    hero: { title: "Анталья ждет вас", subtitle: "Исследуйте побережье с Boss Tour.", cta: "Аренда авто", cta2: "Все туры", explore: "ИССЛЕДОВАТЬ", cta3: "VIP Трансфер" },
    fleet: { title: "Наш премиум автопарк", subtitle: "Современные автомобили для каждой поездки.", viewAll: "Весь автопарк", viewDetails: "Подробнее", bookNow: "Забронировать", cars: [
      { name: "Fiat Egea", price: "€45", images: ["https://s3.eu-central-1.amazonaws.com/static.obilet.com/RentACar/Vehicle/Images/fiat-egea-sedan.png"], features: ["Бензин", "Механика", "5 мест"] },
      { name: "Renault Clio", price: "€40", images: ["https://s3.eu-central-1.amazonaws.com/static.obilet.com/RentACar/Vehicle/Images/renault-clio-hatchback-5-kapi.png"], features: ["Бензин", "Авто", "5 мест"] },
      { name: "Fiat Egea Cross", price: "€50", images: ["https://cdn2.enuygun.com/media/lib/500x300/uploads/image/egea-cross-54386.webp"], features: ["Дизель", "Механика", "5 мест"] },
      { name: "Citroen C3", price: "€43", images: ["https://www.citroenorigins.fr/sites/default/files/styles/640/public/2023-07/b618_70_1620x1000_0.png"], features: ["Бензин", "Авто", "5 мест"] },
      { name: "Suzuki Jeep (Retro)", price: "€70", images: ["https://cdn.alanyatekmar.com/c093d813-761f-4921-8bd3-09ad5d8dba12.jpeg"], features: ["Бензин", "Механика", "4 места"] },
      { name: "Hyundai i20", price: "€45", images: ["https://stimg.cardekho.com/images/car-images/large/Hyundai/i20/11093/1758102282831/Atlas-White_d5d5d5.jpg?impolicy=resize&imwidth=420"], features: ["Бензин", "Авто", "5 мест"] },
      { name: "Ford Custom", price: "€90", images: ["https://www.otokoc.com.tr/getmedia/39d7ba95-f56e-4dd6-8585-2738afb27c7f/transit1-650x354.webp?ext=.webp"], features: ["Дизель", "Механика", "9 мест"] },
      { name: "Квадроцикл CF Moto (4x4)", price: "€55", images: ["https://images5.1000ps.net/images_bikekat/2022/177-CFMOTO/9384-CForce_850_V2_EFI_4x4_XL_DLX/001-637777561929389735-cfmoto-cforce-850-v2-efi-4x4-xl-dlx.jpg?format=webp&quality=80&trim.threshold=80&trim.percentpadding=1&scale=both&width=1900&height=1156&bgcolor=rgba_39_42_44_0&mode=pad"], features: ["Бензин", "Автомат", "4x4", "2 места"] },
      { name: "Электрический трицикл", price: "€25", images: ["https://bikestore.becdn.net/assets/images/product/16/stmax-gf400-kirmizi-1_940531602.jpg"], features: ["100% Электрический", "Права не нужны", "2 места"] }
    ]},
    realEstate: { title: "Эксклюзивная недвижимость", subtitle: "Найдите дом своей мечты с Boss Tour.", list: [] },
    transfer: { 
      title: "VIP Трансферы", 
      subtitle: "Комфортные поездки до места назначения.", 
      list: [
        { 
          name: "Mercedes Vito VIP", 
          price: "€70", 
          images: ["/images/transfers/vito.png"], 
          desc: "Премиальные трансферы из аэропорта и между городами с комфортом.",
          capacity: "1-9 человек",
          longDesc: "Ощутите максимальный комфорт в нашем стандартном VIP Mercedes Vito. Идеально подходит для небольших групп или семей, оснащен кожаными сиденьями и просторным салоном.",
          highlights: ["Кожаные сиденья премиум-класса", "Просторный салон", "Климат-контроль", "Тонированные стекла"],
          included: ["Профессиональный водитель", "Помощь с багажом", "Бесплатный Wi-Fi", "Прохладительные напитки"]
        },
        { 
          name: "Mercedes Vito Maybach Edition", 
          price: "€120", 
          images: ["/images/transfers/maybach.png"], 
          desc: "Вершина роскошных путешествий. Президентский стандарт.",
          capacity: "1-5 человек",
          longDesc: "Наш Vito Maybach Edition переосмысливает понятие роскоши. Массажные кресла, контурная подсветка и высококлассные развлекательные системы — он создан для тех, кто ищет лучшее.",
          highlights: ["Потолок 'Звездное небо'", "Массажные и откидные кресла", "Премиальная аудиосистема", "Перегородка для приватности"],
          included: ["Холодное шампанское/напитки", "VIP-сопровождение", "Эксклюзивный консьерж", "Ультрабыстрый Wi-Fi"]
        }
      ] 
    },
    tours: {
      title: "Эксклюзивные Туры и Активности",
      subtitle: "Самые яркие впечатления в Анталье и за ее пределами.",
      highlightsLabel: "Главное в туре",
      includedLabel: "Что включено",
      list: [
        { 
          slug: "pamukkale", 
          name: "Памуккале и озеро Салда (Белоснежный Рай)", 
          price: "€45", 
          duration: "13 Часов", 
          images: ["https://cdn.getyourguide.com/img/location/49d723a60f36e112.jpeg/99.jpg", "https://www.barcelo.com/guia-turismo/wp-content/uploads/pamukkale.jpg"], 
          desc: "Белоснежные травертины, древний город Иераполис и Турецкие Мальдивы — озеро Салда.", 
          longDesc: "Отправьтесь в незабываемое путешествие к восьмому чуду света — Памуккале. Этот объект Всемирного наследия ЮНЕСКО знаменит своими ослепительно белыми террасами-травертинами, сформированными целебными термальными водами, богатыми кальцием. Вы сможете прогуляться по этим природным ступеням босиком и ощутить тепло источников. Наш тур продолжается в древнем Иераполисе — важнейшем термальном центре Римской эпохи. Вы увидите грандиозный античный театр, крупнейший некрополь Анатолии и знаменитый бассейн Клеопатры, где можно искупаться среди упавших античных колонн. Во второй половине дня мы посетим озеро Салда, известное как 'Турецкие Мальдивы' благодаря кристальной бирюзовой воде и лечебному белому песку. Это идеальное место для отдыха и невероятных фотографий на фоне нетронутой природы.",
          highlights: ["Белоснежные природные травертины", "Древний город Иераполис", "Озеро Салда (Турецкие Мальдивы)", "Термальный бассейн Клеопатры", "Античный римский театр"], 
          included: ["VIP трансфер из отеля", "Профессиональный русский гид", "Обед (шведский стол)", "Комфортабельный автобус", "Вход на озеро Салда"] 
        },
        { 
          slug: "kekova", 
          name: "Кекова – Демре – Мира (По следам древних цивилизаций)", 
          price: "€50", 
          duration: "11 Часов", 
          images: ["https://kekovatekneturu.com/wp-content/uploads/Simena-Grave-Tomb-Demre.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PE7wwOiCWscwlqcEpg2A_pvpGnfmQROdLw&s", "https://gunluktur.net/wp-content/uploads/2021/12/tourbooking-turkey.jpeg"], 
          desc: "Путешествие к затонувшему городу и на родину Святого Николая.", 
          longDesc: "Этот тур создан для тех, кто хочет прикоснуться к загадкам древней Ликии. Мы начнем наш путь в городе Демре, где посетим церковь Святого Николая Чудотворца — именно здесь жил и совершал свои чудеса прообраз Санта-Клауса. Вы увидите древние византийские фрески и саркофаг святого. Далее мы отправимся к античному городу Мира, знаменитому своими наскальными гробницами, искусно высеченными прямо в отвесных скалах. Жемчужина тура — морская прогулка на яхте к затонувшему городу Кекова. Через стеклянное дно судна вы увидите остатки домов, лестниц и стен города, ушедшего под воду 2000 лет назад. Во время круиза мы сделаем остановки для купания в живописных бухтах с прозрачной водой, где вы сможете насладиться красотой Средиземного моря.",
          highlights: ["Морская прогулка на яхте над затонувшим городом", "Древние наскальные гробницы Миры", "Церковь Святого Николая", "Бассейн под открытым небом и бухты для купания"], 
          included: ["Трансфер туда и обратно", "Русскоговорящий историк-гид", "Обед на яхте", "Все входные билеты", "Страховка"] 
        },
        { 
          slug: "cappadocia", 
          name: "Каппадокия: Путешествие в Сказку (2 Дня)", 
          price: "€120", 
          duration: "2 Дня", 
          images: ["https://blog.obilet.com/wp-content/uploads/2018/10/kapadokya.jpg"], 
          desc: "Долина фей, подземные города и легендарные воздушные шары.", 
          longDesc: "Добро пожаловать в мир, который кажется декорацией к фантастическому фильму. Наш двухдневный тур позволит вам полностью погрузиться в магию Каппадокии. В первый день мы исследуем музей под открытым небом Гёреме с его уникальными скальными церквями и фресками Х века. Вы увидите знаменитые 'дымоходы фей' в долине Пашабаг и спуститесь в многоуровневый подземный город, где когда-то скрывались первые христиане. Второй день начнется (по желанию) перед рассветом с самого зрелищного события — полета на воздушном шаре. Сотни ярких шаров в небе на фоне восходящего солнца — этот момент останется в вашей памяти навсегда. Также мы посетим крепость Учхисар для панорамного обзора всей долины. Вы проведете ночь в аутентичном 'пещерном' отеле, чтобы прочувствовать дух этого удивительного края.",
          highlights: ["Полет на воздушном шаре (опция)", "Музей Гёреме и скальные церкви", "Многоуровневый подземный город", "Долина Пашабаг", "Панорама крепости Учхисар"], 
          included: ["Проживание в пещерном или каменном отеле", "Ужин и завтрак (шведский стол)", "Опытный лицензированный гид", "VIP транспорт", "Экскурсионная программа"] 
        },
        { 
          slug: "lavanta-garden", 
          name: "Лавандовые Мечты и Магия Салды", 
          price: "€40", 
          duration: "12 Часов", 
          images: ["https://burdur.com.tr/wp-content/uploads/2022/03/MKXT0132.jpg"], 
          desc: "Бескрайние сиреневые поля Куюджака и белоснежные берега озера Салда.", 
          longDesc: "Хотите сбежать в мир ярких красок и нежных ароматов? Летом деревня Куюджак превращается в море лаванды. Во время тура вы сможете прогуляться среди ароматных полей, узнать секреты производства лавандового масла и сделать самые красивые фотографии в вашей жизни. Местные жители предложат вам попробовать уникальный лавандовый чай и сладости. Вторая часть тура посвящена озеру Салда — одному из самых чистых и красивых мест Турции. Белый магниевый песок и ярко-бирюзовая вода создают ощущение, что вы на Мальдивах. Вы сможете искупаться в целебных водах озера и насладиться тишиной заповедного парка. Этот тур — настоящий детокс для души и праздник для глаз.",
          highlights: ["Фотосессия в лавандовых полях", "Посещение 'лавандовой деревни' Куюджак", "Купание в озерe Салда", "Дегустация местных продуктов", "Прогулка на природе"], 
          included: ["Полный трансфер", "Услуги профессионального гида", "Традиционный сельский обед", "Входные билеты в парковую зону"] 
        },
        { 
          slug: "side-manavgat", 
          name: "Античное трио: Сиде – Аспендос – Манавгат", 
          price: "€45", 
          duration: "9 Часов", 
          images: ["https://calista.com.tr/media/3jhj2jz0/aspendos006-1170x650.jpg?format=webp&quality=85", "https://www.gezire.com/wp-content/uploads/2025/10/Manavgat-Selalesi-764x500.jpg", "https://www.kulturportali.gov.tr/contents/images/SELEUK%20(4).JPG"], 
          desc: "Величие римской архитектуры и свежесть горных водопадов.", 
          longDesc: "Отправьтесь в путешествие в эпоху 'золотого века' Римской империи. Первая остановка — театр Аспендос, самый сохранившийся античный театр в мире. Построенный во II веке н.э., он обладает уникальной акустикой, которая позволяет проводить там концерты без микрофонов и сегодня. Далее нас ждет античный Сиде — город-музей под открытым небом. Вы увидите храм Аполлона на берегу моря, где по легенде встречались Антоний и Клеопатра. Завершит день визит к водопаду Манавгат. Пусть он не очень высокий, но его мощь и ширина впечатляют, а речная прохлада подарит долгожданное облегчение в жаркий день. Вы сможете насладиться кофе у воды и почувствовать ритм настоящей Турции.",
          highlights: ["Античный театр Аспендос", "Храм Аполлона в Сиде", "Водопад Манавгат", "Руины античного города Сиде", "Прогулка у реки"], 
          included: ["Трансфер на комфортабельном автобусе", "Профессиональный гид-историк", "Обед у реки", "Входные билеты в Аспендос"] 
        },
        { 
          slug: "city-tour", 
          name: "Панорамная Аланья и Крепость", 
          price: "30", 
          duration: "4 Часа", 
          images: ["https://upload.wikimedia.org/wikipedia/commons/8/85/Alanyafromcastle.JPG", "https://cmsal.argeya.com/Content/CompanyFiles/SliderResimleri/Alanya-Buyuk-Hotel-Genel-269043.jpg"], 
          desc: "Главное в Аланье: крепость, фуникулер, пещера и закат.", 
          longDesc: "Поймите, почему Аланью называют жемчужиной Турецкой Ривьеры, на этой насыщенной обзорной экскурсии. Мы начнем с подъема на фуникулере (Teleferik) от пляжа Клеопатры к вершине крепости Аланьи. С крепостных стен вам откроется 360-градусный обзор на город, порт и горы Торос. Вы увидите историческую верфь XIII века и символ города — Красную башню. Также мы спустимся в пещеру Дамлаташ, знаменитую своими лечебными сталактитами и воздухом, полезным для здоровья. Финальная точка тура — смотровая площадка с надписью 'I Love Alanya', откуда открывается лучший панорамный вид на город в лучах заходящего солнца.",
          highlights: ["Подъем на фуникулере к замку", "Экскурсия по крепости Аланьи", "Пещера Дамлаташ", "Вид на пляж Клеопатры", "Панорамная площадка для фото"], 
          included: ["Трансфер из отеля и обратно", "Билеты на фуникулер", "Услуги русского гида", "Вход в пещеру Дамлаташ"] 
        },
        { 
          slug: "mix-adventure", 
          name: "Легендарный Микс (3 в 1: Адреналин)", 
          price: "€55", 
          duration: "8 Часов", 
          images: ["https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=1210,dpr=1/tour_img/640b4d905f5e4.png", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,height=755,dpr=1/tour_img/5b8b721278a099cfddd9975af2c8dd627c2259fd05374f4f7efa7ef96e0b5775.png"], 
          desc: "Рафтинг, зиплайн и сафари на багги в одном каньоне.", 
          longDesc: "Для тех, кто не привык сидеть на месте! Мы приглашаем вас в национальный парк каньона Кёпрюлю — центр экстремального спорта Турции. Ваш день начнется с захватывающего 14-километрового сплава (рафтинга) по горной реке в сопровождении профессиональных инструкторов. Посередине пути нас ждет новый уровень эмоций — зиплайн! Вы пролетите над бурлящей рекой подобно птице. После энергичного обеда на берегу мы пересядем на багги или квадроциклы, чтобы устроить гонки по грязи и бездорожью среди сосновых лесов. Этот тур — максимальная доза драйва и веселья за один день.",
          highlights: ["Рафтинг 14 км", "Полет на зиплайне над каньоном", "Офф-роуд сафари на багги/квадроциклах", "Купание в горной реке", "Фото в каньоне Тазы"], 
          included: ["Полное защитное снаряжение", "Профессиональные инструкторы", "Обед на гриле", "Все трансферы", "Страховка"] 
        },
        { 
          slug: "rafting", 
          name: "Рафтинг в каньоне Кёпрюлю", 
          price: "€35", 
          duration: "6 Часов", 
          images: ["https://cmsal.argeya.com/Content/CompanyFiles/YazilarYeniImg/alanya-rafting.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Buggy-Rafting-Zipline-Tour-Tursay-Travel-13.webp"], 
          desc: "Бросьте вызов порогам бирюзовой реки Кёпрючай.", 
          longDesc: "Берите весло и приготовьтесь промокнуть! Рафтинг — самое популярное приключение в Анталье, и на то есть веские причины. Река несет лодки мимо античных римских мостов через живописные уголки национального парка. Тур начинается с детального инструктажа по безопасности. Мы поплывем на больших лодках (по 10 чел.) или двухместных каноэ для самых смелых. Дистанция 14 км полна порогов разной сложности, которые точно заставят ваше сердце биться чаще. В перерывах между греблей вы сможете прыгнуть в ледяную, но чистейшую воду реки. Наши гиды устроят игры и анимацию, превращая сплав в настоящий праздник. В конце пути вас ждет горячий обед в ресторане у реки.",
          highlights: ["Захватывающий сплав 14 км", "Античный римский мост", "Прыжки в воду и боди-рафтинг", "Живописная природа каньона", "Групповые игры и анимация"], 
          included: ["Шлем и спасательный жилет", "Место в лодке и весло", "Инструктор-капитан", "Горячий обед", "Трансфер"] 
        },
        { 
          slug: "jeep-safari", 
          name: "Джип-сафари в горах и река Дим-Чай", 
          price: "€40", 
          duration: "7 Часов", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/31c5b512-0b91-4762-8b51-4d8ef2c7e645_c35d5ee1-4e4d-4d53-92a0-57f22e041aec_.webp", "https://cdn.vigotours.com/23898/conversions/187-1770148388-698252242f4a3-gallery.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/5dc9d110c84b5.jpeg"], 
          desc: "Водные битвы, горные вершины и отдых на реке.", 
          longDesc: "Это не просто экскурсия, это настоящий праздник на колесах! Мы отправимся на открытых джипах Land Rover 4x4 покорять величественные горы Торос. Будьте готовы к веселым водным битвам между машинами — сухим не останется никто! Мы сделаем остановки на панорамных площадках, откуда видна вся Аланья как на ладони. Мы посетим традиционную деревню, мечеть и фруктовые сады, где можно попробовать плоды прямо с веток. Самая приятная часть — обед на реке Дим-Чай. Столы установлены прямо в прохладной воде, так что вы можете обедать, опустив ноги в реку. Вы сможете попрыгать в воду с платформ, отдохнуть на водных кроватях или попробовать порыбачить в нашем форелевом хозяйстве.",
          highlights: ["Веселые водные битвы на джипах", "Офф-роуд в горах Торос", "Обед на плотах прямо в реке", "Посещение турецкой деревни", "Фруктовые сады и дегустация"], 
          included: ["Джип 4x4 с водителем", "Обед на реке", "Гид-аниматор", "Вход в сельский дом"] 
        },
        { 
          slug: "sapadere-canyon", 
          name: "Каньон Сападере: Тайный Рай", 
          price: "€45", 
          duration: "8 Часов", 
          images: ["https://www.kulturportali.gov.tr/contents/images/sapanderekanyonulogolu_20180914111051287.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Sapadere-Canyon-Tour-Tursay-Travel-13.webp"], 
          desc: "Прогулка по каньону и купание в ледяных водопадах.", 
          longDesc: "Сбегите от летней жары в прохладные объятия каньона Сападере. Расположенный в 40 км от Аланьи, этот природный уголок был открыт для туристов лишь в 2008 году и сохранил свою первозданную красоту. Вы пройдете по 750-метровому деревянному мосту, проложенному вдоль отвесных скал. По пути вас будут сопровождать десятки малых и больших водопадов. Самые смелые могут окунуться в природные чаши-бассейны: вода здесь кристально чистая, но даже в июле ее температура не превышает +12 градусов! После каньона мы посетим деревню Сападере, где до сих пор ткут шелк вручную, и заглянем в 'Пещеру Гномов' (Cüceler), полную таинственных сталактитов. Обед будет подан в тенистом саду сельского ресторана.",
          highlights: ["Деревянная тропа над пропастью", "Купание под водопадами", "Посещение Пещеры Гномов", "Мастер-класс по шелкоткачеству", "Атмосфера настоящей турецкой деревни"], 
          included: ["Трансфер туда и обратно", "Все входные билеты", "Услуги гида", "Обед в садовом ресторане"] 
        },
        { 
          slug: "quad-safari", 
          name: "Квадро-сафари приключение", 
          price: "€40", 
          duration: "3 Часа", 
          images: ["https://cloudbasetravel.com/wp-content/uploads/2021/06/ATV-Safari-1.jpeg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Quad-Atv-Safari-Tour-Tursay-Travel-1.webp"], 
          desc: "Пыль, грязь и драйв в сосновых лесах Тороса.", 
          longDesc: "Оставьте шум города позади и возьмите под контроль мощный квадроцикл! Наше сафари — это идеальный баланс драйва и природы. Под руководством профессиональных гидов вы проедете по специальным лесным тропам, преодолеете пыльные подъемы и грязные лужи. Водительские права не требуются — после короткого инструктажа управлять машиной сможет каждый. Во время остановки у реки вы сможете смыть пыль и освежиться в горном потоке. Это самый захватывающий способ исследовать дикую природу Аланьи и получить море адреналина.",
          highlights: ["Управление собственным квадроциклом", "Техничные лесные трассы", "Гонки по грязи и бездорожью", "Отдых у горной реки", "Скоростные участки пути"], 
          included: ["Аренда квадроцикла и топливо", "Защитный шлем", "Обучение вождению", "Сопровождение гидов", "Трансфер"] 
        },
        { 
          slug: "zipline", 
          name: "Гигантский Зиплайн Эмоции", 
          price: "€25", 
          duration: "2 Часа", 
          images: ["https://www.schweitzer.com/-/media/schweitzer/summer-activities/schweitzer-zipline-1920x1080.jpg?rev=9c2e8f672b1541d3b31d2b74f3db9b7f?h=1080&w=1920&hash=E7706D1B10547CE9104FCB35BC95DD16"], 
          desc: "Пролетите над бездной подобно орлу.", 
          longDesc: "Бросьте вызов гравитации и почувствуйте вкус истинной свободы! На самом высоком и длинном зиплайне в регионе вы пролетите над величественным каньоном Тазы. После того как наши профессионалы надежно зафиксируют ваше снаряжение, вы сделаете шаг в бездну и помчитесь с огромной скоростью к другому краю пропасти. Этот короткий, но невероятно интенсивный момент станет самым ярким воспоминанием отпуска. Благодаря системе двойных тросов по высшим стандартам безопасности, вам остается только наслаждаться скоростью и видом.",
          highlights: ["Самая длинная трасса полета", "Панорама каньона Тазы", "Скоростной спуск", "Международные стандарты безопасности"], 
          included: ["Снаряжение для зиплайна", "Инструктаж по безопасности", "Поддержка персонала"] 
        },
        { 
          slug: "paragliding", 
          name: "Параглайдинг: Полет над Аланьей", 
          price: "€75", 
          duration: "2 Часа", 
          images: ["https://www.talyatur.com/images/tour/105418_b.jpg", "https://cdn.getyourguide.com/img/tour/e810d4a42de4ba2a359f6f25116205e419dba160cf49862c412bff4a32843011.jpg/99.jpg"], 
          desc: "Незабываемый прыжок с высоты 700 метров на пляж Клеопатры.", 
          longDesc: "Это самый безмятежный и захватывающий способ увидеть Аланью. Мы поднимем вас на вершину горы Яссы-Тепе (700 м), где вы встретитесь со своим профессиональным пилотом. После короткого разбега вы оторветесь от земли и окажесь в объятиях неба. В течение 20-30 минут вы будете парить над бирюзовым морем, древней крепостью и белоснежным пляжем Клеопатры. Если захотите, пилот выполнит акробатические трюки, чтобы добавить адреналина. Приземление произойдет прямо на мягкий песок самого красивого пляжа города. Полет на параплане — это мечта, которая станет реальностью вместе с нами.",
          highlights: ["Старт с высоты 700 метров", "Приземление на пляж Клеопатры", "Вид на крепость и море с высоты", "Тандем-пилот профессионал", "Возможность фото/видео съемки"], 
          included: ["Трансфер в горы", "Все снаряжение", "Услуги пилота", "Страховка", "Инструктаж"] 
        },
        { 
          slug: "luxury-boat", 
          name: "Пиратская Яхта и Пенная Вечеринка", 
          price: "€40", 
          duration: "6 Часов", 
          images: ["https://www.dailytoursinalanya.com/Content/images/tours/32/alanya-pirate-boat-tour-6-hd.webp"], 
          desc: "Пещеры, остановки для купания и шоу на борту.", 
          longDesc: "Классический день в Средиземном море ждет вас! Наша стилизованная пиратская яхта выйдет из исторического порта Аланьи и пройдет вдоль Красной башни и старой верфи. Мы обогнем мыс с крепостью и посетим три главные пещеры: Пиратскую, Пещеру Влюбленных и Фосфорную, где вода светится изнутри. В течение дня мы сделаем несколько остановок в открытом море и уютных бухтах для купания. На борту команда аниматоров устроит игры, танцы и грандиозную пенную вечеринку на обратном пути. В стоимость включен вкусный обед (барбекю) и безлимитные безалкогольные напитки. Идеальный отдых для всей семьи!",
          highlights: ["Круиз вдоль исторического порта", "Осмотр морских пещер", "Пенная вечеринка и анимация", "Купание в открытом море", "Обед-барбекю на борту"], 
          included: ["Морская прогулка", "Обед (курица-гриль, салат, рис)", "Безалкогольные напитки", "Анимация", "Трансфер"] 
        },
        { 
          slug: "fishing", 
          name: "Ранняя рыбалка в открытом море", 
          price: "€40", 
          duration: "6 Часов", 
          images: ["https://www.albashop.com.tr/Data/EditorFiles/En_Dog__ru_Bal__k_Av___Zaman___Nas__l_Belirlenir__3.jpg"], 
          desc: "Тихое утро на море с профессиональными снастями.", 
          longDesc: "Хотите сбежать от дневной жары и суеты? Морская рыбалка на рассвете — это идеальный выбор. Наше судно оснащено современными эхолотами для поиска рыбы и качественными спиннингами. Неважно, опытный вы рыбак или держите удочку впервые — наш капитан научит вас всему и приведет в места, где клюет дорада, сибас и кефаль. Пока вы ждете поклевку, можно насладиться восходом солнца и тишиной. Мы предложим вам чай и завтрак прямо на борту. Весь улов вы можете забрать с собой или попросить капитана приготовить его прямо на сковороде!",
          highlights: ["Рассвет в открытом море", "Современные эхолоты", "Качественные снасти и наживка", "Опытный капитан-инструктор", "Чай и закуски на борту"], 
          included: ["Все рыболовные снасти", "Наживка", "Завтрак и напитки", "Услуги капитана", "Трансфер"] 
        },
        { 
          slug: "turkish-night", 
          name: "Ориент-Экспресс: Восточная Ночь", 
          price: "€45", 
          duration: "4 Часа", 
          images: ["https://www.touralanya.com/TurResimleri/003837alanyaturkishnight.jpeg", "https://www.goreme.com/image/cache/catalog/Urunler/activities/turkish-night/turkish-night-show-134-900x600.jpg"], 
          desc: "Праздник турецкой культуры, танцев и кухни.", 
          longDesc: "Приглашаем вас в мир восточной сказки. Шоу 'Турецкая ночь' — это яркий спектакль, объединяющий традиции Османской империи и энергию современной Турции. Вы увидите мистический танец вращающихся дервишей, зажигательные народные танцы разных регионов и, конечно, виртуозный танец живота. Шоу интерактивно: вы сами сможете выйти на сцену и попробовать себя в восточных танцах. В течение вечера вам предложат богатый ужин из традиционных закусок (мезе), горячих блюд на гриле и знаменитых турецких сладостей. Безлимитные напитки местного производства помогут создать праздничное настроение. Почувствуйте гостеприимную душу Турции!",
          highlights: ["Шоу вращающихся дервишей", "Народные танцы и фольклор", "Профессиональный танец живота", "Интерактивная шоу-программа", "Традиционный турецкий пир"], 
          included: ["Ужин (полное меню)", "Безлимитные напитки", "Все шоу и выступления", "Трансфер обратно"] 
        },
        { 
          slug: "turkish-bath", 
          name: "Традиционный Хамам: Полное Расслабление", 
          price: "€30", 
          duration: "3 Часа", 
          images: ["https://cdn.alanyatekmar.com/e6a4a96a-9fc4-442b-87df-a2fff0b99841.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Turkish-Bath-Hamam-Tour-Tursay-Travel-1.webp"], 
          desc: "Пилинг, пенный массаж и обновление тела.", 
          longDesc: "Подарите себе ритуал чистоты и здоровья, которому более тысячи лет. Посещение хамама начинается с прогрева в сауне и на теплом мраморном камне 'гёбек-таши', чтобы ваши поры открылись. Aden folgt eine professionelle Peeling-Massage с рукавичкой (кесе). За этим следует волшебный пенный массаж в облаках мыльных пузырей. Пакет также включает посещение соляной комнаты и сауны. В завершение, после отдыха с турецким чаем, вам сделают 20-минутный расслабляющий масляный массаж. Вы выйдете из хамама обновленным, с невероятно мягкой кожей и ощущением легкости во всем теле.",
          highlights: ["Аутентичный мраморный хамам", "Пилинг рукавичкой кесе", "Нежный пенный массаж", "Расслабляющий масляный массаж", "Посещение сауны и соляной комнаты"], 
          included: ["Все банные процедуры", "Пенный массаж", "20 мин масляного массажа", "Посещение всей спа-зоны", "Трансфер"] 
        },
        { 
          slug: "aquapark", 
          name: "Аквапарк: Экстрим и Веселье", 
          price: "€35", 
          duration: "Весь День", 
          images: ["https://www.aquafuncity.com/images/galeri/aqua1.jpg", "https://cdn.alanyatekmar.com/f48067f0-fc19-4515-8b5c-17b64703c6bf.jpg"], 
          desc: "Водные горки и адреналин для любого возраста.", 
          longDesc: "Освежитесь и зарядитесь позитивом в крупнейшем аквапарке региона! Испытайте себя на гигантских горках 'Камикадзе' или 'Черная дыра', либо спокойно дрейфуйте по 'Ленивой реке'. В парке более 20 различных горок, огромный волновой бассейн и безопасные детские зоны с аниматорами. Для любителей экстрима обязателен к посещению аттракцион 'Rafting Slide'. Большие зоны для загара, рестораны и бары внутри парка сделают ваш отдых максимально комфортным. Это идеальный день для всей семьи, где дети могут выплеснуть энергию, а взрослые — снова почувствовать себя детьми.",
          highlights: ["Гигантские скоростные горки", "Огромный волновой бассейн", "Релакс-зона 'Ленивая река'", "Безопасный детский городок", "Профессиональная команда спасателей"], 
          included: ["Входной билет на весь день", "Пользование всеми горками", "Шезлонги и зонтики", "Трансфер"] 
        },
        { 
          slug: "dolphin-show", 
          name: "Шоу Дельфинов и Морских Котиков", 
          price: "€30", 
          duration: "3 Часа", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/407fa665-6440-402c-bc91-0668a2ad1a1e_f2fd438e-2a26-48c0-ba4a-a6fb6c3652b1_.webp", "https://cmsal.argeya.com/Content/CompanyFiles/SliderResimleri/57b10374eb10bb1a58dd1a71.jpg"], 
          desc: "Потрясающее шоу with самыми умными обитателями океана.", 
          longDesc: "Приготовьтесь удивляться невероятному интеллекту и грации дельфинов. Наш дельфинарий представляет одно из лучших шоу в Турции. Вы увидите синхронные прыжки, танцы дельфинов и даже их 'рисование' картин. Обаятельные морские котики рассмешат вас своими трюками. Это не просто развлечение, а познавательный тур, который учит любить и защищать морскую природу. После представления у вас будет возможность познакомиться с артистами поближе и сделать памятные фотографии. Для детей это станет самым добрым и ярким впечатлением отпуска.",
          highlights: ["Акробатическое шоу дельфинов", "Забавные трюки морских котиков", "Знакомство с морскими обитателями", "Возможность фото с дельфинами", "Семейный формат шоу"], 
          included: ["Входной билет", "Места в зрительном зале", "Трансфер", "Услуги гида"] 
        },
        { 
          slug: "horse-tour", 
          name: "Конное Сафари в Горах", 
          price: "€40", 
          duration: "3 Часа", 
          images: ["https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Horse-Riding-Tour-Tursay-Travel-13.webp", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Horse-Riding-Tour-Tursay-Travel-1.webp", "https://sencaptour.com/wp-content/uploads/2023/06/Alanya-At-binme-turu-4.webp"], 
          desc: "Конная прогулка среди хвойных лесов и гор.", 
          longDesc: "Найдите гармонию с природой верхом на лошади. Наш маршрут проходит по живописным лесным тропам с видом на море и горы Торос. Наши лошади очень спокойные, обученные и подходят даже для детей и тех, кто никогда не сидел в седле. После короткого инструктажа и под присмотром опытных гидов вы отправитесь в путешествие. Аромат хвои, пение птиц и величие гор создают атмосферу полного уединения. Мы сделаем остановку на вершине холма для отдыха и фотографий. Конная прогулка — это самый древний и искренний способ увидеть красоту турецкой природы.",
          highlights: ["Спокойные обученные лошади", "Живописный лесной маршрут", "Виды на море с гор", "Обучение основам верховой езды", "Фотосессия на панорамных точках"], 
          included: ["Аренда лошади", "Защитное снаряжение", "Сопровождение инструктора", "Инструктаж", "Трансфер"] 
        },
        { 
          slug: "night-jeep-safari", 
          name: "Ночное Джип-сафари и Закат в Горах", 
          price: "€45", 
          duration: "5 Часов", 
          images: ["https://travelagencyapp-storage.s3.eu-central-1.amazonaws.com/sunnytour/31c5b512-0b91-4762-8b51-4d8ef2c7e645_c35d5ee1-4e4d-4d53-92a0-57f22e041aec_.webp", "https://cdn.vigotours.com/23898/conversions/187-1770148388-698252242f4a3-gallery.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/5dc9d110c84b5.jpeg"], 
          desc: "Исследуйте горы Торос под звездным небом с музыкой и офф-роуд весельем.", 
          longDesc: "Когда солнце начинает садиться, начинаются настоящие приключения. Наше ночное джип-сафари приглашает вас в горы Торос за новыми эмоциями. На открытых джипах 4x4 мы отправимся на панорамные площадки, чтобы увидеть закат над Аланьей и Средиземным морем. Прохладный горный воздух и мерцающие огни города внизу создают волшебную атмосферу. Тур включает вкусный ужин в горном ресторане, за которым следует развлекательное шоу с музыкой и огненными танцами. Это идеальный способ спастись от дневной жары и увидеть дикую сторону Аланьи ночью.",
          highlights: ["Закат в горах Торос", "Ночной офф-роуд на джипах", "Ужин в горном ресторане", "Живая музыка и огненное шоу", "Панорамные виды под звездами"], 
          included: ["Трансфер из отеля и обратно", "Джип 4x4 с водителем", "Традиционный турецкий ужин", "Услуги гида", "Развлекательная программа"] 
        },
        { 
          slug: "land-of-legends", 
          name: "Тематический парк The Land of Legends", 
          price: "€80", 
          duration: "Весь День", 
          images: ["https://www.alanya-tours.com/public/content/images/Tours/49/big/The-Land-of-Legends-Theme-Park-from-Alanya_175671848968b56599334b0.webp", "https://www.touralanya.com/TurResimleri/031813landoflegandstripsfromalanya.jpeg"], 
          desc: "Самый большой тематический парк Турции: 40+ горок и невероятные аттракционы.", 
          longDesc: "Окунитесь в мир фантазии и приключений. The Land of Legends — это не просто парк аттракционов, это огромный развлекательный комплекс, включающий гигантский аквапарк (Kingdom of Sea) и парк приключений (Adventure Park). Бросьте вызов Hyper Coaster высотой 62 метра, испытайте Typhoon Coaster длиной 525 метров или расслабьтесь в волновом бассейне. В парке также проходят потрясающие шоу дельфинов и белух. Вечером зона 'Château' преображается: здесь проходит зрелищный лодочный парад и музыкальное световое шоу. Это приключение мирового уровня, сочетающее в себе драйв, водные забавы и магию для всей семьи.",
          highlights: ["Гипер-костер (высота 62м)", "Огромная зона аквапарка", "Шоу дельфинов и морских котиков", "Кинотеатр 5D", "Легендарный вечерний парад лодок"], 
          included: ["Входной билет на весь день", "Доступ в аквапарк", "Все аттракционы", "Шоу дельфинов", "Трансфер туда и обратно"] 
        },
        { 
          slug: "diving", 
          name: "Дайвинг в Средиземном море", 
          price: "€45", 
          duration: "6 Часов", 
          images: ["https://www.biraztatil.com/uploads/project_image/webp/alanya-tuplu-dalis-67459101413ee-276.webp", "https://alanyaextreme.com/wp-content/uploads/2025/01/tuplu-dalis-alanya.jpg", "https://tursaytravel.com/wp-content/uploads/2024/05/Alanya-Diving-Tour-Tursay-Travel-13.webp"], 
          desc: "Исследуйте подводный мир Аланьи под руководством профессионалов.", 
          longDesc: "Откройте для себя скрытые сокровища Средиземного моря. Независимо от того, новичок вы или опытный дайвер, Аланья предлагает кристально чистую воду и богатый подводный мир. Наш тур начинается с подробного инструктажа по снаряжению и технике погружения от сертифицированных инструкторов PADI/CMAS. Мы отправимся на лодке к двум разным местам погружения, включая подводные пещеры и рифы. Вы поплаваете среди разноцветных рыб, осьминогов и, возможно, даже встретите морских черепах. Для новичков первое погружение — ознакомительное на небольшую глубину. Обед подается на лодке между погружениями. Это незабываемый опыт в тишине глубокого синего моря.",
          highlights: ["Два разных места погружения", "Подводные системы пещер", "Профессиональные гиды PADI/CMAS", "Современное полное снаряжение", "Прогулка на катере и обед"], 
          included: ["Профессиональное снаряжение", "Два погружения с гидом", "Обед на лодке", "Страховка", "Трансфер из отеля"] 
        }
      ]
    },
    contact: { title: "Свяжитесь с нами", connectTitle: "Контакты", contactDesc: "Напишите нам.", name: "Имя Фамилия", email: "Эл. почта", phone: "Телефон", message: "Сообщение", send: "Отправить", whatsapp: "WhatsApp" },
    testimonials: { title: "Отзывы клиентов", list: [
      { name: "Иван Иванов", text: "Отличный тур в Памуккале!", role: "Путешественник" },
      { name: "Анна Смирнова", text: "Роскошные автомобили и профессиональный сервис.", role: "CEO" },
      { name: "Дмитрий Волков", text: "Лучшая аренда авто в Анталии.", role: "Бизнесмен" }
    ]},
    whyUs: { title: "Почему Boss Tour?", items: [
      { title: "Премиум Автопарк", desc: "Лучшие автомобили для вашего комфорта." },
      { title: "Опытные Гиды", desc: "Местные знания для лучших туров." },
      { title: "Поддержка 24/7", desc: "Мы всегда на связи." }
    ]},
    modal: { book: "Заказать", confirm: "Подтверждено", confirmDesc: "Ваша заявка принята.", name: "Имя", hotel: "Отель", roomNo: "Номер комнаты" }
  }
};
