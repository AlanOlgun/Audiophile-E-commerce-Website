import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { Link } from "react-router-dom";
import DesktopYX1 from "../../images/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
import TabletYX1 from "../../images/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"
import MobileYX1 from "../../images/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"


const HeadphoneProduct = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var YX1 = windowWidth >= 1100 ? DesktopYX1 : windowWidth >= 768 ? TabletYX1 : MobileYX1;

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
        <img src={YX1} alt="" />
        </div>

        <div className='Card-Right'>
          <div className='Right-Content'>
            <h5>NEW PRODUCT</h5>
            <h1>YX1 WIRELESS EARPHONES</h1>
            <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <button ><Link to="YX1product">SEE PRODUCT</Link> </button>
          
          
          </div>
        </div>

      </div>
     
  </div>;
};

export default HeadphoneProduct;
