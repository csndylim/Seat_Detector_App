import React from 'react'

export const AuthContext = React.createContext(
    {
        currentUser: null,
        login: () => {},
        logout: () => {},
        signup: () => {},
        resetPassword: () => {},
        setCurrentUser: () => {}
    }
)
