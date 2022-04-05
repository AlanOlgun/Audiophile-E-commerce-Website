import React, { useState, useEffect } from 'react';
import './Comment.css';
import Desktop from "../../images/assets/shared/desktop/image-best-gear.jpg"
import Tablet from "../../images/assets/shared/tablet/image-best-gear.jpg"
import Mobile from "../../images/assets/shared/mobile/image-best-gear.jpg"

const Comment = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const GearImg = windowWidth >= 1100 ? Desktop : windowWidth >= 768 ? Tablet : Mobile;

  useEffect(() => {
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    }
}, []);


  return <div className='Comment'>
      <div className='Sect'>
      <div className='Comments'>
        <div className='Paragraph'>
          <h1>Bringing you the <span>best</span>  audio gear</h1>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
      </div>
      <div className='GearImg'>
      <img src={GearImg} alt="" />
      </div>
      </div>
  </div>;
};

export default Comment;
