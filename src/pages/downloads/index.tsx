import { DownloadsList } from 'entities/downloads-list'
import { useEffect, useState } from 'react'
import { downloadsApi } from 'shared/api'

export const DownloadsPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        downloadsApi.getDownloads().then((response) => setData(response.data))

        const interval = setInterval(() => {
            downloadsApi.getDownloads().then((response) => setData(response.data))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section>
            <h1>Downloads</h1>
            <DownloadsList list={data} />
        </section>
    )
}
