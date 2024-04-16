import React from 'react';
import StarRating from './StarRating';

import Tag from '@/public/assets/tag.svg';
import Image from 'next/image';
import Link from 'next/link';


const SingleMovieCard = (props) => {


    return (
        <>
            {/* Begin Card */}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">

                <Image
                    className="w-full object-cover"
                    src={props?.movieDetails?.poster_path}
                    width={1000}
                    height={1000}
                    alt={props?.movieDetails?.title}
                />

                <figcaption className="pt-4">

                    {/* TITLE */}
                    <h3 className="text-xl mb-1">
                        {props?.movieDetails?.title}
                    </h3>

                    {/*  */}
                    <p className="text-[#575A6E] text-sm mb-2">
                        {
                            props?.movieDetails?.genre_ids?.map(key => props?.allGenres[key]).join('/')
                        }
                    </p>
                    <div className="flex items-center space-x-1 mb-5">

                        <StarRating
                            originalRating={Number(props?.movieDetails?.vote_average)}
                            ratingRange={10}
                        />

                    </div>
                    <Link className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm cursor-pointer"
                        href={`${props?.lang}/movies/${props?.movieDetails?.id}`}>
                        <Tag
                            alt={props?.dictionary?.details}
                        />
                        <span>
                            {props?.dictionary?.details}
                        </span>
                    </Link>
                </figcaption>
            </figure>
            {/* End Card */}
        </>
    );
}

export default SingleMovieCard;
