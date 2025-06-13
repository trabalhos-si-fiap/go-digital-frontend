import { EnvelopeSimpleIcon, MagnifyingGlassIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import { Table } from '../../../components/table'
import { ClienteHeader, ClienteSection, GhostButton, SolidButton } from './styles'

export default function Clientes() {
  return (
    <>
      <ClienteHeader>
        <h1>Clientes</h1>
        <button type="button">Adicionar novo cliente</button>
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
            {[1, 2].map((_, i) => (
              <Table.Row key={i}>
                <Table.Cell isIcon>
                  <SolidButton type="button">
                    <MagnifyingGlassIcon size={20} />
                  </SolidButton>
                </Table.Cell>
                <Table.Cell>@joaosilva</Table.Cell>
                <Table.Cell>João Silva</Table.Cell>
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
