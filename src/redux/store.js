import { createStore, combineReducers, applyMiddleware } from 'redux'
import { page } from './reducers/pageReducer'
import { info } from './reducers/infoReducer'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  combineReducers({ page, info }),
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => store.getState())

export default store
