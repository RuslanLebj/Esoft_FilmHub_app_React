import MovieCard from "../../cards/movieCard/MovieCard.jsx";
import MovieDetailPage from "../../../pages/movieDetailPage/MovieDetailPage.jsx";

const MovieList = ({movieList}) => {
    // Деструктуризируем movieList из пропсов

    return (
        <>
            {movieList.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </>
    );
};

export default MovieList;