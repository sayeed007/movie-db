import React from 'react';
import Link from "next/link";

import LWSLogo from '@/public/assets/logo.svg';
import Ring from '@/public/assets/ring.svg';
import Sun from '@/public/assets/icons/sun.svg';
import ShoppingCart from '@/public/assets/shopping-cart.svg';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeChangeHandler from './ThemeChangeHandler';
import { cookies } from 'next/headers';


const Navbar = () => {

    const cookieStore = cookies()
    const theme = cookieStore?.get('theme') ? cookieStore.get('theme') : 'dark';

    return (
        <>
            {/*  Begin header  */}
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <Link href="/">
                        <LWSLogo
                            width="139"
                            height="26"
                            alt="LWS-Logo"
                        />
                    </Link>

                    <ul className="flex items-center space-x-5">

                        <li>
                            <LanguageSwitcher />
                        </li>

                        <li>
                            <Link
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="/">
                                <Ring
                                    width="24"
                                    height="24"
                                    alt="Notifications"
                                />
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="/"
                            >
                                <ThemeChangeHandler
                                    theme={'dark'}
                                />

                            </Link>
                        </li>

                        <li>
                            <Link
                                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                                href="/"
                            >
                                <ShoppingCart
                                    width="24"
                                    height="24"
                                    alt="Add-to-Cart"
                                />
                            </Link>
                        </li>



                    </ul>
                </nav>
            </header>
            {/*  End Header  */}

        </>
    );
}

export default Navbar;
