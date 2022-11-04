import {configureStore} from "@reduxjs/toolkit"
import ProductsSlice from "./productsSlice/ProductsSlice"

export const store = configureStore({
    reducer:{
        products:ProductsSlice,
    }
})