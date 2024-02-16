import { configureStore } from '@reduxjs/toolkit'
import goodsReducer from './slices/goodsSlice.ts'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga.ts'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    goods: goodsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
