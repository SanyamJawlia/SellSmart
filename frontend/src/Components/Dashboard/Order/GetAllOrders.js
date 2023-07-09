import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useAlert } from 'react-alert';
import { GetAllOrderAction } from '../../../Action/OrderAction';
import Loader from '../../Essentials/Loader';
import "../../../Styles/getAllOrder.scss"
import { Link } from 'react-router-dom';
import DashboardMenu from "../DashboardMenu";

const GetAllOrders = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {loading,orders } = useSelector((state)=>state.allOrders);

  useEffect(() => {
    dispatch(GetAllOrderAction());
    alert.success("all order are found")
  }, [dispatch])


  return (
    <div id="getAllOrders" >
      <DashboardMenu/>
      <h2>SellSmart: Orders</h2>
      <div className="container">
        <div className="ordercardheading">
            <h2>Customer</h2>
            <h2>Items</h2>
            <h2>Status</h2>
            <h2>Payment</h2>
        </div>
        {
          loading ?<Loader/> : orders && orders.map((item)=>(
            <OrderCard
              key={item._id}
              name = {item.user.name}
              id = {item._id}
              payment = {item.paymentInfo.status}
              OrderItems = {item.orderItems.length}
              status = {item.OrderStatus}
            />
          ))
        }
      </div>
    </div>
  )
}

const OrderCard = ({name,id,payment,OrderItems,status})=>(
  <>
  <div className="ordercard">
    <Link to={`/allorder/${id}`} >
      <h2>{name}</h2>
      <h2>{OrderItems}</h2>
      <h2 style={{color : status==="Delivered" ?"darkgreen": "blue"}}>{status}</h2>
      <h2>{payment}</h2>

    </Link>
  </div>

  </>
)

export default GetAllOrders
