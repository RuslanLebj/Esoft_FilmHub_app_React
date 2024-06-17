import {useEffect} from 'react';
import MovieList from "../../components/lists/movieList/MovieList.jsx";
import LoadingPage from "../loadingPage/LoadingPage.jsx";
import ErrorPage from "../errorPage/ErrorPage.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../../store/slices/moviesSlice.js"
import PageTitle from "../../components/titles/pageTitle/PageTitle.jsx";

const MovieListPage = () => {
    const dispatch = useDispatch();
    const {data: movies, loading, error, filters, movie_list_name} = useSelector((state) => state.movies);

    // Первоначальная загрузка фильмов и загрузка фильмов при изменении фильтров
    useEffect(() => {
        dispatch(fetchMovies(filters));
    }, [filters]); // Добавляем filters в зависимости, чтобы обновлять список при каждом изменении фильтров

    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage errorMessage={error}/>;

    return (
        <>
            <div className="my-3 mx-10">
                <PageTitle> {movie_list_name} </PageTitle>
            </div>
            <MovieList movies={movies}/>
        </>
    );
};

export default MovieListPage;