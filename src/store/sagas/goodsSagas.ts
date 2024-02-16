import { takeLatest, put, fork, call } from 'redux-saga/effects'
import {
  getGoods,
  getGoodsItem,
  GoodsItem,
  setGoods,
  setGoodsItem,
  updateItemData,
  updateItem
} from '../slices/goodsSlice.ts'
import { AxiosResponse } from 'axios'
import {
  fetchGoods,
  fetchGoodsItem,
  updateGoodsItem
} from '../../../utils/fetches.ts'

function* onLoadGoodsAsync({ payload }: { payload: number }) {
  try {
    const res: AxiosResponse = yield call(fetchGoods, payload)
    const goods: GoodsItem[] = res.data.goods
    if (goods) {
      yield put(setGoods(goods))
    }
  } catch (error) {
    console.log(error)
  }
}

function* onLoadGoodsItemAsync({ payload }: { payload: number }) {
  try {
    const res: AxiosResponse = yield call(fetchGoodsItem, payload)
    const goodsItem: GoodsItem = res.data
    if (goodsItem) {
      yield put(setGoodsItem(goodsItem))
    }
  } catch (error) {
    console.log(error)
  }
}

function* updateGoodsItemAsync({ payload }: { payload: GoodsItem }) {
  try {
    const res: AxiosResponse = yield call(updateGoodsItem, payload)
    const newGoodsItem: GoodsItem = res.data.result
    if (newGoodsItem) {
      yield put(updateItem(newGoodsItem))
    }
  } catch (error) {
    console.log(error)
  }
}

function* onLoadGoods() {
  yield takeLatest(getGoods, onLoadGoodsAsync)
}
function* onLoadGoodsItem() {
  yield takeLatest(getGoodsItem, onLoadGoodsItemAsync)
}
function* updateItemAsync() {
  yield takeLatest(updateItemData, updateGoodsItemAsync)
}

export const goodsSagas = [
  fork(onLoadGoods),
  fork(onLoadGoodsItem),
  fork(updateItemAsync)
]
