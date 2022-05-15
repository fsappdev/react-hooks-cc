
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NeuNavbar from './components/layout/NeuNavbar'

//páginas
import { UseState } from './components/mainhooks/UseState'
import UseEffect from './components/mainhooks/UseEffect'
import UseContext from './components/mainhooks/UseContext'

import './App.css'



function App() {
  

  return (
    <div className="App ">
    <Router>
      <NeuNavbar/>
      <div className='section'>
        lista de hooks
        <ul>
          <li >
            <Link to={"/usestate"}> useState hook</Link>
          </li>
          <li>
            <Link to={"/useeffect"}> useEffect hook</Link>
          </li>
          <li>
            <Link to={"/usecontext"}> useContext hook</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path={"/usestate"} component={UseState}/>
        <Route exact path={"/useeffect"} component={UseEffect}/>
        <Route exact path={"/usecontext"} component={UseContext}/>
      </Switch>
    </Router>  
    </div>
  )
}

export default App
