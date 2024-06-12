import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config.js'


const fetchMovies = createAsyncThunk(
    'movies/fetch',
    async () => {
        // console.log('API Key:',  import.meta.env.VITE_API_KEY);
        const response = await axios.get(`${config.apiUrl}/movie?limit=100`, {
            headers: {
                accept: 'application/json',
                'X-API-KEY': import.meta.env.VITE_API_KEY
            }
        });
        // console.log('Response:',  response.data);
        return await response.data.docs;
    }
);


const initialState = {
    loading: false,
    data: [],
    error: null
};

const moviesSlice = createSlice({
        name: 'movies',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchMovies.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchMovies.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                    // console.log('Movies data from store:',  state.data);
                })
                .addCase(fetchMovies.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                    // console.error('Error fetching data:', state.error);
                });
        }
    }
);

export {fetchMovies};

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;