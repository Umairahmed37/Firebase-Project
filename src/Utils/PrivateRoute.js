import React from 'react'
import { useAuth } from './ContextStore'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

const PrivateRoute = () => {

  const alert = useAlert()
  const navigate = useNavigate()
  const { currentUser } = useAuth()


  const navigateback = () => {
    alert.error("Please Login to continue")
    navigate('/Login', { replace: true })
  }

  
  

  return (
    <>
      {currentUser && currentUser.email ? <Outlet /> : navigateback()}
    </>
  )
}

export default PrivateRoute