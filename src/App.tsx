import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SelectCharacter from './screens/SelectCharacter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SelectCharacter />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
