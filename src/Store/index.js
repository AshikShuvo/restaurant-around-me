import { configureStore } from "@reduxjs/toolkit";
import restaurantsSlice from "./restaurant-slice";

const Store=configureStore({
    reducer:{restaurantsState:restaurantsSlice.reducer}
});

export default Store;
