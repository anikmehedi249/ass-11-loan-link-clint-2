import React from 'react'
import Navbar from '../Home/Navbar'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
        <nav>
            <Navbar></Navbar>
        </nav>
      <main className='min-h-screen mx-auto' style={{backgroundImage:"url('/login-bg.jpg')",
                backgroundSize:"cover",
                backgroundPosition:"center",
            }}>
              <Outlet></Outlet>
      </main>
    </div>
  )
}

export default AuthLayout
