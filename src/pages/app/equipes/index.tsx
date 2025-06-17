import { Helmet } from '@dr.pogodin/react-helmet'
import { SEquipesContent, SEquipesHeader } from './styles'

export default function Equipes() {
  return (
    <>
      <Helmet title="Equipes" />

      <SEquipesHeader>
        <h1>Equipes</h1>
      </SEquipesHeader>

      <SEquipesContent>
        <h2>Coming soon...</h2>
      </SEquipesContent>
    </>
  )
}
