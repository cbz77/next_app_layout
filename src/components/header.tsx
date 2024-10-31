'use client'
import { FC } from "react";
import { useState } from "react";

const Header: FC = () => {

    const toggleMenu = () => {  
        const nav = document.querySelector('nav');
        nav?.classList.toggle('hidden');
    }
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-900 shadow">
            <nav className="flex items-center justify-between px-4 py-3">
                        
                {/* Logo or Brand Name */}
                <a href="/" className="text-lg font-semibold">BrandName</a>

                {/* Desktop Menu Items */}
                <div className="hidden md:flex space-x-4">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/about" className="hover:text-gray-400">About</a>
                <a href="/services" className="hover:text-gray-400">Services</a>
                <a href="/contacts" className="hover:text-gray-400">Contacts</a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden p-2 rounded text-gray-400 hover:bg-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5h14M3 10h14m-7 5h7" clipRule="evenodd" />
                </svg>
                </button>
            </nav>

            {/* Dropdown Menu for Mobile */}
            {isOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Home</a>
                <a href="#" className="block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">About</a>
                <a href="#" className="block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Services</a>
                <a href="#" className="block text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Contact</a>
                </div>
            )}

        </header>
    );
};

export default Header;