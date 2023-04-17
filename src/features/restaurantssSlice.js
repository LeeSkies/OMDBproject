import { createSlice } from "@reduxjs/toolkit";

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        restaurants: []
    },
    reducers: {
        setRestaurants: (state, action) => {
            const restaurants = action.payload
            localStorage.setItem('restaurants', JSON.stringify(restaurants))
        },
        getRestaurants: (state, action) => {
            const restaurants = JSON.parse(localStorage.getItem('restaurants'))
            state.restaurants = restaurants
        },
        addRestaurants: (state, action) => {
            const newImage = action.payload
            state.restaurants.push(newImage)
            localStorage.setItem('restaurants', JSON.stringify(state.restaurants))
        },
        deleteRestaurants: (state, action) => {
            const { name } = action.payload
            state.restaurants = state.restaurants.filter(restaurant => restaurant.name !== name)
            localStorage.setItem('restaurants', JSON.stringify(state.restaurants))
        },
        searchRestaurants: (state, action) => {
            console.log(action.payload)
            const restaurants = JSON.parse(localStorage.getItem('restaurants'))
            const filtered = restaurants.filter(restaurant => restaurant.city.toLowerCase().includes(action.payload.toLowerCase()))
            state.restaurants = filtered
        },
        getSingleRestaurant: (state, action) => {
            const id = action.payload
            const restaurants = JSON.parse(localStorage.getItem('restaurants'))
            const filtered = restaurants.find(restaurant => restaurant.id == id)
            console.log(filtered)
            state.restaurants = filtered
        },
        updateRestaurant: (state, action) => {
            const updatedRestaurant = action.payload
            console.log(action.payload)
            const restaurants = JSON.parse(localStorage.getItem('restaurants'))
            const newRestaurants = restaurants.map(r => {
                if (r.id == updatedRestaurant.id) {
                    return updatedRestaurant
                }
                return r
            
            })
            localStorage.setItem('restaurants', JSON.stringify(newRestaurants))
        }
    }
});

export const actions = restaurantsSlice.actions;
export default restaurantsSlice.reducer;