import { SCardContainer, SCardHeader, SCardLabel } from './styles'

interface CardProps {
  title: string
  label?: string
  icon?: React.ReactNode
}

export function Card({ title, label, icon }: CardProps) {
  return (
    <SCardContainer>
      <SCardHeader>
        <span>{icon}</span>
        <h3>{title}</h3>
      </SCardHeader>

      <SCardLabel>{label}</SCardLabel>
    </SCardContainer>
  )
}
