import TagButton from "../../buttons/TagButton.jsx";
import {setFilters, setMovieListName} from "../../../store/slices/moviesSlice.js";
import {useDispatch} from "react-redux";

const GenreList = ({genres}) => {
    const dispatch = useDispatch();

    const handleSearchByGenre = (genre) => {
        console.log("Genre:", genre)
        const filters = {limit: '25', 'genres.name': genre};
        dispatch(setFilters(filters));
        dispatch(setMovieListName(`Жанр: ${genre}`));
    };

    return (
        <div className='flex flex-wrap justify-center h-24'>
            {genres.length > 0 ? (
                genres.map((genre, index) => (
                    // Использование составного ключа т.к. API не предоставляет id к жанрам
                    // (Потенциальные проблемы с производительностью: Если данные изменяются часто, использование индексов может привести к неэффективному обновлению DOM.)
                    <TagButton key={`${genre.name}-${index}`} onClick={() => handleSearchByGenre(genre.name)}>
                        {genre.name}
                    </TagButton>
                ))
            ) : (
                <p className="text-sm text-gray-600">Жанры отсутствуют</p>
            )}
        </div>
    );
};

export default GenreList;