import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Intro from '../components/Intro/Intro';
import Product from '../components/Product/Product';
import Card from '../components/Card/Card';
import Comment from '../components/Comment/Comment';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return (
   <div>
        <Navbar/>
      
        <Intro/>  
        <Product/>
        <Card/>
        <Comment/>
        <Footer/>
    </div>
  );
};

export default Home;


