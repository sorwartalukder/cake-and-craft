import React from 'react';
import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import errorPhoto from '../../assets/images/download.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const NotFound = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleBackHistory = () => {
        window.history.back()
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(e => console.error(e))
    }
    return (
        <div className=' min-h-screen flex justify-center items-center'>
            <div>
                <img src={errorPhoto} alt="" />
                <p className="text-red-500">Something went wrong</p>
                <p className="text-red-400">{error.statusText || error.message}</p>
                <h4 className="text-3xl">
                    Please <button onClick={handleLogOut} className="btn btn-primary hover:shadow-md hover:shadow-yellow-500 hover:bg-slate-900">Log Out</button> and log back in.
                </h4>
                <button
                    onClick={handleBackHistory}
                    className="btn btn-primary  my-4 hover:shadow-md hover:shadow-yellow-500 hover:bg-slate-900">Go To Back
                </button>

            </div>
        </div>
    );
};

export default NotFound;