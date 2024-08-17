import React from 'react';
import {getMovies} from "@/services/api.services";
import {urls} from "@/constants/urls";
import styles from "./MovieIdPage.module.css";
import Link from "next/link";

const MovieIdPage = async ({searchParams}: any) => {

    // const byId = JSON.parse(searchParams.data)
    const byId = searchParams.data

    const movieById = await getMovies.getMovieById(byId);

    return (
        <main className={styles.idMain}>

            <p className={styles.idTitle}>{movieById.title}</p>

            <div className={styles.idDescription}>
                <img
                    src={urls.poster + movieById.poster_path}
                    alt={movieById.title}
                    className={styles.idImg}
                />

                <div className={styles.idGenre}>
                    <div className={styles.idGenreTitle}>
                        Genres:
                    </div>
                    <div>
                        {
                            movieById.genres.map(
                                (genre, index) =>
                                    <div
                                        key={index}

                                    >
                                        <Link href={{
                                            pathname: '/genre' + '/' + genre.id,
                                            query: {data: JSON.stringify(genre.id)}
                                        }}
                                              className={styles.idGenreName}
                                        >
                                            <span className={styles.idGenreName}>{genre.name}</span>

                                        </Link>
                                    </div>)
                        }
                    </div>
                </div>

            </div>

        </main>


    );
};

export default MovieIdPage;