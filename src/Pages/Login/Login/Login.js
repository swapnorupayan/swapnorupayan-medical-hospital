import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoginForm from '../LoginForm/LoginForm';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub, setIsLoading } = useAuth();
    const location = useLocation();
    const histry = useHistory()
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                histry.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));

    }
    const handleGitHubLogin = () => {
        signInUsingGithub()
            .then(result => {
                histry.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));

    }
    return (
        <div style={{ marginTop: '100px', textAlign: 'center', padding: '0', marggin: '0' }} className='row'>
            <div className="col-12">
                <h2>Please Login</h2>
                <LoginForm></LoginForm>
                <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
                <button onClick={handleGitHubLogin} className="btn btn-warning mx-4">GitHub Sign In</button><br /><br />
                <p>Are you New User? Please <Link to='/register' >Register</Link></p>
            </div>
        </div>
    );
};

export default Login;