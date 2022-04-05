import React, { useState, useEffect } from 'react';
import './ProductCard.css';
import { Link } from "react-router-dom";

import DesktopXX99II from "../../images/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
import TabletXX99II from "../../images/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
import MobileXX99II from "../../images/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"

import DesktopXX99I from "../../images/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
import TabletXX99I from "../../images/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
import MobileXX99I from "../../images/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"

import DesktopXX59 from "../../images/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
import TabletXX59 from "../../images/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"
import MobileXX59 from "../../images/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"

const HeadphoneProduct = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var XX99II = windowWidth >= 1100 ? DesktopXX99II : windowWidth >= 768 ? TabletXX99II : MobileXX99II;
  var XX99I = windowWidth >= 1100 ? DesktopXX99I : windowWidth >= 768 ? TabletXX99I : MobileXX99I;
  var XX59 = windowWidth >= 1100 ? DesktopXX59 : windowWidth >= 768 ? TabletXX59 : MobileXX59;


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
        <img src={XX99II} alt="" />
        </div>

        <div className='Card-Right'>
          <div className='Right-Content'>
            <h5>NEW PRODUCT</h5>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <button ><Link to="XX99IIproduct">SEE PRODUCT</Link> </button>
          </div>
        </div>

      </div>
      <div className='ProductPageCards'>
      {/* style={{order: 2}} */}
<div className='Card-Left' >
<img src={XX99I} alt="" />
</div>
{/* style={{marginLeft: '-125px'}} */}
<div className='Card-Right'  >  
  <div className='Right-Content'  >
    <h5>NEW PRODUCT</h5>
    <h1>XX99 MARK I HEADPHONES</h1>
    <p >As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
    <button ><Link to="XX99Iproduct">SEE PRODUCT</Link> </button>
  </div>
</div>

</div>
<div className='ProductPageCards'>

<div className='Card-Left'>
<img src={XX59} alt="" />
</div>

<div className='Card-Right'>
  <div className='Right-Content'>
    <h5>NEW PRODUCT</h5>
    <h1>XX59 HEADPHONES</h1>
    <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
  <button ><Link to="XX59product">SEE PRODUCT</Link> </button>
  </div>
</div>

</div>
  </div>;
};

export default HeadphoneProduct;
