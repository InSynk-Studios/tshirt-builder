/**
 * For personal reference,
 * Reducers, in React, are a little similar to Vue.js mutations, 
 * but it also has a lot of differences.
 * A reducer is, as you may already know, one function that 
 * accepts the `previous state` and the `action`, and returns the `next state`.
 * 
 * In the following,
 * Each function is a reducer, which are all combined to create a rootReducer.
 */
import { combineReducers } from 'redux'

function fabric(state = {}, action) {
  switch (action.type) {
    case 'CANVAS_INITIALIZED':
      return { ...state, canvas: action.canvas }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  fabric
})

export default rootReducer