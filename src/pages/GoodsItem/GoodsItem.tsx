import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks'
import { getGoodsItem, updateItemData } from '../../store/slices/goodsSlice.ts'
import { Row, Stack, Button, Spinner } from 'react-bootstrap'
import { nameValidate } from '../../../utils/nameValidate.ts'
import Layout from '../../components/Layout/Layout.tsx'
import ItemTable from '../../components/ItemTable/ItemTable.tsx'
import GoodsItemForm from '../../components/GoodsItemForm/GoodsItemForm.tsx'

function GoodsItem() {
  const navigate = useNavigate()
  const params = useParams()
  const { goodsItem, loading } = useAppSelector((state) => state.goods)
  const [nameValue, setNameVaue] = useState<string>(goodsItem?.name || '')
  const dispatch = useAppDispatch()
  const itemId: number = Number(params.itemId)
  const query = useQuery()
  useEffect(() => {
    goodsItem?.name && setNameVaue(goodsItem?.name)
  }, [goodsItem])
  useEffect(() => {
    dispatch(getGoodsItem(itemId))
  }, [itemId])
  const reset = () => {
    setNameVaue(goodsItem?.name || '')
    navigate(`/goods/item/${itemId}?mode=view`)
  }
  const saveItem = () => {
    dispatch(updateItemData({ name: nameValue, id: params.itemId }))
    navigate(`/goods/item/${itemId}?mode=view`)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameVaue(e.target.value)
  }

  return (
    <Layout>
      {query.get('mode') === 'view' &&
        (loading ? (
          <Spinner
            animation='border'
            variant='secondary'
            style={{ marginTop: '200px' }}
          />
        ) : (
          <Row className='mt-5'>
            <ItemTable itemId={goodsItem?.id} name={nameValue} />
            <Stack direction='horizontal' gap={5} className='mt-3'>
              <Link to={'/goods'} className='btn btn-outline-dark'>
                Назад
              </Link>
              <Link
                to={`/goods/item/${goodsItem?.id}?mode=edit`}
                className='btn btn-outline-dark'
              >
                Редактировать
              </Link>
            </Stack>
          </Row>
        ))}
      {query.get('mode') === 'edit' &&
        (loading ? (
          <Spinner
            animation='border'
            variant='secondary'
            style={{ marginTop: '200px' }}
          />
        ) : (
          <Row className='mt-5'>
            <GoodsItemForm
              itemId={goodsItem?.id}
              nameValue={nameValue}
              handleChange={handleChange}
              clearName={() => {
                setNameVaue('')
              }}
            />
            <Stack direction='horizontal' gap={5} className='mt-5'>
              <Button
                variant='outline-success'
                disabled={!nameValidate(nameValue)}
                onClick={saveItem}
              >
                Сохранить
              </Button>
              <Button
                variant='outline-danger'
                onClick={() => {
                  reset()
                }}
              >
                Отмена
              </Button>
            </Stack>
          </Row>
        ))}
    </Layout>
  )
}

export default GoodsItem
