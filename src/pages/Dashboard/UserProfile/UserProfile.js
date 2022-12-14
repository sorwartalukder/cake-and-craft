import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../../hooks/useSetTitle';

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    useSetTitle('My Profile- Cake & Craft')
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className='min-h-screen py-14 flex justify-center items-center' >
            <div>
                <form>
                    <div className=''>
                        <div className="avatar online">
                            <div className="w-40 rounded-full">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL}
                                            className='bg-slate-900 p-2 rounded-full'
                                            alt='' />
                                        :
                                        <p className='bg-slate-900  rounded-full w-full h-full text-9xl p-4 text-yellow-600
                                       '><FaUser /></p>

                                }

                            </div>
                        </div>

                        <div>
                            <h5 className='text-xl font-bold'>{user?.displayName}</h5>
                            <h5 >{user?.displayName}</h5>
                            <p>User ID: {user?.uid}</p>
                            {user?.emailVerified ?
                                <p>Email verify: Verified</p>
                                :
                                <p>Email verify: Not verified</p>
                            }
                            <p>Email: {user?.email}</p>



                            {/* <p className='my-4 '>Check Your information</p>
                        <button className='btn btn-primary  py-2 px-4'>Edit</button> */}
                        </div>

                    </div>

                </form>
                <button
                    onClick={handleLogOut}
                    className="btn btn-primary bg-gradient-to-r from-slate-900 to-yellow-600 border-0 px-6 text-white mt-8 hover:shadow-md hover:shadow-yellow-600">Log out</button>
            </div>
        </div>
    );
};

export default UserProfile;