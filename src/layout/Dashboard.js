import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    let activeClass = {
        color: "blue",
        background: "none",
    };
    return (
        <div>
            <div className="navbar bg-yellow-600 text-white">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-slate-900 text-white text-lg">
                        <li className='mx-auto'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='mx-auto'>
                            <NavLink style={({ isActive }) => (isActive ? activeClass : undefined)} to="/dashboard/">Profile</NavLink>
                        </li>
                        <li className='mx-auto'>
                            <NavLink style={({ isActive }) => (isActive ? activeClass : undefined)} to='/dashboard/my-orders'>My Orders</NavLink>
                        </li>
                        <li className='mx-auto'>
                            <NavLink style={({ isActive }) => (isActive ? activeClass : undefined)} to='/dashboard/userReviews'>My Reviews</NavLink>
                        </li>
                        <li className='mx-auto'>
                            <NavLink style={({ isActive }) => (isActive ? activeClass : undefined)} to='/dashboard/addService'>Add Service</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;