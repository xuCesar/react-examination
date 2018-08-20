import * as types from '../actions/action-type'
import data from '../data/db'

const initialState = {
  show: false,
  planlist: data
}

const reducer = function (state = initialState, action) {
  let list = state.planlist
  switch (action.type) {

    case types.ADD:
      list.push(action.item)
      return {...state, ...list}

    case types.DELETE:
      let newstate = list.filter((item) => item.id != action.id)
      console.log(newstate)
      // return Object.assign({}, state, { planlist: newstate })
      
      // let aa = {...state, ...newstate}
      // console.log(aa)
      // console.log(state)
      // return {state, newstate}
    
    case types.SHOW:
      return {...state, show: action.show }

  }
  return state
}

export default reducer