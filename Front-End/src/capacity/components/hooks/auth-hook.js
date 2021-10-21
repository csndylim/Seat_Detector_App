import { useState, useCallback, useEffect } from 'react';
import {auth} from "../../../services/firebase"

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signup = async (email, password, name) => {
        let success = true;
        try {
            await auth.createUserWithEmailAndPassword(email, password).then(function(result) {
                return result.user.updateProfile({
                  displayName: name
                })
              }).catch(function(error) {
                console.log(error);
            });
            setIsLoggedIn(true)
        } catch (err) {
            alert(err.message)
            success = false;
        }
        return success
    }

    const resetPassword = async (email) => {
        let success = true;
        try {
            await auth.sendPasswordResetEmail(email)
        } catch (err) {
            alert(err.message)
            success = false;
        }
        return success
    }

    const login = useCallback(async(email, password) => {
        let success = true;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setIsLoggedIn(true)
        } catch (err) {
            alert(err.message)
            success = false;
        }
        return success
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

    return { currentUser, login, logout, signup, resetPassword, setIsLoggedIn, isLoggedIn};
}