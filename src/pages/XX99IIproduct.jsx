import React from 'react';
import Navbar from '../components/Navbar/Navbar';

import Product from '../components/Product/Product';
import Comment from '../components/Comment/Comment';
import Footer from '../components/Footer/Footer';
import XX99II from '../components/ProductDetailPageCard/XX99II';
import Product2 from '../components/Product2/Product2';


export default function XX99IIproduct() {


  return (
    <div>
        <Navbar />

       
        <XX99II />
      
        <Product2/>
        <Product/>
        <Comment/>
        <Footer/>
  </div>
  )
}
