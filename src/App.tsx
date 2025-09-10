import { Helmet, HelmetProvider } from '@dr.pogodin/react-helmet'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { queryClient } from './lib/react-query'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { router } from './router'

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={defaultTheme}>
        <Helmet titleTemplate="%s | Larós MKTDGT" />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>

        <GlobalStyle />
      </ThemeProvider>
    </HelmetProvider>
  )
}
