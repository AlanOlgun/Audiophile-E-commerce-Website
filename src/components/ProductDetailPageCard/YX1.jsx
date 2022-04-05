import './ProductDetailPageCard.css'; 
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import DesktopProductYX1 from "../../images/assets/product-yx1-earphones/desktop/image-product.jpg"
import TabletProductYX1 from "../../images/assets/product-yx1-earphones/tablet/image-product.jpg"
import MobileProductYX1 from "../../images/assets/product-yx1-earphones/mobile/image-product.jpg"

import DesktopGallery1 from "../../images/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
import TabletGallery1 from "../../images/assets/product-yx1-earphones/tablet/image-gallery-1.jpg"
import MobileGallery1 from "../../images/assets/product-yx1-earphones/mobile/image-gallery-1.jpg"

import DesktopGallery2 from "../../images/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
import TabletGallery2 from "../../images/assets/product-yx1-earphones/tablet/image-gallery-2.jpg"
import MobileGallery2 from "../../images/assets/product-yx1-earphones/mobile/image-gallery-2.jpg"

import DesktopGallery3 from "../../images/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
import TabletGallery3 from "../../images/assets/product-yx1-earphones/tablet/image-gallery-3.jpg"
import MobileGallery3 from "../../images/assets/product-yx1-earphones/mobile/image-gallery-3.jpg"






const ProductDetailPageCard = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var YX1 = windowWidth >= 1100 ? DesktopProductYX1 : windowWidth >= 700 ? TabletProductYX1 : MobileProductYX1;

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
    <Link to="earphones">Go Back</Link>
    </div>

     {/* Product Card */}
    <div className='DetailPageCards'>

      <div className='DetailCard-Left'>
      <img src={YX1} alt="" />
      </div>

      <div className='DetailCard-Right'>
        <div className='DetailRight-Content'>
          <h5>NEW PRODUCT</h5>
          <h1>YX1 WIRELESS EARPHONES</h1>
          <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
           <h3>$ 599</h3>
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
       "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br /> <br /> The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
       </p>
        </div>    

        <div className='FeaturesRight'>
            <div className='BoxTitle'>
            <h1>IN THE BOX</h1></div>

            <div className='Includes'>

                <div className='Include'>
             <p className='IncludesQuantity'>2 x</p>
             <p className='IncludesItem'>Earphone Unit</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>6 x</p>
             <p className='IncludesItem'>Multi-size Earplugs</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>User Manual</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>USB-C Charging Cable</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>Travel Pouch</p>
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


