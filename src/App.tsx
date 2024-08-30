import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Login from './pages/Login/Login'
import SignIn from './pages/SignIn/SignIn'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
