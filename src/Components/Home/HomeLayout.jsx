import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const HomeLayout = () => {
  return (
    <div>
      <nav className='mx-auto bg-[#d8e4ee]'>
        <Navbar></Navbar>
      </nav>
     <main className='min-h-screen mx-auto mb-30'>
        <Outlet />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default HomeLayout
