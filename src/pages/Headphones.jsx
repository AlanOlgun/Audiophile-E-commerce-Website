import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeadphoneIntro from '../components/ProductPageIntro/HeadphoneIntro';
import Product from '../components/Product/Product';
import Comment from '../components/Comment/Comment';
import Footer from '../components/Footer/Footer';
import HeadphoneCategory from '../components/ProductCategory/HeadphonesCategory';

const Headphones = () => {
  return <div>
        <Navbar/>
        <HeadphoneIntro/>
        <HeadphoneCategory/>
        <Product/>
        <Comment/>
        <Footer/>
  </div>;
};

export default Headphones;
