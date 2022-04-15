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

//get Order by phone number
export const getOrderByPhone = createAsyncThunk(
    'order/getOrderByPhone',
    async (phonenumb, thunkAPI) => {
        try {
            return await orderService.getOrderByPhone(phonenumb)
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

//get Order by phone number
export const getOrders = createAsyncThunk(
    'order/getOrders',
    async (thunkAPI) => {
        try {
            return await orderService.getOrders()
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

//get Order by phone number
export const updateOrder = createAsyncThunk(
    'order/update',
    async (data, thunkAPI) => {
        try {
            return await orderService.updateOrder(data)
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



export const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        reset: (state) => {
            state.orders = null
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
        })
        .addCase(sendOrder.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getOrderByPhone.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getOrderByPhone.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.orders = action.payload
        })
        .addCase(getOrderByPhone.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getOrders.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.orders = action.payload
        })
        .addCase(getOrders.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(updateOrder.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(updateOrder.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const {reset} = orderSlice.actions
export default orderSlice.reducer