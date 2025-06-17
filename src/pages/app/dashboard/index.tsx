import { Helmet } from '@dr.pogodin/react-helmet'
import { CheckIcon, MegaphoneIcon, UserCircleIcon, WarningIcon } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { getClients } from '../../../api/get-clients'
import { Card } from '../../../components/card'
import { SCardContainer, SDashboardContent, SDashboardHeader, SLogContainer } from './styles'

export default function Dashboard() {
  const { data } = useQuery({
    queryKey: ['get-clients'],
    queryFn: getClients,
  })

  return (
    <>
      <Helmet title="Dashboard" />
      <SDashboardHeader>
        <h1>
          Olá, <span>Guilherme!</span>
        </h1>
      </SDashboardHeader>

      <SDashboardContent>
        <SCardContainer>
          <Card
            icon={<UserCircleIcon size={24} />}
            title="Clientes Ativos"
            label={`${data?.length}`}
          />
          <Card icon={<MegaphoneIcon size={24} />} title="Tarefas Pendentes" label="3" />
          <Card icon={<CheckIcon size={24} />} title="Anúncios Cadastrados" label="45" />
          <Card icon={<WarningIcon size={24} />} title="Alertas do Dia" label="2" />
        </SCardContainer>
        <SLogContainer>
          <h2>Atividades Recentes</h2>
          <ul>
            <li>Análise de Anúncio concluída.</li>
            <li>Tarefa "Criar contéudo para Campanha X" concluída.</li>
            <li>Novo Cliente adicionado.</li>
          </ul>
        </SLogContainer>
      </SDashboardContent>
    </>
  )
}
