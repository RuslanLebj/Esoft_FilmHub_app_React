import useFetch from "../../hooks/useFetch.js";


const MovieListPage = () => {
    const {data: movieList, loading, error} = useFetch(`/movie?limit=100`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
        </>
    );
};

export default MovieListPage;