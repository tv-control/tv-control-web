import { useEffect, useState } from 'react'
import { FilmsList } from 'entities/films-list'
import { filmsApi } from 'shared/api'
import { Input } from 'antd'

export const FilmsListPage = () => {
    const [films, setFilms] = useState([])
    const [isDownload, setDownload] = useState(true)

    useEffect(() => {
        filmsApi.getFilms().then((response) => {
            setFilms(response.data)
            setDownload(false)
        })
    }, [])

    const onSearch = (value: string) => {
        setDownload(true)
        filmsApi.getFilmsBySearch({ value }).then((response) => {
            setFilms(response.data)
            setDownload(false)
        })
    }

    return (
        <section>
            <h1>Films List</h1>
            <Input.Search onSearch={onSearch} />
            <FilmsList loading={isDownload} list={films} />
        </section>
    )
}
