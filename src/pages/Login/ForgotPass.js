import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ForgotPass = () => {
    const [error, setError] = useState(null)
    const { resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleResetPassword = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        setError(null)
        resetPassword(email)
            .then(() => {
                toast.success('Check inbox and spam box')
                navigate('/login')
            }).catch((error) => {
                console.error(error)
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <div className='services-container min-h-screen py-24'>
            <div className='w-11/12 md:w-2/3 lg:w-1/3 mx-auto bg-gray-900 p-16 text-white rounded-xl'>
                <form onSubmit={handleResetPassword}>
                    <div >
                        <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Log In</h2>
                        <div className='grid grid-cols-1 gap-4'>
                            <input required name='email' type="email" placeholder="Your Email" className="input input-ghost w-full input-bordered " />
                            {error && <p className='text-red-600'>{error}</p>}
                        </div>
                        <input className='btn btn-active btn-primary mt-8 block mx-auto px-14 hover:shadow-md hover:shadow-white' type="submit" value="Reset Password" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;