import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global/styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import theme from './global/styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
