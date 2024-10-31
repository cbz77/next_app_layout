'use client'
import { FC } from "react";
import { useState } from "react";
import DesktopMenu from "./desktop_menu";
import MobileMenu from "./mobile_menu";
import url_adresy from "./url_adresy";

const Header: FC = () => {

    const toggleMenu = () => {  
        setIsOpen(!isOpen);
    }
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-900 shadow">
            <nav className="flex items-center justify-between px-4 py-3">
                        
                {/* Logo or Brand Name */}
                <a href={url_adresy.home} className="text-lg font-semibold">Simple Website</a>

                {/* Desktop Menu Items */}
                <DesktopMenu></DesktopMenu>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden p-2 rounded text-white hover:bg-blue-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

            </nav>

            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

        </header>
    );
};

export default Header;