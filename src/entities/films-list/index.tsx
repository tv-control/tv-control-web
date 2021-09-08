import { FC, useState } from 'react'
import { Button, List, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { paths } from 'pages'
import { downloadsApi } from 'shared/api'
import { history } from 'shared/lib'

type TFilm = {
    id: number
    provider: string
    seeders: number
    size: string
    name: string
}

type TFilmsList = {
    list: TFilm[]
    loading: boolean
}

const DownloadButton = ({ provider, filmId }: { provider: string; filmId: string | number }) => {
    const [isDownload, setDownload] = useState(false)

    const onClick = () => {
        setDownload(true)
        downloadsApi.setFilmDownload({ provider, filmId }).then(() => {
            history.push(paths.downloads())
        })
    }
    return (
        <Button onClick={onClick} type={isDownload ? 'primary' : 'default'} size={'small'} loading={isDownload}>
            download
        </Button>
    )
}

export const FilmsList: FC<TFilmsList> = ({ loading, list }) => {
    return (
        <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        title={<Link to={paths.filmDetails(item.id.toString())}>{item.name}</Link>}
                        description={[
                            <Tag color="green" key={'item1'}>
                                {item.size}
                            </Tag>,
                            <Tag color="gold" key={'item2'}>
                                Seeders: {item.seeders}
                            </Tag>,
                            <DownloadButton provider={item.provider} filmId={item.id} key={'item3'} />,
                        ]}
                    />
                </List.Item>
            )}
        />
    )
}
