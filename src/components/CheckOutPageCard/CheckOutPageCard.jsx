import './CheckOutPageCard.css'; 
import Modal from "../../images/assets/shared/desktop/modalimg.png"
import XX59II from "../../images/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
import React, { useState } from 'react'
import { Link } from "react-router-dom";




const CheckOutPageCard = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] =  useState(false);

  const handleFullNameInputChange = (event) => {
    setValues({...values, fullName : event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email : event.target.value})
  }
  const handlePhoneNumberInputChange = (event) => {
    setValues({...values, phoneNumber : event.target.value})
  }
  const handleAddressInputChange = (event) => {
    setValues({...values, address : event.target.value})
  }
  const handleZipCodeInputChange = (event) => {
    setValues({...values, zipCode : event.target.value})
  }
  const handleCityInputChange = (event) => {
    setValues({...values, city : event.target.value})
  }
  const handleCountryInputChange = (event) => {
    setValues({...values, country : event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.fullName && values.email && values.phoneNumber && values.address && values.city && values.country && values.zipCode){
      setValid(true);
    }
    setSubmitted(true);
  }
   
  return (
    <form className='CheckOutPageCard' onSubmit={handleSubmit}>
        <div className='CheckOutPageCards'>
         <div className='GoBack'>
         <Link to="/">Go Back</Link>
    </div>
    <div className='FormContainer'>
        <div className='RegisterForm'>
            <div className='FormTitle'>
                <h1>CHECKOUT</h1>
            </div>
 {/* Form Checkout Container */}


            <div className='FormCard Billing'>
              <h4>BILLING DETAILS</h4>
            <div className='FormInputs'>
              
              <div className='FormInput'>
            <div className='Name'>
              <h5>Full Name</h5> 
          {submitted && !values.fullName ?  <p>Name cannot be empty</p> : null}  
              </div>

            <input
                onChange={handleFullNameInputChange}
                value={values.fullName}
                id="fullName"
                class="form-field"
                type="text"
                placeholder="Alexie Ward"
                name="fullName"
        />
        </div>
        <div className='FormInput'>
            <div className='Name'>
              <h5>Email Address</h5> 
              {submitted && !values.email ?  <p>Email cannot be empty</p> : null}  
              </div>

            <input
              onChange={handleEmailInputChange}
            value={values.email}
            id="email"
            class="form-field"
            type="text"
            placeholder="alexei@mail.com"
            name="email"
        />
        </div>
        <div className='FormInput'>
            <div className='Name'>
              <h5>Phone Number</h5> 
              {submitted && !values.phoneNumber ?  <p>Phone number cannot be empty</p> : null}  
              </div>

            <input
              onChange={handlePhoneNumberInputChange}
            value={values.phoneNumber}
          id="phoneNumber"
          class="form-field"
          type="text"
          placeholder="+61 2 9999 8888"
          name="phoneNumber"
        />
        </div>
        </div>
        </div>


        <div className='FormCard Ship'>
              <h4>SHIPPING INFO</h4>
              
            <div className='FormInputs'>
              
            <div className='FormInput'>
            <div className='Name'>
              <h5>Address</h5> 
              {submitted && !values.address ?  <p>Address cannot be empty</p> : null}  
              </div>

            <input
              onChange={handleAddressInputChange}
            value={values.address}
          id="address"
          class="form-field"
          type="text"
          placeholder="119 Station Avenue"
          name="address"
        />
        </div>
              <div className='FormInput'>
            <div className='Name'>
              <h5>Zip Code</h5> 
              {submitted && !values.zipCode ?  <p>Zip code cannot be empty</p> : null}  
              </div>

            <input
              onChange={handleZipCodeInputChange}
            value={values.zipCode}
          id="zipCode"
          class="form-field"
          type="text"
          placeholder="2042"
          name="zipCode"
        />
        </div>
        <div className='FormInput'>
            <div className='Name'>
              <h5>City</h5> 
              {submitted && !values.city ?  <p>City cannot be empty</p> : null}  
              </div>

            <input
              onChange={handleCityInputChange}
            value={values.city}
            id="city"
            class="form-field"
            type="text"
            placeholder="Sydney"
            name="city"
        />
        </div>
        <div className='FormInput'>
            <div className='Name'>
              <h5>Country</h5> 
              {submitted && !values.country ?  <p>Country cannot be empty</p> : null}  
              </div>

            <input
              onChange={handleCountryInputChange}
            value={values.country}
          id="country"
          class="form-field"
          type="text"
          placeholder="Australia"
          name="country"
        />
        </div>
        </div>
        </div>

        </div>
{/* Form Summary Container */}
        <div className='SummaryForm'>


        <div className='SummaryTitle'>
          <h3>SUMMARY</h3>
        </div>


        <div className='OrderDetail'>
       
          <div className='OrdersImg'>
            <img src={XX59II} alt="" />
          </div>
          <div className='OrdersDetail'>
            <p className='ProductsName'>XX99 MK II</p>
            <p className='ProductsPrice'>$ 2,999</p>
          </div>

          <div className='ProductsQuantity'>
        
          <div className='Quantity'>
                   <p> x  1</p>
                   
                   </div>
        
      </div>
        </div>

        <div className='OrderTotal'>
          <div className='Total'>
            <h3>TOTAL</h3>
            <h2>$ 5,396</h2>
          </div>

          <div className='Shipping'>
            <h3>SHIPPING</h3>
            <h2>$ 50</h2>
          </div>

          <div className='Vat'>
            <h3>VAT (INCLUDED) </h3>
            <h2>$ 1,079</h2>
          </div>

          <div className='GrandTotal'>
            <h3>GRAND TOTAL</h3>
            <h2>$ 5,446</h2>
          </div>
        </div>
        <button class="form-field" type="submit">
        CONTINUE & PAY
        </button>
        </div>

    </div>
    </div>
    {submitted && valid ? <div className='ModalContainer'> 
       <div className='ModalCard'>
         <img src={Modal} alt="" />
         <div className='ModalMessage1'>
         <h2>THANK YOU <br /> FOR YOUR ORDER </h2>
       </div>
       <div className='ModalMessage2'>
         <p>You will receive an email confirmation shortly.</p>
       </div>
       <div className='Ordered'>
         <div className='OrdersDetail'>
       <div className='OrderDetail'>
       
       <div className='OrdersImg'>
         <img src={XX59II} alt="" />
       </div>
       <div className='OrdersDetail'>
         <p className='ProductsName'>XX99 MK II</p>
         <p className='ProductsPrice'>$ 2,999</p>
       </div>

       <div className='ProductsQuantity'>
     
       <div className='Quantity'>
                <p> x  1</p>
                
                </div>
     
   </div>
     </div>
     

     </div>
     <div className='GrandTotal'>
            <h3>GRAND TOTAL</h3>
            <h2>$ 5,446</h2>
          </div>
         
       </div>
       <button>    <Link to="/">BACK TO HOME</Link> </button>
       </div>

     </div>
     : null} 
    </form>
    
  )
}

export default CheckOutPageCard