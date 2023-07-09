import React, { useState } from 'react'
import { BiLogoProductHunt, BiSolidUser } from "react-icons/bi"
import { updateProductAction } from '../../../Action/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { Link, useParams } from 'react-router-dom';
import "../../../Styles/updateProduct.scss"
import { MdOutlineDescription } from 'react-icons/md';
import { ImPriceTag } from 'react-icons/im';
import { AiOutlineStock } from 'react-icons/ai';

const UpdateProduct = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();

    const {product,loading} = useSelector(state=>state.singleProduct)

    const [name,setName] = useState(product.name);
    const [price,setPrice] = useState(product.price);
    const [stock,setStock] = useState(product.Stock);
    const [description,setDescription] = useState(product.description);

    const submitHandler = (e)=>{
        e.preventDefault();

        const myForm =new FormData();
        myForm.set("name",name);
        myForm.set("description",description);
        myForm.set("price",price);
        myForm.set("Stock",stock);
         dispatch(updateProductAction(id,myForm));
        alert.success("Product Updated");
    }

    

  return (
    <div id="UpdateProduct">
      <h2>Update Product</h2>
      <form>
          <div>
            <BiLogoProductHunt />
            <input type="text" placeholder="Name" required name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div>
              <MdOutlineDescription />
              <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="1" ></textarea>
            </div>

          <div>
            <ImPriceTag />
            <input type="number" placeholder="Price" required name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </div>

          <div>
            <AiOutlineStock />
            <input type="number" placeholder="Stock" required name="stock" value={stock} onChange={(e) => setStock(e.target.value)}/>
          </div>

          <button onClick={submitHandler} >Update</button>
      </form>
      
    </div>
  )
}

export default UpdateProduct
