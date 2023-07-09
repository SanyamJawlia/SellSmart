import React, { useEffect } from 'react'
import "../../../Styles/GetAllProducts.scss"
import {useDispatch, useSelector} from "react-redux";
import { getAllProductsAction } from '../../../Action/ProductAction';
import Loader from '../../Essentials/Loader';
import { useAlert } from 'react-alert';
import { Link, useParams } from 'react-router-dom';
import DashboardMenu from '../DashboardMenu';

const ProductPage = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {products,loading ,error} = useSelector((state)=>state.allProducts)

  useEffect(() => {
      dispatch(getAllProductsAction());
      alert.success("all products are found")
  }, [dispatch])

 
  return (

    <div id="getAllProducts">
    <DashboardMenu/>
       <h2>Sell Smart : Products</h2>
       <div className="productArea">
       <div className="allproductcardheader">
            <h2>Image</h2>
            <h2>Name</h2>
            <h2>Stock</h2>
            <h2>Price(₹)</h2>
        </div>
        {
          loading ? <Loader/> : products &&  products.map((item)=>(
            <AllProductCard
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.images[0].url}
              stock = {item.Stock}
            /> 
          ))
        }
       </div>
    </div>
  )
}

const AllProductCard =({name,id,price,image,stock})=>(
    <div className="allproductcard">
      <Link to={`/allproduct/${id}`} >
        <img src={image} alt="product" />
        <h2>{name}</h2>
        <h2>{stock}</h2>
        <h2>₹{price}</h2>
      </Link>
    </div>
)

export default ProductPage
