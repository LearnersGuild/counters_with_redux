import { createStore } from 'redux'

const defaultState = { count: 0 }

const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store