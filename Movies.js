import React, { useEffect, useState } from 'react';
import { fetchMovies } from './tmdbService';
import './Movies.css';  

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movieData = await fetchMovies();
            setMovies(movieData);
        };

        getMovies();
    }, []);

    return (
        <div className="movies-container">
            <h1>Popular Movies</h1>
            <ul className="movie-list">
                {movies.map(movie => (
                    <li key={movie.id} className="movie-item">
                        <h3 className="movie-title">{movie.title}</h3>
                        <p className="movie-overview">{movie.overview}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;
