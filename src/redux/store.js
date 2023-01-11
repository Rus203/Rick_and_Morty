import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cards, amount } from './reducers/cardReducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({ cards, amount }),
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => store.getState())

export default store
