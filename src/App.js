import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes/Routes';





function App() {

    const isLogged = useSelector(state => state.isLogged);
    return (
        <div>
            <Routes isLogged={isLogged}/>
        </div>
    )
}

export default App
