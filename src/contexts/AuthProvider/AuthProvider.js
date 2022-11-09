import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import app from "../../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Sorwar' })

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }

        });
        return () => unsubscribe()
    }, [])

    const authInfo = { user, createUser, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;