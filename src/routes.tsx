import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import Goods from './pages/Goods/Goods.tsx'
import GoodsItem from './pages/GoodsItem/GoodsItem.tsx'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/dashboard'} />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/goods' element={<Goods />} />
      <Route path='/goods/item/:itemId' element={<GoodsItem />} />
    </Routes>
  )
}
