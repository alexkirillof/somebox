import { Image, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ListTableProps } from './listTable.props.ts'

function ListTable({ goodsList }: ListTableProps) {
  return (
    <>
      <Table striped bordered hover style={{ width: '90%' }}>
        <thead>
          <tr>
            <th style={{ width: 50 }}>#</th>
            <th style={{ width: 50 }}>Id</th>
            <th>Name</th>
            <th style={{ width: 50 }}>просмотр</th>
            <th style={{ width: 50 }}>редактировать</th>
          </tr>
        </thead>
        <tbody>
          {goodsList?.map((item, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <th>{item.id}</th>
              <th style={{ textAlign: 'left' }}>{item.name}</th>
              <th>
                <Link to={`/goods/item/${item.id}?mode=view`}>
                  <Image src='./preview.svg' />
                </Link>
              </th>
              <th>
                <Link to={`/goods/item/${item.id}?mode=edit`}>
                  <Image src='./edit.svg' />
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default ListTable
