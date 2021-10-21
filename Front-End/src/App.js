import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminPage from './account/pages/AdminPage';

import CanteenCapacityPage from './capacity/page/CanteenCapacityPage';
import Footer from './footer/Footer';
import Form from './login/Form';
import Navbar from './navigation/Navbar';

import './App.css';

const App = () => {

    let routes;

    routes = (
        <Switch>
            <Route path="/" exact>
                <CanteenCapacityPage />
            </Route>
            <Route path="/login" exact>
                <Form />
            </Route>
            <Route path="/admin" exact>
                <AdminPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )

    return (
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
    );
}

export default App;
