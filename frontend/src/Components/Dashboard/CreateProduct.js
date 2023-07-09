import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { createProductAction } from '../../Action/ProductAction';
import "../../Styles/createProduct.scss"
import { FaMountain, FaProductHunt } from "react-icons/fa"
import {} from "react-icons/fa"
import { ImPriceTag } from "react-icons/im"
import { MdOutlineDescription } from "react-icons/md"
import { BiCategory } from "react-icons/bi"
import DashboardMenu from './DashboardMenu';

const CreateProduct = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [Stock, setStock] = useState(0);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const categories = ["Laptop","Footwear","Bottom","Tops","Attire","Camera","SmartPhones",];

    const {loading,error,message} = useSelector(state=>state.newProduct)

    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);
    
        setImages([]);
        setImagesPreview([]);
    
        files.forEach((file) => {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              setImagesPreview((old) => [...old, reader.result]);
              setImages((old) => [...old, reader.result]);
            }
          };
    
          reader.readAsDataURL(file);
        });
      };

      useEffect(() => {
        if (error) {
          alert.error(error);
          // console.log(error)
          dispatch({type:"ClearError"});
        }
    
        if (message) {
          alert.success(message);
          // console.log(message)
          dispatch({ type:"ClearMessage"});
        }
      }, [dispatch, alert, error, message]);

      const createProductSubmitHandler = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("name", name);
        myForm.set("price", price);
        myForm.set("description", description);
        myForm.set("category", category);
        myForm.set("Stock", Stock);
        images.forEach((image) => {
            myForm.append("images", image);
        });
        // console.log(myForm);
        dispatch(createProductAction(myForm));
      };      
      

  return (
    <div id="CreateProduct">
    <DashboardMenu/>
        <h1>Create Product</h1>

          <form className="createProductForm"  encType="multipart/form-data" onSubmit={createProductSubmitHandler} >

            <div>
              <FaProductHunt />
              <input type="text" placeholder="Product Name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
              <ImPriceTag />
              <input type="number" placeholder="Price" required  value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div>
              <MdOutlineDescription />
              <textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="1" ></textarea>
            </div>

            <div>
              <BiCategory />
              <select className="select" onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <FaMountain />
              <input type="number" placeholder="Stock" value={Stock} required onChange={(e) => setStock(e.target.value)} />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" width={"3vmax"} />
              ))}
            </div>

            <div id="createProductFormButton">
              <input type="file" name="avatar" accept="image/*" onChange={createProductImagesChange} />
            </div>

            <button id="createProductBtn" type="submit" disabled={loading ? true : false }>
                Create
            </button>
          </form>
      </div>
  )
}

export default CreateProduct
