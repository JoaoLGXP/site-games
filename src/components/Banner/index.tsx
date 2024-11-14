import { useState, useEffect } from 'react';
import './styles.css';
import ff7 from '../../assets/ffvii_rebirth.jpg';
import dd2 from '../../assets/Dragons_Dogma_2.jpg';
import rotr from '../../assets/Rise_Of_The_Ronin.jpg';

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    ff7,
    dd2,
    rotr
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000); // Altera o banner a cada 5 segundos

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="banner-container">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`banner ${index === currentBanner ? 'active' : ''}`}
        >
          <img src={banner} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Banner;
