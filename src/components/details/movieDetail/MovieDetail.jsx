import PageTitle from "../../titles/pageTitle/PageTitle.jsx";
import {useSelector} from "react-redux";
import defaultPoster from "../../../assets/default-poster.svg";

const MovieDetailPage = () => {
    const {current_movie: movie, } = useSelector((state) => state.movies);

    const name = movie?.name || movie.alternativeName; // Проверка наличия названия или использоание альтернативного названия
    const posterUrl = movie.poster?.previewUrl || defaultPoster; // Проверка наличия постера и использование изображения по умолчанию, если URL отсутствует.
    const description = movie?.description || 'Описание отсутствует'; // Устанавливаем описание по умолчанию, если оно отсутствует
    const rating = movie.rating?.imdb && movie.rating.imdb !== "0" ? `IMDb: ${movie.rating.imdb}` : 'Оценки отсутствуют'; // Проверка наличия и значения рейтинга
    const genres = movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : 'Данных об жанрах нет'; // Проверка на наличие жанров и взятие слайса обозначенной размерности
    const actors = movie.persons ? movie.persons.map((person) => person.name).join(', ') : 'Данных об актерах нет'; // Проверка на наличие актеров

    return (
        <>
            <div className="my-3 mx-10">
                <PageTitle> {name} </PageTitle>
            </div>
            {/* Решил добавить немного адаптивности */}
            <div className="flex flex-col md:flex-row mx-10 my-6 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:w-1/3 flex-shrink-0">
                    <img src={posterUrl} alt={name} className="w-full h-full object-cover"/>
                </div>
                <div className="p-6 md:w-2/3">
                    <p className="text-gray-800 text-lg mb-4"><span className="font-bold">Описание:</span> {description}
                    </p>
                    <p className="text-gray-800 text-lg mb-4"><span className="font-bold">Рейтинг:</span> {rating}</p>
                    <p className="text-gray-800 text-lg mb-4"><span className="font-bold">Жанры:</span> {genres}</p>
                    <p className="text-gray-800 text-lg mb-4"><span className="font-bold">Актеры:</span> {actors}</p>
                </div>
            </div>
        </>
    );
};

export default MovieDetailPage;