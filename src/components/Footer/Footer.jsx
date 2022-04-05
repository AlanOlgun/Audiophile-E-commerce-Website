import React from 'react';
import './Footer.css';
import Logo from "../../images/assets/logo.svg"
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Instagram from "../../images/assets/shared/desktop/icon-instagram.svg"
import Twitter from "../../images/assets/shared/desktop/icon-twitter.svg"
import Facebook from "../../images/assets/shared/desktop/icon-facebook.svg"

const Footer = () => {
  return <div className='Footer'>
      <div className='Footer-Section'>
          <div className='Footer-Container'>
          <div className='border'></div>
          <div className='Footer-Nav'>
          <div className='Navbar'>
      <div className='Wrapper'>
          <div className='Logo-Link'>
              <div className='Logo'>
              <img src={Logo} alt="" />
              </div>
              <div className='PageLink'>
              <Link to="/" >HOME</Link> 
              <Link to="headphones">HEADPHONES</Link>
              <Link to="speakers">SPEAKERS</Link>
              <Link to="earphones">EARPHONES</Link>
          </div>
      </div>
          </div>
          <div className='Icon'>
              
          <ShoppingCartOutlinedIcon  style={{fill: "white", fontSize: "30px", paddingLeft:"400px" } } />
          </div>

  </div>
          </div>

          <div className='Footer-Description'>
              <div className='Desc'>
              <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
              <p>Coded by <a href='https://www.alanolgun.com/' target="_blank" rel="noreferrer" >Alan Olgun</a> © 2022 </p>
              </div>

              <div className='Social-Icon'>
                  <div className='Social-Icons'>
                      
                 
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
              </div>
              </div>
              </div>
          </div>
      </div>
  </div>;
};

export default Footer;
