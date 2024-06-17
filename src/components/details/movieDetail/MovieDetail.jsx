import PageTitle from "../../titles/pageTitle/PageTitle.jsx";
import {useSelector} from "react-redux";

const MovieDetailPage = () => {
    const {current_movie: movie, } = useSelector((state) => state.movies);

    return (
        <>
            <div className="my-3 mx-10">
                <PageTitle> {movie.name} </PageTitle>
            </div>
        </>
    );
};

export default MovieDetailPage;