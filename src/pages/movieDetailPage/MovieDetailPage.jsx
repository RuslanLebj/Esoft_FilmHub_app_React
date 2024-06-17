import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovieById, fetchMovies} from "../../store/slices/moviesSlice.js";
import LoadingPage from "../loadingPage/LoadingPage.jsx";
import ErrorPage from "../errorPage/ErrorPage.jsx";
import {useEffect} from "react";
import commentsDashboard from "../../components/sections/commentsSection/CommentsSection.jsx";
import CommentForm from "../../components/forms/commentForm/CommentForm.jsx";
import CommentsSection from "../../components/sections/commentsSection/CommentsSection.jsx";
import PageTitle from "../../components/titles/pageTitle/PageTitle.jsx";

const MovieDetailPage = () => {
    const {id} = useParams(); // Извлечение ID из URL
    const dispatch = useDispatch();
    const {current_movie: movie, loading, error,} = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieById(id));
    }, [id]); // Добавляем filters в зависимости, чтобы обновлять список при каждом изменении фильтров


    if (loading) return <LoadingPage/>;
    if (error) return <ErrorPage errorMessage={error}/>;

    return (
        <>
            <div className="min-h-screen">
                <CommentsSection movieId={id}/>
            </div>
        </>
    );
};

export default MovieDetailPage;