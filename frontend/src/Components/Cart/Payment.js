import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createNewOrderAction } from '../../Action/OrderAction';
import { useAlert } from 'react-alert'
import "../../Styles/payment.scss"
import { BsCalendarDateFill, BsCreditCard, BsFillPersonFill, BsPhoneVibrate } from 'react-icons/bs';
import { MdOutlineSecurity, MdSecurity } from 'react-icons/md';

const Payment = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  //ShippingInfo,orderItems,paymentInfo,itemsPrice,ShippingPrice,TaxPrice,TotalPrice

  const { ShippingInfo, cartItems, subTotal, shipping, tax, total} = useSelector(state=>state.Cart);
  const { order } = useSelector(state=>state.newOrder)


  const neworder ={
    ShippingInfo:ShippingInfo,
    orderItems:cartItems,
    paymentInfo:{
      id:"sampleId",
      status:"Done",
    },
    itemsPrice:subTotal,
    ShippingPrice:shipping,
    TaxPrice:tax,
    TotalPrice:total,
  }

  
  const submitHandler=(e)=>{
    e.preventDefault();

    dispatch(createNewOrderAction(neworder));
    alert.success("Your order has been placed Successfully");
  }


  return (
    <div id="Payment">
        <h1>Payment</h1>

          <form onSubmit={submitHandler} >
            <div>
              <BsFillPersonFill />
              <input type="text" placeholder="Card Holder Name" required />
            </div>

            <div>
              <BsPhoneVibrate />
              <input type="number" placeholder="Phone No" required />
            </div>

            <div>
              <BsCreditCard />
              <input type="number" placeholder="Card Number" required />
            </div>

            <div>
              <MdOutlineSecurity />
              <input type="number" placeholder="CVV" required  />
            </div>

            <div>
              <BsCalendarDateFill />
              <input type="number" placeholder="Card Expiry" required />
            </div>

            <div>
              <MdSecurity />
              <input type="number" placeholder="Security PIN" required />
            </div>



            <button id="createProductBtn" type="submit" >
                Create
            </button>
          </form>
      </div>
  )
}

export default Payment
