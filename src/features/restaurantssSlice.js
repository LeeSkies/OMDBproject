import { createSlice } from "@reduxjs/toolkit";

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
        restaurants: []
    },
    reducers: {
        setRestaurants: (state, action) => {
            const restaurants = action.payload
        },
        getRestaurants: (state, action) => {
            const restaurants = JSON.parse(localStorage.getItem('restaurants'))
            state.restaurants = restaurants
        },
        addRestaurants: (state, action) => {
            const newRestaurant = action.payload
            state.restaurants?.length ? state.restaurants.push(newRestaurant) : state.restaurants = [newImage]
            localStorage.setItem('restaurants', JSON.stringify(state.restaurants))
        },
        searchRestaurants: (state, action) => {
            const restaurants = JSON.parse(localStorage.getItem('restaurants'))
            let filtered
            if(state.restaurants?.length)
                filtered = restaurants.filter(restaurant => restaurant.city.toLowerCase().includes(action.payload.toLowerCase()))
            state.restaurants = filtered
        },
        getSingleRestaurant: (state, action) => {
            const id = action.payload
            const restaurants = JSON.parse(localStorage.getItem('restaurants'))
            const filtered = restaurants.find(restaurant => restaurant.id == id)
            state.restaurants = filtered
            console.log(state.restaurants)
        },
        editRestaurant: (state, action) => {
            const { id, req, r } = action.payload
            const restaurants = JSON.parse(localStorage.getItem('restaurants'))
            switch (req) {
                case 'edit': {
                    const mapped = restaurants.map(restaurant => {
                        if (restaurant.id == r.id) {
                            return {...restaurant, ...r}
                        }
                        return restaurant
                    })
                    state.restaurants = mapped
                    localStorage.setItem('restaurants', JSON.stringify(mapped))
                    break;
                }
                case 'delete': {
                    const filtered = restaurants.filter(restaurant => restaurant.id != id)
                    state.restaurants = filtered
                    localStorage.setItem('restaurants', JSON.stringify(filtered))
                    break;
                }
                case 'add': {
                    const newRestaurant = {...r, id:Date.now()}
                    const newRestaurants = restaurants?.length ? [...restaurants, newRestaurant] : [newRestaurant]
                    localStorage.setItem('restaurants', JSON.stringify(newRestaurants))
                    state.restaurants = newRestaurants
                    break;
                }
            }}
    }
});

export const actions = restaurantsSlice.actions;
export default restaurantsSlice.reducer;