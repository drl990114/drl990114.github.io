import { useRef } from 'react'
import {
    Form,
    Input,
    Button,
    message
} from 'antd'
import shi from '../../components/header/诗.png'
import zhe from '../../components/header/者.png'
import { addUser} from '../../api'
import { UserOutlined, LockOutlined , CommentOutlined} from '@ant-design/icons'
import storage from '../../utils/storage'
import memory from '../../utils/memory'
import { useHistory } from 'react-router-dom'

export const AddUser = () => {
    const inputValue = useRef('')

    const history = useHistory()

    const [form] = Form.useForm()
    const handleSubmit = () => {
        form.validateFields().then((response) => {
            //格式符合规则时
            const { username, password ,email } = response
            addUser( username, password ,email).then((req)=>{
                if(req.status === 1) {
                    message.error(req.msg)
                } else {
                    message.success('注册成功')
                    const { username ,_id } = req.data
                    memory.user = username
                    memory.id = _id
                    storage.saveUser(username, _id)
                    history.replace('/scan/home')
                }
            })
        
        }).catch(() => {
            //格式不符合规则时
            message.error('格式错误')
        })

    }
    return (
        <div className='login'>
            <header className='login-header'>
                <a href='#/scan/home'>
                    <img style={{ width: '50px' }} src={shi} alt='logo' />
                    <img style={{ width: '50px' }} src={zhe} alt='logo' />
                </a>
            </header>
            <section className='login-content'>
                <h2>自由创作就现在</h2>
                <Form
                    ref={inputValue}
                    form={form}
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}

                >
                    <Form.Item
                        name="username"
                        //声明式rules校验输入内容
                        rules={[{ required: true, message: '用户名必须输入!' },
                        { max: 12, message: '用户名最多12个字符' },
                        ]}
                    >
                        <Input prefix={<UserOutlined />}
                            placeholder="用户名" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '密码必须输入!' },
                        { min: 4, message: '密码至少4个字符' },
                        { max: 12, message: '密码最多12个字符' },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />

                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: '邮箱必须输入!' },
                        { pattern: '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$', message: '邮箱格式不正确' },
                        ]}
                    >
                        <Input

                            prefix={<CommentOutlined />}
                            
                            placeholder="邮箱"
                        />

                    </Form.Item>


                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            block={true}
                            onClick={() => handleSubmit()}
                        >
                            注册并登陆
                  </Button>

                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}