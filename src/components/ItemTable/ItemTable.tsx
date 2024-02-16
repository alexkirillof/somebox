import { Table } from 'react-bootstrap'
import { ItemTableProps } from './itemTable.props.ts'

function ItemTable({ itemId, name }: ItemTableProps) {
  return (
    <>
      <Table striped bordered hover responsive='lg' size='lg'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{itemId}</th>
            <th>{name}</th>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default ItemTable
