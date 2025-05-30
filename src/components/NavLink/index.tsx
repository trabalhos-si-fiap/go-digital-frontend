import { useLocation } from 'react-router-dom'
import { SNavLink } from './styles'

interface NavItemProps {
  to: string
  title: string
  label?: string
  icon?: React.ReactNode
}

export function NavItem({ to, title, label, icon }: NavItemProps) {
  const { pathname } = useLocation()

  return (
    <SNavLink data-current={pathname === to} to={to} title={title}>
      {icon}
      {label}
    </SNavLink>
  )
}
