import useFetch from "../../hooks/useFetch.js";
import MovieList from "../../components/lists/movieList/MovieList.jsx";
import MovieDetailPage from "../movieDetailPage/MovieDetailPage.jsx";
import LoadingPage from "../loadingPage/LoadingPage.jsx";
import ErrorPage from "../errorPage/ErrorPage.jsx";
import { useSelector } from "react-redux";

const MovieListPage = (filterValue) => {
    useFetch(`/movie?limit=100`); // Получим страницу со 100 элементами
    const { error, loading, data: movies } = useSelector((state) => state.movies);
    console.log('Movies data from store:',  movies);

    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage errorMessage={error} />;

    return (
        <div className="w-full min-h-screen gap-4 flex-wrap flex justify-center items-center p-4">
            <MovieList movies={movies}/>
        </div>
    );
};

export default MovieListPage;