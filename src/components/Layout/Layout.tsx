import { LayoutProps } from './layout.props.ts'

function Layout({ children }: LayoutProps) {
  return (
    <div
      className=' d-flex flex-column align-items-center w-75 p-3 h-50 bg-white text-dark rounded-2 position-relative'
      style={{ minHeight: '820px' }}
    >
      {children}
    </div>
  )
}
export default Layout
