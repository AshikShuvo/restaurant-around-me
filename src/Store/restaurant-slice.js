import { createSlice } from "@reduxjs/toolkit";
const restaurantsSlice=createSlice({
    name:'restaurantsState',
    initialState:{
        restaurants:[]
    },
    reducers:{
        setRestaurants(state,action){
            state.restaurants=action.payload;
        }
    }
})
export const restaurantsActions=restaurantsSlice.actions;

export default restaurantsSlice;