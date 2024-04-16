import React from 'react';
import Image from 'next/image';



const SpecificMovieDetailsInfo = ({ selectedMovieDetails, dictionary }) => {
    return (
        <>
            <div className="grid grid-cols-12 py-12 gap-8">

                <div className="col-span-2">
                    <Image
                        className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                        width={500}
                        height={500}
                        src={selectedMovieDetails?.poster_path}
                        alt={'poster' + selectedMovieDetails?.title}
                    />
                </div>

                <div className="col-span-8">

                    {/* TITLE */}
                    <h2 className="font-bold text-slate-300 text-2xl">
                        {selectedMovieDetails?.title}
                    </h2>

                    <p className="my-2 text-slate-400 italic text-lg">
                        {selectedMovieDetails?.overview}
                    </p>
                    <ul className="text-slate-300 space-y-2 my-8">
                        <li>{dictionary?.releaseDate} : {selectedMovieDetails?.release_date}</li>
                        <li>{dictionary?.averageVote} : {selectedMovieDetails?.vote_average}</li>
                        <li>{dictionary?.voteCount} : {selectedMovieDetails?.vote_count}</li>
                        <li>{dictionary?.popularity} : {selectedMovieDetails?.popularity}</li>
                    </ul>

                </div>

                <div className="col-span-2 space-y-4">
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {dictionary?.streamInHD}
                    </button>
                    <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                        {dictionary?.downloadInHD}
                    </button>
                </div>

            </div>
        </>
    );
}

export default SpecificMovieDetailsInfo;
