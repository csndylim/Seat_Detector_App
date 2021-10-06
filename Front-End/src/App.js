import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminPage from './account/pages/AdminPage';

import CanteenCapacityPage from './capacity/page/CanteenCapacityPage';
import Login from './login/page/Login';

const App = () => {

    let routes;

    routes = (
        <Switch>
            <Route path="/" exact>
                <CanteenCapacityPage />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/admin" exact>
                <AdminPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )

    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
  );
}

export default App;
