import { Form } from 'react-bootstrap'
import { GoodsItemFormProps } from './goodsItemForm.props.ts'

function GoodsItemForm({
  itemId,
  nameValue,
  handleChange,
  clearName
}: GoodsItemFormProps) {
  return (
    <>
      <Form.Group className='mb-3 w-25' controlId='formGroupEmail'>
        <Form.Control type='text' placeholder={`Id: ${itemId}`} disabled />
      </Form.Group>
      <div className='d-flex gap-3'>
        <Form.Group className='mb-3 w-100' controlId='formGroupPassword'>
          <Form.Control
            type='text'
            placeholder='Name'
            value={nameValue}
            onChange={handleChange}
          />
        </Form.Group>
        <button
          style={{ height: 38, width: 38, borderRadius: '50%' }}
          className='btn btn-light'
          onClick={clearName}
        >
          X
        </button>
      </div>
    </>
  )
}

export default GoodsItemForm
