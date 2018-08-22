import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'inline',
      theme: 'light',
    }
  }
  render() {
    return (
      <div className="">
      <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1">
            <Icon type="home" />
            首页
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="bars" />
            列表
          </Menu.Item>
        </Menu>
        {/* <ul className="nav ">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul> */}
      </div>
    )
  }
}

export default Header