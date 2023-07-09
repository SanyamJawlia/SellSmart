import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CheckoutSteps from '../Essentials/CheckoutSteps'
import { useDispatch, useSelector } from "react-redux"
import "../../Styles/confirmOrder.scss"

const ConfirmOrder = () => {

  const dispatch = useDispatch();

  const {ShippingInfo, cartItems, subTotal, shipping, tax, total} = useSelector(state=>state.Cart)

  return (
    <>
    <CheckoutSteps activeSteps={1}/>
    <div id="confirmOrder" >
         <h2>Confirm Details</h2>
        
          <div className="shippingDetails">
            <div style={{borderTop:"2px solid #006400"}} >
              <h2>House No.</h2>
              <p>{ShippingInfo.address}</p>
            </div>
            <div>
              <h2>City</h2>
              <p>{ShippingInfo.city}</p>
            </div>
            <div>
              <h2>State</h2>
              <p>{ShippingInfo.state}</p>
            </div>
            <div>
              <h2>Country</h2>
              <p>{ShippingInfo.country}</p>
            </div>
            <div>
              <h2>Pincode</h2>
              <p>{ShippingInfo.pincode}</p>
            </div>
            <div>
              <h2>Phone No.</h2>
              <p>{ShippingInfo.phone}</p>
            </div>
          </div>

          <h2>Product Details</h2>
          <div className="cartProducts">
          <div className="cartcard" style={{ position:"sticky",top:"0px" ,backgroundColor:"#006400"}} >
            <h2>Image</h2>
            <h2>Name</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Amount(₹)</h2>
          </div>
          {
            cartItems && cartItems.map((item)=>(
              <CartCard key={item.id}
                image = {item.image.url}
                name = {item.name}
                price = {item.price}
                quantity = {item.quantity}
                Total = {item.price * item.quantity}
              />
            ))
          }
          </div>
        

        

        <div className="cartPrice">
          <div>
            <h2>SubTotal:</h2>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h2>Shipping:</h2>
            <p>₹{shipping}</p>
          </div>
          <div>
            <h2>Tax:</h2>
            <p>₹{tax}</p>
          </div>
          <div style={{borderTop: "2px solid #006400"}}>
            <h2>Total:</h2>
            <p>₹{total}</p>
          </div>
        </div>


        <button><Link to="/shippingInfo" >Edit Address</Link></button>
        <button><Link to="/cart" >Go to Cart</Link></button>
        <button><Link to="/makePayment" >Go To Payment </Link></button>

    </div> 
    </>
  )
}

const CartCard = ({image,name,price,quantity,total})=>(
  <div className="cartcard">
    <img src={image} alt="" width={"100px"} height={"100px"} />
    <h2>{name}</h2>
    <h2>₹{price}</h2>
    <h2>{quantity}</h2>
    <h2>₹{price*quantity}</h2>

  </div>
)

export default ConfirmOrder
