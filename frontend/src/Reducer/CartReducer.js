import { createReducer } from "@reduxjs/toolkit"

const getCartData=()=>{
    let CartData = localStorage.getItem("SellSmartCart");
    if(CartData === []){
        return [];
    }
    else{
        return JSON.parse(CartData);
    }
}
const getSubTotal=()=>{
    let subtotalvalue = localStorage.getItem("SellSmartSubTotal");
    if(subtotalvalue === 0){
        return 0;
    }
    else{
        return JSON.parse(subtotalvalue);
    }
}
const getShipping=()=>{
    let shippingvalue = localStorage.getItem("SellSmartShipping");
    if(shippingvalue === 0){
        return 0;
    }
    else{
        return JSON.parse(shippingvalue);
    }
}
const getTax=()=>{
    let taxvalue = localStorage.getItem("SellSmartTax");
    if(taxvalue === 0){
        return 0;
    }
    else{
        return JSON.parse(taxvalue);
    }
}
const getTotal=()=>{
    let totalvalue = localStorage.getItem("SellSmartTotal");
    if(totalvalue === 0){
        return 0;
    }
    else{
        return JSON.parse(totalvalue);
    }
}   

// Shipping Details
const getShippingDetails=()=>{
    let ShippingData = localStorage.getItem("SellSmartShippingDetails");
    return JSON.parse(ShippingData);
}   

export const cartReducer = createReducer({
    ShippingInfo:getShippingDetails(),
    cartItems:getCartData(),
    subTotal:getSubTotal(),
    shipping:getShipping(),
    tax:getTax(),
    total:getTotal(),

},{
    
    addToCart:(state,action)=>{
        const item = action.payload;
        const isItemExists = state.cartItems.find((i)=> i.id===item.id);

        if(isItemExists){
            state.cartItems.forEach(i=>{
                if(i.id === item.id) i.quantity+=1;
            });
        }
        else{
            state.cartItems.push(item);
        }
    },

    decrement:(state,action)=>{
        const item = state.cartItems.find((i)=> i.id===action.payload);
        if(item.quantity>1){
            state.cartItems.forEach((i)=>{
                if(i.id===item.id) i.quantity-=1;
            })
        }
        else{
            state.cartItems = state.cartItems.filter(i=>i.id!==action.payload);

        }
    },

    deleteFromCart:(state,action)=>{
        state.cartItems = state.cartItems.filter(i=>i.id!==action.payload);
    },

    calculatePrice:(state)=>{
        let sum=0;
        let taxrate = 0.18;
        state.cartItems.forEach(i=>sum+=i.price*i.quantity);
        state.subTotal = sum;
        state.shipping = (state.subTotal>10000 || state.subTotal===0 )? 0 : 200;
        state.tax = parseInt(sum*taxrate);
        state.total = state.subTotal + state.tax + state.shipping;
    },

});


