import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../features/userSlice';
import { auth } from '../../firebaseConfig';
import { useDispatch } from 'react-redux';

function NavHeaderAdmin() {

    const dispatch = useDispatch()
    const logoutOfApp = (e: any): void => {
        e.preventDefault();
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div>
            <header className="text-white bg-blue-500 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">CITS</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/about" className="mr-5 hover:text-white">About Us</Link>
                        <Link to="/products" className="mr-5 hover:text-white">Our Products</Link>
                        <Link to="/bookdemo" className="mr-5 hover:text-white">Book a demo</Link>
                        <Link to="/contact" className="mr-5 hover:text-white">Contact Us</Link>
                        <Link to="/admin/manage" className="mr-5 hover:text-white">Manage Products</Link>
                        <button onClick={logoutOfApp} className="mr-5 hover:text-white">Logout</button>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default NavHeaderAdmin
