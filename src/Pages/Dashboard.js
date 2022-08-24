import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Utils/ContextStore';


const Dashboard = () => {

  const { currentUser } = useAuth()
  const { Loading } = useAuth()
  const { logout } = useAuth()
  const navigate = useNavigate()
 

  const signmeout = async () => {
    
    await logout()
    navigate("/Login",{replace:true})

  }

  return (
    <div>
      <h1>Current User Email is : {Loading ? "Loading" : currentUser?.email }  </h1>
      <Link to="/Update-Profile">Update Profile </Link>

      {currentUser?.email && <button onClick={signmeout}> CLick to Sign Out</button>}

    </div>
  )
}

export default Dashboard