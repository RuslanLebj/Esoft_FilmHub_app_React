import defaultPoster from '../../../assets/default-poster.svg'
import GenreList from "../../lists/genreList/GenreList.jsx";

const MAX_GENRES_DISPLAY = 4; // Константа для максимального количества выводимых кнопок с жанрами


const MovieCard = ({movie}) => {
    const name = movie?.name || movie.alternativeName; // Проверка наличия названия или использоание альтернативного названия
    const posterUrl = movie.poster?.previewUrl ||  defaultPoster; // Проверка наличия постера и использование изображения по умолчанию, если URL отсутствует.
    const description = movie?.description || 'Описание отсутствует'; // Устанавливаем описание по умолчанию, если оно отсутствует
    const rating = movie.rating?.imdb && movie.rating.imdb !== "0" ? `IMDb: ${movie.rating.imdb}` : 'Оценки отсутствуют'; // Проверка наличия и значения рейтинга
    const genres = movie.genres?.length > 0 ? movie.genres.slice(0, MAX_GENRES_DISPLAY) : []; // Проверка на наличие жанров и взятие слайса обозначенной размерности



    return (
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            {/* Preview */}
            <img className="rounded-xl h-96" src={posterUrl} alt={name} />
            <div className="p-2">
                {/* Name */}
                <h2 className="font-bold text-lg mb-2 line-clamp-1">
                    {name}
                </h2>
                {/* Rating */}
                <h2 className="font-bold text-sm mb-2 line-clamp-1 text-right text-yellow-500">
                    {rating}
                </h2>
                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-4 h-20">
                    {description}
                </p>
            </div>
            {/* Ganres TagButtons */}
            <GenreList genres={genres} />
        </div>
    );
};

export default MovieCard;