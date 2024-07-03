import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieById, fetchMovies} from "../../store/slices/moviesSlice.js";
import LoadingPage from "../loadingPage/LoadingPage.jsx";
import ErrorPage from "../errorPage/ErrorPage.jsx";
import {useEffect} from "react";
import CommentsSection from "../../components/sections/commentsSection/CommentsSection.jsx";
import PageTitle from "../../components/titles/pageTitle/PageTitle.jsx";
import MovieList from "../../components/lists/movieList/MovieList.jsx";
import SimilarMoviesSection from "../../components/sections/similarMoviesSection/SimilarMoviesSection.jsx";
import MovieDetail from "../../components/details/movieDetail/MovieDetail.jsx";

const MovieDetailPage = () => {
    const {id} = useParams(); // Извлечение ID из URL
    const dispatch = useDispatch();
    const {current_movie: movie, loading, error, data: movies} = useSelector((state) => state.movies);

    useEffect(() => {
        const fetchData = async () => {
            // Promise Unwrapping: dispatch(fetchMovieById(id)).unwrap() гарантирует, что результат будет ожидаться, и любые ошибки будут выброшены.
            // await используется для ожидания завершения асинхронных операций
            const movieResponse = await dispatch(fetchMovieById(id)).unwrap();
            // Преобразование жанров из объектов в строки
            const genres = movieResponse.genres ? movieResponse.genres.map((genre) => genre.name) : [];
            // console.log("Genres:", genres)
            const filters = { limit: '4', 'genres.name': genres };
            // Последовательный dispatch: Второй dispatch для получения связанных фильмов вызывается только после того, как данные о фильме (и жанры) будут доступны.
            await dispatch(fetchMovies(filters));
        };
        fetchData();
    }, [id, dispatch]);


    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage errorMessage={error}/>;

    return (
        <>
            <MovieDetail />
            <SimilarMoviesSection />
            <CommentsSection movieId={id}/>
        </>
    );
};

export default MovieDetailPage;