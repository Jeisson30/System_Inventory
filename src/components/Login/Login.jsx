import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Link to="/Home">
                <button>redireccionar</button>
            </Link> 
        </div>
    )
}
export default Login;