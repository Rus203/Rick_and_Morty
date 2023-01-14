import { LOADER as C } from '../constants'

export const loader = (state = true, action) => {
  switch (action.type) {
    case C.HIDE_LOADER:
      return false
    case C.SHOW_LOADER:
      return true
    default: return state
  }
}
