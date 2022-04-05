import './Product2.css'; 
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


import DesktopCardXX99I from "../../images/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
import TabletCardXX99I from "../../images/assets/shared/tablet/image-xx99-mark-one-headphones.jpg"
import MobileCardXX99I from "../../images/assets/shared/mobile/image-xx99-mark-one-headphones.jpg"

import DesktopCardXX59 from "../../images/assets/shared/desktop/image-xx59-headphones.jpg"
import TabletCardXX59 from "../../images/assets/shared/tablet/image-xx59-headphones.jpg"
import MobileCardXX59 from "../../images/assets/shared/mobile/image-xx59-headphones.jpg"

import DesktopCardZX9 from "../../images/assets/shared/desktop/image-zx9-speaker.jpg"
import TabletCardZX9 from "../../images/assets/shared/tablet/image-zx9-speaker.jpg"
import MobileCardZX9 from "../../images/assets/shared/mobile/image-zx9-speaker.jpg"



const Product2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  var CardXX99I = windowWidth >= 1100 ? DesktopCardXX99I : windowWidth >= 769 ? TabletCardXX99I : MobileCardXX99I;
  var CardXX59 = windowWidth >= 1100 ? DesktopCardXX59 : windowWidth >= 769 ? TabletCardXX59 : MobileCardXX59;
  var CardZX9 = windowWidth >= 1100 ? DesktopCardZX9 : windowWidth >= 769 ? TabletCardZX9 : MobileCardZX9;

  useEffect(() => {
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    }
}, []);



  return <div className='Product2'>
    <div className='Product2Container'>
      <div className='Product2Title'>
        <h2>YOU MAY ALSO LIKE</h2>
      </div>
    <div className='Product2CardContainer'>
        <div className='Product2Card'>
      <div className='CardsImg'>
      <img src={CardXX59} alt="" />
      </div>

      <div className='CardsLink'>
        <h3>XX59</h3>
        <button ><Link to="XX59product">SEE PRODUCT </Link></button>

        

      </div>
    </div>
        <div className='Product2Card'>
      <div className='CardsImg'>
      <img src={CardZX9} alt="" />
      </div>

      <div className='CardsLink'>
        <h3>ZX9 SPEAKER</h3>
         <button ><Link to="ZX9product">SEE PRODUCT </Link></button>
      </div>
    </div>
        <div className='Product2Card'>
      <div className='CardsImg'>
      <img src={CardXX99I} alt="" />
      </div>

      <div className='CardsLink'>
        <h3>XX99 MARK II</h3>
        <button ><Link to="XX99IIproduct">SEE PRODUCT </Link></button>
      </div>
    </div>
    </div>
    </div>
  </div>;
};

export default Product2;
