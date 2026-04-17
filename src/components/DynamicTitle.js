"use client";
import { useEffect } from "react";

const DynamicTitle = () => {
  useEffect(() => {
    const titles = [
      "Boss Tour | Luxury Experience",
      "VIP Araç Kiralama",
      "Özel Tur Hizmetleri",
      "Havalimanı Transfer",
      "Güvenli ve Lüks Yolculuk",
      "7/24 VIP Hizmet"
    ];
    let currentIndex = 0;
    let interval;

    const changeTitle = () => {
      document.title = titles[currentIndex];
      currentIndex = (currentIndex + 1) % titles.length;
    };

    // Tab visible check to avoid unnecessary updates
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(interval);
        document.title = "Sizi Bekliyoruz! | Boss Tour";
      } else {
        changeTitle();
        interval = setInterval(changeTitle, 3000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Initial start
    interval = setInterval(changeTitle, 3000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

export default DynamicTitle;
