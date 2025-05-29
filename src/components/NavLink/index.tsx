import { NavLink } from 'react-router-dom'

interface NavItemProps {
  to: string
  title: string
  label?: string
  icon?: React.ReactNode
}

export function NavItem({ to, title, label, icon }: NavItemProps) {
  return (
    <NavLink to={to} title={title}>
      {icon}
      {label}
    </NavLink>
  )
}
