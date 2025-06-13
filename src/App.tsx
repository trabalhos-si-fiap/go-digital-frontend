import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <Helmet titleTemplate="%s | Larós MKTDGT" />
        <RouterProvider router={router} />

        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}
