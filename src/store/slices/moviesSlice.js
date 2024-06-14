import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config.js'


const fetchPopularMovies = createAsyncThunk(
    'movies/fetch',
    async () => {
        console.log('API Key:', import.meta.env.VITE_API_KEY);
        const response = await axios.get(`${config.apiUrl}/movie?limit=250&lists=top250`, // Возьмем 250 фильмов из списка лучшие 250
            {
                headers: {
                    accept: 'application/json',
                    'X-API-KEY': import.meta.env.VITE_API_KEY
                }
            });
        console.log('Response:', response.data);
        return await response.data.docs;
    }
);

// Имитация запроса на обновление данных
const updateMovie = createAsyncThunk(
    'movies/update',
    async (movieId) => {
        // Имитируем запрос
        await new Promise(resolve => setTimeout(resolve, 500)); // Симулируем ответ сервера
        return movieId;
    }
);
// *Т.к. мы не имеем прямого доступа к изменению данных API сделаем имитацию запроса
// В реальном примере необходимо было бы отправить id обновляемого фильма и обновляемое поле, в нашем случае favorite/watch_later
// UPD: в итоге решил просто добавить это в синхронные редьюсеры т.к. изначальные данные не имеют поля favorite/watch_later
// и добавлять это поле вручную каждому объекту будет слишком колхозно, так что просто сделаем добавление в соотвествующие списки
// = Предположим, что пройдясь по данным после фетчинга мы добавляем их сихнронно в необходимые списки (favorite, watch_later) на клиенте

const initialState = {
    loading: false,
    data: [],
    error: null,
    favorites: [],
    watch_later: []
};

const moviesSlice = createSlice({
        name: 'movies',
        initialState,
        // Обычные редьюсеры (reducers):
        // Они используются для синхронных операций.
        // Обычно они обрабатывают действия, которые не требуют выполнения асинхронных запросов.
        // Примеры: обновление локального состояния, переключение режимов интерфейса, управление состоянием форм и т.д.
        reducers: {
            addToFavorites: (state, action) => {
                const movieId = action.payload;
                if (!state.favorites.includes(movieId)) {
                    state.favorites.push(movieId);
                }
                console.log(`Movie with id ${movieId} added to favorites`,);
            },
            removeFromFavorites: (state, action) => {
                const movieId = action.payload;
                state.favorites = state.favorites.filter(id => id !== movieId);
                console.log(`Movie with id ${movieId} removed from favorites`,);
            },
            addToWatchLater: (state, action) => {
                const movieId = action.payload;
                if (!state.watch_later.includes(movieId)) {
                    state.watch_later.push(movieId);
                }
                console.log(`Movie with id ${movieId} added to watch later`,);
            },
            removeFromWatchLater: (state, action) => {
                const movieId = action.payload;
                state.watch_later = state.watch_later.filter(id => id !== movieId);
                console.log(`Movie with id ${movieId} removed from watch later`,);
            }
        },
        // extraReducers:
        // Они предназначены для обработки действий, создаваемых с помощью createAsyncThunk или других асинхронных операций.
        // Они позволяют вам реагировать на действия, которые создаются вне текущего слайса.
        // Примеры: обработка состояний pending, fulfilled и rejected для асинхронных запросов.
        extraReducers: (builder) => {
            builder
                .addCase(fetchPopularMovies.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                    console.log('Movies data from store:', state.data);
                })
                .addCase(fetchPopularMovies.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                    console.error('Error fetching data:', state.error);
                });
        }
    }
);

export {fetchPopularMovies, updateMovie};

export const {
    addToFavorites,
    removeFromFavorites,
    addToWatchLater,
    removeFromWatchLater
} = moviesSlice.actions;

export default moviesSlice.reducer;