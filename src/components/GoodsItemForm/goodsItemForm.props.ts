import React from 'react'

export interface GoodsItemFormProps
  extends React.HTMLAttributes<HTMLFormElement> {
  itemId?: number
  nameValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  clearName: () => void
}
