import { Helmet } from '@dr.pogodin/react-helmet'
import { EnvelopeSimpleIcon, MagnifyingGlassIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { getClients } from '../../../api/get-clients'
import { DialogButton } from '../../../components/dialog-button'
import { Table } from '../../../components/table'
import { ClienteHeader, ClienteSection, GhostButton, SolidButton } from './styles'

export default function Clientes() {
  const { data } = useQuery({
    queryKey: ['get-clients'],
    queryFn: getClients,
  })

  return (
    <>
      <Helmet title="Clientes" />
      <ClienteHeader>
        <h1>Clientes</h1>

        <DialogButton />
      </ClienteHeader>

      <ClienteSection>
        <div>
          <span>Filtros:</span>
          <input type="text" placeholder="Instagram/Nome do cliente" />
        </div>

        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.HeadCell />
              <Table.HeadCell>Instagram</Table.HeadCell>
              <Table.HeadCell>Nome</Table.HeadCell>
              <Table.HeadCell />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.map((client) => (
              <Table.Row key={client.email}>
                <Table.Cell isIcon>
                  <SolidButton type="button">
                    <MagnifyingGlassIcon size={20} />
                  </SolidButton>
                </Table.Cell>
                <Table.Cell>{client.instagram}</Table.Cell>
                <Table.Cell>{client.name}</Table.Cell>
                <Table.Cell isIcon>
                  <GhostButton type="button">
                    <EnvelopeSimpleIcon size={20} />
                  </GhostButton>
                  <GhostButton type="button">
                    <WhatsappLogoIcon size={20} />
                  </GhostButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ClienteSection>
    </>
  )
}
