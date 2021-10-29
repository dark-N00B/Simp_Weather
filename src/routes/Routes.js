import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import Weather from '../components/Weather';




function Routes({ isLogged }) {
    
    return (
        <div>
            <Switch>
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/weather'} component={Weather}/>
                    {/*{isLogged ? <></> : <Redirect to='/'/>}
                </Route>*/}
                <Route exact path={'/'}>
                    {isLogged ? <Redirect to='/weather'/> : <Redirect to='/login'/>}
                </Route>
                
            </Switch>
        </div>
    )
}

export default Routes;
