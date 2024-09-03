import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import "./Login.css";

import ErrorIcon from '../../assets/icons/Error-Icon';
import Arrow from "./../../assets/icons/arrow-right.svg";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const STANDARD_PASSWORD = 'abcdef';

    const from = location.state?.from?.pathname || '/';

    const handleLogin = () => {
        if (password === STANDARD_PASSWORD) {
            Cookies.set('auth', 'authenticated', { expires: 7 });
            navigate(from, { replace: true });
        } else {
            setError('Wrong password');
        }
    };

    return (
        <div id="login-background">
            <div id="login-wrapper">
                <h1>Login</h1>
                <p className="login-infotext additional-information-wrapper">The access to the requested ressource is restricted and requires authentication by password.</p>
                <div id="password-wrapper">
                    <label className="input-wrapper">
                        <span>Password</span>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value), setError('')}}
                        />
                    </label>
                    <div id="error-text-wrapper">
                        {error && (
                            <>
                                <ErrorIcon strokeColor='red' height={10} width={10} strokeWidth={2}></ErrorIcon>
                                <p className="error-text">{error}</p>
                            </>
                        )}
                    </div>
                </div>
                <div id="button-wrapper">
                    <button id="back-button" onClick={()=>navigate(-1)}>
                        Back
                    </button>
                    <button id="login-button" onClick={handleLogin}>
                        <span>Login</span>
                        <img src={Arrow}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
