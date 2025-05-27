import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './frontend/pages/home/Home'
import Login from './frontend/pages/users/login/login'
import RegisterPage from './frontend/pages/users/register/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
  )
}

export default App
