import React from 'react'

const Buttonv2 = ({ children }) => {
  return (
    <button
      className='relative w-[15vw] h-12 overflow-hidden rounded-md border border-neutral-200 bg-white px-6 text-neutral-950 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:-translate-y-full before:bg-neutral-100 before:transition-transform hover:before:translate-y-0
    '
    >
      <span className='relative'>{children}</span>
    </button>
  )
}

export default Buttonv2
