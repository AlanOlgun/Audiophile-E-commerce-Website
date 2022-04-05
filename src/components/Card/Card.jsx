
import './Card.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import DesktopZx9 from "../../images/assets/home/desktop/image-speaker-zx9.png"
import TabletZx9 from "../../images/assets/home/tablet/image-speaker-zx9.png"
import MobileZx9 from "../../images/assets/home/mobile/image-speaker-zx9.png"
import Pattern from "../../images/assets/home/desktop/pattern-circles.svg"

import DesktopZx7 from "../../images/assets/home/desktop/image-speaker-zx7.jpg"
import TabletZx7 from "../../images/assets/home/tablet/image-speaker-zx7.jpg"
import MobileZx7 from "../../images/assets/home/mobile/image-speaker-zx7.jpg"

import DesktopYx1 from "../../images/assets/home/desktop/image-earphones-yx1.jpg"
import TabletYx1 from "../../images/assets/home/tablet/image-earphones-yx1.jpg"
import MobileYx1 from "../../images/assets/home/mobile/image-earphones-yx1.jpg"

const Card = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  var Zx9 = windowWidth >= 768 ? DesktopZx9 : windowWidth >= 576 ? TabletZx9 : MobileZx9;
  var Zx7 = windowWidth >= 1100 ? DesktopZx7 : windowWidth >= 576 ? TabletZx7 : MobileZx7;
  var Yx1 = windowWidth >= 1100 ? DesktopYx1 : windowWidth >= 768 ? TabletYx1 : MobileYx1;

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

  return <div className='Card'>


<div className='cards'>
     <div className='first'>
         <div className='Zx9'>
      <div className='PatternImg'>
     <img src={Pattern} alt="" />
     </div>
      <div className='zx9Img'>
       <img src={Zx9} alt="" />
       </div>
      </div>



      <div className='zx9Title'>
          <h1>ZX9 SPEAKER</h1>
          <h4>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</h4>
          <button><Link to="zx9product" >SEE PRODUCT</Link> </button>
          
            
     </div>
     </div>




      <div className='second'>
         <div className="background">
         {/* <img src={DesktopZx7} srcSet={`${MobileZx7} 300w, ${TabletZx7} 768w, ${DesktopZx7} 1440w`} /> */}
         <img src={Zx7} alt="" />
         </div>

         <div className='speaker-zx7'>
          <h3>ZX7 SPEAKER</h3>
          <button><Link to="zx7product" >SEE PRODUCT</Link> </button>
         </div>
     </div>


      <div className='third'>
       <div className="background">
       <img src={Yx1} alt="" />
           </div>    
           <div className='speaker-yx1'>
           <h3>YX1 EARPHONES</h3>
           <button><Link to="yx1product" >SEE PRODUCT</Link> </button>
           </div>

     </div>
     </div>
  </div>;

};
  



export default Card;
