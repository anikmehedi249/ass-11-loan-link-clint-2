import React from 'react'
import useAuth from '../useHooks/useAuth'
import { Navigate, useLocation } from 'react-router'
import LoadingAm from '../Pages/Utility/LoadingAm'

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth()

  const location = useLocation()

  if (loading) {
    return <div className='min-h-screen mx-auto'>
        <LoadingAm></LoadingAm>
    </div>
  }

  if (!user) {
    return <Navigate to={"/auth/login"} state={{ from: location }} replace></Navigate>
  }

  return children
}

export default PrivateRoutes
