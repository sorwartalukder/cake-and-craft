import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Header from '../shared/Header/Header';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
            });

    }
    return (
        <div>
            <Header></Header>
            <div className='services-container '>
                <div className='w-11/12 md:w-2/3 lg:w-1/3 mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>
                    <form onSubmit={handleRegister}>
                        <div >
                            <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Register</h2>
                            <div className='grid grid-cols-1 gap-4'>
                                <input name='name' type="text" placeholder="Your Name" className="input input-ghost w-full input-bordered " />
                                <input name='photoURL' type="text" placeholder="Your Photo URL" className="input input-ghost w-full input-bordered " />
                                <input name='email' type="email" placeholder="Your Email" className="input input-ghost w-full input-bordered " />
                                <input name='password' type="password" placeholder="Your Password" className="input input-ghost w-full input-bordered " />
                            </div>
                            <input className='btn btn-active btn-primary mt-8 block mx-auto px-14' type="submit" value="register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;