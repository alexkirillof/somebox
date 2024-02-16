import { Button, Image } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout.tsx'

function Dashboard() {
  return (
    <Layout>
      <Image src='./welcome.png' fluid className=' w-50 h-50 mb-5' />
      <Button
        variant='outline-success'
        href='/goods'
        style={{ maxWidth: '300px' }}
      >
        Каталог товаров
      </Button>
    </Layout>
  )
}

export default Dashboard
