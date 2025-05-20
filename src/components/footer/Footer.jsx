import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
      <p className='text-xs text-gray-500'>
        © {new Date().getFullYear()} Velissa Alba SL. Todos los derechos
        reservados.
      </p>
      <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
        <NavLink
          href='#'
          className='text-xs hover:underline underline-offset-4'
        >
          Términos de servicio
        </NavLink>
        <NavLink
          href='#'
          className='text-xs hover:underline underline-offset-4'
        >
          Política de privacidad
        </NavLink>
      </nav>
    </footer>
  )
}

export default Footer
