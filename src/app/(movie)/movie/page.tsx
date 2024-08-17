import React from 'react';
import {getMovies} from "@/services/api.services";
import {urls} from "@/constants/urls";
import style from "./MoviePage.module.css"
import Link from "next/link";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import {IMovies} from "@/models/IMovies";

const MoviePage = async ({searchParams}: any) => {
    let getAllMovie: IMovies;
    let id:number;

    if(searchParams.page===undefined){
        getAllMovie = await getMovies.getAllMovies('1');
    } else {
        getAllMovie = await getMovies.getAllMovies(searchParams.page);
    }

    // const  getAllMovie = await getMovies.getAllMovies(1);

        const allMovie = getAllMovie.results;

    return (
        <div>
            <PaginationComponent page={getAllMovie.page}/>

            <main className={style.mainMovie}>
                {
                    allMovie.map((movie, index) =>
                        <div
                            key={index}
                            className={style.divImgTitle}
                        >
                            <Link
                                className={style.divImgTitleLink}
                                href={{pathname: '/movie' + '/' + movie.id, query: {data: JSON.stringify(movie.id)}}}
                            >
                                <img
                                    src={urls.poster + movie.poster_path}
                                    alt={movie.title}
                                    className={style.imgMovie}
                                />

                                <div className={style.titleMovie}>{movie.title}</div>

                            </Link>

                        </div>
                    )
                }
            </main>
        </div>

    );
};

export default MoviePage;