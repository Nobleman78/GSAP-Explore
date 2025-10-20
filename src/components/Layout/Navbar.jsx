import React, { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    // State for managing the open/closed state of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function to open and close the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Determine if the current route is the '/solution' route
    const isSolutionRoute = location.pathname.includes('/solution');

    // 1. Base Colors: Define main colors based on the route
    const mainBgClass = isSolutionRoute ? 'bg-gray-50' : 'bg-green-900';
    const linkTextColor = isSolutionRoute ? 'text-green-900 hover:text-green-700' : 'text-green-100 hover:text-white';
    const ctaBorderColor = isSolutionRoute ? 'border-green-900 text-green-900 hover:bg-green-100' : 'border-white text-green-100 hover:bg-green-800';

    // Mobile sidebar background and link colors
    const sidebarBgClass = isSolutionRoute ? 'bg-gray-100' : 'bg-green-800';
    const sidebarLinkClass = isSolutionRoute ? 'text-green-900 hover:bg-gray-200' : 'text-green-100 hover:bg-green-700';

    // Helper function to close the menu on link click (only for mobile)
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 shadow-md transition-colors duration-300 ${mainBgClass}`}>
            {/* --------------------------- DESKTOP NAV (lg and up) --------------------------- */}
            <div className="hidden lg:block">
                <nav className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
                    {/* Left Side Navigation Links */}
                    <section className="flex items-center gap-10">
                        <Link to='/' className={`playwrite text-4xl font-extrabold ${linkTextColor}`}>Tellet</Link>
                        <NavLink to='/solution' className={`poppins text-lg transition-colors ${linkTextColor}`}>Solution</NavLink>
                        <NavLink to='/resource' className={`poppins text-lg transition-colors ${linkTextColor}`}>Resources</NavLink>
                    </section>

                    {/* Right Side Call-to-Action Buttons */}
                    <section className="flex items-center gap-5">
                        <NavLink to='/quote' className={`border-2 px-5 py-2 rounded-full font-semibold poppins transition-all ${ctaBorderColor}`}>Get a quote</NavLink>
                        <NavLink to='/demo' className="bg-rose-400 border-2 border-rose-400 text-white px-5 py-2 rounded-full font-semibold poppins hover:bg-rose-500 transition-colors">Book a demo</NavLink>
                        <NavLink to='/login' className={`border-2 px-5 py-2 rounded-full font-semibold poppins transition-all ${ctaBorderColor}`}>Login</NavLink>
                    </section>
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden">
                {/* Top Header Bar */}
                <div className="max-w-full mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Brand Logo/Text */}
                    <Link to='/' className={`playwrite text-3xl font-extrabold ${linkTextColor}`}>Tellet</Link>

                    {/* Mobile Menu Button (Hamburger Icon) */}
                    <button onClick={toggleMenu} className={`p-2 rounded-md focus:outline-none transition-colors ${linkTextColor}`}>
                        {/* Hamburger Icon */}
                        <IoMenu size={20} />
                    </button>
                </div>
                {/* Overlay */}
                <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    onClick={toggleMenu}>
                </div>

                {/* --------------------------- SLIDE-IN MOBILE MENU (from left) --------------------------- */}
                <nav className={`fixed top-0 left-0 h-screen w-64 max-w-full shadow-2xl z-50 transform transition-transform duration-500 ease-in-out flex flex-col p-6 space-y-4 overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${sidebarBgClass}`}>
                    <div className="flex justify-between items-center mb-4">
                        {/* Title/Logo inside sidebar for clarity */}
                        <Link to='/' onClick={handleLinkClick} className={`playwrite text-3xl font-extrabold ${isSolutionRoute ? 'text-green-900' : 'text-green-100'}`}>Tellet</Link>
                        <button onClick={toggleMenu} className={`p-2 rounded-md focus:outline-none ${isSolutionRoute ? 'text-green-900' : 'text-green-100'}`}>
                            <FaX />
                        </button>
                    </div>

                    {/* Main Navigation Links */}
                    <NavLink onClick={handleLinkClick} to='/solution' className={`poppins text-lg p-3 rounded-lg transition-colors ${sidebarLinkClass}`}>Solution</NavLink>
                    <NavLink onClick={handleLinkClick} to='/resource' className={`poppins text-lg p-3 rounded-lg transition-colors ${sidebarLinkClass}`}>Resources</NavLink>

                    <div className="pt-4 space-y-3">
                        <hr className={`my-2 ${isSolutionRoute ? 'border-gray-300' : 'border-green-700'}`} />
                        <NavLink onClick={handleLinkClick} to='/quote' className={`block border-2 px-5 py-3 rounded-full font-semibold poppins text-center transition-all ${ctaBorderColor} ${isSolutionRoute ? 'hover:bg-green-100' : 'hover:bg-green-700'}`}>Get a quote</NavLink>
                        <NavLink onClick={handleLinkClick} to='/demo' className="block bg-rose-400 border-2 border-rose-400 text-white px-5 py-3 rounded-full font-semibold poppins text-center hover:bg-rose-500 transition-colors">Book a demo</NavLink>
                        <NavLink onClick={handleLinkClick} to='/login' className={`block border-2 px-5 py-3 rounded-full font-semibold poppins text-center transition-all ${ctaBorderColor} ${isSolutionRoute ? 'hover:bg-green-100' : 'hover:bg-green-700'}`}>Login</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
