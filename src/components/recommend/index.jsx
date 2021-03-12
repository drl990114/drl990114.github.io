import { useEffect, useState } from 'react'
import { getArticle } from '../../api'
import {GithubOutlined} from '@ant-design/icons'

export function Recommend() {
    const [reconmendArtList, setList] = useState([])

    useEffect(() => {
        getArticle(1, 5).then((req) => {
            setList(req.data.list)
        })
    }, [])

    const card = (data, key) => {
        return (
        <div key={key} className="card">
            <a href={`#/desc?articleId=${key}`}> {data.title}</a>
            <span  className='card-author'>{`诗者：${data.authorName}`}</span>
            <span className='card-like'> {`${data.like.length}个赞`}</span>
            <span className='card-like'> {`${data.favorite.length}个收藏`}</span>
            <hr/>
        </div>)
    }

    return (
        <div className='recommend'>
            <span className='recommend-title'>推荐阅读</span>
            {reconmendArtList ? reconmendArtList.map((item) => card(item, item._id)) : '暂无'}
            <div className="jump">
                <GithubOutlined /><a target='blank' href="https://github.com/halodong/shizhe">github</a>
            </div>
        </div>
    )
}