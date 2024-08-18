'use client'

import React, {useContext, useEffect, useState} from 'react';
import Link from "next/link";
import style from "./Header.module.css";
import {MyContext, useContextProvider} from '@/contex/ContexProvider';

const HeaderComponent = () => {


    return (
        <main className={style.mainHeader}>
            <Link className={style.headerLink} href={'/'}>Home</Link>
            <Link className={style.headerLink} href={'/movie'}>Movies</Link>
            <Link className={style.headerLink} href={'/genre'}>Genre</Link>
            <Link className={style.headerLinkImg} href={'/registration'}>
                <img
                    src="/app_registration.png"
                    alt="app_registration"
                    className={style.headerLinkImg}
                />
            </Link>
        </main>
    );
};

export default HeaderComponent;