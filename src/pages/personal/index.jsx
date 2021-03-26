import React, { useEffect, useState } from 'react'
import { getFavorite, getUser, updateUser } from '../../api'
import memory from '../../utils/memory'
import { getQueryString } from '../../utils/getParam'
import {
    Row,
    Col,
    Button,
    message,
    Divider,
    Menu
} from 'antd'
import { RollbackOutlined } from '@ant-design/icons'
import shi from '../../components/header/诗.png'
import zhe from '../../components/header/者.png'
import { useHistory } from 'react-router-dom'
import { ListShow } from '../../components/listshow'
import storage from '../../utils/storage'

export function Personal() {
    const [user, setUser] = useState({})
    const [listData, setlistData] = useState([])
    const [edit, setEdit] = useState(false)
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [selectKey, setKey] = useState('writeArticle')


    useEffect(() => {
        //解析url中的用户id
        const userId = getQueryString('id')
        getUser(userId).then((req) => {
            //更新页面数据
            setUser(req.data)
            setName(req.data.username)
            setEmail(req.data.email)
            const favArr = [...req.data.writeArticle]
            getFavorite(favArr).then((req) => {
 
                let arr = req.data.filter(item=> item);
                setlistData(arr)
            }).catch(() => {
                message.error('请求出错了')
            })
        })
    }, [])

    //未登录则跳转到登陆页
    const history = useHistory()
    if (!memory.user || !memory.id) {
        history.replace('/login')
        return
    }

    //选择menu的回调
    const handleSelect = (key) => {
        setKey(key)
        //根据key获得一下文章
        getFavorite(user[key]).then((req)=>{

            //去除一下数组中的空值
            let arr = req.data.filter(item=> item);
            setlistData(arr)
        }).catch(()=>{
            message.error('获取文章失败')
        })
    }

    //点击保存的回调
    const handleSave = () => {

        user.email = email 
        user.username = username
        updateUser(user).then((req)=>{
            const {username , _id} = req.data
            storage.removeUser()
            storage.saveUser(username , _id)
            memory.username = username
            memory.id = _id
            window.location.reload();
        })
    }   

    const removeUser = () => {
        storage.removeUser()
        history.replace('/scan/home')
    }
    return (
        <>
            <Row
                align='middle'>
                <Col xs={4} sm={4} md={3} lg={4} xl={6} >
                    <a href='#/scan/home'>
                        <img style={{ width: '40px' }} src={shi} alt='logo' />
                        <img style={{ width: '40px' }} src={zhe} alt='logo' />
                    </a>

                </Col>
                <Col xs={7} sm={7} md={8} lg={7} xl={5}>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>个人主页</span>
                </Col>
                <Col xs={9} sm={9} md={8} lg={7} xl={7}>
                    <div style={{
                        float: 'right',
                        right: '-10px',
                        height: '20px'
                    }}><span>Hello, {memory.user}</span></div>
                </Col>
                <Col xs={4} sm={4} md={5} lg={6} xl={6}>

                </Col>
            </Row>
            {!edit ?
                <div className='personal-header'>
                    <Button
                        className='personal-header-btn'
                        onClick={() => setEdit(true)}
                    >编辑个人信息</Button>
                    <br />
                    <p>{`用户名: ${user.username}`}</p>
                    <p>{`email: ${user.email || ''}`}</p>
                    <Button
                        style={{float:'right'}}
                        onClick={() => removeUser()}
                    >退出登录</Button>
                </div> :
                <div className='personal-header'>
                    <RollbackOutlined style={{ fontSize: '20px', color: '#2b73af' }} onClick={() => setEdit(false)} />
                    <br />
                    <p>用户名: <input value={username} onChange={(e) => setName(e.target.value)} /></p>
                    <p>email: <input value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                    <Button
                        style={{float:'right'}}
                        onClick={() => removeUser()}
                    >退出登录</Button>
                    <Button onClick={handleSave}>保存</Button>
                </div>}
            <div className='personal-body'>
                <Divider dashed />
                <Menu
                    className='menu'
                    mode="horizontal"
                    selectedKeys={selectKey}
                    onSelect={(e) => handleSelect(e.key)}>
                    <Menu.Item key="writeArticle" >
                        我发布的诗
                 </Menu.Item>
                    <Menu.Item key="favArticle" >
                        收藏
                 </Menu.Item>
                </Menu>
                <ListShow listData={listData}></ListShow>
            </div>
        </>
    )
}