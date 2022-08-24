import React, { useEffect } from 'react'
import { useState } from 'react';
import { auth } from '../FirebaseConnection';
import { useAuth } from '../Utils/ContextStore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';



const Login = () => {


    // const auth = getAuth();
    const navigate = useNavigate()
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState('')
    const alert = useAlert()
    const { login, Loading, currentUser } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(Email, Password)
    }






    return (
        <div>
            <div className='bg-[#9921e8] h-screen'>

                <main className="bg-white  max-w-lg mx-auto p-8 md:p-12 py-10 rounded-lg shadow-2xl">
                    <section  >
                        <h3 className="font-bold text-2xl">Welcome to Startup</h3>
                        <p className="text-gray-600 pt-2">Sign in to your account.</p>
                        <h1 className='m'></h1>

                    </section>

                    <section className="mt-10">

                        <form className="flex flex-col" onSubmit={handleSubmit}>

                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
                                <input value={Email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
                                <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
                            </div>
                            <div className="flex justify-end">
                                <a href="/Forgot-Password" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your password?</a>
                            </div>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
                        </form>
                    </section>
                </main>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-white">Don't have an account? <a href="/Signup" className="font-bold hover:underline">Sign up</a>.</p>
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

export default Login