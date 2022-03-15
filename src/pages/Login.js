import React from 'react';
import login_logo from '../data/assets/login_logo.svg';
import { LoginContainer } from '../components/Login/styles';

const Login = () => {
    return (
        <LoginContainer>
            <div id="LoginContainer">
                <img src={login_logo} alt='login_logo' />
                <h2>Log In to Leave Tracker</h2>
                <h4>Connect with Google Account</h4>
                <button>Sign in with Google</button>
            </div>
        </LoginContainer>
    )
}
export default Login;