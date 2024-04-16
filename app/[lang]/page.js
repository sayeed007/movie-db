
import Image from "next/image";

import Footer from "@/components/Footer";

import { getAllMovies } from '@/utils/movies/getDynamicMovies';
import SingleMovieCard from "@/components/SingleMovieCard";
import { getAllGenre } from "../../utils/movies/getDynamicGenre";
import { getDictionary } from "@/public/dictionary/disctionaries";
import SideBar from "@/components/SideBar";


export default async function Home({ params: { lang } }) {

  const allMovies = await getAllMovies();
  const allGenres = await getAllGenre();

  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        {/* <!-- Sidebar --> */}

        <SideBar
          dictionary={dictionary}
        />

        {/* Content */}
        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">


            {allMovies?.results?.length > 0 ?
              <>
                {allMovies?.results?.map((eachMovie) => {
                  return (
                    <SingleMovieCard
                      key={eachMovie?.id}
                      movieDetails={eachMovie}
                      allGenres={allGenres}
                      dictionary={dictionary}
                      lang={lang}
                    />
                  )
                })

                }

              </>
              :
              <>

              </>
            }


          </div>
        </div>

        <Footer />

      </div>
    </>
  );
}
