import {Bars3Icon} from '@heroicons/react/24/outline'
import IconButton from '../../components/buttons/IconButton';
import {useForm} from 'react-hook-form';
import {fetchMoviesByName, setMovieListName, setFilters} from "../../store/slices/moviesSlice.js";
import {useDispatch, useSelector} from "react-redux";
import Select from 'react-select';


const Navbar = ({toggleSidebar}) => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const {genre_options: genreOptions} = useSelector((state) => state.movies);

    const handleSearchByName = (data) => {
        dispatch(fetchMoviesByName(data.query));
        dispatch(setMovieListName(data.query))
    };
    // Когда состояние в вашем Redux хранилище обновляется, любой компонент, подписанный на данный срез состояния, будет перерисован для отражения новых данных. Это поведение обеспечивает консистентность вашего пользовательского интерфейса с состоянием приложения.
    // Из-за этого нам не надо ставить в зависмиости useEffect MoviesListPage данные data (но и еще потому что тогда страница будет вечно перезагружаться)
    // Когда data обновляется в состоянии Redux, хук useSelector в MovieListPage обнаруживает это изменение. Так как movies.data является частью состояния, на которую подписан MovieListPage, React вызывает перерисовку MovieListPage.

    const handleSearchByGenres = (selectedGenres) => {
        const genres = selectedGenres.map(genre => genre.value);
        console.log("Genres:", genres)
        const filters = { limit: '25', 'genres.name': genres };
        dispatch(setFilters(filters));
        dispatch(setMovieListName("Поиск по жанрам"));
    };

    return (
        <header
            className="fixed z-20 bg-white border-b flex items-center justify-between p-4 shadow-md w-screen opacity-90">
            {/* Button for sidebar and Logo text */}
            <nav>
                <ul className="flex items-center">
                    <li>
                        <IconButton onClick={toggleSidebar}>
                            <Bars3Icon className="h-7 w-7"/>
                        </IconButton>
                    </li>
                    <li>
                        <h1 className="leading-none text-2xl text-gray-800 font-bold ml-5"> {/* Добавляем margin слева для выравнивания */}
                            <a href="#">
                                Kinopoisk
                            </a>
                        </h1>
                    </li>
                </ul>
            </nav>
            {/* END Button for sidebar and Logo text */}

            {/* Search by name field */}
            <form className="w-1/4" onSubmit={handleSubmit(handleSearchByName)}>
                <label className="hidden" htmlFor="search-form">Search</label>
                <input
                    {...register('query')}
                    className="bg-grey-lightest border-2 p-2 rounded-lg shadow-inner w-full"
                    placeholder="Поиск по названию"
                    type="text"
                />
                <button type="submit" className="hidden">Submit</button>
            </form>
            {/* END Search by name field */}

            {/* Search by genres field */}
            <div className="w-1/4 mr-4">
                <Select
                    isMulti
                    options={genreOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Выберите жанры"
                    onChange={handleSearchByGenres}
                />
            </div>
            {/* END Search by genres field */}

        </header>
    );
};

export default Navbar;