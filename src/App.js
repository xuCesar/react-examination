import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'

import './App.css';
import './components/layout/layout.css'
import 'antd/dist/antd.css'; 

import {Main} from './components/layout/index'
import Header from './components/layout/Header'
import Home from './components/home/Home'
import Plan from './components/plan/Plan'
import Create from './components/create/Create'
import Detail from './components/detail/Detail'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p className="App-title">Welcome to React</p>
          </header>

          <Router history={history}>
            <div className="content container"> 
              <Switch>
                <Main></Main>
                {/* <Route exact path="/" component={Home}/>
                <Route path="/list" component={Plan}/>
                <Route path="/create" component={Create}/>
                <Route path="/detail/:id" component={Detail}/> */}
              </Switch>
            </div>
          </Router>
          {/* <Popup></Popup> */}
        </div>
    );
  }
}

export default App;
