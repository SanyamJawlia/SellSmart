import { createReducer } from "@reduxjs/toolkit";

export const getAllProductsReducer = createReducer({},{
    AllProductRequest:(state)=>{
        state.loading = true;
    },
    AllProductSuccess:(state,action)=>{
        state.loading = false;
        state.products = action.payload.products;
    },
    AllProductFailure:(state,action)=>{
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

export const getSingleProductsReducer = createReducer({},{
    SingleProductRequest:(state)=>{
        state.loading = true;
    },
    SingleProductSuccess:(state,action)=>{
        state.loading = false;
        state.product = action.payload.product;
    },
    SingleProductFailure:(state,action)=>{
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

export const CreateNewProductReducer = createReducer({},{
    NewProductRequest:(state)=>{
        state.loading = true;
    },
    NewProductSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload.message;
        state.newproduct = action.payload.product;
    },
    NewProductFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    ClearMessage:(state)=>{
        state.message = null;
    },
    ClearError:(state)=>{
        state.error=null;
    },
});

//Update Product 
export const UpdateProductsReducer = createReducer({},{
    UpdateProductRequest:(state)=>{
        state.loading = true;
    },
    UpdateProductSuccess:(state,action)=>{
        state.loading = false;
        state.product = action.payload.product;
    },
    UpdateProductFailure:(state,action)=>{
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

//Update Product 
export const DeleteProductsReducer = createReducer({},{
    DeleteProductRequest:(state)=>{
        state.loading = true;
    },
    DeleteProductSuccess:(state,action)=>{
        state.loading = false;
        state.product = action.payload.product;
    },
    DeleteProductFailure:(state,action)=>{
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

//Add Review
export const CreateReviewReducer = createReducer({},{
    NewReviewRequest:(state)=>{
        state.loading = true;
    },
    NewReviewSuccess:(state,action)=>{
        state.loading = false;
        state.isAdded = action.payload.success;
    },
    NewReviewFailure:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },
    NewReviewReset:(state,action)=>{
        state.isAdded = false;
    },
    ClearMessage:(state)=>{
        state.message = null;
    },
    ClearError:(state)=>{
        state.error=null;
    },
});