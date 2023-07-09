import axios from "axios";

export const RegisterAction = (userData)=>async(dispatch)=>{
    try {
        dispatch({
            type:"RegisterRequest"
        })
        
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`/api/v1/register`, userData, config);
        console.log(data);

        dispatch({
            type:"RegisterSuccess",
            payload : data,
        })
    }
    catch (error) {
        dispatch({
            type:"RegisterFailure",
            payload : error.response.data.message ,
        })
    }
}

export const LoginAction = (email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoginRequest"
        })

        const {data} = await axios.post("/api/v1/login",{email,password},{
            headers:{
                "Content-Type":"application/json"
            },
        })
        console.log(data);

        dispatch({
            type:"LoginSuccess",
            payload : data,
        })
    }
    catch (error) {
        dispatch({
            type:"LoginFailure",
            payload : error.response.data.message ,
        })
    }
}

export const LoadUserAction = (email,password)=>async(dispatch)=>{
    try {
        dispatch({
            type:"LoadUserRequest"
        })

        const {data} = await axios.get("/api/v1/me")
        console.log(data);

        dispatch({
            type:"LoadUserSuccess",
            payload : data,
        })
    }
    catch (error) {
        dispatch({
            type:"LoadUserFailure",
            payload : error.response.data.message ,
        })
    }
}

export const LogoutAction = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"LogoutRequest"
        })

        await axios.get("/api/v1/logout");

        dispatch({
            type:"LogoutSuccess",
        })
    }
    catch (error) {
        dispatch({
            type:"LogoutFailure",
            payload : error.response.data.message ,
        })
    }
}

// Update Profile
export const updateProfileAction = (userData) => async (dispatch) => {
    try {
      dispatch({ 
        type:"UpdateProfileRequest"
       });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`/api/v1/me/update`, userData, config);

      dispatch({
        type:"UpdateProfileSuccess",
        payload:data,
      });
    } catch (error) {
      dispatch({
        type:"UpdateProfileFailure",
        payload: error.response.data.message,
      });
    }
  };

// Update Profile
export const ResetPasswordAction = (userData) => async (dispatch) => {
    try {
        

      dispatch({ 
        type:"ResetPasswordRequest"
       });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.put(`/api/v1/password/update`, userData, config);
        console.log(data);
      dispatch({
        type:"ResetPasswordSuccess",
        payload:data,
      });
    } catch (error) {
      dispatch({
        type:"ResetPasswordFailure",
        payload: error.response.data.message,
      });
    //   console.log(error);
    }
  };


  //get all users --admin
  export const GetAllUserAction = ()=>async(dispatch)=>{
    try {
        dispatch({
            type:"AllUserRequest"
        })

        const {data} = await axios.get("/api/v1/admin/users");

        dispatch({
            type:"AllUserSuccess",
            payload:data,
        })
    }
    catch (error) {
        dispatch({
            type:"AllUserFailure",
            payload : error.response.data.message ,
        })
    }
}


export const SingleUserDetailsAdminAction = (id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"SingleUserRequest",   
        })

        const {data} = await axios.get(`/api/v1/admin/user/${id}`);
        console.log(data);

        dispatch({
            type:"SingleUserSuccess",
            payload:data,
        })
    }
    catch (error) {
        dispatch({
            type:"SingleUserFailure",
            payload:error.response.data.message,
        })
    }
}

// Update user Role
export const updateUserRoleAction = (id,role) => async (dispatch) => {
    try {
      dispatch({ 
        type:"UpdateRoleRequest"
       });
  
      const config = { headers: { "Content-Type": "application/json" } };
      
      const { data } = await axios.put(`/api/v1/admin/user/${id}`, role, config);
    //   console("updated",data);
      console.log(data)
      dispatch({
        type:"UpdateRoleSuccess",
        payload:data,
      });
    } catch (error) {
        console.log("action",error)
      dispatch({
        type:"UpdateRoleFailure",
        payload: error.response.data.message,
      });
    }
  };