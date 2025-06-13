import { Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/default-layout'
import Campanhas from './pages/app/campanhas'
import Clientes from './pages/app/clientes'
import Dashboard from './pages/app/dashboard'
import Equipes from './pages/app/equipes'
import Home from './pages/app/home'
import Tarefas from './pages/app/tarefas'
import Login from './pages/auth/login'

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
