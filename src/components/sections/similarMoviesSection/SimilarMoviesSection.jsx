import {useSelector} from "react-redux";
import PageTitle from "../../titles/pageTitle/PageTitle.jsx";
import MovieList from "../../lists/movieList/MovieList.jsx";
import LoadingPage from "../../../pages/loadingPage/LoadingPage.jsx";
import ErrorPage from "../../../pages/errorPage/ErrorPage.jsx";

const SimilarMoviesSection = () => {
    const {data: movies} = useSelector((state) => state.movies);

    return (
        <>
            <div className="my-3 mx-10">
                <PageTitle> Может понравиться: </PageTitle>
            </div>
            <MovieList movies={movies}/>
        </>
    );
};

export default SimilarMoviesSection;