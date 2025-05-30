import { CheckIcon, MegaphoneIcon, UserCircleIcon, WarningIcon } from '@phosphor-icons/react'
import { Card } from '../../components/Card'
import { CardContainer, DashboardContainer, LogContainer } from './styles'

export default function Dashboard() {
  return (
    <DashboardContainer>
      <h1>
        Olá, <span>Guilherme!</span>
      </h1>
      <CardContainer>
        <Card icon={<UserCircleIcon size={24} />} title="Clientes Ativos" label="12" />
        <Card icon={<MegaphoneIcon size={24} />} title="Tarefas Pendentes" label="3" />
        <Card icon={<CheckIcon size={24} />} title="Anúncios Cadastrados" label="45" />
        <Card icon={<WarningIcon size={24} />} title="Alertas do Dia" label="2" />
      </CardContainer>
      <LogContainer>
        <h2>Atividades Recentes</h2>
        <ul>
          <li>Análise de Anúncio conclúida.</li>
          <li>Tarefa "Criar contéudo para Campanha X" concluída.</li>
          <li>Novo Cliente adicionado.</li>
        </ul>
      </LogContainer>
    </DashboardContainer>
  )
}
