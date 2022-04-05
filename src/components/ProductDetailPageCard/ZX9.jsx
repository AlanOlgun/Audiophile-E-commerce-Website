import './ProductDetailPageCard.css'; 
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { deneme } from "../data";

import DesktopProductZX9 from "../../images/assets/product-zx9-speaker/desktop/image-product.jpg"
import TabletProductZX9 from "../../images/assets/product-zx9-speaker/tablet/image-product.jpg"
import MobileProductZX9 from "../../images/assets/product-zx9-speaker/mobile/image-product.jpg"

import DesktopGallery1 from "../../images/assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
import TabletGallery1 from "../../images/assets/product-zx9-speaker/tablet/image-gallery-1.jpg"
import MobileGallery1 from "../../images/assets/product-zx9-speaker/mobile/image-gallery-1.jpg"

import DesktopGallery2 from "../../images/assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
import TabletGallery2 from "../../images/assets/product-zx9-speaker/tablet/image-gallery-2.jpg"
import MobileGallery2 from "../../images/assets/product-zx9-speaker/mobile/image-gallery-2.jpg"

import DesktopGallery3 from "../../images/assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
import TabletGallery3 from "../../images/assets/product-zx9-speaker/tablet/image-gallery-3.jpg"
import MobileGallery3 from "../../images/assets/product-zx9-speaker/mobile/image-gallery-3.jpg"






const ProductDetailPageCard = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var ZX9 = windowWidth >= 1100 ? DesktopProductZX9 : windowWidth >= 700 ? TabletProductZX9 : MobileProductZX9;

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
      <img src={ZX9} alt="" />
      </div>

      <div className='DetailCard-Right'>
        <div className='DetailRight-Content'>
          <h5>NEW PRODUCT</h5>
          <h1>ZX9 SPEAKER</h1>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
           <h3>$ 4,500 </h3>
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
       "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br /> <br /> The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

        Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
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
             <p className='IncludesItem'>3.5mm 10m Audio Cable</p>
             </div>
              <div className='Include'>
             <p className='IncludesQuantity'>1 x</p>
             <p className='IncludesItem'>10m Optical Cable</p>
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


