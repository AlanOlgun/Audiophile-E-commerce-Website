

import React, { useState } from 'react';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import XX99IIproduct from './pages/XX99IIproduct';
import XX99Iproduct from './pages/XX99Iproduct';
import XX59product from './pages/XX59product';
import ZX9product from './pages/ZX9product';
import ZX7product from './pages/ZX7product';
import YX1product from './pages/YX1product';
import CheckOutPage from './pages/CheckOutPage';

import data from "./data";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  return  (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/headphones">
          <Headphones/>
        </Route>
        <Route path="/speakers">
          <Speakers/>
        </Route>
        <Route path="/earphones">
          <Earphones/>
        </Route>
  
        <Route path="/XX99IIproduct">
          <XX99IIproduct products={products} />
        </Route>
  
        <Route path="/XX99Iproduct">
          <XX99Iproduct products={products} />
        </Route>
        <Route path="/XX59product">
          <XX59product/>
        </Route> 
        <Route path="/ZX9product">
          <ZX9product/>
        </Route>
        <Route path="/ZX7product">
          <ZX7product/>
        </Route>
        <Route path="/YX1product">
          <YX1product/>
        </Route>
        <Route path="/CheckOutPage">
          <CheckOutPage/>
        </Route>
      </Switch>
    </Router>
  )
}
