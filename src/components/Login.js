import React, { useState } from 'react';
import './Login.css';
import Weather from './Weather';






function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);

    function onSubmitHandler(e) {
        e.preventDefault();
        if (userName === 'admin' && password === 'admin') {
            setIsLoggedin(true);
        }
    }

    return (
        <>
            {
                isLoggedin ? <Weather /> :
                    <div className="main">
                        <h1>Weather App</h1>
                        <form onSubmit={(e) => { onSubmitHandler(e) }}>
                            <div>
                                <input onChange={e => setUserName(e.target.value)} id="username" placeholder="Username" />
                            </div>
                            <div>
                                <input onChange={e => setPassword(e.target.value)} id="password" type="password" placeholder="Password" />
                            </div>
                            <div>
                                <button className="loginBtn" type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
            }
        </>
    )
}

export default Login
