import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await axios("https://6363b9e637f2167d6f8172b7.mockapi.io/api/products")

    return res.data;
}
)
export const ProductsSlice = createSlice({
    name:"products",
    initialState:{
        allProducts:[],
        status:"idle",
        error:null,

    },
    reducers:{},
    extraReducers:{
        [fetchProducts.pending]:(state,action)=>{
            state.status ="loading";
        },
        [fetchProducts.fulfilled]:(state,action)=>{
            state.status="succeded"
            state.allProducts= action.payload
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.status = "failed"
            state.error = action.error.message;
        }
    }
})
export const selectStatus = ((state)=>state.products.status);
export const selectError = ((state)=>state.products.error)
export default ProductsSlice.reducer;
