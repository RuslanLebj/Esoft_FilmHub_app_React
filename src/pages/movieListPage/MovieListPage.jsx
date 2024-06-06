import useFetch from "../../hooks/useFetch.js";
import MovieList from "../../components/lists/movieList/MovieList.jsx";
import MovieDetailPage from "../movieDetailPage/MovieDetailPage.jsx";


const MovieListPage = (filterValue) => {
    const {data: movieList, loading, error} = useFetch(`/movie?limit=100`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center p-4">
            <MovieList movieList={movieList} />
        </div>
    );
};

export default MovieListPage;