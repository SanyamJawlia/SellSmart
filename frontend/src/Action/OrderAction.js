import axios from "axios"

export const createNewOrderAction = (order)=>async(dispatch)=>{
    try {
        dispatch({
            type:"CreateOrderRequest",
        })
        const {data} = await axios.post("/api/v1/order/new",order,{
            headers:{
                "Content-Type": "application/json"
            }
        });
        console.log(data);

        dispatch({
            type:"CreateOrderSuccess",
            payload:data,
        })
    }
    catch (error) {
        dispatch({
            type:"CreateOrderFailure",
            payload:error.response.data.message,
        })
    }
}

export const GetAllOrderAction = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetAllOrderRequest",
        })
        const {data} = await axios.get("/api/v1/admin/orders");
        console.log(data);

        dispatch({
            type:"GetAllOrderSuccess",
            payload:data,
        })
    }
    catch (error) {
        dispatch({
            type:"GetAllOrderFailure",
            payload:error.response.data.message,
        })
    }
}


export const GetMyOrderAction = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"GetMyOrderRequest",
        })
        const {data} = await axios.get("/api/v1/orders/me");
        console.log(data);

        dispatch({
            type:"GetMyOrderSuccess",
            payload:data,
        })
    }
    catch (error) {
        dispatch({
            type:"GetMyOrderFailure",
            payload:error.response.data.message,
        })
    }
}


export const SingleOrderDetailAction = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"SingleOrderRequest",
        })
        const {data} = await axios.get(`/api/v1/order/${id}`);
        console.log(data);

        dispatch({
            type:"SingleOrderSuccess",
            payload:data,
        })
    }
    catch (error) {
        dispatch({
            type:"SingleOrderFailure",
            payload:error.response.data.message,
        })
    }
}

  //Update Order ( deliver the order)
  export const updateOrderAction = (id) => async (dispatch) => {
    try {
      dispatch({ 
        type:"UpdateOrderRequest"
       });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`/api/v1/admin/order/${id}`);

      dispatch({
        type:"UpdateOrderSuccess",
        payload:data,
      });
    } catch (error) {
        console.error(error)
      dispatch({
        type:"UpdateOrderFailure",
        payload: error.response.data.message,
      });
    }
  };

  //delete Order ( delete the order)
  export const deleteOrderAction = (id) => async (dispatch) => {
    try {
      dispatch({ 
        type:"UpdateOrderRequest"
       });
  
      const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

      dispatch({
        type:"UpdateOrderSuccess",
        payload:data,
      });
    } catch (error) {
        console.error(error)
      dispatch({
        type:"UpdateOrderFailure",
        payload: error.response.data.message,
      });
    }
  };