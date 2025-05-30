import { UserCircleIcon } from '@phosphor-icons/react'
import { Outlet } from 'react-router-dom'
import larosBlack from '../../assets/laros-black.svg'
import { NavItem } from '../../components/NavLink'
import { LayoutContainer, LayoutHeader } from './styles'

const navLinks = [
  { to: '/dashboard', title: 'Dashboard', label: 'Dashboard' },
  { to: '/campanhas', title: 'Campanhas', label: 'Campanhas' },
  { to: '/tarefas', title: 'Tarefas', label: 'Tarefas' },
  { to: '/clientes', title: 'Clientes', label: 'Clientes' },
  { to: '/equipes', title: 'Equipes', label: 'Equipes' },
  { to: '/contato', title: 'Contato', label: 'Contato' },
]

export default function DefaultLayout() {
  return (
    <>
      <LayoutHeader>
        <nav>
          <NavItem
            to="/dashboard"
            title="Dashboard"
            icon={<img src={larosBlack} alt="Larós Logo" />}
          />

          {navLinks.map(({ to, title, label }) => (
            <NavItem key={to} to={to} title={title} label={label} />
          ))}

          <NavItem to="/perfil" title="Perfil" icon={<UserCircleIcon size={56} weight="fill" />} />
        </nav>
      </LayoutHeader>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
