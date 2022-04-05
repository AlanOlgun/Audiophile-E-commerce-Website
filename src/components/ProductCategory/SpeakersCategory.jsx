import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { Link } from "react-router-dom";

import DesktopZX9 from "../../images/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
import TabletZX9 from "../../images/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"
import MobileZX9 from "../../images/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"

import DesktopZX7 from "../../images/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
import TabletZX7 from "../../images/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"
import MobileZX7 from "../../images/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"

const HeadphoneProduct = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var ZX9 = windowWidth >= 1100 ? DesktopZX9 : windowWidth >= 768 ? TabletZX9 : MobileZX9;
  var ZX7 = windowWidth >= 1100 ? DesktopZX7 : windowWidth >= 768 ? TabletZX7 : MobileZX7;

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);
  

  return <div className='ProductPageCard'>
      <div className='ProductPageCards'>

        <div className='Card-Left'>
        <img src={ZX9 } alt="" />
        </div>

        <div className='Card-Right'>
          <div className='Right-Content'>
            <h5>NEW PRODUCT</h5>
            <h1>ZX9 SPEAKER</h1>
            <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <button ><Link to="ZX9product">SEE PRODUCT</Link> </button>
          </div>
        </div>

      </div>
      <div className='ProductPageCards'>

<div className='Card-Left'>
<img src={ZX7} alt="" />
</div>

<div className='Card-Right'>
  <div className='Right-Content'>
    <h5>NEW PRODUCT</h5>
    <h1>ZX7 SPEAKER</h1>
    <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
  <button ><a href='../ZX7product'>SEE PRODUCT</a> </button>
  </div>
</div>

</div>
  </div>;
};

export default HeadphoneProduct;
