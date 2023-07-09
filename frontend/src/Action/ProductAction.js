import axios from "axios"

export const getAllProductsAction = (keyword="")=>async(dispatch)=>{
    try {
        dispatch({
            type:"AllProductRequest",
        })

        let link = `/api/v1/products?keyword=${keyword}`;

        const {data} = await axios.get(link);
        console.log(data);

        dispatch({
            type:"AllProductSuccess",
            payload:data,
        })
    }
    catch (error) {
        dispatch({
            type:"AllProductFailure",
            payload:error.response.data.message,
        })
    }
}

export const getSingleProductsAction = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"SingleProductRequest",
        })

        const {data} = await axios.get(`/api/v1/product/${id}`);
        console.log(data);

        dispatch({
            type:"SingleProductSuccess",
            payload:data,
        })
    }
    catch (error) {
        dispatch({
            type:"SingleProductFailure",
            payload:error.response.data.message,
        })
    }
}

// Create Product
export const createProductAction = (productData) => async (dispatch) => {
    try {
      dispatch({ 
        type:"NewProductRequest"
      });
  
      const { data } = await axios.post(`/api/v1/admin/product/new`, productData,{
        headers: { "Content-Type": "application/json" },
      });
      console.log(data);
      dispatch({
        type:"NewProductSuccess",
        payload: data,
      });
    }
    catch (error) {
      dispatch({
        type: "NewProductFailure",
        payload: error.response.data.message,
      });
    }
  };

  //Update Product
  export const updateProductAction = (id,userData) => async (dispatch) => {
    try {
      dispatch({ 
        type:"UpdateProductRequest"
       });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`/api/v1/admin/product/${id}`, userData, config);

      dispatch({
        type:"UpdateProductSuccess",
        payload:data,
      });
    } catch (error) {
      dispatch({
        type:"UpdateProductFailure",
        payload: error.response.data.message,
      });
    }
  }; 
  //Update Product
  export const DeleteProductAction = (id,userData) => async (dispatch) => {
    try {
      dispatch({ 
        type:"DeleteProductRequest"
       });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.delete(`/api/v1/admin/product/${id}`, userData, config);

      dispatch({
        type:"DeleteProductSuccess",
        payload:data,
      });
    } catch (error) {
      dispatch({
        type:"DeleteProductFailure",
        payload: error.response.data.message,
      });
    }
  }; 

  //create Product Review
  export const createReviewAction = (reviewData) => async (dispatch) => {
    try {
      dispatch({ 
        type:"NewReviewRequest"
      });
     
      const { data } = await axios.put(`/api/v1/review`, reviewData,{
        headers: { "Content-Type": "application/json" },
      });
      console.log(data);
      dispatch({
        type:"NewReviewSuccess",
        payload: data,
      });
    }
    catch (error) {
      console.error(error)
      dispatch({
        type: "NewReviewFailure",
        payload: error.response.data.message,
      });
    }
  };