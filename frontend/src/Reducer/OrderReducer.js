import { createReducer } from "@reduxjs/toolkit";

export const CreateNewOrderReducer = createReducer({},{
    CreateOrderRequest:(state)=>{
        state.loading = true;
    },
    CreateOrderSuccess:(state,action)=>{
        state.loading = false;
        state.order = action.payload.order;
    },
    CreateOrderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})


export const GetAllOrderReducer = createReducer({},{
    GetAllOrderRequest:(state)=>{
        state.loading = true;
    },
    GetAllOrderSuccess:(state,action)=>{
        state.loading = false;
        state.orders = action.payload.orders;
    },
    GetAllOrderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})


export const GetMyOrderReducer = createReducer({},{
    GetMyOrderRequest:(state)=>{
        state.loading = true;
    },
    GetMyOrderSuccess:(state,action)=>{
        state.loading = false;
        state.orders = action.payload.order;
    },
    GetMyOrderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})


export const GetSingleOrderDetailsReducer = createReducer({},{
    SingleOrderRequest:(state)=>{
        state.loading = true;
    },
    SingleOrderSuccess:(state,action)=>{
        state.loading = false;
        state.orderSingle = action.payload.order;
    },
    SingleOrderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})


export const UpdateOrderReducer = createReducer({},{
    UpdateOrderRequest:(state)=>{
        state.loading = true;
    },
    UpdateOrderSuccess:(state,action)=>{
        state.loading = false;
        state.orderSingle = action.payload.order;
    },
    UpdateOrderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})

export const DeleteOrderReducer = createReducer({},{
    DeleteOrderRequest:(state)=>{
        state.loading = true;
    },
    DeleteOrderSuccess:(state,action)=>{
        state.loading = false;
        state.isDeleted = action.payload.success;
    },
    DeleteOrderFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    DeleteOrderReset:(state,action)=>{
        state.isDeleted = false;
    },
    clearErrors:(state)=>{
        state.error = null;
    },
    clearMessage:(state)=>{
        state.message=null;
    },
})

