import { createReducer } from "@reduxjs/toolkit";

export const LoadUserReducer = createReducer({
    isAuthenticated : false,
},{
    // Register
    RegisterRequest:(state,action)=>{
        state.loading = true;
        state.isAuthenticated = false;
    },
    RegisterSuccess:(state,action)=>{
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated  = true;
    },
    RegisterFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated  = false;
    },
    
    //Login
    LoginRequest:(state,action)=>{
        state.loading = true;
        state.isAuthenticated = false;
    },
    LoginSuccess:(state,action)=>{
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated  = true;
    },
    LoginFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated  = false;
    },

    //Load User
    LoadUserRequest:(state,action)=>{
        state.loading = true;
    },
    LoadUserSuccess:(state,action)=>{
        state.loading = false;
        state.user = action.payload.user;
        state.isAuthenticated  = true;
    },
    LoadUserFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated  = false;
    },

    //logout
    LogoutRequest:(state,action)=>{
        state.loading = true;
    },
    LogoutSuccess:(state,action)=>{
        state.loading = false;
        state.user = null;
        state.isAuthenticated  = false;
    },
    LogoutFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated  = true;
    },

    clearError:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message = null;
    }
})


export const profileReducer = createReducer({},{

    //update profile
    UpdateProfileRequest:(state,action)=>{
        state.loading = true;
    },
    UpdateProfileSuccess:(state,action)=>{
        state.loading = false;
        state.isUpdated = action.payload.success;
    },
    UpdateProfileFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    UpdateProfileReset:(state,action)=>{
        state.isUpdated = false;
    },

    //Reset Password
    ResetPasswordRequest:(state,action)=>{
        state.loading = true;
    },
    ResetPasswordSuccess:(state,action)=>{
        state.loading = false;
        state.isUpdated = action.payload.success;
    },
    ResetPasswordFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    ResetPasswordReset:(state,action)=>{
        state.isUpdated = false;
    },
    
    ClearError:(state)=>{
        state.error = null;
    }
})

export const GetAllUserReducer = createReducer({},{

    //update profile
    AllUserRequest:(state,action)=>{
        state.loading = true;
    },
    AllUserSuccess:(state,action)=>{
        state.loading = false;
        state.users = action.payload.users;
    },
    AllUserFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    ClearError:(state)=>{
        state.error = null;
    }
})

export const SingleUserAdminReducer = createReducer({},{

    //update profile
    SingleUserRequest:(state,action)=>{
        state.loading = true;
    },
    SingleUserSuccess:(state,action)=>{
        state.loading = false;
        state.userSingle = action.payload.user;
    },
    SingleUserFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    ClearError:(state)=>{
        state.error = null;
    },

})

export const UpdateRoleAdminReducer = createReducer({},{

    ClearError:(state)=>{
        state.error = null;
    },
    
    UpdateRoleRequest:(state,action)=>{
        state.loading = true;
    },
    UpdateRoleSuccess:(state,action)=>{
        state.loading = false;
        state.userSingle = action.payload.user;
    },
    UpdateRoleFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },

})







