import { useState } from 'react'
import {
    Button,
    Input,
    Row,
    Col,
    Upload,
    message
} from 'antd'
import { PictureOutlined } from '@ant-design/icons'
import shi from '../../components/header/诗.png'
import zhe from '../../components/header/者.png'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import memory from '../../utils/memory'
import storage from '../../utils/storage'
import { publishArticle } from '../../api'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { useHistory } from 'react-router-dom'

const { Dragger } = Upload
export function Edit(props) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())//富文本编辑器内容
    const [files, setFile] = useState([])
    const [title, setTitle] = useState('')
    const editValue = (editorState) => {
        setEditorState(editorState)
    }
    const history = useHistory()

    if(!storage.getUser() || !storage.getId()) {
        history.replace('/login')
    }

    const inputValue = (e) => {
        //收集input的值（title）
        setTitle(e.target.value)
    }
    //上传图片
    const handleOnchange = (e) => {
        const { file } = e
        if (file.status === 'done') {
            if (file.response.status === 0) {
                message.success('添加图片成功')
                const doneFile = {}
                doneFile.name = file.response.data.name
                let imgList = []
                imgList.push(doneFile)
                setFile(imgList)
                console.log(files)
            } else {
                message.error('添加图片请求失败')
            }
        }
    }

    //点击发布
    const handlePublish = (e) => {
        if (files.length === 0) {
            message.error('需要至少一张图片作为封面')
            if (!title) {
                message.error('标题不能为空')
            }
        } else {
            let editValue = draftToHtml(convertToRaw(editorState.getCurrentContent()))
            const username = storage.getUser()
            const id = storage.getId()
            publishArticle(title, files, id, username, editValue).then((req) => {
                message.success('发布成功')
                history.replace('/scan/home')
            }).catch(() => {
                message.error('发布文章失败')
            })
        }
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
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>写诗</span>
                </Col>
                <Col xs={9} sm={9} md={8} lg={7} xl={7}>
                    <Button
                        type='primary'
                        style={{ float: 'right', right: '10px' }}
                        onClick={handlePublish}
                    >发布</Button>
                </Col>
                <Col xs={4} sm={4} md={5} lg={6} xl={6}>
                    <span>Hello, {memory.user}</span></Col>
            </Row>

            <div id='editor'>
                <Dragger
                    name='image'
                    accept='image/*'
                    listType='text'
                    multiple={true}
                    action="/manage/img/upload"
                    fileList={files}
                    onChange={(e)=>handleOnchange(e)}
                >
                    <p className="ant-upload-drag-icon">
                        <PictureOutlined />
                    </p>
                    <p className="ant-upload-text">点击或拖拽一张图片到指定区域来上传图片</p>
                    {files.length < 2}
                </Dragger>
                <Input
                    size='large'
                    placeholder='请输入诗的标题（最多50字）'
                    maxLength={50}
                    value={title}
                    onChange={(e) => inputValue(e)}
                >
                </Input>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={editValue}
                />
            </div>
        </>


    )
}
