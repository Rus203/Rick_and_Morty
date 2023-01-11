import { CARDS as C } from '../constants'

const card = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_CARD:
      return {
        ...action.payload
      }
    default: return state
  }
}

export const cards = (state = [], action) => {
  switch (action.type) {
    case C.ADD_CARD:
      return [...state, card({}, action)]
    default: return state
  }
}

export const amount = (state = 0, action) => {
  switch (action.type) {
    case C.SET_AMOUNT:
      return action.num
    default: return state
  }
}
