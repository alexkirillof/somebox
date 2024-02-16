import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'

export type GoodsItem = {
  name: string
  id: number
}

export type Goods = {
  goodsList: GoodsItem[] | null
  goodsItem: GoodsItem | null
  error: string | unknown
  loading: boolean
  pages: number[]
  currentPage: number
  currentId: number | null
}

const initialState: Goods = {
  goodsList: null,
  goodsItem: null,
  error: '',
  loading: false,
  pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  currentPage: 1,
  currentId: null
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    getGoods: (state, action) => {
      state.loading = true
      state.currentPage = action.payload
    },
    setGoods: (state, actions) => {
      state.goodsList = actions.payload
      state.loading = false
    },
    getGoodsItem: (state, action) => {
      state.loading = true
      state.currentId = action.payload
    },
    setGoodsItem: (state, actions) => {
      state.goodsItem = actions.payload
      state.loading = false
    },
    updateItemData: (state, action) => {
      state.loading = true
      state.currentId = action.payload.id
    },
    updateItem: (state, actions) => {
      state.goodsItem = actions.payload
      state.loading = false
    }
  }
})

export const goods = (state: RootState) => state.goods

export default goodsSlice.reducer

export const {
  getGoods,
  setGoods,
  getGoodsItem,
  setGoodsItem,
  updateItemData,
  updateItem
} = goodsSlice.actions
