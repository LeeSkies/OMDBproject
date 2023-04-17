import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from './features/restaurantssSlice' 

export const store = configureStore({
    reducer: {
        restaurants: restaurantsReducer
    }
})