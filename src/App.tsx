import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />

      <GlobalStyle />
    </ThemeProvider>
  )
}
