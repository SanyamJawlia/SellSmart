import {configureStore} from "@reduxjs/toolkit"
import { CreateNewProductReducer, UpdateProductsReducer, getAllProductsReducer, getSingleProductsReducer } from "./Reducer/ProductReducer"
import { cartReducer } from "./Reducer/CartReducer";
import {  GetAllUserReducer, LoadUserReducer, SingleUserAdminReducer, UpdateRoleAdminReducer, profileReducer } from "./Reducer/UserReducer";
import { CreateNewOrderReducer, GetAllOrderReducer, GetMyOrderReducer, GetSingleOrderDetailsReducer } from "./Reducer/OrderReducer";


const store = configureStore({
    reducer:{
        Cart:cartReducer,
        allProducts:getAllProductsReducer,
        singleProduct:getSingleProductsReducer,
        user:LoadUserReducer,
        profile:profileReducer,
        newProduct:CreateNewProductReducer,
        newOrder:CreateNewOrderReducer,
        allUsers:GetAllUserReducer,
        allOrders:GetAllOrderReducer,
        myorder:GetMyOrderReducer,
        singleOrder:GetSingleOrderDetailsReducer,
        singleUser:SingleUserAdminReducer,
        userRoleUpdate:UpdateRoleAdminReducer,
        updateProduct:UpdateProductsReducer,
    }
})


export default store;