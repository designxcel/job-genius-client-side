import { createContext, useState } from "react";
import app from "../../firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createNewUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // const googleSignIn = (Provider)

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false)
            

            //token related 
            // if(currentUser){
                
            //     axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
            //     .then(res =>{
            //         console.log('token Response', res.data)
            //     })
            // }
            // else{
            //     axios.post('http://localhost:5000/logout', loggedUser, {
            //         withCredentials: true
            //     })
            //     .then(res => {
            //         console.log(res.data)
            //     })
            // }
        })
        return () => {
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createNewUser,
        createSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value ={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;