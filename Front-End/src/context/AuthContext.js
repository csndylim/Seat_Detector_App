import React from 'react'

export const AuthContext = React.createContext(
    {
        currentUser: null,
        isLoggedIn: false,
        login: () => {},
        logout: () => {},
        signup: () => {},
        resetPassword: () => {},
    }
)
