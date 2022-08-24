

import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../FirebaseConnection'
import { useNavigate } from 'react-router-dom';


import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
    sendPasswordResetEmail
} from "firebase/auth";
import { useAlert } from 'react-alert';


const AuthContext = createContext()

//get this context values
export const useAuth = () => {
    return useContext(AuthContext)
}






export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({})
    const [Loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const alert = useAlert()


    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                console.log(userCredential);
            })
    }

    async function login(email, password) {

        await signInWithEmailAndPassword(auth, email, password).then(() => {

            navigate('/', { replace: true })

        }
        )
            .catch(error => {
                // console.log(error.message)
                alert.error("Wrong Password")
            })



        return
        // .catch(
        //     alert.error("Invalid Email or Password")
        // )

    }

    function logout() {
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    async function updateUserPassword(password) {
        return updatePassword(currentUser, password)

    }


    useEffect(() => {

        const checkuser = async () => {

            const unsubscribe = await onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
                setLoading(false)
            })
            setLoading(false)
            return unsubscribe
        }
        checkuser()

    }, [])




    const value = {
        currentUser,
        signup,
        Loading,
        setLoading,
        login,
        logout,
        resetPassword,
        updateEmail,
        updateUserPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )


}