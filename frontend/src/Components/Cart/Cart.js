import React, { useEffect } from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import "../../Styles/cart.scss"
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cartItems,subTotal,tax,shipping,total} = useSelector(state => state.Cart)
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    localStorage.setItem("SellSmartSubTotal",JSON.stringify(subTotal));
    localStorage.setItem("SellSmartShipping",JSON.stringify(shipping));
    localStorage.setItem("SellSmartTax",JSON.stringify(tax));
    localStorage.setItem("SellSmartTotal",JSON.stringify(total));
  }, [cartItems])
  

  const increment = (id)=>{
    dispatch({
      type:"addToCart",
      payload:{id},
    })
    dispatch({
      type:"calculatePrice",
    })
  }
  const decrement = (id)=>{
    dispatch({
      type:"decrement",
      payload:id,
    })
    dispatch({
      type:"calculatePrice",
    })
  }
  const deleteHandler = (id)=>{
    dispatch({
      type:"deleteFromCart",
      payload:id,
    })
    alert.success("Removed from Cart");
    dispatch({
      type:"calculatePrice",
    })
  }

  useEffect(() => {
    localStorage.setItem("SellSmartCart",JSON.stringify(cartItems));
  }, [cartItems])
  

  return (
    <div className='cart'>
      <main>
        
        {
          cartItems.length > 0 ? (
            cartItems.map(i=>(
              <CartItem  imgsrc={i.image}
              name={i.name}
              price={i.price}
              qty={i.quantity} 
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
              />
          ))
          ):  <h2>No Item Yet</h2> 
      }

      </main>

      <aside>
        <h2>Subtotal:${subTotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2>Total:${total}</h2>
        <button><Link to="/shippingInfo" >Place Order</Link> </button>
      </aside>
    </div>
  )
}

const CartItem = ({imgsrc,name,price,qty,decrement,increment,deleteHandler,id})=>(
    <div className="cartItem">
        <img src={imgsrc.url} alt="Item" />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div>
            <button onClick={()=>decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increment(id)}>+</button>
        </div>

        <AiFillDelete onClick={()=>deleteHandler(id)}/>


    </div>
)

export default Cart
