'use client';
import React, {FC, useState} from 'react';
import styles from "./Pagination.module.css";
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";

interface IProps {
    page?: number,
}

const PaginationComponent: FC<IProps> = ({page}) => {
    const useSearchPar = useSearchParams();

    const numPage = useSearchPar.get('page')
    if (numPage) {
        page = +numPage
    } else {
        page = 1
    }

    const [currentPage, setCurrentPage] = useState<number>(page)

    const pageName = usePathname();

    const increment = (num: number) => {
        num++;

        return setCurrentPage(num);
    }

    const decrement = (num: number) => {
        if (num > 1) {
            num--;
        }

        return setCurrentPage(num);
    }

    return (
        <main className={styles.pgnMain}>

            <Link
                href={{
                    pathname: pageName,
                    query: {page: JSON.stringify(currentPage)}
                }}
                onClick={() => decrement(currentPage)}
                className={styles.pgnBtn}
            >
                prev
            </Link>

            <div className={styles.title}>{numPage || currentPage}</div>

            <Link
                href={{
                    pathname: pageName,
                    query: {page: JSON.stringify(currentPage)}
                }}
                onClick={() => increment(currentPage)}
                className={styles.pgnBtn}
            >
                next
            </Link>
        </main>
    );
};

export default PaginationComponent;