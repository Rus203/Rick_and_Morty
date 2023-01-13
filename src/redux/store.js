import { configureStore } from '@reduxjs/toolkit'
import { page } from './reducers/pageReducer'
import { info } from './reducers/infoReducer'

import thunk from 'redux-thunk'

const store = configureStore({
  reducer: { info, page },
  middleware: [thunk]
})

store.subscribe(() => store.getState())

export default store
