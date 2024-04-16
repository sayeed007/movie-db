import React from 'react';
import Link from "next/link";

import Trending from '@/public/assets/icons/trending.svg';
import NewRelease from '@/public/assets/icons/newRelease.svg';
import ComingSoon from '@/public/assets/icons/commingSoon.svg';
import Favourite from '@/public/assets/icons/favourite.svg';
import WatchLater from '@/public/assets/icons/watchLater.svg';



const SideBar = ({ dictionary }) => {
    return (
        <>

            <aside>
                <ul className="space-y-2">
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                            href="/">
                            <Trending
                                width="24"
                                height="24"
                                alt={dictionary?.trending}
                            />
                            <span>
                                {dictionary?.trending}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                            href="/">
                            <NewRelease
                                width="24"
                                height="24"
                                alt={dictionary?.newReleases}
                            />
                            <span>
                                {dictionary?.newReleases}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                            href="/">
                            <ComingSoon
                                width="24"
                                height="24"
                                alt={dictionary?.comingSoon}
                            />
                            <span>
                                {dictionary?.comingSoon}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                            href="/">
                            <Favourite
                                width="24"
                                height="24"
                                alt={dictionary?.favourites}
                            />
                            <span>
                                {dictionary?.favourites}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                            href="/">
                            <WatchLater
                                width="24"
                                height="24"
                                alt={dictionary?.watchLater}
                            />
                            <span>
                                {dictionary?.watchLater}
                            </span>
                        </Link>
                    </li>
                </ul>
            </aside>

        </>
    );
}

export default SideBar;
