import { ListIcon, UserCircleIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import larosBlack from '../../../assets/laros-black.svg'
import { SHamburgerButton, SLayoutContainer, SLayoutHeader, SNav, SProfileButton } from './styles'
import { NavItem } from '../../../components/NavLink'

const navLinks = [
  { to: '/', title: 'Dashboard', label: 'Dashboard' },
  { to: '/clientes', title: 'Clientes', label: 'Clientes' },
  { to: '/campanhas', title: 'Campanhas', label: 'Campanhas' },
  { to: '/tarefas', title: 'Tarefas', label: 'Tarefas' },
  { to: '/equipes', title: 'Equipes', label: 'Equipes' },
]

export default function DefaultLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <SLayoutHeader>
        <SHamburgerButton onClick={() => setIsMenuOpen((prev) => !prev)}>
          <ListIcon size={32} weight="bold" />
        </SHamburgerButton>

        <SNav $isOpen={isMenuOpen}>
          <NavItem to="/" title="Dashboard" icon={<img src={larosBlack} alt="Larós Logo" />} />

          {navLinks.map(({ to, title, label }) => (
            <NavItem key={to} to={to} title={title} label={label} />
          ))}

          <SProfileButton type="button">
            <UserCircleIcon size={56} weight="fill" />
          </SProfileButton>
        </SNav>
      </SLayoutHeader>

      <SLayoutContainer>
        <Outlet />
      </SLayoutContainer>
    </>
  )
}
