import { CARDS as C } from '../constants'

export const addCard = payload => {
  return {
    type: C.ADD_CARD,
    payload
  }
}

export const setAmount = (num) => {
  return {
    type: C.SET_AMOUNT,
    num
  }
}
