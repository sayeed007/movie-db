import movieList from "@/public/data/MovieList.js";

import { redirect } from "next/navigation";

export async function GET(_request, { params }) {
    const movieId = params.id;

    const movie = movieList?.results?.find(
        (movie) => movie.id === parseInt(movieId)
    );

    if (!movie?.id) {
        return new Response(
            JSON.stringify({
                message: `Movie with movie id is ${movieId} not found in the database.`
            }),
            {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    };

    return Response.json(movie);
};

export async function PATCH(request, { params }) {
    const movie = await request.json();
    const movieId = params.id;

    const movieIndex = movieList?.results?.findIndex(
        (movie) => movie.id === parseInt(movieId)
    );

    if (movieIndex === -1) {
        // MOVIE ID NOT FOUND
        return new Response(
            JSON.stringify({
                message: `Movie with movie id is ${movieId} not found in the database.`
            }),
            {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    movieList.results[movieIndex].title = movie.title;

    return new Response(
        JSON.stringify({
            message: `Title of movie id ${movieId} is successfully updated.`,
            movieData: movieList.results[movieIndex]
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
};

export async function DELETE(request, { params }) {

    const movieId = params.id;

    const movieIndex = movieList?.results?.findIndex(
        (movie) => movie.id === Number(movieId)
    );

    if (movieIndex === -1) {
        // MOVIE ID NOT FOUND
        return new Response(
            JSON.stringify({
                message: `Movie with movie id ${movieId} not found in the database.`
            }),
            {
                status: 404,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    const movieToDelete = movieList?.results?.[movieIndex];

    movieList.results?.splice(movieIndex, 1);

    return new Response(
        JSON.stringify({
            message: `Movie with movie id ${movieId} is successfully deleted.`,
            movieData: movieToDelete
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
};
