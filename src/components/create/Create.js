import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../../redux/store'

import { addPlan } from '../../actions/plan'

class CreatePlan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      content: ''
    }
    this.cancel = this.cancel.bind(this)
    this.confirm = this.confirm.bind(this)
  }

  cancel () {
    const { history } = this.props
    history.goBack()
  }

  handleChange (str, e) {
    this.setState({
      id: Math.ceil(Math.random()*10000),
      [str]: e.target.value
    })
  }

  confirm () {
    if (!this.state.id) {
      return false
    }
    store.dispatch(addPlan(this.state))
    this.setState({
      id: '',
      title: '',
      content: ''
    })
    this.cancel()
  }

  render() {
    return (
      <section className="popup">
        <div className="pbox">
          <div>
            <h4>标题</h4>
            <input onChange={this.handleChange.bind(this, 'title')} value={this.state.title} placeholder="请输入标题"/>
          </div>
          <div>
            <h4>内容</h4>
            <textarea onChange={this.handleChange.bind(this, 'content')}  value={this.state.content} placeholder="请输入内容" rows="3"></textarea>
          </div>
          <div className="pBtn">
            <span onClick={this.cancel}>取消</span>
            <span onClick={this.confirm}>确认</span>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = store => {
  return {
    planlist: store.planlist
  }
}

export default connect(mapStateToProps)(CreatePlan)