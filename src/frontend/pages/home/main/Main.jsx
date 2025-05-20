import { ArrowRight } from 'lucide-react'
import React from 'react'
import Button from '../../../../components/ui/Button'
import Buttonv2 from '../../../../components/ui/Buttonv2'

const Main = () => {
  return (
    <main className='flex-1'>
      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container mx-auto px-4 md:px-6 max-w-7xl'>
          <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Cvs optimizados para superar los filtros de Linkedin
              </h1>
              <p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                ¿Sabias que antes de que tu curriculum sea visto por un
                recruiter este sera revisado por un bot? Con el diseño de
                CVOptimizer pasaras los primeros filtros y destacaras entre los
                demas candidatos.
              </p>
              <div className='flex flex-col gap-6 min-[400px]:flex-row'>
                <Button>Crear mi CV ahora</Button>
                <Buttonv2>Ver ejemplos</Buttonv2>
              </div>
            </div>
            <div className='mx-auto w-full max-w-[500px] aspect-video bg-gray-100 rounded-xl flex items-center justify-center'>
              <h1>IMAGEN AQUIIII</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
