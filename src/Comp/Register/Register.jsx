import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePass = (e) => {
        setPass(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     await firebase.auth().createUserWithEmailAndPassword(email, password);
        // } catch (error) {
        //     console.log(error);
        // }

        props.registerAction(email, password);
        console.log(props);

    };
    
    return (
        <main>
            <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb-text text-center">
                                <h1>Register</h1>
                                <ul className="breadcrumb-menu">
                                    <li><a href="index.html">home</a></li>
                                    <li><span>Register</span></li>
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
                                <h3 className="text-center mb-60">Signup From Here</h3>
                                <p className="text-danger">{props.error}</p>
                                <form onSubmit={onSubmit}>
                                    {/* <label htmlFor="name">Username <span>**</span></label>
                                    <input id="name" type="text" placeholder="Enter Username or Email address..." /> */}
                                    <label htmlFor="email-id">Email Address <span>**</span></label>
                                    <input onChange={onChangeEmail} id="email-id" type="text" placeholder="Enter Username or Email address..." />
                                    <label htmlFor="pass">Password <span>**</span></label>
                                    <input onChange={onChangePass} id="pass" type="password" placeholder="Enter password..." />
                                    <div className="mt-10"></div>
                                    {/* <button className="btn theme-btn-2 w-100">Register Now</button> */}
                                    {
                                        props.load === false
                                            ? <button className="btn theme-btn-2 w-100">Register Now</button>
                                            : <button className="btn theme-btn-2 w-100">Registering</button>
                                    }
                                </form>
                                <div className="or-divide"><span>or</span></div>
                                <Link className="btn theme-btn w-100" to='/login'>Login Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Register;