import {useEffect} from 'react';
import MovieList from "../../components/lists/movieList/MovieList.jsx";
import LoadingPage from "../loadingPage/LoadingPage.jsx";
import ErrorPage from "../errorPage/ErrorPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/slices/moviesSlice.js"

const MovieListPage = (filterValue) => {
    const dispatch = useDispatch();
    const { data: movies, loading, error, } = useSelector((state) => state.movies);
    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage errorMessage={error} />;

    return (
        <div className="w-full min-h-screen gap-4 flex-wrap flex justify-center items-center p-4">
            <MovieList movies={movies}/>
        </div>
    );
};

export default MovieListPage;