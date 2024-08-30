import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Login from './pages/Login/Login'
import SignIn from './pages/SignIn/SignIn'
import { SectionsControllProvider } from './contexts/SectionsControllContext'

function App() {
  return (
    <>
      <SectionsControllProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </SectionsControllProvider>
    </>
  )
}

export default App
