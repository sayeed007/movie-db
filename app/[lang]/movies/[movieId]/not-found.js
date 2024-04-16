/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from 'react';
import NoItem from '@/public/assets/icons/NoItem.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const dictionaries = {
    en: () => import('../../../../public/dictionary/dictionaries/en.json').then((module) => module.default),
    bn: () => import('../../../../public/dictionary/dictionaries/bn.json').then((module) => module.default),
}

const NotFoundMovie = () => {

    const [dictionary, setDictionary] = useState({});
    const [loading, setLoading] = useState(true); // State to manage loading state

    const pathName = usePathname();
    const searchedMovieId = pathName?.split('/')?.[pathName?.split('/')?.length - 1];
    const language = pathName?.split('/')?.[1];


    useEffect(() => {
        if (language) {
            fetchDictionary(language); // Call the fetchDictionary function
        }
    }, [language]);

    async function fetchDictionary(locale) { // Accept the locale as a parameter
        try {
            setLoading(true); // Set loading state to true
            const dictionaryData = await dictionaries[locale](); // Fetch the dictionary based on the locale
            setDictionary(dictionaryData); // Set the dictionary data
        } catch (error) {
            console.error('Error fetching dictionary:', error);
        } finally {
            setLoading(false); // Set loading state to false after fetching
        }
    };

    if (loading) {
        return <div>Loading...</div>; // You can render a loading indicator until the dictionary data is fetched
    }

    return (
        <div className='w-full flex flex-col items-center justify-center my-4'>

            <NoItem
                // className="w-12 h-12"
                alt="not-found"
            />

            <div className='font-semibold text-2xl my-2 text-white'>
                {`${dictionary?.movieWithId} ${searchedMovieId} ${dictionary?.notFound}!`}
            </div>

            <Link
                className='my-4 text-white underline cursor-pointer'
                href='/'
            >
                {dictionary?.seeAllMovies}
            </Link>

        </div>
    );
}

export default NotFoundMovie;
