import movieList from "@/public/data/MovieList.js";


export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    if (query) {
        const filteredMovie = movieList?.results?.filter((movie) =>
            movie?.id?.includes(Number(query))
        );
        return Response.json(filteredMovie);
    }

    return Response.json({ movies: movieList?.results });
}

export async function POST(request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newComment);

    return new Response(JSON.stringify(newComment), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}
