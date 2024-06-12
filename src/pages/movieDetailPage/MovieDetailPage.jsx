import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const MovieDetailPage = () => {
    const {id} = useParams(); // Извлечение ID из URL
    const { data: movies, loading, error, } = useSelector((state) => state.movies);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
        </>
    );
};

export default MovieDetailPage;