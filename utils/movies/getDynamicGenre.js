import 'server-only'

const genre = {
    allGenre: () => import('@/public/data/Genre.json').then((module) => module.default),
}

export const getAllGenre = async () => genre['allGenre']()