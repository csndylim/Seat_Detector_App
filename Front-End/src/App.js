import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import CanteenCapacityPage from './capacity/page/CanteenCapacityPage';
import Login from './login/page/Login';

const App = () => {

    let routes;

    routes = (
        <Switch>
            <Route path="/" exact>
                <CanteenCapacityPage />
            </Route>
            <Route path="/admin" exact>
                <Login />
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
