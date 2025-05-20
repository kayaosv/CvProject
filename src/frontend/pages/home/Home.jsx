import React from 'react'
import Header from '../../../components/header/Header'
import Main from './main/Main'
import Features from './features/features'
import Process from './process/Process'
import Footer from '../../../components/footer/Footer'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Main />
      <Features />
      <Process />
      <Footer />
    </div>
  )
}

export default Home
