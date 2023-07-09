import React, { useEffect } from 'react'
import Loader from '../Essentials/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { GetMyOrderAction } from '../../Action/OrderAction';
import { useAlert } from 'react-alert';
import "../../Styles/myOrder.scss"
import { Link, useParams } from 'react-router-dom';

const MyOrders = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const {id} = useParams();

  const {loading,orders} = useSelector((state)=>state.myorder);

  useEffect(() => {
    dispatch(GetMyOrderAction());

  }, [dispatch])
  
  return (
    <div id="myOrders" >
      <h2>My Orders</h2>
      <div className="container">
      <div className="myordercardheading">
        <h3>Date</h3>
        <h3>Items</h3>
        <h3>Status</h3>
        <h3>Payment</h3>
      </div>
        {
          loading ? <Loader/> : orders && orders.map((item)=>(
            <MyOrderCard
              key={item._id}
              id={item._id}
              date = {item.createdAt.split("T")[0]}
              payment = {item.paymentInfo.status}
              state = {item.OrderStatus}
              items = {item.orderItems.length}
            />
          ))
        }
      </div>

    </div>
  )
}

const MyOrderCard = ({id,date,payment,state,items})=>(
  <div className="myordercard">
  <Link to={`/order/${id}`} >
    <h3>{date}</h3>
    <h3>{items}</h3>
    <h3 style={{color : state==="Delivered" ?"blue": "red"}}>{state}</h3>
    <h3>{payment}</h3>
    </Link>
  </div>
)

export default MyOrders
