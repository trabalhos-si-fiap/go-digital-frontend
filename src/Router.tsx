import { Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/default-layout'
import Campanhas from './pages/Campanhas'
import Clientes from './pages/Clientes'
import Dashboard from './pages/Dashboard'
import Equipes from './pages/Equipes'
import Home from './pages/Home'
import Relatorios from './pages/Relatorios'
import Tarefas from './pages/Tarefas'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/equipes" element={<Equipes />} />
      </Route>
    </Routes>
  )
}
