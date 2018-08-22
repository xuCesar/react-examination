import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { Link, withRouter } from 'react-router-dom'
import {show, deletePlan} from '../../actions/plan'

import { List, Avatar } from 'antd';

class Plan extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.add = this.add.bind(this)
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

  add () {
    const {history} = this.props
    history.push('/create')
  }

  render() {
    let data = this.props.planlist.planlist
    return (
      <div>
        <div className="plant">
            <h3>计划表</h3>
            <p onClick={this.add}>添加计划</p>
        </div>
        <div className="planlist">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={ <Link to={`/detail/${item.id}`}>{item.title}</Link> }
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    planlist: store.planlist
  }
}

// export default connect(mapStateToProps)(Plan)
export default withRouter(connect(mapStateToProps)(Plan))
// export default Plan