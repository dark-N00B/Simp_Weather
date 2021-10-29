import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Weather from './components/Weather';
//import Routes from './routes/Routes';





function App() {

    const isLogged = useSelector(state => state.isLogged);
    return (
        <div>
            {/*<Weather />
            <Login />
            <Routes />*/}
            {isLogged ? <Weather/> : <Login/>}
        </div>
    )
}

export default App
