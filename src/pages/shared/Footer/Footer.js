import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <h2 className='text-3xl font-bold'>Cake & Craft</h2>
                <p>Dhaka, Bangladesh</p>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <Link><FaFacebookSquare className='text-3xl text-blue-700' /></Link>
                <Link><FaYoutube className='text-3xl text-red-700' /></Link>
                <Link><FaInstagramSquare className='text-3xl text-pink-600' /></Link>


            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link>Terms of use</Link>
                <Link>Privacy policy</Link>
                <Link>Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;