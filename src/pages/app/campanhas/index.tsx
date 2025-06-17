import { Helmet } from '@dr.pogodin/react-helmet'
import { SCampanhasContent, SCampanhasHeader } from './styles'

export default function Campanhas() {
  return (
    <>
      <Helmet title="Campanhas" />

      <SCampanhasHeader>
        <h1>Campanhas</h1>
      </SCampanhasHeader>

      <SCampanhasContent>
        <h2>Coming soon...</h2>
      </SCampanhasContent>
    </>
  )
}
