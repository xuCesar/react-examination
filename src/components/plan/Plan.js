import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'

import {show, deletePlan} from '../../actions/plan'

class Plan extends Component {
  constructor(props) {
    super(props)

    // this.show = this.show.bind(this)
    // this.delete = this.delete.bind(this)
    // this.detail = this.detail.bind(this)
  }

  show () {
    console.log(this.props)
    let s = this.props.planlist.show
    store.dispatch(show(!s))
  }

  delete (id) {
    store.dispatch(deletePlan(id))
  }

  detail (id) {
    this.props.history.push(`/detail/${id}`)
  }

  render() {
    let list  = this.props.planlist.planlist
    return (
      <div>
        <div className="plant">
            <h3>计划表</h3>
            <p onClick={this.show}>添加计划</p>
        </div>
        <table className="planlist">
            <thead>
                <tr>
                    <th>标题</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                  list.map((item, index) => {
                    return (
                      <tr key={index}>
                          <td className="plan-title" onClick={this.detail.bind(this, item.id)}>{item.title}</td>
                          <td className="plan-delect" onClick={this.delete.bind(this, item.id)}>删除</td>
                      </tr>
                    )
                  })
                }
                
            </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    planlist: store.planlist
  }
}

export default connect(mapStateToProps)(Plan)