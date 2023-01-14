import { takeEvery, put, call, all, delay } from 'redux-saga/effects'
import { PAGES as C } from '../constants'
import { hideLoader, showLoader } from '../actions/loader'
import { addInfo } from '../actions/info'
import { addPage } from '../actions/pages'

import { fetchPage, fetchTotalPages } from './fetchFunctions'

export default function * rootSaga () {
  yield all([loadTotalPagesByDefault(), sagaWatcher()])
}

function * sagaWatcher () {
  yield takeEvery(C.SET_PAGE, workerGetPageSaga)
}

function * loadTotalPagesByDefault () {
  yield put(showLoader())
  const payload = yield call(fetchTotalPages)
  yield put(addInfo(payload))
  yield delay(500)
  yield put(hideLoader())
}

function * workerGetPageSaga (action) {
  yield put(showLoader())
  const payload = yield call(fetchPage, action.pageNum)
  yield put(addPage(payload))
  yield delay(500)
  yield put(hideLoader())
}
