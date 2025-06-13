import { Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/default-layout'
import Campanhas from './pages/campanhas'
import Clientes from './pages/clientes'
import Dashboard from './pages/dashboard'
import Equipes from './pages/equipes'
import Home from './pages/home'
import Login from './pages/login'
import Tarefas from './pages/tarefas'

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/equipes" element={<Equipes />} />
      </Route>
    </Routes>
  )
}
