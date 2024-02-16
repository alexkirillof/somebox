import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getGoods } from '../../store/slices/goodsSlice.ts'
import { Spinner, Pagination } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout.tsx'
import ListTable from '../../components/ListTable/ListTable.tsx'

function Goods() {
  const { pages, currentPage, goodsList, loading } = useAppSelector(
    (state) => state.goods
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGoods(currentPage))
  }, [dispatch])
  return (
    <Layout>
      {loading ? (
        <Spinner
          animation='border'
          variant='secondary'
          style={{ marginTop: '200px' }}
        />
      ) : (
        <>
          <ListTable goodsList={goodsList} />
          <Pagination className='position-absolute bottom-0 '>
            {pages.map((item, idx) => (
              <Pagination.Item
                key={idx}
                active={item == currentPage}
                onClick={(e) => {
                  const target = e.target as HTMLLinkElement
                  dispatch(getGoods(Number(target.textContent)))
                }}
              >
                {item}
              </Pagination.Item>
            ))}
          </Pagination>
        </>
      )}
    </Layout>
  )
}

export default Goods
