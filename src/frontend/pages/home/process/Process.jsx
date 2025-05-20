import React from 'react'
import ProcessFooter from './processFooter/ProcessFooter'

const Process = () => {
  return (
    <>
      <section id='how-ir-works' className='w-full py-12 md:py-24'>
        <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                Como funciona
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Verificacion con IA integrada, superar tus ---- nunca ha sido
                tan facil
              </p>
            </div>
          </div>

          <div className='mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3'>
            <div className='flex flex-col items-center space-y-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-black text-white'>
                1
              </div>
              <h3 className='text-xl font-bold'>Ingresa tus datos</h3>
              <p className='text-center text-gray-500'>
                Completa un formulario simple con tu expriencia, educacion y
                habilidades
              </p>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-black text-white'>
                2
              </div>
              <h3 className='text-xl font-bold'>Nuestro algoritmo trabaja</h3>
              <p className='text-center text-gray-500'>
                Optimizamos automaticamente tu contenido para los filtros de
                LinkedIn
              </p>
            </div>
            <div className='flex flex-col items-center space-y-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-black text-white'>
                3
              </div>
              <h3 className='text-xl font-bold'>Descarga yu CV</h3>
              <p className='text-center text-gray-500'>
                Obten tu CV (ATS) friendly en formato PDF listo para subir a
                LinkedIn
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProcessFooter />
    </>
  )
}

export default Process
