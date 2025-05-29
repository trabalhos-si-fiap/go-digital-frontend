import { Outlet } from 'react-router-dom'
import larosBlack from '../../assets/laros-black.svg'
import { NavItem } from '../../components/NavLink'
import { LayoutContainer, LayoutHeader } from './style'

const navLinks = [
  { to: '/dashboard', title: 'Dashboard', label: 'Dashboard' },
  { to: '/clientes', title: 'Clientes', label: 'Clientes' },
  { to: '/tarefas', title: 'Tarefas', label: 'Tarefas' },
  { to: '/campanhas', title: 'Campanhas', label: 'Campanhas' },
  { to: '/relatorios', title: 'Relatórios', label: 'Relatorios' },
  { to: '/equipes', title: 'Equipes', label: 'Equipes' },
  { to: '/contato', title: 'Contato', label: 'Contato' },
  { to: '/perfil', title: 'Perfil', label: 'Perfil' },
]

export default function DefaultLayout() {
  return (
    <>
      <LayoutHeader>
        <nav>
          <NavItem to="/" title="Home" icon={<img src={larosBlack} alt="Home" />} />

          {navLinks.map(({ to, title, label }) => (
            <NavItem key={to} to={to} title={title} label={label} />
          ))}
        </nav>
      </LayoutHeader>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
