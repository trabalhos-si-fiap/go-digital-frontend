import { UserCircleIcon } from '@phosphor-icons/react'
import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import larosBlack from '../../../assets/laros-black.svg'
import { NavItem } from '../../../components/navLink'
import { api } from '../../../lib/axios'
import { LayoutContainer, LayoutHeader, SProfileButton } from './styles'

const navLinks = [
  { to: '/', title: 'Dashboard', label: 'Dashboard' },
  { to: '/clientes', title: 'Clientes', label: 'Clientes' },
  { to: '/campanhas', title: 'Campanhas', label: 'Campanhas' },
  { to: '/tarefas', title: 'Tarefas', label: 'Tarefas' },
  { to: '/equipes', title: 'Equipes', label: 'Equipes' },
]

export default function DefaultLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status

          if (status === 401) {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

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
