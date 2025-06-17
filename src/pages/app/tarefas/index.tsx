import { Helmet } from '@dr.pogodin/react-helmet'
import { STarefasContent, STarefasHeader } from './styles'

export default function Tarefas() {
  return (
    <>
      <Helmet title="Tarefas" />

      <STarefasHeader>
        <h1>Tarefas</h1>
      </STarefasHeader>

      <STarefasContent>
        <h2>Coming soon...</h2>
      </STarefasContent>
    </>
  )
}
