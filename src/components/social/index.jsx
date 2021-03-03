import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { LikeOutlined, StarOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import storage from '../../utils/storage'
import { updateArticle, getUser, updateUser } from '../../api'

export const Social = (props) => {


    const [likeList, setLike] = useState([])
    const [favList, setFav] = useState([])
    const history = useHistory()

    let { article, userId } = props
    let { like, favorite } = article
    if (!like) {
        like = []
    }
    if (!favorite) {
        favorite = []
    }


    useEffect(() => {
        setLike(like)
        setFav(favorite)
    }, [like, favorite])
    //点击‘好诗’的回调
    const handleLike = async () => {

        if (!storage.getUser() || !storage.getId()) {
            history.replace('/login')
        }

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
        if (!storage.getUser() || !storage.getId()) {
            history.replace('/login')
        }

        if (!favList.includes(userId)) {
            const copy = [...favList]
            copy.push(userId)
            setFav(copy)
            article.favorite = copy

        } else {
            for (let i = 0; i < favList.length; i++) {
                if (favList[i] === userId) {
                    favList.splice(i, 1)
                }
            }
            const copy = [...favList]
            setFav(copy)
            article.favorite = copy

        }

        //获得当前用户的收藏数组
        getUser(userId).then((req) => {
            if (req.status === 0) {
                let user = req.data

                let { favArticle } = user
                //判断是否有该文章id
                if (!favArticle.includes(article._id)) {
                    user.favArticle.push(article._id)
                } else {
                    for (let i = 0; i < favArticle.length; i++) {
                        if (favArticle[i] === article._id) {
                            user.favArticle.splice(i, 1)
                        }
                    }
                }


                //update用户收藏数组
                updateUser(user).then((req) => {
                    console.log(req.data)
                })


            } else {
                message.error('请求失败')
            }
        })

        //保存用户id到文章的fav
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