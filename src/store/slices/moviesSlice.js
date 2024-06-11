import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    data: [],
    error: null
};

const moviesSlice = createSlice({
        name: 'movies',
        initialState,
        reducers: {
            fetchDataStart(state) {
                state.loading = true;
                state.error = null;
            },
            fetchDataSuccess(state, action) {
                state.loading = false;
                state.data = action.payload;
            },
            fetchDataFailure(state, action) {
                state.loading = false;
                state.error = action.payload;
            },
        }
    }
);

export const {
    fetchDataStart,
    fetchDataSuccess,
    fetchDataFailure,
} = moviesSlice.actions;

export default moviesSlice.reducer;