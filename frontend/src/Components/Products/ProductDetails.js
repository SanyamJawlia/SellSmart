import React, { useEffect, useState } from 'react'
import "../../Styles/productDetails.scss"
import { useDispatch, useSelector } from 'react-redux'
import { createReviewAction, getSingleProductsAction } from '../../Action/ProductAction';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Essentials/Loader';
import { Rating } from "@material-ui/lab";
import { useAlert } from 'react-alert';
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const {id} = useParams();

  const {product,loading,error,message} = useSelector(state=>state.singleProduct);

  useEffect(() => {
    dispatch(getSingleProductsAction(id));
  }, [dispatch])
  
  useEffect(() => {
    if(error){
      alert.error(error)
      dispatch({type:"clearErrors"})
    }
    if(message){
      alert.success(message)
      dispatch({type:"clearMessage"})
    }
  }, [dispatch,message,error,id])

  //adding comment
  const [rating,setRating] = useState(0)
  const [comment , setComment] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("rating",rating)
    myForm.set("comment",comment)
    myForm.set("productId",id)

    dispatch(createReviewAction(myForm))
    alert.success("Review Added");
  }

  if(!product){
    return null;
  }
  
  
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

  return loading ? (<Loader/>) : (
    <div id="productDetailsPage" >

      <div className="Details">
        <img src={product.images[0].url} alt="Image" width={"400px"} height={"500px"} />
        <div className="content">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h2 style={{marginBottom:"0px"}}>Category:</h2>
          <h2 style={{marginLeft:"2rem" ,marginTop:"0px",color:"#006400"}} >{product.category}</h2>
          <h3>₹{product.price}</h3>
          
          <button disabled={product.Stock<1 ?true:false} onClick={AddToCartHandler} >Add To Cart</button>
          {/* <ReactStars {...options} style={{fontSize:"2rem"}} /> */}
          <ReactStars
            edit={false}
            color="lightgray"
            activeColor="gold"
            value={product.ratings}
            isHalf={true}
            size={25}
            style={{ fontSize: "2rem" }}
          />
          <p>
            <b className={product.Stock<1 ? "redcolor" : "greencolor"} >
              {product.Stock < 1 ? "Out Of Stock" : "In Stock"}
            </b>
          </p>
        </div>
      </div>

      <h2>Add Product Review</h2>
      {/* Add review */}
      <div id="addReview">

        <Rating onChange={(e) => setRating(e.target.value)} value={rating} size="large"/>

        <textarea cols="30" rows="5" placeholder='Add Review' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>

        <button onClick={submitHandler} >Submit</button>
      </div>

      <h2>All Reviews</h2>
      <div className="allReviews">
        {
          product.reviews.length > 0 ? product.reviews.reverse().map((review)=>(
            <ReviewCard
              key = {review._id}
              name = {review.name}
              comment = {review.comment}
              image = {review.user.avatar.url}
              rating = {review.rating}
            />
          )) : <h2>No reviews</h2>
        }
      </div>


    </div>
    
  )
}

const ReviewCard = ({name,image,rating,comment})=>{
  const options ={
    edit:false,
    color:"lightgray",
    activeColor:"gold",
    // size:window.innerWidth < 600 ? 20:25
    value:rating,
    isHalf:true,
    size:25
  }

  return (
  <div className="reviewcard">
    <img src={image} alt={"user"} />
    <div className="details">
    <h2>{name}</h2>
    <ReactStars {...options} style={{fontSize:"2rem"}} />
    <p>{comment}</p>

    </div>
  </div>
)}

export default ProductDetails
