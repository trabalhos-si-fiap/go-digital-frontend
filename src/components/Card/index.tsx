import { SCard } from './styles'

interface CardProps {
  title: string
  label?: string
  icon?: React.ReactNode
}

export function Card({ title, label, icon }: CardProps) {
  return (
    <SCard>
      <div>
        <span>{icon}</span>
        <h3>{title}</h3>
      </div>
      <span>{label}</span>
    </SCard>
  )
}
