import { INFO as C } from '../constants'

export const info = (state = {}, action) => {
  switch (action.type) {
    case C.SET_INFO: {
      return action.payload
    }
    default: return state
  }
}
