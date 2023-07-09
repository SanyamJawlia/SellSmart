import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { SingleOrderDetailAction, deleteOrderAction, updateOrderAction } from '../../Action/OrderAction';
import Loader from '../Essentials/Loader';
import { useAlert } from 'react-alert';
import "../../Styles/myorderDetails.scss"
const MyOrderDetails = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();

    const {orderSingle:item,loading} = useSelector(state=>state.singleOrder)

    const deliverHandler = (e) => {
      e.preventDefault();
  
      dispatch(updateOrderAction(id));
      alert.success("Order Updated Successfully")
    };

    const deleteHandler =(e)=>{
      e.preventDefault();
  
      dispatch(deleteOrderAction(id));
      alert.success("Order deleted Successfully")
    }

    useEffect(() => {
      dispatch(SingleOrderDetailAction(id));
    }, [dispatch])

    if(!item){
        return null;
    }

    
  return ( loading ? <Loader/> : 
    <div id="MyOrderDetails"  >
      <h2>Your Details</h2>
      <div className="shippingDetails">
            <div style={{borderTop:"2px solid #006400"}} >
              <h2>Name</h2>
              <p>{item.user.name}</p>
            </div>
            <div>
              <h2>Email</h2>
              <p>{item.user.email}</p>
            </div>
            <div>
              <h2>Phone No.</h2>
              <p>{item.ShippingInfo.phone}</p>
            </div>
            <div>
              <h2>House No.</h2>
              <p>{item.ShippingInfo.address}</p>
            </div>
            <div>
              <h2>City</h2>
              <p>{item.ShippingInfo.city}</p>
            </div>
            <div>
              <h2>State</h2>
              <p>{item.ShippingInfo.state}</p>
            </div>
            <div>
              <h2>Country</h2>
              <p>{item.ShippingInfo.country}</p>
            </div>
            <div>
              <h2>Pincode</h2>
              <p>{item.ShippingInfo.pincode}</p>
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
            item.orderItems && item.orderItems.map((order)=>(
              <CartCard key={order.id}
                image = {order.image.url}
                name = {order.name}
                price = {order.price}
                quantity = {order.quantity}
                Total = {order.price * order.quantity}
              />
            ))
          }
          </div>

          <div className="cartPrice">
          <div>
            <h2>SubTotal:</h2>
            <p>₹{item.itemsPrice}</p>
          </div>
          <div>
            <h2>Shipping:</h2>
            <p>₹{item.ShippingPrice}</p>
          </div>
          <div>
            <h2>Tax:</h2>
            <p>₹{item.TaxPrice}</p>
          </div>
          <div style={{borderTop: "2px solid #006400"}}>
            <h2>Total:</h2>
            <p>₹{item.TotalPrice}</p>
          </div>
        </div>

        <div className="shippingDetails">
            <div style={{borderTop:"2px solid #006400"}} >
              <h2>Order Placed on</h2>
              <p>{item.createdAt}</p>
            </div>
            <div>
              <h2>Payment Id</h2>
              <p>{item.paymentInfo.id}</p>
            </div>
            <div>
              <h2>Payment Status</h2>
              <p>{item.paymentInfo.status}</p>
            </div>
            <div>
              <h2>Paid On</h2>
              <p>{item.paidAt}</p>
            </div>
            <div>
              <h2>Order Status</h2>
              <p>{item.OrderStatus}</p>
            </div>
          </div>

    </div>
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


export default MyOrderDetails
