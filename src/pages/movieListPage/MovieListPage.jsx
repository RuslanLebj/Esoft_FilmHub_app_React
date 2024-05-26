import React, {useState, useEffect} from 'react';
import useFetch from "../../hooks/useFetch.js";


const MovieListPage = () => {
    const {data: movieList, loading, error} = useFetch('/movie/search?page=1&limit=50');
    // console.log(movieList);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div>
        </div>
    );
};

export default MovieListPage;