import { configureStore } from '@reduxjs/toolkit';
import foodSlice from '../features/foods/foodSlice';
import orderSlice from "../features/orders/orderSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice,
    food: foodSlice
  },
});
