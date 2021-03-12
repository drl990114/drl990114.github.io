import { useRef } from 'react'
import {
    Form,
    Input,
    Button,
    message
} from 'antd'
import shi from '../../components/header/诗.png'
import zhe from '../../components/header/者.png'
import { reqLogin } from '../../api'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import storage from '../../utils/storage'
import memory from '../../utils/memory'
import { useHistory } from 'react-router-dom'

export const Login = () => {
    const inputValue = useRef('')

    const history = useHistory()
    if (!storage.getUser() || !storage.getId()) {
        history.replace('/login')
    }
    const [form] = Form.useForm()
    const handleSubmit = () => {
        form.validateFields().then((response) => {
            //格式符合规则时
            const { username, password } = response

            reqLogin(username, password).then((res) => {
                if (res.status === 0) {
                    message.success('登陆成功')
                    const { username ,_id } = res.data
                    memory.user = username
                    memory.id = _id
                    storage.saveUser(username, _id)
                    history.replace('/scan/home')
                } else {
                    message.error('用户名或密码错误')
                }
            })
        }).catch(() => {
            //格式不符合规则时
            message.error('格式错误')
        })
    }

    const goAdd = () => {
        history.push('/adduser')
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
                    <div className="go-add" onClick={goAdd}>没有账号? 去注册</div>

                    <Form.Item>
                        <Button 
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            block={true}
                            onClick={() => handleSubmit()}
                        >
                            登陆
                  </Button>

                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}