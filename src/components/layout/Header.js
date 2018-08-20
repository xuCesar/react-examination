import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <ul className="nav ">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
          <li><Link to="/detail">详情</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header