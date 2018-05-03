import { INCREMENT, DECREASE, RESET, incrementCounter } from '../actions'

                        //provide initial value here
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      const newState = state + 1
      return newState
    case DECREASE:
      const newState2 = state - 1
      return newState2
    case RESET:
      const newstate3 = 0
      return newstate3
    default:
      return state
  }
}

export default counterReducer;
