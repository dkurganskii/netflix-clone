import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from './requests';

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    return (
        <header className='banner'>
            <div className='banner_contents'>

            </div>

        </header>
    )
}

export default Banner