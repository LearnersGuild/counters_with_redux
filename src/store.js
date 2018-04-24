import { createStore } from 'redux'

const defaultState = { counts: [0,0,0] }

const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      const countsAfterInc = changeAtIndex(
                              state.counts,
                              action.index,
                              count => count + 1
                            )
      return { ...state, counts: countsAfterInc }
    case 'DECREMENT':
      const countsAfterDec = changeAtIndex(
                              state.counts,
                              action.index,
                              count => count - 1
                            )
      return { ...state, counts: countsAfterDec }
    default:
      return state
  }
}

function changeAtIndex(array, actionIndex, func) {
  let newArray = []
  array.forEach((count, index) => {
    if (index === actionIndex) {
      newArray[index] = func(count)
    } else {
      newArray[index] = count
    }
  })

  return newArray
}

const store = createStore(reducer)

export default store