import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { DeleteProductAction, getSingleProductsAction } from '../../../Action/ProductAction';
import Loader from '../../Essentials/Loader';
import { useAlert } from 'react-alert';
import ReactStars from "react-rating-stars-component";
import "../../../Styles/allProductDetails.scss"

const AllProductDetails = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();

    const {product,loading} = useSelector(state=>state.singleProduct)

    useEffect(() => {
      dispatch(getSingleProductsAction(id));
    }, [dispatch])

    const deleteHandler = (e)=>{
      e.preventDefault();

      dispatch(DeleteProductAction(id));
      alert.success("Product deleted");
    }

  if(!product){
    return null;
  }
    
  return  loading ? (<Loader/>) : (
    <div id="allproductDetailsPage" >
      <div className="Details">
        <img src={product.images[0].url} alt="Image" width={"400px"} height={"500px"} />
        <div className="content">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h2 style={{marginBottom:"0px"}}>Category:</h2>
          <h2 style={{marginLeft:"2rem" ,marginTop:"0px",color:"#006400"}} >{product.category}</h2>
          <h3>₹{product.price}</h3>
          
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
        <button><Link to={`/UpdateProduct/${product._id}`} >Update Product</Link></button>
        <button onClick={deleteHandler} style={{backgroundColor:"red"}} >Delete This Product </button>
        </div>
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

export default AllProductDetails
