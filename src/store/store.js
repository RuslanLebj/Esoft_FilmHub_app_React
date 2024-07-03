import {configureStore} from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice.js";

const store = configureStore({
    reducer: {
        movies: moviesSlice,
    }
});

export default store;