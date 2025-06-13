import { UserCircleIcon } from '@phosphor-icons/react'
import { Outlet } from 'react-router-dom'
import larosBlack from '../../../assets/laros-black.svg'
import { NavItem } from '../../../components/navLink'
import { LayoutContainer, LayoutHeader, SProfileButton } from './styles'

const navLinks = [
  { to: '/', title: 'Dashboard', label: 'Dashboard' },
  { to: '/clientes', title: 'Clientes', label: 'Clientes' },
  { to: '/campanhas', title: 'Campanhas', label: 'Campanhas' },
  { to: '/tarefas', title: 'Tarefas', label: 'Tarefas' },
  { to: '/equipes', title: 'Equipes', label: 'Equipes' },
]

export default function DefaultLayout() {
  return (
    <>
      <LayoutHeader>
        <nav>
          <NavItem to="/" title="Dashboard" icon={<img src={larosBlack} alt="Larós Logo" />} />

          {navLinks.map(({ to, title, label }) => (
            <NavItem key={to} to={to} title={title} label={label} />
          ))}

          <SProfileButton type="button">
            <UserCircleIcon size={56} weight="fill" />
          </SProfileButton>
        </nav>
      </LayoutHeader>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
