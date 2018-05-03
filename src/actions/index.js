/* Actions here */
export const INCREMENT = 'INCREMENT'
export const DECREASE = 'DECREASE'
export const RESET = 'RESET'
export const INCREMENTBY = 'INCREMENTBY'
export const DECREMENTBY = 'DECREMENTBY'


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

export const incrementByCounter = (number) => {
  return {
    type: INCREMENTBY,
    payload : {
      number
    }
  }
}

export const decrementByCounter = (subNumber) => {
  return {
    type: DECREMENTBY,
    payload : {
      subNumber
    }
  }
}
