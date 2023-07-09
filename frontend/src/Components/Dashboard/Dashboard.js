import React from 'react'
import DashboardMenu from './DashboardMenu'
import { useSelector } from 'react-redux';
import "../../Styles/dashboard.scss"

const Dashboard = () => {

  const {users} = useSelector((state)=>state.allUsers);
  const {products } = useSelector((state)=>state.allProducts)
  const {orders } = useSelector((state)=>state.allOrders);

  return (
    <div id="dashboard">
    <DashboardMenu/>
    <h1>Welcome to SellSmart</h1>
    <p>Welcome to our cutting-edge e-commerce platform! We are thrilled to introduce you to our powerful and intuitive dashboard, designed to empower you and enhance your online selling experience.
      At SellSmart, we understand the challenges and complexities of running an online business. That's why we've created a comprehensive dashboard that puts all the essential tools and information at your fingertips. With its user-friendly interface and robust functionality, our dashboard is here to streamline your operations and help you achieve unprecedented success.
      Take control of your online store like never before. Our dashboard provides you with a centralized hub where you can effortlessly manage every aspect of your business. From inventory management to order processing, customer analytics to marketing campaigns, you'll find everything you need to grow and thrive in the ever-evolving e-commerce landscape.
    </p>

    <div className="details">
      <div>
        <h2>Users</h2>
        <p>{users && users.length}</p>
      </div>
      <div>
        <h2>Products</h2>
        <p>{products && products.length}</p>
      </div>
      <div>
        <h2>Orders</h2>
        <p>{orders && orders.length}</p>
      </div>
    </div>


    </div>
  )
}

export default Dashboard
