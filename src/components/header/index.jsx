import { useState } from 'react'
import shi from './诗.png'
import zhe from './者.png'
import { Menu, Button, Input, Space, Row, Col } from 'antd'
import { useHistory } from 'react-router-dom';
import memory from '../../utils/memory'

const { Search } = Input;


export function Header() {
    const history = useHistory()
    const nowPath = history.location.pathname
    console.log(nowPath)
    const [selectKey, setKey] = useState(nowPath)
    const handleSelect = (key) => {
        setKey(key)
        history.push(key)
    }
    return (
            <Row
                align='middle'>
                <Col xs={4} sm={4} md={3} lg={4} xl={5} > 
                <img style={{ width: '40px' }} src={shi} alt='logo'></img>
                <img style={{ width: '40px' }} src={zhe} alt='logo'></img>
                </Col>
                <Col xs={7} sm={7} md={8} lg={7} xl={6}>
                    <Menu
                        className='menu'
                        mode="horizontal"
                        selectedKeys={selectKey}
                        onSelect={(e) => handleSelect(e.key)}>
                        <Menu.Item key="/scan/home" >
                            首页
                 </Menu.Item>
                        <Menu.Item key="/scan/contact" >
                            投稿
                 </Menu.Item>
                    </Menu>
                </Col>
                <Col xs={9} sm={9} md={8} lg={7} xl={7}>
                    <Space>
                        <Search placeholder="请输入你想搜索的内容" allowClear onSearch={''} />
                    </Space></Col>
                <Col xs={4} sm={4} md={5} lg={6} xl={6}>
                   {memory.user === '' ?  <Button className='btn' size='large' onClick={()=>history.push('/login')}>登陆/注册</Button> : <span>Hello, {memory.user}</span>}</Col>
            </Row>


    )
}