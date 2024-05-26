// hooks/useFetchData.js
import {useState, useEffect} from 'react';
import axios from 'axios';
import config from '../config.js'

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            const fetchData = async () => {
                try {
                    // console.log('API Key:',  import.meta.env.VITE_API_KEY);
                    const response = await axios.get(`${config.apiUrl}${endpoint}`, {
                        headers: {
                            accept: 'application/json',
                            'X-API-KEY': import.meta.env.VITE_API_KEY
                        }
                    });
                    setData(response.data);
                } catch (err) {
                    // console.error('Error fetching data:', err);
                    setError('Failed to load data');
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        },
        [endpoint]);

    return {data, loading, error};
};

export default useFetch;