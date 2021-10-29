import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';





function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
            </Switch>

        </div>
    )
}

export default Routes
