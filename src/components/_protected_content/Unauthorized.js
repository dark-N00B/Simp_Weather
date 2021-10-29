import React from 'react';
import { NavLink } from 'react-router-dom';
import './Unauthorized.css';






function Unauthorized() {
    return (
        <div className="unauthorizedMain">
            <h1>Access Denied !!</h1>
            <NavLink className="link" to='/login'><b>Log In</b></NavLink>

        </div>
    )
}

export default Unauthorized
