import { configureStore } from "@reduxjs/toolkit";
import cartReducers from './slices/cartSlice';
import todoReducers from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducers,
        todo: todoReducers,
    },
    devTools: true,
});