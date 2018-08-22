import React, { Component } from 'react'

import {Switch, Route} from 'react-router-dom'
import {Layout} from 'antd';

import Home from '../home/Home'
import Plan from '../plan/Plan'

class Content extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout.Content className="main-content">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/list" component={Plan}/>
        </Switch>
      </Layout.Content>
    )
  }
}

export default Content