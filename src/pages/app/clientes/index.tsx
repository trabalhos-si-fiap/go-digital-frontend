import { Helmet } from '@dr.pogodin/react-helmet'
import { EnvelopeSimpleIcon, MagnifyingGlassIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { exportClients } from '../../../api/export-clients'
import { getClients } from '../../../api/get-clients'
import { DialogButton } from '../../../components/dialog-button'
import { SClienteContent, SClienteHeader, SGhostButton, SSolidButton } from './styles'
import { Table } from '../../../components/table'

export default function Clientes() {
  const { data: clients, refetch } = useQuery({
    queryKey: ['get-clients'],
    queryFn: getClients,
  })

  async function handleExportButton() {
    try {
      await exportClients()
    } catch (err) {
      alert('Erro ao exportar CSV')
    }
  }

  return (
    <>
      <Helmet title="Clientes" />

      <SClienteHeader>
        <h1>Clientes</h1>

        <DialogButton onClientCreated={refetch} />
      </SClienteHeader>

      <SClienteContent>
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
            {clients?.map((client) => (
              <Table.Row key={client.id}>
                <Table.Cell isIcon>
                  <SSolidButton type="button">
                    <MagnifyingGlassIcon size={20} />
                  </SSolidButton>
                </Table.Cell>
                <Table.Cell>{client.instagram}</Table.Cell>
                <Table.Cell>{client.name}</Table.Cell>
                <Table.Cell isIcon>
                  <SGhostButton type="button">
                    <EnvelopeSimpleIcon size={20} />
                  </SGhostButton>

                  <SGhostButton type="button">
                    <WhatsappLogoIcon size={20} />
                  </SGhostButton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <button type="button" onClick={handleExportButton}>
          Exportar tudo em .CSV
        </button>
      </SClienteContent>
    </>
  )
}
