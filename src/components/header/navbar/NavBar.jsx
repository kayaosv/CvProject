import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='hidden md:flex gap-8'>
      <NavLink className='text-m font-medium hover:underline underline-offset-4'>
        Caracteristicas
      </NavLink>
      <NavLink className='text-m font-medium hover:underline underline-offset-4'>
        Como funciona
      </NavLink>
      <NavLink className='text-m font-medium hover:underline underline-offset-4'>
        FAQ
      </NavLink>
    </nav>
  )
}

export default NavBar
