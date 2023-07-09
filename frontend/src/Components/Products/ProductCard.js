import React from 'react'
import { Link } from 'react-router-dom'
import "../../Styles/productcard.scss"
import ReactStars from "react-rating-stars-component";



const Product = ({ id, name, price, ratings, image, handler}) => {
  const options ={
    edit:false,
    color:"lightgray",
    activeColor:"gold",
    // size:window.innerWidth < 600 ? 20:25
    value:ratings,
    isHalf:true,
    size:25
  }


  return (
    <div  className="productCard">
      <Link to={`/product/${id}`} >
        <img src={image.url} alt="Product" />

        <h2>{name}</h2>
        <h3>₹{price}</h3>

        <div>
          <ReactStars {...options} style={{fontSize:"4rem"}} /> <span>{ratings}Reviews</span>
        </div>
      </Link>

        <button onClick={()=>handler({id,name,price,image,quantity:1})}>
            Add to Cart
        </button>
    </div>
  )
}

export default Product
