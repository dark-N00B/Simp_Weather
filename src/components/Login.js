import React from 'react';
import './Login.css';






function Login() {
    return (
        <div className="main">
            <h1>Weather App</h1>
            <form>
                <div>
                    <input id="username" placeholder="Username" />
                </div>
                <div>
                    <input id="password" type="password" placeholder="Password" />
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login
