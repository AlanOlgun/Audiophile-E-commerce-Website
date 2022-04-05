import React from 'react';
import Navbar from '../components/Navbar/Navbar';

import Product from '../components/Product/Product';
import Comment from '../components/Comment/Comment';
import Footer from '../components/Footer/Footer';
import YX1 from '../components/ProductDetailPageCard/YX1';
import Product2 from '../components/Product2/Product2';


const YX1product = () => {
  return <div>
        <Navbar/>

        <YX1/>
        <Product2/>
        <Product/>
        <Comment/>
        <Footer/>
  </div>;
};

export default YX1product;
