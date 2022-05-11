import React, { useState, useMemo } from 'react';
import login_logo from '../data/assets/login_logo.svg';
import google from "../data/assets/google.svg"
import { Link, navigate } from "gatsby";
import { auth, provider } from "./Firebase/firebase"
import { signInWithPopup } from "firebase/auth";
import { LoginContainer } from '../components/Login/styles';

const Login = () => {

    const [loginNav, setLoginNav] = useState(false);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result)
            setLoginNav(result)
            localStorage.setItem('userData', JSON.stringify(result))

            if (result) {
                navigate('/Board/?' + (result.user.displayName))
            }
        }).catch((error) => console.log(error))
    }

    return (
        <LoginContainer>
            <div id="LoginContainer">
                <img src={login_logo} alt='login_logo' />
                <h2>Log In to Leave Tracker</h2>
                <h4>Connect with Google Account</h4>
                <button onClick={signInWithGoogle}><img src={google} alt="img" />Sign in with Google</button>
            </div>
        </LoginContainer>
    )
}
export default Login;