import './ShoppingCard.css'; 
import React from 'react';
import XX59II from "../../images/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"

import Modal from 'react-modal';
import { Link } from "react-router-dom";


Modal.setAppElement("#root");
// ReactModal.setAppElement("#root");

export default function ShoppingCard({isOpen, toggleModal, }, props) {
const {cartItems} = props; 

  return (
    
    <Modal
    style={{
      overlay: {
        position: 'static',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
      },
    
    }}
    
    isOpen={isOpen}
    onRequestClose={toggleModal}
 
     className="ShopCart" >
       
      <div className='Cardwindow'>
      
    <div className="CartContents">
     <div className="CardButton">
     <h4>Cart (1) </h4>

     <button>Remove All </button>
      </div>

      <div className='ProductDetail'>
          <div className='ProductsImg'>
            <img src={XX59II} alt="" />
          </div>
          <div className='ProductsDetail'>
            <p className='ProductName'>XX99 MK II</p>
            <p className='ProductPrice'>$ 2,999</p>
          </div>

          <div className='ProductQuantity'>
        
          <div className='Quantity'>
                   <p> - </p>
                   <p className='Number'> 1 </p>
                   <p> + </p>
                   </div>
          </div>
      </div>
      

          <div className='ProductTotal'>
              <p className='Total'>TOTAL</p>
              <p className='TotalPrice'> $ 2,999</p>
          </div>
          <div className='ProductCheckout'>
            <button><Link to="checkoutpage" >CHECKOUT</Link> </button>
            
          </div>
      </div>
    
     </div>
   
   </Modal>

   
  )
}
