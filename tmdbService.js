import axios from 'axios';

const API_KEY = 'edf34fefb276e900b23acfa400d77b4a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};
