import React from 'react';
import Image from 'next/image';



const SpecificMovieDetailsImage = ({ selectedMovieDetails, dictionary }) => {
    return (
        <>
            <Image
                className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                width={1000}
                height={1000}
                src={selectedMovieDetails?.backdrop_path}
                alt={'backdrop' + selectedMovieDetails?.title}
            />
        </>
    );
}

export default SpecificMovieDetailsImage;
