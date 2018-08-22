import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'

import {show, addPlan} from '../../actions/plan'

class Pupop extends Component{
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      content: ''
    }
    this.close = this.close.bind(this)
    this.confirm = this.confirm.bind(this)
  }

  close () {
    let s = this.props.planlist.show
    this.setState({
      id: '',
      title: '',
      content: ''
    })
    store.dispatch(show(!s))
  }

  handleChange (str, e) {
    this.setState({
      id: Math.ceil(Math.random()*10000),
      [str]: e.target.value
    })
  }

  confirm () {
    let _this = this
    console.log(this.state)
    store.dispatch(addPlan(this.state))
    this.setState({
      id: '',
      title: '',
      content: ''
    })
    this.close()
    setTimeout(function(){
      console.log(_this.state)
    }, 1000)
  }


  render() {
    let { show } = this.props.planlist
    return (
      <section className="popup" style={ show ? {} : {display: 'none'}}>
        <div className="pbox">
          <span className="close" onClick={this.close}>X</span>
          <div>
            <h4>计划标题</h4>
            <input onChange={this.handleChange.bind(this, 'title')} value={this.state.title} placeholder="请输入计划标题"/>
          </div>
          <div>
            <h4>计划内容</h4>
            <textarea onChange={this.handleChange.bind(this, 'content')}  value={this.state.content} placeholder="请输入计划内容" rows="3"></textarea>
          </div>
          <div className="pBtn">
            <span onClick={this.close}>取消</span>
            <span onClick={this.confirm}>确认</span>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = function(store) {
  console.log(store)
  return {
    planlist: store.planlist
  }
}

export default connect(mapStateToProps)(Pupop)
