import React from 'react'
import Navbar from '../Home/Navbar'
import { Outlet } from 'react-router'
import LoadingPage from '../../Pages/Utility/LoadingPage'

const AuthLayout = () => {
  return (
    <div>
       <LoadingPage>
         <nav>
            <Navbar></Navbar>
        </nav>
      <main className='min-h-screen mx-auto' style={{backgroundImage:"url('/login-bg.jpg')",
                backgroundSize:"cover",
                backgroundPosition:"center",
            }}>
              <Outlet></Outlet>
      </main>
       </LoadingPage>
    </div>
  )
}

export default AuthLayout
