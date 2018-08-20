import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Provider, connect } from 'react-redux'
import store from './redux/store'

import logo from './logo.svg';

import './App.css';
import './components/layout/layout.css'

import Header from './components/layout/Header'
import Home from './components/home/Home'
import Plan from './components/plan/Plan'
import Detail from './components/detail/Detail'
import Popup from './components/popup/Popup'
import TestRouter from './components/testrouter'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Router history={history}>
            <div className="content container"> 
              <Header></Header>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/list" component={Plan}/>
                <Route path="/test" component={TestRouter}/>
                <Route path="/detail/:id" component={Detail}/>
              </Switch>
            </div>
          </Router>
          {/* <Popup></Popup> */}
        </div>
      </Provider>
    );
  }
}

export default App;
