import { useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvoider({}){
    const [currentUser,setCurrentUser]=useState(null);
    const [userLoggedIn,setUserLoggedIn]=useState(false);
    const [loading,setLoading]=useState(true);
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,initializeUser);
return unsubscribe;
},[])
async function initializeUser(user){
    if(user){
        setCurrentUser({...user});
        setUserLoggedIn(true);

    }
    else{
        setCurrentUser(null);
        setUserLoggedIn(false);
    }
    setLoading(false);
}
const value = {
    currentUser,userLoggedIn,loading
}
return(
    <AuthProvoider value={value}>
{!loading && children}
    </AuthProvoider>
)
}