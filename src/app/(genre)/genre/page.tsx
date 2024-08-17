import React from 'react';
import {getGenres} from "@/services/api.services";
import {IGenre} from "@/models/IGenre";
import Link from "next/link";
import styles from "./GenrePage.module.css";

const GenrePage = async () => {

const getGenreList = await getGenres.getGenreList();

// @ts-ignore
    const gerneList: IGenre[] =  getGenreList.genres;


    return (
        <main className={styles.mainGenre}>
            {
                gerneList.map(genre =>
                    <div key={genre.id}>
                        <Link href={{pathname:'/genre'+'/'+ genre.id,
                            query:{data:JSON.stringify(genre.id)}}}
                        className={styles.linkGenre}
                        >
                            {genre.name}
                        </Link>
                    </div>)
            }
        </main>
    );
};

export default GenrePage;