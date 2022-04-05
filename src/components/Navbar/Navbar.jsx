import './Navbar.css';
import { Link } from "react-router-dom";
import Logo from "../../images/assets/logo.svg"
import ShopCard from  "../../images/assets/shared/desktop/icon-cart.svg"
import React from 'react';
import Hamburger from  "../../images/assets/shared/tablet/icon-hamburger.svg"
import { useState } from 'react';
import ShoppingCard from '../ShoppingCard/ShoppingCard';


function Navbar  (props)  {
       const {cartItems } = props;

        const [open, setOpen] = useState(false);

        const [isOpen, setIsOpen] = useState(false);
 
        
        function toggleModal() {
    setIsOpen(!isOpen);
  }

  return( <div className='Navbar'>

      <div className='Wrapper'>
          <div className='Hamburger'  onClick={() => setOpen(!open)}>
        <img src={Hamburger} alt="" />
          </div>

          <div className='Logo-Link' >
              <div className='Logo'>
              <img src={Logo} alt="" />
              </div>
              <div className={open ? "PageLink" : "PageLink Active"}>
              <Link to="/" >HOME</Link> 
              <Link to="headphones">HEADPHONES</Link>
              <Link to="speakers">SPEAKERS</Link>
              <Link to="earphones">EARPHONES</Link>

          {/* <a href="/">HOME</a>
          <a href="../headphones"> HEADPHONES</a>
          <a href="../speakers">SPEAKERS</a>
          <a href="../earphones">EARPHONES</a> */}
          </div>
          </div>
   
          <div className='Icon'onClick={toggleModal}>
              <div className='ShoppingCard'>
          <img src={ShopCard} alt="" />
          </div>
          </div>
  
      </div>
      <ShoppingCard 
      cartItems={cartItems}
      isOpen={isOpen}
        onRequestClose={toggleModal} />
            
  </div>
  )
};

export default Navbar;

