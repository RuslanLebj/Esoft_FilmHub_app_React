import useFetch from "../../hooks/useFetch.js";
import MovieList from "../../components/lists/movieList/MovieList.jsx";
import MovieDetailPage from "../movieDetailPage/MovieDetailPage.jsx";
import LoadingPage from "../loadingPage/LoadingPage.jsx";
import ErrorPage from "../errorPage/ErrorPage.jsx";

const MovieListPage = (filterValue) => {
    const {data: movieList, loading, error} = useFetch(`/movie?limit=100`);

    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage/>;

    return (
        <div className="w-full min-h-screen gap-4 flex-wrap flex justify-center items-center p-4">
            <MovieList movieList={movieList}/>
        </div>
    );
};

export default MovieListPage;