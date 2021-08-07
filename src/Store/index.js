import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./restaurant-slice";
//redux store exported with different slice of store and reducer powered by @reduxjs/toolkit
const Store=configureStore({
    reducer:{restaurantsState:restaurantsSlice.reducer}
});

export default Store;
