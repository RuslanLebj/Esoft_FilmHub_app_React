import MovieCard from "../../cards/movieCard/MovieCard.jsx";
import MovieDetailPage from "../../../pages/movieDetailPage/MovieDetailPage.jsx";

const MovieList = ({movies}) => {
    // Деструктуризируем movieList из пропсов

    return (
        <>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </>
    );
};

export default MovieList;