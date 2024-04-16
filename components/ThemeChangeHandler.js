'use client'

import React from 'react'

import Sun from '@/public/assets/icons/sun.svg';
import Moon from '@/public/assets/icons/moon.svg';


export default function ThemeChangeHandler({ cookies, theme }) {


    return (
        <>
            {theme === 'dark' ?
                <Sun
                    width="24"
                    height="24"
                    alt="Dark-Mode"
                    onClick={() => cookies?.set('theme', 'light')}
                />
                :
                <Moon
                    width="24"
                    height="24"
                    alt="Light-Mode"
                    onClick={() => cookies?.set('theme', 'light')}
                />
            }
        </>
    )
}
