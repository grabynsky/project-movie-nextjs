import {token} from "@/constants/token";
import {urls} from "@/constants/urls";
import {IMovies} from "@/models/IMovies";
import {IMovie} from "@/models/IMovie";
import {IGenres} from "@/models/IGenres";
import {IGenre} from "@/models/IGenre";

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + token,
    }
};

export const getMovies = {
    getAllMovies: async (id: string): Promise<IMovies> => {
        // return await fetch(urls.allMovie + `?page=${id}`, options)
        return await fetch(`${urls.allMovie}?page=${id}`, options)
            .then(response => response.json())
    },

    getMovieById: async (id: number): Promise<IMovie> => {
        return await fetch(urls.movie + `${id}`, options)
            .then(response => response.json())
    },
}

export const getGenres = {
    getGenreList: async (): Promise<IGenre[]> => {
        return await fetch(urls.genre, options)
            .then(response => response.json())
    },
    getGenreIDPage: async (byID: number): Promise<IMovies> => {
        return await fetch(urls.allMovie + `?with_genres=${byID}`, options)
            .then(response => response.json())
    }
}
