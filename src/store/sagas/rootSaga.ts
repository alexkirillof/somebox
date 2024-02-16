import { all } from 'redux-saga/effects'
import { goodsSagas } from './goodsSagas.ts'

export default function* rootSaga() {
  yield all([...goodsSagas])
}
