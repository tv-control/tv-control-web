import { axios } from 'shared/lib'

export const getFilms = async () => {
    let result = await axios.get('/tracker/top')
    return result
}

export const getFilmsBySearch = async ({ value }: { value: string }) => {
    let result = await axios.get(`/tracker/find?q=${value}`)
    return result
}
