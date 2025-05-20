import React from 'react'
import Buttonv3 from '../../../../../components/ui/Buttonv3'

const ProcessFooter = () => {
  return (
    <section className='w-full py-12 md:py-24 bg-black text-primary-foreground'>
      <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-white'>
              Comienza a destacar en LinkedIn hoy mismo
            </h2>
            <p className='max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white'>
              Únete a los cientos de profesionales que ya han conseguido
              entrevistas gracias a nuestros CVs optimizados
            </p>
          </div>
          <div className='mx-auto w-full max-w-sm space-y-2'>
            <Buttonv3
              size='lg'
              variant='secondary'
              className='w-full text-white'
            >
              Crear mi CV
            </Buttonv3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessFooter
