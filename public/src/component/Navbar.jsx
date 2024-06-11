import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import {logo, lock, hamburgerMenu, close} from '../assets';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);


    const handleClick = () => setToggle(!toggle);
    const location = useLocation();
    const token = localStorage.getItem('token');


    useEffect(() => {
        if (token) {
            setIsLoggedIn(true);
        }
        if (localStorage.getItem("isAdmin")) {
            setIsAdmin(true);
        }
    }, [location]);

    return (
        <div className="w-full h-[80px] bg-white border-b">
            <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center">
                <Link to="/">
                    <img src={logo} className="h-[85px]" alt="logo"/>
                </Link>

                <div className="hidden md:flex items-center">
                    <ul className="flex gap-4">
                        <Link to="/">Home</Link>
                        <li>About</li>
                        <li>Support</li>
                        <Link to="/users">Users</Link>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    {isAdmin && (
                        <Link to={"/admin"}>
                            <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
                                ADMIN TOOLS
                            </button>
                        </Link>
                    )}
                    {isLoggedIn ? (
                        <>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('isAdmin');
                                    setIsLoggedIn(false);
                                }}
                                className="flex justify-between items-center bg-transparent px-6 gap-2"
                            >
                                <img src={lock} className="h-[25px]" alt="lock"/>
                                Logout
                            </button>
                            <Link to={`/profile/${token}`}>
                                <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">Profile
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="flex justify-between items-center bg-transparent px-6 gap-2">
                                <img src={lock} className="h-[25px]" alt="lock"/>
                                Login
                            </Link>
                            <Link to="/register">
                                <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
                                    Sign Up For Free
                                </button>
                            </Link>
                        </>
                    )}
                </div>

                <div className="md:hidden" onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} alt="menu"/>
                </div>
            </div>
            <div className={toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"}>
                <ul>
                    <Link to="/">
                        <li className="p-4 hover:bg-grey-100">Home</li>
                    </Link>
                    <li className="p-4 hover:bg-grey-100">About</li>
                    <li className="p-4 hover:bg-grey-100">Support</li>
                    <Link to="/users">
                        <li className="p-4 hover:bg-grey-100">Users</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
