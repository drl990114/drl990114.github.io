import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import {
  Row,
  Col,
  Button,
} from 'antd';
import { Home } from '../scan/home'
import { Contact } from '../scan/contact'
import { Header } from '../../components/header'
import { Search } from '../scan/search'
import { EditOutlined } from '@ant-design/icons'



export function Scan(props) {
  const history = useHistory()
  document.addEventListener('scroll', function (event) {
    let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let fixDiv = document.getElementById('recommend')
    if (fixDiv) {
      if (scrollDistance >= 65.0) {    // 触发的位置
        fixDiv.style.cssText = 'position:fixed;top:0px;';
      } else {
        fixDiv.style.cssText = 'position:static;';
      }
    } else {
      return
    }
  });

  return (
    <>
      <Header></Header>
      <Row>
        <Col xs={0} sm={0} md={3} lg={3} xl={5}>
          <div ></div>
        </Col>
        <Col xs={20} sm={20} md={13} lg={15} xl={12}>
          <div id='content'>
            <Switch>
              <Route path='/scan/home' ><Home /></Route>
              <Route path='/scan/contact' ><Contact /></Route>
              <Route path='/scan/search' ><Search /></Route>
              <Redirect to='/scan/home'></Redirect>
            </Switch>
          </div>
        </Col>
        <Col xs={4} sm={4} md={7} lg={5} xl={4}>
          <div id='recommend'>
            <Button type='primary' style={{ width: 80, height: 50 }} onClick={() => history.push('/edit')}>
              <EditOutlined style={{ fontSize: 15 }} />写诗
            </Button>
            <ul>
              <li>推荐阅读</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={3}>
          <div ></div>
        </Col>
      </Row>

    </>
  )
}

