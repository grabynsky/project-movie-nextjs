'use client'
import React, {FC, useState} from 'react';
import "../../app/globals.css";
import {getSearchMovies} from '@/services/api.services';
import Link from 'next/link';

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
            <h2>Choose the movie</h2>


            <input
                type="text"
                name="searchInput"
                value={query}
                onChange={(event) => {
                    setQuery(event.target.value);
                    event.target.value = ''
                }}
            />

            <button onClick={searchMovies}>Search</button>

            {
                movies?.map(movie =>
                    <Link key={movie.id}
                          href={{pathname: '/movie' + '/' + movie.id, query:{data: JSON.stringify(movie.id)}}}
                    >
                        {movie.name}
                    </Link>)
            }

        </div>
    );
};

export default HomeComponent;