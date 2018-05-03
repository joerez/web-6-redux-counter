import { INCREMENT, DECREASE, RESET, INCREMENTBY, DECREMENTBY, incrementCounter } from '../actions'

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
    case INCREMENTBY:
      const newState4 = state + action.payload.number
      return newState4
    case DECREMENTBY:
      const newState5 = state - action.payload.subNumber
      return newState5  
    default:
      return state
  }
}

export default counterReducer;
