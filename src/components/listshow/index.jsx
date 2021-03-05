import React from 'react'
import {
    List,
    Space
} from 'antd'
import { LikeOutlined, StarOutlined, MessageOutlined } from '@ant-design/icons'

export function ListShow(props) {
    
    const {listData} = props

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
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
                        // maxWidth={130}
                        alt="封面"
                    // src={`/upload/${item.imgs[0].name}`}
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