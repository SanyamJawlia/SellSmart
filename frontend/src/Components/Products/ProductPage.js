import React, { useEffect } from 'react'
import "../../Styles/productpage.scss"
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard"
import { getAllProductsAction } from '../../Action/ProductAction';
import Loader from '../Essentials/Loader';
import { useAlert } from 'react-alert';

const ProductPage = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {products,loading} = useSelector((state)=>state.allProducts)

  useEffect(() => {
      dispatch(getAllProductsAction());
  }, [dispatch])

  
  //addToCartHandler
  const AddToCartHandler = (options)=>{
      dispatch({
          type:"addToCart",
          payload:options,
      })
      alert.success("Added to Cart");
      dispatch({
          type:"calculatePrice"
      })
  }
  return (


    <div id="productPage">
      
       <div className="productArea">
        {
          loading ? <Loader/> : products &&  products.map((item)=>(
            <ProductCard
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              ratings={item.ratings}
              image={item.images[0]}
              handler = {AddToCartHandler}
            /> 
          ))
        }
       </div>
    </div>
  )
}

export default ProductPage
