import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import EarphonesIntro from '../components/ProductPageIntro/EarphonesIntro.jsx';
import Product from '../components/Product/Product';
import Comment from '../components/Comment/Comment';
import Footer from '../components/Footer/Footer';
import EarphonesCategory from '../components/ProductCategory/EarphonesCategory.jsx';

const Speakers = () => {
  return <div>
        <Navbar/>
        <EarphonesIntro/>
     
        <EarphonesCategory/>
        <Product/>
        <Comment/>
        <Footer/>
  </div>;
};

export default Speakers;