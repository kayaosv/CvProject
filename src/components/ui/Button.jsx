import React from 'react'

const Button = ({ children }) => {
  return (
    <button className='relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2'>
      <span className='relative'>{children}</span>
    </button>
  )
}

export default Button
