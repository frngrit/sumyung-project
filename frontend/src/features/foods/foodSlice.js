import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import foodService from "./foodService";

const initialState = {
    foods: null,
    isError: false,
    isSuccess: false,
    message: '',
}

export const getFoods = createAsyncThunk(
    'food/getfoods',
    async (_, thunkAPI) => {
        try {
            return await foodService.getFoods()
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

export const foodSliec = createSlice({
    name: 'order',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError =  false
            state.isSuccess = false
            state.message =  ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFoods.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getFoods.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.foods = action.payload
            })
            .addCase(getFoods.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const { reset } = foodSliec.actions
export default foodSliec.reducer