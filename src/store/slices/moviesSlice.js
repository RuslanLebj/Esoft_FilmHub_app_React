import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosInstance from "../../utils/axiosInstance.js";


const fetchMovies = createAsyncThunk(
    'movies/fetch',
    async (filters) => {
        console.log('API Key:', import.meta.env.VITE_API_KEY);

        // Создаем объект URLSearchParams для построения строки параметров запроса
        const params = new URLSearchParams();

        // Перебираем все ключи в объекте filters
        Object.keys(filters).forEach(key => {
            // Если значение ключа является массивом, добавляем каждый элемент массива как отдельный параметр запроса
            if (Array.isArray(filters[key])) {
                filters[key].forEach(value => params.append(key, value));
            } else {
                // Иначе добавляем ключ и значение как один параметр запроса
                params.append(key, filters[key]);
            }
        });

        // Выполняем GET-запрос с построенной строкой параметров
        const response = await axiosInstance.get(`/movie?${params.toString()}`);

        console.log('Response:', response.data);
        return response.data.docs;
    }
);
// filters могут быть как одиночные значения (например, limit: "250", lists: 'top250'), так и массивы (например, id: [1, 2, 3]).
// Если значение ключа в filters является массивом, каждый элемент этого массива добавляется в строку параметров запроса отдельно (например, id=1&id=2&id=3).
// Если значение ключа не является массивом, добавляем его как одиночный параметр.
// *Эта фича будет полезна в рамках поиска фильмов с набором id из favorite/watch_later и поиска фильмов по нескольким жанрам


// Функция для фетчинга информации об одном фильме по его id
const fetchMovieById = createAsyncThunk(
    'movies/fetchById',
    async (movieId) => {
        const response = await axiosInstance.get(`/movie/${movieId}`);
        return response.data;
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
    watch_later: [],
    filters: {limit: "250", lists: 'top250'},
    movie_list_name: "Популярные",
    current_movie: []
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
            },
            setFilters: (state, action) => {
                state.filters = action.payload;
            },
            setMovieListName: (state, action) => {
                state.movie_list_name = action.payload;
            }
        },
        // extraReducers:
        // Они предназначены для обработки действий, создаваемых с помощью createAsyncThunk или других асинхронных операций.
        // Они позволяют вам реагировать на действия, которые создаются вне текущего слайса.
        // Примеры: обработка состояний pending, fulfilled и rejected для асинхронных запросов.
        extraReducers: (builder) => {
            builder
                .addCase(fetchMovies.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchMovies.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                    console.log('Movies data from store:', state.data);
                })
                .addCase(fetchMovies.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                    console.error('Error fetching data:', state.error);
                })
                .addCase(fetchMovieById.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchMovieById.fulfilled, (state, action) => {
                    state.loading = false;
                    state.current_movie = action.payload;
                    console.log('Movie data from store:', state.data);
                })
                .addCase(fetchMovieById.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                    console.error('Error fetching data:', state.error);
                });
        }
    }
);

export {fetchMovies, updateMovie, fetchMovieById};

export const {
    addToFavorites,
    removeFromFavorites,
    addToWatchLater,
    removeFromWatchLater,
    setFilters,
    setMovieListName
} = moviesSlice.actions;

export default moviesSlice.reducer;