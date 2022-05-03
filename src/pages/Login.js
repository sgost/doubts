import React from 'react';
import login_logo from '../data/assets/login_logo.svg';
import google from "../data/assets/google.svg"
import { Link } from "gatsby";
import { LoginContainer } from '../components/Login/styles';

const Login = () => {



    return (
        <LoginContainer>
            <div id="LoginContainer">
                <img src={login_logo} alt='login_logo' />
                <h2>Log In to Leave Tracker</h2>
                <h4>Connect with Google Account</h4>
                <Link to="./Board" style={{ width: `100%` }}><button><img src={google} alt="img" />Sign in with Google</button></Link>
            </div>
        </LoginContainer>
    )
}
export default Login;