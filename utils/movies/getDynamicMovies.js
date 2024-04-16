import 'server-only'

const movies = {
    allMovies: () => import('@/public/data/Data.json').then((module) => module.default),
}

export const getAllMovies = async () => movies['allMovies']()