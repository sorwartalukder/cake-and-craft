import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Header = () => {
    const navLink = <>
        <li><Link to='/services'>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Review</Link></li>

    </>

    return (
        <div>
            <div >
                <div className=" contract-items bg-slate-900 text-green-400">
                    <ul className="flex justify-between">
                        <li className='flex items-center text-xl'><FaPhoneAlt className='contract-item mt-1 text-2xl' />+880 1753-931201
                        </li>
                        <li>
                            <a className='flex items-center text-xl' href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer"><HiMail className='contract-item mt-1 text-2xl' />cakeandcraftbd@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Cake & Craft</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;