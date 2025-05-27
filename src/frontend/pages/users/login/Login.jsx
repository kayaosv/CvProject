import React from 'react'
import Header from '../../../../components/header/Header'
import Button from '../../../../components/ui/Button'
import { EyeOff, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../../../../components/footer/Footer'

const Login = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
    <Header />
    <div className='flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
            <div className='text-center'>
            <h2 className='text-3xl font-bold text-gray-900'>Iniciar sesion</h2>
            <p className='mt-2 text-gray-600'>Accede a tu cuenta para crear CVs optimizados</p>
            </div>

            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
                <div className='mb-6'>
                    <h3 className='text-2xl font-semibold text-center text-gray-900'>Bienvenido de vuelta</h3>
                </div>

                <form className='space-y-4'>
                    <div className='space-y-2'>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Correo electronico</label>
                        <input type="email"
                        id='email'
                        placeholder='tu@email.com'
                        required
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 foucs:ring-black focus:border-black'
                         />
                    </div>

                    <div className='space-y-2'>
                        <label htmlFor="password"
                        className='block text-sm font-medium text-gray-700 '
                        >
                            Contraseña
                        </label>
                        <div className='relative'>
                            <input 
                            id='password'
                            type="password"
                            placeholder='........'
                            className='w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-black foxus:border-black'
                            required 
                            />
                            <button type='button'
                            className='absolute inset-y-0 right-0 pr-3 flex items-center'
                            >
                                <EyeOff  className='h-4 w-4'/>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input
                             id='remember-me'
                             name='remember-me'
                            type="checkbox" 
                            className='h-4 w-4 text-black focus:ring-black border-gray-300 rounded'
                            />
                            <label htmlFor="remember-me" className='ml-2 block text-sm text-gray-700'>Recordarme</label>
                        </div>

                     <Link className='text-sm text-black hover:underline'>
                     ¿Olvidaste tu contraseña?
                     </Link>
                    </div>
                    
                    <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors">Iniciar sesion</button>
                </form>
                <div className='mt-06 text-center'>
                        <p className='text-sm text-gray-600'>¿No tienes una cuenta? {' '}
                    <Link className='text-blaxk hover:underline font-medium'>Registrate gratis</Link>
                    </p>
                </div>
            </div>
            <div className='text-center'>
                <p className='text-xs text-gray-500'>
                Al iniciar sesión, aceptas nuestros{" "}
              <Link href="/terminos" className="underline">
                Términos de Servicio
              </Link>{" "}
              y{" "}
              <Link href="/privacidad" className="underline">
                Política de Privacidad
              </Link>
                </p>
            </div>
        </div>
    </div>

    <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué usar CVOptimizer?</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">CVs Ilimitados</h4>
              <p className="text-sm text-gray-600">
                Crea y optimiza tantos CVs como necesites para diferentes posiciones
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Análisis ATS</h4>
              <p className="text-sm text-gray-600">
                Verifica en tiempo real qué tan optimizado está tu CV para sistemas ATS
              </p>
            </div>

            <div className="text-center space-y-3"> 
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Plantillas Premium</h4>
              <p className="text-sm text-gray-600">Acceso a diseños profesionales optimizados para tu industria</p>
            </div>
          </div>
        </div>
      </section>
<Footer/>
    </div>
  )
}

export default Login