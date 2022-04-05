import './ProductDetailPageCard.css'; 
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { deneme } from "../data";

import DesktopProductZX7 from "../../images/assets/product-zx7-speaker/desktop/image-product.jpg"
import TabletProductZX7 from "../../images/assets/product-zx7-speaker/tablet/image-product.jpg"
import MobileProductZX7 from "../../images/assets/product-zx7-speaker/mobile/image-product.jpg"

import DesktopGallery1 from "../../images/assets/product-zx7-speaker/desktop/image-gallery-1.jpg"
import TabletGallery1 from "../../images/assets/product-zx7-speaker/tablet/image-gallery-1.jpg"
import MobileGallery1 from "../../images/assets/product-zx7-speaker/mobile/image-gallery-1.jpg"

import DesktopGallery2 from "../../images/assets/product-zx7-speaker/desktop/image-gallery-2.jpg"
import TabletGallery2 from "../../images/assets/product-zx7-speaker/tablet/image-gallery-2.jpg"
import MobileGallery2 from "../../images/assets/product-zx7-speaker/mobile/image-gallery-2.jpg"

import DesktopGallery3 from "../../images/assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
import TabletGallery3 from "../../images/assets/product-zx7-speaker/tablet/image-gallery-3.jpg"
import MobileGallery3 from "../../images/assets/product-zx7-speaker/mobile/image-gallery-3.jpg"






const ProductDetailPageCard = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var ZX7 = windowWidth >= 1100 ? DesktopProductZX7 : windowWidth >= 700 ? TabletProductZX7 : MobileProductZX7;

  var Gallery1 = windowWidth >= 1100 ? DesktopGallery1 : windowWidth >= 700 ? TabletGallery1 : MobileGallery1;
  var Gallery2 = windowWidth >= 1100 ? DesktopGallery2 : windowWidth >= 700 ? TabletGallery2 : MobileGallery2;
  var Gallery3 = windowWidth >= 1100 ? DesktopGallery3 : windowWidth >= 700 ? TabletGallery3 : MobileGallery3;

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);
  

    return <div className='DetailPageCard'>
        <div className='DetailContent'>
    <div className='GoBack'>
    <Link to="speakers">Go Back</Link>
    </div>

     {/* Product Card */}
    <div className='DetailPageCards'>

      <div className='DetailCard-Left'>
      <img src={ZX7} alt="" />
      </div>

      <div className='DetailCard-Right'>
        <div className='DetailRight-Content'>
          <h5>NEW PRODUCT</h5>
          <h1>ZX7 SPEAKER</h1>
          <p>Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
           <h3>$ $ 3,500</h3>
           <div className='AddCard'>
               <div className='Quantity'>
                   <p> - </p>
                   <p className='Number'> 1 </p>
                   <p> + </p>
               </div>
        <button>Add to Card</button>
        </div>
        </div>
      </div>
    </div>
    </div>
      {/* Description */}
    <div className='Features'>
    <div className='FeaturesLeft'>
       <h1>FEATURES</h1> 
       <p>
       Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

       The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
       </p>
        </div>    

        <div className='FeaturesRight'>
            <div className='BoxTitle'>
            <h1>IN THE BOX</h1></div>

            <div className='Includes'>

                <div className='Include'>
             <p className='IncludesQuantity'>2 x</p>
             <p className='IncludesItem'>Speaker Unit</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>2 x</p>
             <p className='IncludesItem'>Speaker Cloth Panel</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>User Manual</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>3.5mm 7.5m Audio Cable</p>
             </div>
              <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>7.5m Optical Cable</p>
             </div>
           </div> 
            
           
        </div>
   </div>
      {/* Gallery*/}
      <div className='DetailPageGallery'> 
          <div className='PageGallery'>
          <div className='GalleryLeft'>
          <img src={Gallery1} alt="" />
          <img src={Gallery2} alt="" />
          </div>
          <div className='GalleryRight'>
          <img src={Gallery3} alt="" />
          </div>
          </div>
      </div>
   
   
    </div>
     
    };
   
export default ProductDetailPageCard;


