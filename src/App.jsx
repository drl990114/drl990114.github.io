import { Route, Switch, Redirect } from 'react-router-dom'
import { Scan } from './pages/scan'
import { Login } from './pages/login'
import { Edit } from './pages/edit'
import { Desc } from './pages/desc'
import { Personal } from './pages/personal'
import { AddUser } from './pages/adduser'
import './styles/index.scss'

function App(props) {

  return (
    <Switch>
      <Route path='/scan'><Scan /></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/adduser'><AddUser /></Route>
      <Route path='/edit'><Edit /></Route>
      <Route path='/desc'><Desc /></Route>
      <Route path='/personal'><Personal /></Route>
      <Redirect to='/scan/home'></Redirect>
    </Switch>
  )
}


export default App;
