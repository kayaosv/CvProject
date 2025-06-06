import { FileText } from 'lucide-react'
import React from 'react'
import NavBar from './navbar/NavBar'
import Button from '../ui/Button'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='px-4 lg:px-6 h-16 flex items-center border-b'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-2 font-bold text-xl'>
          <FileText className='h-6 w-6' />
          <span>CVOptimizer</span>
        </div>
        <NavBar />
        <NavLink to='/login'>
        <Button>Iniciar sesion</Button>
        </NavLink>
        
      </div>
    </header>
  )
}

export default Header
