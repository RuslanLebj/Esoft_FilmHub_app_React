import useFetch from "../../hooks/useFetch.js";
import {useParams} from "react-router-dom";

const MovieDetailPage = () => {
    const {id} = useParams(); // Извлечение ID из URL
    const {data: movie, loading, error} = useFetch(`/movie/${id}/`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
        </>
    );
};

export default MovieDetailPage;