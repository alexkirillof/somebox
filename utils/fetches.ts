import axios from 'axios'
import { GoodsItem } from '../src/store/slices/goodsSlice.ts'

export const fetchGoods = async (pageNum: number = 1) =>
  axios.get(import.meta.env.VITE_API_URL + `goods?page=${pageNum}`)

export const fetchGoodsItem = async (itemId: number) =>
  axios.get(import.meta.env.VITE_API_URL + `${itemId}/one_good`)

export const updateGoodsItem = async (item: GoodsItem) =>
  axios.put(import.meta.env.VITE_API_URL + `${item.id}/update_good`, {
    name: item.name
  })
