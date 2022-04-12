import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";



const initialState = {
    orders: null,
    isError:false,
    isSuccess: false,
    message: '',
} 


//send Order
export const sendOrder = createAsyncThunk(
    'order/send',
    async (orderData, thunkAPI) => {
        try {
            return await orderService.sendOrder(orderData)
        } catch (error) {
            const message = (error.response 
                && error.response.data 
                && error.data.message)
            || error.message 
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
    )

//create slicer

export const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(sendOrder.pending, (state) => {
            state.isLoading = true
        })
        .addCase(sendOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.orders = action.payload
        })
        .addCase(sendOrder.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = orderSlice.actions
export default orderSlice.reducer