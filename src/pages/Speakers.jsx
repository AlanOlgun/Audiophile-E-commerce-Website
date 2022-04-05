import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import SpeakerIntro from '../components/ProductPageIntro/SpeakerIntro.jsx';
import Product from '../components/Product/Product';
import Comment from '../components/Comment/Comment';
import Footer from '../components/Footer/Footer';
import SpeakerCategory from '../components/ProductCategory/SpeakersCategory';


const Speakers = () => {
  return <div>
        <Navbar/>
        <SpeakerIntro/>
        
        <SpeakerCategory/>
        <Product/>
        <Comment/>
        <Footer/>
  </div>;
};

export default Speakers;