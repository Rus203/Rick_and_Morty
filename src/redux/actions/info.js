import { INFO as C } from '../constants'

export const addInfo = payload => {
  return {
    type: C.SET_INFO,
    payload
  }
}
