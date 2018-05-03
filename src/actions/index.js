/* Actions here */
export const INCREMENT = 'INCREMENT'
export const DECREASE = 'DECREASE'
export const RESET = 'RESET'

export const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decreaseCounter = () => {
  return {
    type: DECREASE
  }
}

export const resetCounter = () => {
  return {
    type: RESET
  }
}
