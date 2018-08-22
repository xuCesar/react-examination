import React, { Component } from 'react'

import { Layout ,Icon,Menu} from 'antd'

import Sider from './Sider'
import Content from './Content'

class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        <Sider />
        <Layout className="main-layout">
          <Content />
        </Layout>
      </Layout>
    )
  }
}

export default Main