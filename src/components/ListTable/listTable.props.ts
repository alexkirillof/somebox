import { HTMLAttributes } from 'react'
import { GoodsItem } from '../../store/slices/goodsSlice.ts'
export interface ListTableProps extends HTMLAttributes<HTMLElement> {
  goodsList: GoodsItem[] | null
}
