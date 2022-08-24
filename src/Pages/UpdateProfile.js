import React, { useEffect, useContext } from 'react'
import { useState } from 'react';
import { useAlert } from 'react-alert'
import { useAuth } from '../Utils/ContextStore';
import { useNavigate } from 'react-router-dom'
import { updatePassword } from 'firebase/auth';

const UpdateProfile = () => {

  const alert = useAlert()
  const navigate = useNavigate()

  const { currentUser } = useAuth()
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const { updateUserPassword } = useAuth()




  const handleSubmit = (e) => {


    e.preventDefault()

    if (Password !== ConfirmPassword) {
      return alert.error('Passwords must match')
    }

    console.log("Email password is", Password);
    updateUserPassword(Password).then(
      navigate('/'),
      alert.success('Password updated successfully')

    )


  }

  // useEffect(() => {
  //   currentUser.email && console.log(currentUser);
  // }, [currentUser])



  return (
    <div>
      <div className='bg-[#9921e8] h-screen'>

        <main className="bg-white  max-w-lg mx-auto p-8 md:p-12 py-10 rounded-lg shadow-2xl">
          <section  >
            <h3 className="font-bold text-2xl">Update Profile</h3>
            <p className="text-gray-600 pt-2">Update your Password</p>
            <h1 className='m'></h1>

          </section>

          <section className="mt-10">

            <form className="flex flex-col" onSubmit={handleSubmit}>
              {/* <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="Email">Email</label>
                <input
                  // defaultValue={currentUser.email}
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)} type="Email" id="Email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
              </div> */}

              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">New Password</label>
                <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
              </div>

              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="ConfirmPassword">Confirm New Password</label>
                <input

                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="text" id="ConfirmPassword" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
              </div>


              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign up</button>
            </form>
          </section>
        </main>

        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
          <p className="text-white">Have an Account? <a href="/Login" className="font-bold hover:underline">Sign In</a>.</p>
        </div>

        <footer className="max-w-lg mx-auto flex justify-center text-white">
          <a href="/#" className="hover:underline">Contact</a>
          <span className="mx-3">•</span>
          <a href="/#" className="hover:underline">Privacy</a>
        </footer>


      </div>
    </div>
  )
}

export default UpdateProfile