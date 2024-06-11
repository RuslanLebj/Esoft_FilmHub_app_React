import {useEffect} from 'react';
import axios from 'axios';
import config from '../config.js'
import {useDispatch} from "react-redux";
import {fetchDataStart, fetchDataSuccess, fetchDataFailure} from '../store/slices/moviesSlice.js'


const useFetch = (endpoint) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API Key:',  import.meta.env.VITE_API_KEY);
                dispatch(fetchDataStart());
                const response = await axios.get(`${config.apiUrl}${endpoint}`, {
                    headers: {
                        accept: 'application/json',
                        'X-API-KEY': import.meta.env.VITE_API_KEY
                    }
                });
                console.log('Response:',  response.data);
                dispatch(fetchDataSuccess(response.data.docs));
            } catch (err) {
                console.error('Error fetching data:', err);
                dispatch(fetchDataFailure(err.message || 'Error fetching data'));
            }
        };

        fetchData();
    }, [dispatch, endpoint]);
    // [dispatch, endpoint] гарантирует, что хук выполнится при изменении dispatch или endpoint. Это важно для обновления данных при изменении endpoint.
};

export default useFetch;