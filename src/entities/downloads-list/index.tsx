import { List, Progress } from 'antd'

type TDownload = {
    name: string
    id: number
    progress: number
}

export const DownloadsList = ({ list }: { list: TDownload[] }) => {
    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        title={item.name}
                        description={[<Progress percent={Math.round(item.progress * 100)} />]}
                    />
                </List.Item>
            )}
        />
    )
}
