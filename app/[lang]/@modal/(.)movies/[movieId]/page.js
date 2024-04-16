import Modal from "@/components/Modal";
import SpecificMovieDetailsImage from "@/components/SpecificMovieDetailsImage";
import SpecificMovieDetailsInfo from "@/components/SpecificMovieDetailsInfo";
import { getDictionary } from "@/public/dictionary/disctionaries";
import { getAllMovies } from '@/utils/movies/getDynamicMovies';

export default async function SpecificMovieDetailsOnModal({ params }) {
    const { movieId } = params;

    const allMovies = await getAllMovies();

    const selectedMovieDetails = allMovies?.results?.find((movie => (movie?.id === Number(movieId))));

    const dictionary = await getDictionary(params?.lang);

    return (
        <Modal
            modalTitle={`${selectedMovieDetails?.title} Details`}
        >
            <div className="w-full mx-auto h-[80vh] overflow-y-auto">

                <section className='p-3'>

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
        </Modal>
    );
}
