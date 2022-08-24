import React from 'react'
 import { useAuth } from './ContextStore'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

const PrivateLogIn = () => {
  const alert = useAlert()
  const navigate = useNavigate()
  const { currentUser } = useAuth()


  const navigateback = () => {
    alert.error("You are already logged in ")
    // navigate('/Login', { replace: true })
  }


  return (
    <>
      {currentUser && currentUser.email ? navigateback() :  <Outlet />}
    </>
  )
}

export default PrivateLogIn