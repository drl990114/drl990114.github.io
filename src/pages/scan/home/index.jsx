import React, { useEffect, useState } from 'react'
import { getArticle } from '../../../api'
import { List, Space, message, Button } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'


export const Home = () => {
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [listData, setData] = useState([])
    const [pageNum, setPageNum] = useState(1)

    const pageSize = 10

    useEffect(() => {
        onLoadMore()
    }, [])


    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    //点击查看更多的触发方法
    const onLoadMore = () => {
        setLoading(true)
        if (!hasMore) {
            message.warning('Infinite List loaded all');
            // setHasMore(false)
            setLoading(false)
            return;
        }

        getArticle(pageNum, pageSize).then((req) => {
            const data = req.data.list//请求获得的pageNum数组
            data.map((item) => {
                item.ket = item._id
                item.href = item.imgs[0] || ''
                item.description = (
                    <span
                        style={{ display: 'block', height: 'auto', maxHeight: '80px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}>
                    </span>)
                return item
            })
            let concatdata = listData//保存当前文章列表
            concatdata = concatdata.concat(data)//合并两个列表
            setData(concatdata)
            setLoading(false)
            let flag = pageNum + 1
            setPageNum(flag)
            if (concatdata.length >= req.data.total) {
                setHasMore(false)
            }
        }).catch(() => {
            message.error('获取数据失败')
        })

    };

    const loadMore =
        hasMore ? (
            <div
                style={{
                    textAlign: 'center',
                    margin: '12px 0 20px 0',
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button
                    onClick={onLoadMore}
                >查看更多</Button>
            </div>
        ) : <div id='foot' >没有更多诗了，快去创作吧</div>
    return (
        <List
            itemLayout="vertical"
            size="large"
            loading={loading}
            dataSource={listData}
            loadMore={loadMore}
            renderItem={item => (
                <List.Item
                    key={item._id}
                    actions={[
                        <IconText icon={LikeOutlined} text={item.like.length} key="1" />,
                        <IconText icon={StarOutlined} text={item.favorite.length} key="2" />,
                        <IconText icon={MessageOutlined} text={item.commentList.length} key="3" />,
                    ]}
                    extra={
                        <img
                            height={130}
                            alt="封面"
                            src={`/upload/${item.imgs[0].name}`}
                        />
                    }
                >
                    <List.Item.Meta
                        title={<a href={`/desc?articleId=${item._id}`}>{item.title}</a>}
                        description={item.description}
                    />
                </List.Item>
            )}
        />

    )
} 