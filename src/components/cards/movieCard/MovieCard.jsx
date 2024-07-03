import defaultPoster from '../../../assets/default-poster.svg'
import GenreList from "../../lists/genreList/GenreList.jsx";
import IconButton from "../../buttons/IconButton.jsx";
import {useDispatch, useSelector} from 'react-redux';
import {
    addToFavorites,
    removeFromFavorites,
    addToWatchLater,
    removeFromWatchLater
} from "../../../store/slices/moviesSlice.js"
import {HeartIcon as OutlineHeartIcon, BookmarkIcon as OutlineBookmarkIcon} from '@heroicons/react/24/outline'
import {HeartIcon as SolidHeartIcon, BookmarkIcon as SolidBookmarkIcon} from '@heroicons/react/24/solid'
import {Link} from 'react-router-dom';

const MAX_GENRES_DISPLAY = 4; // Константа для максимального количества выводимых кнопок с жанрами


const MovieCard = ({movie}) => {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.movies.favorites);
    const watchLater = useSelector((state) => state.movies.watch_later);

    // Проверяем, находится ли фильм в списке избранного
    const isFavorite = favorites.includes(movie.id);
    // Проверяем, находится ли фильм в списке "посмотреть позже"
    const isWatchLater = watchLater.includes(movie.id);

    // Обработка клика по кнопке избранного
    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites(movie.id));
        } else {
            dispatch(addToFavorites(movie.id));
        }
    };

    const handleWatchLaterClick = () => {
        if (isWatchLater) {
            dispatch(removeFromWatchLater(movie.id));
        } else {
            dispatch(addToWatchLater(movie.id));
        }
    };

    const name = movie?.name || movie.alternativeName; // Проверка наличия названия или использоание альтернативного названия
    const posterUrl = movie.poster?.previewUrl || defaultPoster; // Проверка наличия постера и использование изображения по умолчанию, если URL отсутствует.
    const description = movie?.description || 'Описание отсутствует'; // Устанавливаем описание по умолчанию, если оно отсутствует
    const rating = movie.rating?.imdb && movie.rating.imdb !== "0" ? `IMDb: ${movie.rating.imdb}` : 'Оценки отсутствуют'; // Проверка наличия и значения рейтинга
    const genres = movie.genres?.length > 0 ? movie.genres.slice(0, MAX_GENRES_DISPLAY) : []; // Проверка на наличие жанров и взятие слайса обозначенной размерности


    return (
        <div
            className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            {/* Preview */}
            <img className="rounded-xl h-96" src={posterUrl} alt={name}/>
            <div className="p-2">
                {/* Name */}
                <Link to={`/movies/${movie.id}`}>
                    <h2 className="font-bold text-lg mb-2 line-clamp-1">
                        {name}
                    </h2>
                </Link>
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
            <GenreList genres={genres}/>
            {/* Favorite/watch later Buttons */}
            <div className='flex flex-wrap justify-center'>
                <IconButton onClick={handleFavoriteClick}>
                    {isFavorite ? <SolidHeartIcon className="w-6 h-6 text-red-500"/> :
                        <OutlineHeartIcon className="w-6 h-6 text-gray-500"/>}
                </IconButton>
                <IconButton onClick={handleWatchLaterClick}>
                    {isWatchLater ? <SolidBookmarkIcon className="w-6 h-6 text-blue-500"/> :
                        <OutlineBookmarkIcon className="w-6 h-6 text-gray-500"/>}
                </IconButton>
            </div>
        </div>
    );
};

export default MovieCard;