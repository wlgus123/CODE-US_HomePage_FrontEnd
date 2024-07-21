import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import MainPage from './pages/MainPage'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>...loading</div>}>
          <GlobalStyle />
            <Routes>
              <Route path='/' element={<MainPage />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
