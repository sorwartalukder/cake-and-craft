import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import Header from '../shared/Header/Header';

const Register = () => {
    useSetTitle('Register - Cake & Craft')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleRegister = data => {
        setRegisterError('')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                toast.success('Account Created Successfully.')
                const formData = new FormData();
                const image = data.image[0];
                formData.append('image', image);
                const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
                console.log(url)
                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then((res) => res.json())
                    .then(imgData => {
                        const profile = {
                            displayName: data.name,
                            photoURL: imgData.data.url
                        }
                        // update user
                        updateUser(profile)
                            .then(() => {
                            }).catch((error) => {
                                console.error(error)
                            });

                    })
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setRegisterError(errorMessage)
            });

    }
    return (
        <div>
            <Header></Header>
            <div className='services-container min-h-screen'>
                <div className='w-11/12 md:w-2/3 lg:w-1/3 mx-auto my-24 bg-gray-900 p-16 text-white rounded-xl'>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div >
                            <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Register</h2>
                            <div className='grid grid-cols-1 gap-4'>
                                {/* name */}
                                <p>Your Name</p>
                                <input type="text" placeholder="Your Name"
                                    className="input input-ghost w-full input-bordered "
                                    {...register("name", {
                                        required: 'Name is required'
                                    })}
                                />
                                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                                {/* email */}
                                <p>Your Email</p>
                                <input type="email" placeholder="Your Email" className="input input-ghost w-full input-bordered "
                                    {...register("email", {
                                        required: 'Email is required'
                                    })}
                                />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                {/* password */}
                                <p>Password</p>
                                <input type="password" placeholder="Your Password" className="input input-ghost w-full input-bordered "
                                    {...register("password", {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password must be 6 characters long' },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()\-__+.])/, message: 'Password must be strong. one capital letter, one number and one special key word (!@#$%^&*()-__+.)' }
                                    })}
                                />
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                {/* image */}
                                <p>Your Photo</p>
                                <input
                                    type="file"
                                    className="input input-ghost w-full input-bordered "
                                    {...register("image", {
                                        required: 'Image is required'
                                    })}
                                />
                                {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                                {registerError && <p className='text-red-600'>{registerError}</p>}
                            </div>
                            <input className='btn btn-active btn-primary mt-8 block mx-auto px-14 hover:shadow-md hover:shadow-white' type="submit" value="register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;