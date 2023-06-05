import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

 export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const signUp = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleAuthProvider = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
       return signOut(auth)
    }

    const updateProfilePicture = (name,photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            // console.log(currentUser)

            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(data=>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        });
        return () =>{
            return unsubscribe()
        }
    },[])

    const authInfo={
             user,
             loading,
             signUp,
             googleAuthProvider,
             signIn,
             logOut,
             updateProfilePicture
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;