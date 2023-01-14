import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { page } from './reducers/pageReducer'
import { info } from './reducers/infoReducer'
import { loader } from './reducers/loaderReducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { info, page, loader },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
