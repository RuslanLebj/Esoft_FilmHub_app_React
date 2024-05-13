import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MovieListPage = () => {
    const [movieList, setMovieList] = useState([]);

    //   useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get('http://127.0.0.1:8000/api/');
    //         setMovieList(response.data);
    //       } catch (error) {
    //         console.error('Error fetching cameras:', error);
    //       }
    //     };

    //     fetchData();
    //   }, []); // Empty array as the second argument makes useEffect only run once after the initial render

    return (
        <div>
            {/* <ul>
                {movieList.map(camera => (
                    <li key={camera.id}>
                        <MovieCard camera={camera} />
                    </li>
                ))}
            </ul> */}
            FFF
        </div>
    );
};

export default MovieListPage;