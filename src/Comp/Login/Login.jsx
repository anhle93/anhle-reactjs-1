import React, { useState } from 'react';
import firebase from 'firebase';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [errorMes, setErrorMesage] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePass = (e) => {
        setPass(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            setErrorMesage('');
        } catch (error) {
            setErrorMesage(error.message);
        }

    };

    return (
        <main>
            <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>Login</h1>
                                <ul className="breadcrumb-menu">
                                    <li><a href="index.html">home</a></li>
                                    <li><span>Login</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                                <h3 className="text-center mb-60">Login From Here</h3>
                                <p className="text-danger">{errorMes}</p>
                                <form onSubmit={onSubmit}>
                                    <label htmlFor="name">Email Address <span>**</span></label>
                                    <input onChange={onChangeEmail} id="name" type="text" placeholder="Enter Username or Email address..." />
                                    <label htmlFor="pass">Password <span>**</span></label>
                                    <input onChange={onChangePass} id="pass" type="password" placeholder="Enter password..." />
                                    <div className="login-action mb-20 fix">
                                        <span className="log-rem f-left">
                                            <input id="remember" type="checkbox" />
                                            <label htmlFor="remember">Remember me!</label>
                                        </span>
                                        <span className="forgot-login f-right">
                                            <a href="/">Lost your password?</a>
                                        </span>
                                    </div>
                                    <button className="btn theme-btn-2 w-100">Login Now</button>
                                    <div className="or-divide"><span>or</span></div>
                                    <button className="btn theme-btn w-100">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Login;