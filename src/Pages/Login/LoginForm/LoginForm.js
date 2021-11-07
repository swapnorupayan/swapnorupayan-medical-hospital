import React from 'react';
import './LoginForm.css'

const Register = () => {
    return (
        <div>
            <div className="user">
                <header className="user__header">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />

                </header>

                <form className="form">
                    <div className="form__group">
                        <input type="email" placeholder="Email" className="form__input" />
                    </div>

                    <div className="form__group">
                        <input type="password" placeholder="Password" className="form__input" />
                    </div>

                    <button className="btn mx-2" type="button">Login</button>
                    <button className="btn" type="button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;