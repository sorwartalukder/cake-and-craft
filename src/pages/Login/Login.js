import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import Header from '../shared/Header/Header';

const Login = () => {
    useSetTitle('Log In - Cake & Craft')

    const { login, loginWithGoogle } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        setLoginError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                // const user = result.user;
                toast.success('Log In Successfully.')
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoginError(errorMessage)
            });
    }

    const handleLoginWithGoogle = () => {
        setLoginError('')
        loginWithGoogle(googleProvider)
            .then((result) => {
                // const user = result.user;
                toast.success('Log In Successfully.')
                navigate(from, { replace: true })
            }).catch((error) => {
                const errorMessage = error.message;
                setLoginError(errorMessage)
            });

    }


    return (
        <div>
            <Header></Header>
            <div className='services-container min-h-screen'>
                <div className='w-11/12 md:w-2/3 lg:w-1/3 mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>
                    <form onSubmit={handleLogin}>
                        <div >
                            <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Log In</h2>
                            <div className='grid grid-cols-1 gap-4'>
                                <input required name='email' type="email" placeholder="Your Email" className="input input-ghost w-full input-bordered " />
                                <input required name='password' type="password" placeholder="Your Password" className="input input-ghost w-full input-bordered " />
                                {loginError && <p className='text-red-600'>{loginError}</p>}
                                <Link className='text-primary' to='/reset/password'>Forgot password?</Link>
                            </div>
                            <input className='btn btn-active btn-primary mt-8 block mx-auto px-14 hover:shadow-md hover:shadow-white' type="submit" value="login" />
                        </div>
                    </form>
                    <div className=' text-center mt-9 '>
                        <p className='font-bold mb-2'>Or Sign In with</p>
                        <button onClick={handleLoginWithGoogle} className="btn btn-circle btn-light hover:shadow-sm hover:shadow-white">
                            <FaGoogle className='text-2xl text-blue-500' />
                        </button>
                    </div>
                    <p className='text-center'>New to Cake & Craft <Link className='text-orange-600 font-bold hover:text-primary' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;