

import { getAllMovies } from '@/utils/movies/getDynamicMovies';
import { notFound } from 'next/navigation';
import SideBar from '@/components/SideBar';
import { getDictionary } from '@/public/dictionary/disctionaries';
import SpecificMovieDetailsImage from '@/components/SpecificMovieDetailsImage';
import SpecificMovieDetailsInfo from '@/components/SpecificMovieDetailsInfo';

export default async function SingleMovieDetails({ params }) {

    const allMovies = await getAllMovies();

    const selectedMovieDetails = allMovies?.results?.find((movie => (movie?.id === Number(params?.movieId))))

    const dictionary = await getDictionary(params?.lang);


    if (!selectedMovieDetails) {
        notFound(Number(params?.movieId));
    }

    return (
        <>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">

                {/* <!-- Sidebar --> */}

                <SideBar
                    dictionary={dictionary}
                />

                <section className='dark:bg-body bg-white p-3'>

                    <SpecificMovieDetailsImage
                        selectedMovieDetails={selectedMovieDetails}
                        dictionary={dictionary}
                    />

                    <SpecificMovieDetailsInfo
                        selectedMovieDetails={selectedMovieDetails}
                        dictionary={dictionary}
                    />
                </section>


            </div>
        </>
    )


}