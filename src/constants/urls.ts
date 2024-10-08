const baseURL = 'https://api.themoviedb.org/3';

const allMovie = '/discover/movie';
const poster = 'https://image.tmdb.org/t/p/w500';
const movie = '/movie/';
const genre = '/genre/movie/list';
const search = '/search/keyword?query='

export const urls = {
    allMovie: baseURL + allMovie,
    movie: baseURL + movie,
    poster,
    genre: baseURL + genre,
    searchMovies: baseURL +search,
}