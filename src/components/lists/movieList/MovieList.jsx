import MovieCard from "../../cards/movieCard/MovieCard.jsx";
import MovieDetailPage from "../../../pages/movieDetailPage/MovieDetailPage.jsx";

const MovieList = ({movies}) => {
    // Деструктуризируем movieList из пропсов

    return (
        <div className="w-full min-h-screen gap-4 flex-wrap flex justify-center items-center p-4">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
};

export default MovieList;