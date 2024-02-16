import { HTMLAttributes } from 'react'

export interface ItemTableProps extends HTMLAttributes<HTMLElement> {
  itemId: number | undefined
  name: string | null
}
