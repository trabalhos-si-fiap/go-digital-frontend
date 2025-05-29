import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './style'

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <header>
        <h1>Olá</h1>
      </header>
      <Outlet />
    </LayoutContainer>
  )
}
