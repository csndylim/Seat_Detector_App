import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminPage from './account/pages/AdminPage';

import CanteenCapacityPage from './capacity/page/CanteenCapacityPage';
import Footer from './footer/Footer';
import Form from './login/Form';
import Navbar from './navigation/Navbar';

import './App.css';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './capacity/components/hooks/auth-hook';

const App = () => {
    const { login, logout, currentUser, signup, resetPassword, setCurrentUser} = useAuth();
    
    let routes;

    if (currentUser) {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <CanteenCapacityPage />
                </Route>
                <Route path="/admin" exact>
                    <AdminPage />
                </Route>
                {/* <Redirect to="/" /> */}
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <CanteenCapacityPage />
                </Route>
                <Route path="/login" exact>
                    <Form />
                </Route>
                {/* <Redirect to="/" /> */}
            </Switch>
        )
    }
    
    return (
        <AuthContext.Provider
            value={
                {
                    isLoggedIn: !!currentUser,
                    currentUser: currentUser,
                    login: login,
                    logout: logout,
                    signup: signup,
                    resetPassword: resetPassword,
                    setCurrentUser: setCurrentUser
                }
            }
        >
            <BrowserRouter>
                    <div className="page-container">
                        <div className="content-wrapper">
                            <Navbar />
                            <main className="main-wrapper">
                                { routes }
                            </main>
                        </div>
                        <Footer />
                    </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
