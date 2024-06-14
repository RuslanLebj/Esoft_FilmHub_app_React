import {useEffect} from 'react';
import MovieList from "../../components/lists/movieList/MovieList.jsx";
import LoadingPage from "../loadingPage/LoadingPage.jsx";
import ErrorPage from "../errorPage/ErrorPage.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularMovies} from "../../store/slices/moviesSlice.js"
import PageTitle from "../../components/titles/pageTitle/PageTitle.jsx";

const MovieListPage = (filterValue) => {
    const dispatch = useDispatch();
    const {data: movies, loading, error,} = useSelector((state) => state.movies);
    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, []);

    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage errorMessage={error}/>;

    return (
        <>
            <div className="my-3 mx-10">
                <PageTitle> 250 лучших фильмов </PageTitle>
            </div>
            <MovieList movies={movies}/>
        </>
    );
};

export default MovieListPage;