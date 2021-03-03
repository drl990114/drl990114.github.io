import { getOneArticle } from '../../api'
import { getQueryString } from '../../utils/getParam'
import {
    message,
    Row,
    Col,
    Button,
    Comment,
    List,
    Form,
    Input,
    Divider
} from 'antd'
import storage from '../../utils/storage'
import shi from '../../components/header/诗.png'
import zhe from '../../components/header/者.png'
import { formateDate } from '../../utils/dateUtils'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { updateArticle } from '../../api'
import { Social } from '../../components/social'


const { TextArea } = Input
export function Desc(props) {
    const [article, setArticle] = useState({})
    const [createTime, setCreateTime] = useState('')
    const [commentValue, setComment] = useState('')
    const [commentList, setCommentList] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const userName = storage.getUser()
    const userId = storage.getId()
    const history = useHistory()

    //解构文章信息
    const { authorName, desc, title } = article
    //解析当前url的参数
    const articleId = getQueryString('articleId')

    //antd表单
    const [form] = Form.useForm()
    useEffect(() => {
        //通过articleId获取当前文章信息
        getOneArticle(articleId).then((req) => {
            if (req.status === 0) {
                setArticle(req.data)
                const createTime = formateDate(req.data.createTime)
                setCreateTime(createTime)
                setCommentList(req.data.commentList)
            } else {
                message.error('请求失败')
            }
        }).catch(() => {
            message.error('获取文章失败')
        })

    }, [])

    const CommentList = ({ comments }) => (
        <List
            dataSource={comments}
            header={`${comments.length} 条评论`}
            itemLayout="horizontal"
            renderItem={props => <Comment {...props} />}
        />
    );

    const onSubmit = () => {
        form.validateFields().then(() => {
            setSubmitting(true)
            //评论格式符合规则
            let commentTime = new Date()
            let dateTime = `评论于${commentTime.getFullYear() + '-' + (commentTime.getMonth() + 1) + '-' + commentTime.getDate()
                + ' ' + commentTime.getHours() + ':' + commentTime.getMinutes()}`
            let oneComment = {
                author: `${userName} ${userName === authorName ? '(作者)' : ''}`,
                content: commentValue,
                datetime: dateTime
            }

            article.commentList.unshift(oneComment)//将评论信息保存到当前文章对象
            setArticle(article)
            setCommentList(article.commentList)
            //发送更新文章请求
            updateArticle(article).then((req) => {
                setArticle(req.data)

                setSubmitting(false)
                window.location.reload();
            }).catch(() => {
                message.error('请求出错了')
            })

        }).catch(() => {
            //评论格式不符合规则
            message.error('评论格式错误')
        })

    }
    return (
        <>
            <Row
                align='middle'>
                <Col xs={4} sm={4} md={3} lg={4} xl={6} >
                    <img style={{ width: '40px' }} src={shi} alt='logo' />
                    <img style={{ width: '40px' }} src={zhe} alt='logo' />
                </Col>
                <Col xs={7} sm={7} md={8} lg={7} xl={5}>

                </Col>
                <Col xs={9} sm={9} md={8} lg={7} xl={7}>
                    <Button
                        type='primary'
                        style={{ float: 'right', right: '10px' }}
                        onClick={() => history.push('/edit')}
                    >写诗</Button>
                </Col>
                <Col xs={4} sm={4} md={5} lg={6} xl={6}>
                    <span>Hello, {userName}</span></Col>
            </Row>
            <div className='content'>
                {article.imgs && article.imgs.length >= 1 ? <img style={{ width: 690 }} src={`/upload/${article.imgs[0].name}`} alt='封面'></img> : ''}
                <span className='title'>{title}</span>
                <br />
                <p className='authorName'>{`诗者：${authorName}`}</p>
                <span
                    dangerouslySetInnerHTML={{ __html: desc }}>
                </span>
                <br />
                <br />
                <span>{`本诗作于：${createTime}`}</span>
                <div className='social'>
                    <Social article={article} userId={userId} ></Social>
                </div>
                <br />
                <Divider dashed />
                <br />
                <span style={{ fontSize: 16 }}>评论区</span>


                <Comment
                    content={
                        <Form
                            form={form}>
                            <Form.Item
                                name='comment'
                                rules={[{ required: true, message: '评论内容不能为空' },
                                { max: 200, message: '评论内容最多200个字符' },
                                ]}
                            >
                                <TextArea
                                    placeholder='快来发表你的评论吧'
                                    rows={4}
                                    onChange={(e) => setComment(e.target.value)}
                                    value={commentValue}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    loading={submitting}
                                    onClick={onSubmit}
                                    type="primary"
                                >
                                    添加评论
                                </Button>
                            </Form.Item>
                        </Form>
                    }
                />
                {commentList.length > 0 && <CommentList comments={commentList} />}
            </div>

        </>

    )
}