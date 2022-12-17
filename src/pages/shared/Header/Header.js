import React, { useContext } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    let activeClass = {
        color: "blue",
        background: "none",
    };
    const navLink = <>
        <li>
            <NavLink style={({ isActive }) => (isActive ? activeClass : undefined)} to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink style={({ isActive }) => (isActive ? activeClass : undefined)} to='/services'>Services</NavLink>
        </li>
        <li>
            <NavLink style={({ isActive }) => (isActive ? activeClass : undefined)} to='/blogs'> Blogs</NavLink>
        </li>
        {user && <li>
            <NavLink style={({ isActive }) => (isActive ? activeClass : undefined)} to='/dashboard'>Dashboard</NavLink>
        </li>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.error(error)
            });
    }

    return (
        <div>
            <div >
                <div className=" contract-items bg-slate-900 text-yellow-500">
                    <ul className="flex justify-between">
                        <li className='flex items-center text-xl'><FaPhoneAlt className='contract-item mt-1 text-2xl' />+880 1753-931201
                        </li>
                        <li>
                            <a className='flex items-center text-xl' href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer"><HiMail className='contract-item mt-1 text-2xl' />cakeandcraftbd@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar bg-yellow-600 text-white">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black">
                            {navLink}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Cake & Craft</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <button onClick={handleLogOut} className="btn btn-primary hover:shadow-md hover:shadow-white hover:bg-slate-900">Log Out</button>
                                <Link to='/dashboard'>
                                    <div className="avatar online mx-4">
                                        <div className="w-16 rounded-full ring ring-primary hover:ring-slate-900 hover:shadow-md hover:shadow-slate-900">

                                            {
                                                user?.photoURL ?
                                                    <img src={user?.photoURL} alt='' />
                                                    :
                                                    <p className='text-6xl'><FaUser /></p>

                                            }
                                        </div>
                                    </div>
                                </Link>
                            </>
                            :
                            <Link to='/login' className="btn btn-primary hover:shadow-md hover:shadow-white hover:bg-slate-900">Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;