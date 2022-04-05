import './ProductDetailPageCard.css'; 
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { deneme } from "../data";

import DesktopProductXX59I from "../../images/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
import TabletProductXX59I from "../../images/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg"
import MobileProductXX59I from "../../images/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"

import DesktopGallery1 from "../../images/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg"
import TabletGallery1 from "../../images/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg"
import MobileGallery1 from "../../images/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg"

import DesktopGallery2 from "../../images/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg"
import TabletGallery2 from "../../images/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg"
import MobileGallery2 from "../../images/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg"

import DesktopGallery3 from "../../images/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg"
import TabletGallery3 from "../../images/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg"
import MobileGallery3 from "../../images/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg"





export default function XX99I (props) {
  const {product} = props;
   
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var XX59I = windowWidth >= 1100 ? DesktopProductXX59I : windowWidth >= 700 ? TabletProductXX59I : MobileProductXX59I;

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
  

    return ( <div className='DetailPageCard'>
        <div className='DetailContent'>
    <div className='GoBack'>
        <Link to="headphones">Go Back</Link>
    </div>

     {/* Product Card */}
    <div className='DetailPageCards'>

      <div className='DetailCard-Left'>
      <img src={XX59I} alt="" />
      </div>

      <div className='DetailCard-Right'>
        <div className='DetailRight-Content'>
          <h5>NEW PRODUCT</h5>
          {/* <h1>{product.name}</h1> */}
          <h1>XX99 MARK I HEADPHONES</h1>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. </p>
           <h3>$ {product.price}</h3>
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
       As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.

From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
       </p>
        </div>    

        <div className='FeaturesRight'>
            <div className='BoxTitle'>
            <h1>IN THE BOX</h1></div>

            <div className='Includes'>

                <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>Headphone Unit</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>2 x</p>
             <p className='IncludesItem'>Replacement Earcups</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>User Manual</p>
             </div>
             <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>3.5mm 5m Audio Cable</p>
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
     
    )
    };
   


