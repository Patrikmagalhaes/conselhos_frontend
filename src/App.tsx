import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SelectCharacter from './screens/SelectCharacter'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {

  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<SelectCharacter />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
