import React from 'react';
import {getGenres} from "@/services/api.services";
import {urls} from "@/constants/urls";
import styles from "./GenreIdPage.module.css";
import Link from "next/link";


const GenreIdPage = async ({searchParams}: any) => {

    const byID = JSON.parse(searchParams.data);

    const getGenreIDPage = await getGenres.getGenreIDPage(byID);
    const genreIdPage = getGenreIDPage.results;

    return (
        <div>
            <div className={styles.divMain}>
                {
                    genreIdPage?.map(
                        (genre, index) =>

                            <Link
                                href={{
                                    pathname: '/movie' + `/${genre.id}`,
                                    query: {data: JSON.stringify(genre.id)}
                                }}
                                key={index}
                                className={styles.idPageLink}
                            >
                                <div

                                    className={styles.divTitle}
                                >
                                    <div>{genre.title}</div>
                                    <img
                                        src={urls.poster + `${genre.poster_path}`}
                                        alt={genre.title}
                                        className={styles.IdPageImg}
                                    />
                                </div>
                            </Link>
                    )
                }
            </div>
        </div>

    );
};

export default GenreIdPage;