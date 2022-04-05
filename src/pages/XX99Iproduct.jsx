import React from 'react';
import Navbar from '../components/Navbar/Navbar';

import Product from '../components/Product/Product';
import Comment from '../components/Comment/Comment';
import Footer from '../components/Footer/Footer';
import XX99I from '../components/ProductDetailPageCard/XX99I';
import Product2 from '../components/Product2/Product2';


export default function XX99Iproduct(props) {

  const { products } = props;
  
    return (
      <div>
          <Navbar/>
  
          {products.map((product) => (
            <XX99I  product={product}/>
          ))}
          <Product2/>
          <Product/>
          <Comment/>
          <Footer/>
    </div>
    )
  }
  