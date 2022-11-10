import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import Header from '../shared/Header/Header';

const Login = () => {
    useSetTitle('Log In - Cake & Craft')

    const { login, loginWithGoogle } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                // const errorMessage = error.message;
            });
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            }).catch((error) => {
                // const errorMessage = error.message;
            });

    }


    return (
        <div>
            <Header></Header>
            <div className='services-container '>
                <div className='w-11/12 md:w-2/3 lg:w-1/3 mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>
                    <form onSubmit={handleLogin}>
                        <div >
                            <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Log In</h2>
                            <div className='grid grid-cols-1 gap-4'>
                                <input required name='email' type="email" placeholder="Your Email" className="input input-ghost w-full input-bordered " />
                                <input required name='password' type="password" placeholder="Your Password" className="input input-ghost w-full input-bordered " />
                            </div>
                            <input className='btn btn-active btn-primary mt-8 block mx-auto px-14' type="submit" value="login" />
                        </div>
                    </form>
                    <div className=' text-center mt-9 '>
                        <p className='font-bold mb-2'>Or Sign In with</p>
                        <button onClick={handleLoginWithGoogle} className="btn btn-circle btn-light">
                            <FaGoogle className='text-2xl text-blue-500' />
                        </button>
                    </div>
                    <p className='text-center'>New to Cake & Craft <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;