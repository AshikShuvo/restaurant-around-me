import { createSlice } from "@reduxjs/toolkit";
//act as an slice of redux store 
//all the logical action and mutation related to restaurants can be managed here

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