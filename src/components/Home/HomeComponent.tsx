'use client'
import React, {FC, useState} from 'react';
import "../../app/globals.css";
import {getSearchMovies} from '@/services/api.services';
import Link from 'next/link';
import styles from "./HomeComponent.module.css";

interface ISearchMovie {
    id: number,
    name: string,
}

const HomeComponent = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<ISearchMovie[]>([])


    const searchMovies = async (): Promise<any> => {
        const response = await getSearchMovies(`${query}`)
        const movies = setMovies(response.results)
        return movies;
    };

    return (
        <div className='home'>
            <h1>You are welcome on the site MOVIES</h1>
            <h2 className={styles.h2Home}>Choose the movie</h2>

            <label className={styles.labelHome}> Search movie:
                <input
                    type="text"
                    name="searchInput"
                    className={styles.searchInput}
                    value={query}
                    onChange={
                        (event) =>
                            setQuery(event.target.value)}
                />

                <button
                    onClick={searchMovies}
                    className={styles.btn}
                >
                    Search
                </button>
            </label>

            <div className={styles.searchMovieDiv}>
                {
                    !movies
                        ? <div><h1>Error</h1></div>
                        : movies?.map(movie =>
                            <Link key={movie.id}
                                  href={{pathname: '/movie' + '/' + movie.id, query: {data: JSON.stringify(movie.id)}}}
                                  className={styles.movieLink}
                            >
                                {movie.name}
                            </Link>)
                }
            </div>
        </div>
    );
};

export default HomeComponent;