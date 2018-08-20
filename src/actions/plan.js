import * as types from './action-type'

export function addPlan (item) {
  return {
    type: types.ADD,
    item
  }
}

export function deletePlan (id) {
  return {
    type: types.DELETE,
    id
  }
}

export function show (show) {
  return {
    type: types.SHOW,
    show
  }
}