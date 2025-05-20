import { CheckCircle, FileText, Zap } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <section id='features' className='w-full py-12 md:py-24 bg-gray-50'>
      <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              ¿Por que elegir CVOptimizer?
            </h2>
            <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Nuestro generador esta diseñado especificamente para maximizar tus
              oportunidades en LinkedIn
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3'>
          <div className='flex flex-col items-center space-y-4 rounded-lg border p-6'>
            <div className='rounded-full bg-primary/10 p-3'>
              <Zap className='h-6 w-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>Palabras clave optimizadas</h3>
            <p className='text-center text-gray-500'>
              Incluimos automaticamente las palabras clave para que los
              algoritmos de LinkedIn buscan en tu sector
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 rounded-lg border p-6'>
            <div className='rounded-full bg-primary/10 p-3'>
              <CheckCircle className='h-6 w-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>Formato ATS-Friendly</h3>
            <p className='text-center text-gray-500'>
              Estructura optimizada para los sistemas de seguimientos de
              candidatos (ATS) que utilizan los reclutadores
            </p>
          </div>
          <div className='flex flex-col items-center space-y-4 rounded-lg border p-6'>
            <div className='rounded-full bg-primary/10 p-3'>
              <FileText className='h-6 w-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>Plantillas profesionales</h3>
            <p className='text-center text-gray-500'>
              Diseños limpios y profesionaes que destacan tu experiencia y
              habilidades de manera efectiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
