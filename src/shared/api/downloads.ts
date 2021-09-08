import { axios } from 'shared/lib'

export const setFilmDownload = async ({ provider, filmId }: { provider: string; filmId: number | string }) => {
    let result = await axios.post(`/tracker/download/${provider}/${filmId}`)
    return result
}

export const getDownloads = async () => {
    let result = await axios.get(`/file-system/list`)
    return result
}
