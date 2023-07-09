import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Components/Layout/Home'
import ProductDetails from './Components/Products/ProductDetails'
import ProductPage from './Components/Products/ProductPage'
import Cart from './Components/Cart/Cart'
import Dashboard from './Components/Dashboard/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { LoadUserAction } from './Action/UserAction'
import Profile from './Components/User/Profile'
import ShippingInfo from './Components/Cart/ShippingInfo'
import CreateProduct from './Components/Dashboard/CreateProduct'
import UpdateProfile from './Components/User/UpdateProfile'
import ResetPassword from './Components/User/ResetPassword'



import Register from './Components/User/Register'
import Login from './Components/User/Login'
import ForgotPassword from './Components/User/ForgotPassword'
import ConfirmOrder from './Components/Cart/ConfirmOrder'
import Payment from './Components/Cart/Payment'
import OrderPlaced from './Components/Cart/OrderPlaced'
import NotFound from './Components/Essentials/NotFound'
import GetAllUsers from './Components/Dashboard/User/GetAllUsers'
import GetAllProducts from './Components/Dashboard/Product/GetAllProducts'
import GetAllOrders from './Components/Dashboard/Order/GetAllOrders'
import MyOrders from './Components/Cart/MyOrders'
import MyOrderDetails from './Components/Cart/MyOrderDetails'
import OrderDetails from './Components/Dashboard/Order/OrderDetails'
import UserDetails from './Components/Dashboard/User/UserDetails'
import UpdateUserRole from './Components/Dashboard/User/UpdateUserRole'
import AllProductDetails from './Components/Dashboard/Product/AllProductDetails'
import UpdateProduct from './Components/Dashboard/Product/UpdateProduct'
import Contact from './Components/Layout/Contact'
import Blogs from './Components/Layout/Blogs'



const App = () => {

  const dispatch = useDispatch();

  const {isAuthenticated} = useSelector(state=>state.user)
  
  useEffect(() => {
    dispatch(LoadUserAction());
    dispatch({
      type:""
    })
  }, [dispatch])

  return (
    <Router>
      <Header/>
      <Routes>
        {/* Users */}
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/updateProfile" element={<UpdateProfile/>}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>

        {/* Cart  */}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shippingInfo" element={<ShippingInfo/>}/>
        <Route path="/confirmOrder" element={<ConfirmOrder/>}/>
        <Route path="/makePayment" element={<Payment/>}/>
        <Route path="/orderPlaced" element={<OrderPlaced/>}/>
        <Route path="/myOrder" element={<MyOrders/>}/>
        <Route path="/order/:id" element={<MyOrderDetails/>} />


        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/getAllUsers" element={<GetAllUsers/>} />
        <Route path="/getAllProducts" element={<GetAllProducts/>} />
        <Route path="/getAllOrders" element={<GetAllOrders/>} />
        <Route path="/allorder/:id" element={<OrderDetails/>} />
        <Route path="/user/:id" element={<UserDetails/>} />
        <Route path="/updateRole/:id" element={<UpdateUserRole/>} />
        <Route path="/allproduct/:id" element={<AllProductDetails/>} />
        <Route path="/UpdateProduct/:id" element={<UpdateProduct/>} />


        

        {/* Products */}
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/createProduct" element={<CreateProduct/>}/>
        <Route path="/notFound" element={<NotFound/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogs" element={<Blogs/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
