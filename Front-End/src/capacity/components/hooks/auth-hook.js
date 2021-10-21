import { useState, useCallback, useEffect } from 'react';
import {auth} from "../../../services/firebase"

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const signup = (email, password, name) => {
        return auth.createUserWithEmailAndPassword(email, password).then(function(result) {
            return result.user.updateProfile({
              displayName: name
            })
          }).catch(function(error) {
            console.log(error);
          }); 
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const login = useCallback((email, password) => {
        return auth.signInWithEmailAndPassword(email, password)

    }, []);
  
    const logout = useCallback(() => {
        return auth.signOut()
        }, []);
    
    useEffect(() => { //We only want to run this when we mount our component, so we use useEffect
        const unsubscribe = auth.onAuthStateChanged(user => { // Once done we want to unsubscribe
            setCurrentUser(user)
            
        })

        return unsubscribe //Will unsubscribe the auth component when we unmount this component
    }, [])

    return { currentUser, login, logout, signup, resetPassword, setCurrentUser };
}