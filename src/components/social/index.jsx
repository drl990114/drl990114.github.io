import { useState, useEffect } from 'react'
import { LikeOutlined, StarOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { updateArticle } from '../../api'


export const Social = (props) => {


    const [likeList, setLike] = useState([])
    const [favList, setFav] = useState([])


    let { article, userId } = props
    let { like, favorite } = article
    if (!like) {
        like = []
    }
    if (!favorite) {
        favorite = []
    }

    console.log(like)
    console.log(favorite)

    useEffect(() => {
        setLike(like)
        setFav(favorite)
    }, [like, favorite])
    //点击‘好诗’的回调
    const handleLike = async () => {
        if (!likeList.includes(userId)) {

            const copy = [...likeList]
            copy.push(userId)
            setLike(copy)
            article.like = copy

        } else {
            for (let i = 0; i < likeList.length; i++) {
                if (likeList[i] === userId) {
                    likeList.splice(likeList[i])
                }

            }
            const copy = [...likeList]
            setLike(copy)
            article.like = copy

        }
        updateArticle(article).catch(() => {
            message.error('请求失败')
        })
    }


    //点击‘收藏’的回调
    const handleFav = () => {
        if (!favList.includes(userId)) {

            const copy = [...favList]
            copy.push(userId)
            setFav(copy)
            article.favorite = copy

        } else {
            for (let i = 0; i < favList.length; i++) {
                if (favList[i] === userId) {
                    favList.splice(favList[i])
                }

            }
            const copy = [...favList]
            setFav(copy)
            article.favorite = copy

        }
        updateArticle(article).catch(() => {
            message.error('请求失败')
        })

    }
    return (
        <div className='social'>
            <Button
                type={likeList.includes(userId) ? "primary" : ''}
                style={{ width: 90, marginRight: 20 }}
                icon={<LikeOutlined />}
                size='middle'
                onClick={handleLike}
            >
                {`${likeList.length} 好诗`}
            </Button>
            <Button
                type={favList.includes(userId) ? "primary" : ''}
                style={{ width: 90 }}
                icon={<StarOutlined />}
                size='middle'
                onClick={handleFav}
            >
                {`${favList.length} 收藏`}
            </Button>

        </div>
    )
}